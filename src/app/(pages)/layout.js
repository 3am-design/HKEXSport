"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/common/Header";
import Footer from "@/app/common/Footer";
import { useGlobalContext } from "@/app/GlobalContext";
export default function PageLayout({ children }) {
  const pathname = usePathname();
  const { state } = useGlobalContext();
  useEffect(() => {
    document.body.className = `${state.lang}${state.showMenu ? " show-menu" : ""}`;
  }, [state]);
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
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
