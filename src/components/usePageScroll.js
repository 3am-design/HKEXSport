"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { MOTION_QUERY } from "./motion";

// Next owns navigation and history; Lenis only enhances wheel/anchor scrolling.
export function usePageScroll(pathname, menuOpen) {
  const controller = useRef(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const cancelInertia = () => controller.current?.reset();
    const onClick = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.("a[href]");
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return;
      // Same-page section links belong to Lenis/native anchor handling.
      if (url.pathname === location.pathname && url.hash) return;
      document.documentElement.dataset.navigation = "link";
      cancelInertia();
      if (url.pathname === location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        controller.current?.resize();
      }
    };
    const onHistory = () => {
      document.documentElement.dataset.navigation = "history";
      cancelInertia();
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onHistory);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onHistory);
      delete document.documentElement.dataset.navigation;
    };
  }, []);

  useLayoutEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    const lenis = controller.current;
    lenis?.reset();
    if (document.documentElement.dataset.navigation !== "history") {
      let target;
      try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch {}
      if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
      else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    // Layout and Next's native restoration have settled before the next wheel frame.
    lenis?.resize();
    const frame = requestAnimationFrame(() => controller.current?.resize());
    document.body.dataset.atTop = String(window.scrollY < 30);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const preference = window.matchMedia(MOTION_QUERY);
    let frame = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      controller.current?.destroy();
      controller.current = null;
    };
    const update = () => {
      stop();
      if (!preference.matches || document.hidden || menuOpen) return;
      const lenis = new Lenis({ lerp: 0.1, anchors: true, stopInertiaOnNavigate: true });
      controller.current = lenis;
      frame = requestAnimationFrame(function raf(time) {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      });
    };
    update();
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      stop();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [menuOpen]);
}
