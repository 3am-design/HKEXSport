"use client";
import { createContext, useContext, useEffect, useState } from "react";
const GlobalContext = createContext();
export function GlobalProvider({ children }) {
  const [state, setState] = useState({ lang: "en", showMenu: false });
  useEffect(() => {
    let lang = "en";
    try {
      lang = localStorage.getItem("hkex-2026-lang") === "zh" ? "zh" : "en";
    } catch {}
    if (/\/zh\/?$/.test(window.location.pathname)) lang = "zh";
    setState((previous) => ({ ...previous, lang }));
  }, []);
  useEffect(() => {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
  }, [state.lang]);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
