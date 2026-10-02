"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/common/Header";
import Footer from "@/app/common/Footer";
import { useGlobalContext } from "@/app/GlobalContext";
import { usePageScroll } from "@/components/usePageScroll";
export default function PageLayout({ children }) {
  const pathname = usePathname();
  const { state } = useGlobalContext();
  usePageScroll(pathname, state.showMenu);
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
