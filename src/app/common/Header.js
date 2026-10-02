"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/app/GlobalContext";
import { asset } from "@/lib/assets";
import { navigation, event } from "@/content/event-2026";
export function Brand({ light = false, className = "brand__logo" }) {
  return (
    <img
      className={className}
      src={asset(light ? "/images/hkex-logo-white.svg" : "/images/hkex-logo.svg")}
      width="192.09"
      height="87.91"
      alt="HKEX 香港交易所"
    />
  );
}
export default function Header() {
  const { state, setState } = useGlobalContext();
  const pathname = usePathname();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const lang = state.lang;
  const close = () =>
    setState((previous) => ({ ...previous, showMenu: false }));
  useEffect(() => {
    setState((previous) => ({ ...previous, showMenu: false }));
  }, [pathname, setState]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");
    const update = () => {
      if (!desktop.matches) return;
      const focusedHref = menuRef.current?.contains(document.activeElement)
        ? document.activeElement.getAttribute("href") : null;
      setState((previous) => previous.showMenu ? { ...previous, showMenu: false } : previous);
      if (focusedHref) {
        const links = [...headerRef.current.querySelectorAll(".header__nav a")];
        links.find((link) => link.getAttribute("href") === focusedHref)?.focus();
      }
    };
    desktop.addEventListener("change", update);
    update();
    return () => desktop.removeEventListener("change", update);
  }, [setState]);
  useEffect(() => {
    if (!state.showMenu) return undefined;
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());
    const keydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setState((previous) => ({ ...previous, showMenu: false }));
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls = [...headerRef.current.querySelectorAll("a, button")]
        .filter((el) => el.getClientRects().length && getComputedStyle(el).visibility !== "hidden");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    };
    window.addEventListener("keydown", keydown);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("keydown", keydown); };
  }, [state.showMenu, setState]);
  const changeLang = () => {
    const next = lang === "en" ? "zh" : "en";
    try {
      localStorage.setItem("hkex-2026-lang", next);
    } catch {}
    setState((previous) => ({ ...previous, lang: next }));
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__row">
          <Link href="/" className="brand-link" aria-label={event.name[lang]}>
            <span className="header-brand">
              <Brand className="brand__logo brand__logo--color" />
            </span>
          </Link>
          <nav
            className="header__nav"
            aria-label={lang === "en" ? "Main navigation" : "主要導覽"}
          >
            <div className="header__nav-list">
              {navigation.map((item) => (
                <div
                  className={`header__nav-item ${pathname.startsWith(item.href) ? "current" : ""}`}
                  key={item.href}
                >
                  <Link className="header__nav-link" href={item.href}>
                    {item.label[lang]}
                  </Link>
                  {item.child && (
                    <div className="header__nav-dropdown">
                      {item.child.map((child) => (
                        <Link
                          key={child.href}
                          className="header__dropdown-item"
                          href={child.href}
                        >
                          {child.label[lang]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
          <button
            className="header__lang-link"
            onClick={changeLang}
            aria-label={lang === "en" ? "切換至繁體中文" : "Switch to English"}
          >
            {lang === "en" ? "繁中" : "EN"}
          </button>
          <button
            ref={toggleRef}
            className="header__nav-toggle"
            aria-label={state.showMenu ? "Close menu" : "Open menu"}
            aria-expanded={state.showMenu}
            aria-controls="mobile-menu"
            onClick={() =>
              setState((previous) => ({
                ...previous,
                showMenu: !previous.showMenu,
              }))
            }
          >
            <i
              aria-hidden="true"
              className={`bi bi-${state.showMenu ? "x" : "list"}`}
            />
          </button>
        </div>
      </div>
      <nav
        ref={menuRef}
        id="mobile-menu"
        data-lenis-prevent
        className="menu"
        hidden={!state.showMenu}
        aria-label={lang === "en" ? "Mobile navigation" : "流動版導覽"}
      >
        <div className="container">
          <div className="menu__body">
            {navigation.map((item) => (
              <div className="menu__nav-item" key={item.href}>
                <Link
                  className="menu__nav-link"
                  href={item.href}
                  onClick={close}
                >
                  {item.label[lang]}
                </Link>
                {item.child && (
                  <div className="menu__nav-dropdown">
                    {item.child.map((child) => (
                      <Link
                        className="menu__dropdown-item"
                        key={child.href}
                        href={child.href}
                        onClick={close}
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
