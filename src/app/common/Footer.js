"use client";
import Link from "next/link";
import { Brand } from "./Header";
import { navigation, event } from "@/content/event-2026";
import { useGlobalContext } from "@/app/GlobalContext";
import { asset } from "@/lib/assets";

export default function Footer() {
  const { state: { lang } } = useGlobalContext();
  const footerLinks = navigation.flatMap((item) =>
    item.href === "/workshops-and-booths/" ? item.child : [item],
  );
  const socialLinks = [
    { name: "X", href: "https://twitter.com/hkexgroup", icon: "twitter" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/hkex", icon: "linkedin" },
    { name: "WeChat", href: `https://www.hkexgroup.com/Global/WeChat?sc_lang=${lang === "en" ? "en" : "zh-HK"}`, icon: "wechat" },
    { name: "YouTube", href: "https://www.youtube.com/user/hkexgroup", icon: "youtube" },
    { name: "RSS", href: `https://www.hkexgroup.com/Global/RSS-Feeds?sc_lang=${lang === "en" ? "en" : "zh-HK"}`, icon: "rss" },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row footer__row--1">
          <div className="footer__col footer__col--1">
            <Link href="/" aria-label={event.name[lang]}>
              <Brand light className="footer__logo" />
            </Link>
          </div>
          <nav className="footer__col footer__col--2 footer__nav" aria-label={lang === "en" ? "Footer navigation" : "頁尾導覽"}>
            {footerLinks.map((item) => (
              <Link className="footer__nav-link" key={item.href} href={item.href}>
                {item.label[lang]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer__row footer__row--2">
          <div className="footer__col footer__col--3">
            <div className="footer__nav footer__nav--row">
              <Link href="/terms-of-use/" className="footer__nav-link footer__nav-link--small">
                {lang === "en" ? "Terms of Use" : "使用條款"}
              </Link>
            </div>
            <p><small>{lang === "en"
              ? "©2017–26 Hong Kong Exchanges and Clearing Limited. All rights reserved."
              : "©2017–26 香港交易及結算所有限公司版權所有，翻印必究"}</small></p>
          </div>
          <div className="footer__col footer__col--4 footer__social">
            {socialLinks.map((item) => (
              <a href={item.href} key={item.icon} target="_blank" rel="noreferrer noopener">
                <img src={asset(`/images/${item.icon}.svg`)} alt={item.name} width="35" height="35" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
