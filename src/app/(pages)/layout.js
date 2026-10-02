"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/common/Header";
import Footer from "@/app/common/Footer";
import Lenis from "lenis";
import { useGlobalContext } from "@/app/GlobalContext";
import { MOTION_QUERY } from "@/components/motion";
export default function PageLayout({ children }) {
  const pathname = usePathname();
  const { state } = useGlobalContext();
  useEffect(() => {
    document.body.classList.remove("en", "zh");
    document.body.classList.add(state.lang);
    document.body.classList.toggle("show-menu", state.showMenu);
    const footer = document.querySelector(".footer");
    if (footer) footer.inert = state.showMenu;
    return () => { if (footer) footer.inert = false; };
  }, [state.lang, state.showMenu]);
  useEffect(() => {
    const onScroll = () => {
      document.body.dataset.atTop = String(window.scrollY < 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  // Enhance fine-pointer scrolling only, and react to preference changes immediately.
  useEffect(() => {
    const preference = window.matchMedia(MOTION_QUERY);
    let lenis;
    let frame = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lenis?.destroy();
      lenis = undefined;
    };
    const update = () => {
      stop();
      if (!preference.matches || document.hidden || state.showMenu) return;
      lenis = new Lenis({ lerp: 0.1, anchors: true });
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
  }, [state.showMenu]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        {state.lang === "en" ? "Skip to content" : "跳至內容"}
      </a>
      <Header />
      <main id="main-content" inert={state.showMenu}>{children}</main>
      <Footer />
    </>
  );
}
