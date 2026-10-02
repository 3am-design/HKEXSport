"use client";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/app/GlobalContext";
import { navigation, event } from "@/content/event-2026";
export function Brand() {
  return (
    <span className="brand">
      <span className="brand__word">
        HKEX
        <span className="brand__dot" />
      </span>
      <span className="brand__caption">
        Family Sports Day <b>2026</b>
      </span>
    </span>
  );
}
export default function Header() {
  const { state, setState } = useGlobalContext();
  const pathname = usePathname();
  const lang = state.lang;
  const close = () =>
    setState((previous) => ({ ...previous, showMenu: false }));
  useEffect(() => {
    setState((previous) => ({ ...previous, showMenu: false }));
  }, [pathname, setState]);
  useEffect(() => {
    const keydown = (e) => {
      if (e.key === "Escape")
        setState((previous) => ({ ...previous, showMenu: false }));
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [setState]);
  const changeLang = () => {
    const next = lang === "en" ? "zh" : "en";
    try {
      localStorage.setItem("hkex-2026-lang", next);
    } catch {}
    setState((previous) => ({ ...previous, lang: next }));
  };
  return (
    <header className="header">
      <div className="preview-strip">{event.preview[lang]}</div>
      <div className="container">
        <div className="header__row">
          <Link href="/" className="brand-link" aria-label={event.name[lang]}>
            <Brand />
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
            {lang === "en" ? "繁" : "EN"}
          </button>
          <button
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
        id="mobile-menu"
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
