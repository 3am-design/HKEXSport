"use client";
import { useEffect, useRef } from "react";

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

// Content is visible in HTML. Only this controller can arm a reveal; every item
// runs once, with peer delays calculated by visual row rather than list length.
function observeReveals(elements, completed, step) {
  const preference = window.matchMedia(MOTION_QUERY);
  let observer;
  const finish = (el) => {
    el.dataset.reveal = "complete";
    completed.add(el);
    observer?.unobserve(el);
  };
  const show = (el) => {
    if (completed.has(el)) return;
    el.dataset.reveal = "shown";
    completed.add(el);
    observer?.unobserve(el);
  };
  const settle = (event) => {
    if (event.animationName === "event-rise") finish(event.currentTarget);
  };
  const focus = (event) => finish(event.currentTarget);
  const update = () => {
    observer?.disconnect();
    if (!preference.matches || typeof IntersectionObserver === "undefined" || document.hidden) {
      elements.forEach(finish);
      return;
    }
    observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry) => show(entry.target));
    }, { rootMargin: "0px 0px -6% 0px" });
    const rows = new Map();
    for (const el of elements) {
      if (completed.has(el)) continue;
      const rect = el.getBoundingClientRect();
      const row = rows.get(el.parentElement);
      const index = row && Math.abs(row.top - rect.top) < 32 ? row.index + 1 : 0;
      rows.set(el.parentElement, { top: rect.top, index });
      el.style.setProperty("--motion-step", String(step ?? Math.min(index, 3)));
      // Keep restored/deep-linked content stable, including after a language change.
      if (rect.top < window.innerHeight * 0.94 && (window.scrollY > 30 || document.documentElement.dataset.navigation === "history")) {
        finish(el);
      } else if (rect.top < window.innerHeight * 0.94) {
        show(el);
      } else {
        el.dataset.reveal = "armed";
        observer.observe(el);
      }
    }
  };
  for (const el of elements) {
    el.addEventListener("animationend", settle);
    el.addEventListener("focusin", focus);
  }
  update();
  preference.addEventListener("change", update);
  document.addEventListener("visibilitychange", update);
  return () => {
    observer?.disconnect();
    preference.removeEventListener("change", update);
    document.removeEventListener("visibilitychange", update);
    for (const el of elements) {
      el.removeEventListener("animationend", settle);
      el.removeEventListener("focusin", focus);
      // A group can rerender (filters, language) before it enters: leave no hidden orphan.
      if (el.dataset.reveal === "armed") delete el.dataset.reveal;
    }
  };
}

export function Reveal({ as: Tag = "div", step = 0, intro = false, children, ...rest }) {
  const ref = useRef(null);
  const completed = useRef(new WeakSet());
  useEffect(() => observeReveals([ref.current], completed.current, step), [step]);
  return <Tag ref={ref} data-motion-kind={intro ? "intro" : "reveal"} {...rest}>{children}</Tag>;
}

// Sections keep their rules/backgrounds and sticky title still. A marked group
// reveals its rows/cards independently; live controls and dialogs are excluded.
export function RevealGroup({ as: Tag = "div", children, ...rest }) {
  const ref = useRef(null);
  const completed = useRef(new WeakSet());
  useEffect(() => {
    const elements = [...ref.current.querySelectorAll(
      ":scope > :not([data-reveal-group], [data-reveal-ignore], dialog), :scope > [data-reveal-group] > *",
    )];
    return observeReveals(elements, completed.current);
  }, [children]);
  return <Tag ref={ref} {...rest}>{children}</Tag>;
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
