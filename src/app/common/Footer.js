"use client";
import Link from "next/link";
import { Brand } from "./Header";
import { navigation, event } from "@/content/event-2026";
import { useGlobalContext } from "@/app/GlobalContext";
export default function Footer() {
  const {
    state: { lang },
  } = useGlobalContext();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row footer__row--1">
          <div>
            <Link href="/" aria-label={event.name[lang]}>
              <Brand />
            </Link>
            <p className="footer-note">
              {event.date[lang]}
              <br />
              {event.venue[lang]}
            </p>
          </div>
          <nav
            className="footer__nav"
            aria-label={lang === "en" ? "Footer navigation" : "頁尾導覽"}
          >
            {navigation.map((item) => (
              <Link
                className="footer__nav-link"
                key={item.href}
                href={item.href}
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            {lang === "en"
              ? "2026 working preview. Content, translations and images are subject to approval."
              : "2026 工作預覽。內容、翻譯及圖片有待確認。"}
          </p>
          <Link href="/terms-of-use/">
            {lang === "en" ? "Website information" : "網站資訊"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
