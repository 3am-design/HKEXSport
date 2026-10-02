"use client";
import { useEffect, useRef, useState } from "react";

export const MOTION_QUERY = "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)";

// One lifecycle for decorative motion: pointer preference, visibility and viewport.
export function observeMotion(surface, onChange) {
  const preference = window.matchMedia(MOTION_QUERY);
  const rect = surface.getBoundingClientRect();
  let inView = rect.bottom > 0 && rect.top < window.innerHeight;
  const update = () => {
    const active = preference.matches && !document.hidden && inView;
    surface.dataset.motionActive = String(active);
    onChange(active);
  };
  const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(
    ([entry]) => { inView = entry.isIntersecting; update(); },
  );
  observer?.observe(surface);
  preference.addEventListener("change", update);
  document.addEventListener("visibilitychange", update);
  update();
  return () => {
    observer?.disconnect();
    preference.removeEventListener("change", update);
    document.removeEventListener("visibilitychange", update);
    delete surface.dataset.motionActive;
  };
}

// Content starts visible; only offscreen content with supported motion is armed.
export function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, onFocusCapture, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState("static");
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const preference = window.matchMedia(MOTION_QUERY);
    let observer;
    let revealed = false;
    const update = () => {
      observer?.disconnect();
      if (!preference.matches || revealed || el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        setState("static");
        return;
      }
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        revealed = true;
        setState("shown");
        observer.disconnect();
      }, { rootMargin: "0px 0px -8% 0px" });
      observer.observe(el);
      setState("armed");
    };
    update();
    preference.addEventListener("change", update);
    return () => { observer?.disconnect(); preference.removeEventListener("change", update); };
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${state}${className ? ` ${className}` : ""}`}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      onFocusCapture={(event) => { setState("static"); onFocusCapture?.(event); }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Depth is in px at the surface edge; negative values move the other way.
export function usePointerParallax(rootRef, surfaceRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const surface = surfaceRef?.current ?? root.closest("section") ?? root;
    const items = [...root.querySelectorAll("[data-depth]")].map((el) => ({
      el, depth: Number(el.dataset.depth), x: 0, y: 0,
    }));
    const target = { x: 0, y: 0 };
    let frame = 0;
    let active = false;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      target.x = target.y = 0;
      for (const item of items) { item.x = item.y = 0; item.el.style.removeProperty("transform"); }
    };
    const render = () => {
      let moving = false;
      for (const item of items) {
        const dx = target.x * item.depth - item.x;
        const dy = target.y * item.depth - item.y;
        item.x += dx * 0.025;
        item.y += dy * 0.025;
        if (Math.abs(dx) > 0.02 || Math.abs(dy) > 0.02) moving = true;
        item.el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0)`;
      }
      frame = moving && active ? requestAnimationFrame(render) : 0;
    };
    const kick = () => { if (active && !frame) frame = requestAnimationFrame(render); };
    const move = (event) => {
      if (!active || event.pointerType === "touch") return;
      const rect = surface.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      target.y = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      kick();
    };
    const leave = () => { target.x = target.y = 0; kick(); };
    const stopObserving = observeMotion(surface, (enabled) => { active = enabled; if (!enabled) reset(); });
    surface.addEventListener("pointermove", move);
    surface.addEventListener("pointerleave", leave);
    return () => {
      stopObserving();
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerleave", leave);
      reset();
    };
  }, [rootRef, surfaceRef]);
}
