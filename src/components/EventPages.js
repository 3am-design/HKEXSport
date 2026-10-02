"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/GlobalContext";
import InnerHead from "@/app/common/InnerHead";
import { asset } from "@/lib/assets";
import {
  event,
  highlights,
  schedule,
  competitions,
  workshopOptions,
  boothOptions,
  t,
} from "@/content/event-2026";
const useLang = () => useGlobalContext().state.lang;
export function ArrowLink({ href, children }) {
  return (
    <Link className="go-btn" href={href}>
      <i aria-hidden="true" className="bi bi-arrow-right" />
      <span>{children}</span>
    </Link>
  );
}
export function Notice({ children }) {
  return (
    <p className="draft-note">
      <span aria-hidden="true">●</span>
      {children}
    </p>
  );
}
export function Section({ id, title, children }) {
  return (
    <section id={id} className="content-section container">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
function Cards({ items }) {
  const lang = useLang();
  return (
    <div className="info-card">
      <div className="container">
        <div className="info-card__row">
          {items.map((item) => (
            <Link className="info-card__item" key={item.link} href={item.link}>
              <div className="info-card__item-img media-holder">
                <img src={asset(item.img)} alt="" loading="lazy" />
              </div>
              <h2 className="info-card__item-title">{item.title[lang]}</h2>
              <p className="info-card__item-desc">{item.description[lang]}</p>
              <div className="info-card__item-link">
                <img src={asset("/images/right-arrow.svg")} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
function Countdown() {
  const lang = useLang();
  const [remaining, setRemaining] = useState(null);
  useEffect(() => {
    const tick = () =>
      setRemaining(
        Math.max(0, new Date(event.startsAt).getTime() - Date.now()),
      );
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);
  const values =
    remaining === null
      ? [null, null, null, null]
      : [
          Math.floor(remaining / 86400000),
          Math.floor(remaining / 3600000) % 24,
          Math.floor(remaining / 60000) % 60,
          Math.floor(remaining / 1000) % 60,
        ];
  return (
    <div
      className="demo-countdown"
      aria-label={lang === "en" ? "Countdown to the event" : "活動倒數"}
    >
      {values.map((value, i) => (
        <div key={i}>
          <span>{value === null ? "—" : String(value).padStart(2, "0")}</span>
          <small>
            {
              (lang === "en"
                ? ["DAYS", "HOURS", "MINUTES", "SECONDS"]
                : ["日", "小時", "分鐘", "秒"])[i]
            }
          </small>
        </div>
      ))}
    </div>
  );
}
export function HomePage() {
  const lang = useLang();
  return (
    <>
      <section className="demo-hero">
        <div className="demo-hero__copy">
          <p className="eyebrow">
            {lang === "en"
              ? "Together, for the joy of it."
              : "一起運動，共享歡樂。"}
          </p>
          <h1>
            <span>HKEX</span>
            <span>{lang === "en" ? "Family" : "家庭"}</span>
            <span>{lang === "en" ? "Sports Day" : "運動日"}</span>
            <em>2026</em>
          </h1>
          <div className="demo-hero__details">
            <p>{event.date[lang]}</p>
            <p>
              {event.time[lang]}
              <br />
              {event.venue[lang]}
            </p>
          </div>
          <ArrowLink href="/event-overview/">
            {lang === "en" ? "Explore the day" : "探索活動"}
          </ArrowLink>
        </div>
        <div className="demo-hero__visual">
          <img
            src={asset("/images/kv-ver.png")}
            alt={
              lang === "en"
                ? "Demo illustration of families and athletes on a running track"
                : "家庭及運動員在跑道上的示意插畫"
            }
            fetchPriority="high"
          />
          <span className="demo-art-label">
            {lang === "en"
              ? "DEMO ARTWORK · 2026 KV TO FOLLOW"
              : "示意圖片 · 2026 主視覺待定"}
          </span>
          <Countdown />
        </div>
      </section>
      <section className="landing-about">
        <div className="container">
          <p className="landing-about__heading landing-about__heading--1">
            {lang === "en"
              ? "A day for every generation."
              : "每個世代，一起參與。"}
          </p>
          <div className="landing-about__row">
            <div className="landing-about__main">
              <h2 className="landing-about__heading landing-about__heading--2">
                <span>{lang === "en" ? "Move." : "動起來。"}</span>
                <span>{lang === "en" ? "Connect." : "連繫。"}</span>
                <span>{lang === "en" ? "Enjoy." : "同樂。"}</span>
              </h2>
            </div>
            <div className="landing-about__body">
              <div className="static">
                <p>{event.intro[lang]}</p>
              </div>
              <p className="intro-support">
                {lang === "en"
                  ? "An inclusive celebration of wellbeing, family and our community."
                  : "一起投入關顧健康、家庭與社群的共融活動。"}
              </p>
              <ArrowLink href="/event-overview/">
                {lang === "en" ? "About the event" : "認識活動"}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
      <div className="section-ribbon" aria-hidden="true">
        {lang === "en" ? "What’s on…" : "精彩活動…"}
      </div>
      <Cards items={highlights} />
    </>
  );
}
export function OverviewPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "About the Event" : "活動介紹"}
        withLine
      />
      <Section title={event.name[lang]}>
        <p className="lead-copy">{event.intro[lang]}</p>
        <dl className="event-facts">
          {[
            [t("Date", "日期"), event.date],
            [t("Time", "時間"), event.time],
            [t("Venue", "場地"), event.venue],
          ].map(([label, value]) => (
            <div key={label.en}>
              <dt>{label[lang]}</dt>
              <dd>{value[lang]}</dd>
            </div>
          ))}
        </dl>
        <p>
          {lang === "en"
            ? "Hosted by Hong Kong Exchanges and Clearing Limited, the day brings colleagues and their families together through sport, wellbeing and community. Activities are being planned for different generations, with a focus on inclusion and caregiver appreciation."
            : "香港交易及結算所有限公司透過運動、健康體驗及社區活動，連繫同事與家人。活動照顧不同世代的參與需要，重視共融，亦向照顧者表達謝意。"}
        </p>
        <div className="holding-action">
          <ArrowLink href="/event-overview/schedule/">
            {lang === "en" ? "Schedule & grouping" : "時間表及隊伍"}
          </ArrowLink>
        </div>
      </Section>
      <Cards items={[highlights[0], highlights[1]]} />
    </>
  );
}
export function SchedulePage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Schedule & Grouping" : "時間表及隊伍"}
        withLine
      />
      <Section title={event.date[lang]}>
        <Notice>
          {lang === "en"
            ? "Tentative programme. Detailed activity and closing-ceremony timings are being confirmed."
            : "活動流程暫定，各項活動及閉幕典禮時間有待確認。"}
        </Notice>
        <div className="schedule-list">
          {schedule.map((row) => (
            <div className="schedule-row" key={row.title.en}>
              <div className="schedule-time">
                {typeof row.time === "string" ? row.time : row.time[lang]}
              </div>
              <div>
                <h3>{row.title[lang]}</h3>
                <p>{row.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title={lang === "en" ? "Grouping" : "隊伍安排"}>
        <p>
          {lang === "en"
            ? "Team allocation and participant information will be announced once confirmed."
            : "隊伍分配及參加者資訊將於確認後公布。"}
        </p>
      </Section>
    </>
  );
}
export function VenuePage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "About the Venue" : "活動場地"}
        withLine
      />
      <Section title={event.venue[lang]}>
        <p className="lead-copy">
          {lang === "en"
            ? "The 2026 event brings track, field and family activities together at Kai Tak Youth Sports Ground."
            : "2026 家庭運動日將於啟德青年運動場舉行，集合田徑、團體及家庭活動。"}
        </p>
        <div className="venue-placeholder">
          <i className="bi bi-geo-alt" aria-hidden="true" />
          <h3>{lang === "en" ? "2026 venue map" : "2026 活動場地圖"}</h3>
          <p>
            {lang === "en"
              ? "The event layout and visitor facilities will be published once confirmed."
              : "活動區域及訪客設施配置將於確認後公布。"}
          </p>
        </div>
      </Section>
      <Section title={lang === "en" ? "Getting there" : "交通安排"}>
        <p>
          {lang === "en"
            ? "Entrance, transport and accessibility information will be added with the approved 2026 venue plan."
            : "入口、交通及無障礙設施資訊將隨 2026 場地安排一併公布。"}
        </p>
      </Section>
      <Section
        id="refreshments"
        title={lang === "en" ? "Refreshments" : "美味小食"}
      >
        <div className="feature-row">
          <img
            src={asset("/images/home/refreshment.jpg")}
            loading="lazy"
            alt={
              lang === "en"
                ? "Illustrative refreshments photograph"
                : "小食示意圖片"
            }
          />
          <div>
            <p>
              {lang === "en"
                ? "Food kiosks and light refreshments are planned for the afternoon. The menu, serving times and redemption arrangements are to be confirmed."
                : "活動計劃提供小食攤位及輕食。餐單、供應時間及換領安排有待確認。"}
            </p>
            <Notice>
              {lang === "en"
                ? "Reference image from the 2025 website."
                : "沿用 2025 網站圖片作參考。"}
            </Notice>
          </div>
        </div>
      </Section>
    </>
  );
}
export function CompetitionsPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead title={lang === "en" ? "Competitions" : "比賽"} withLine />
      <div className="container">
        <Notice>
          {lang === "en"
            ? "Proposed 2026 programme. The final list, eligibility, rules and registration are subject to confirmation."
            : "2026 建議項目。最終項目、參賽資格、規則及報名安排有待確認。"}
        </Notice>
        <nav
          className="section-tabs"
          aria-label={lang === "en" ? "Competition categories" : "比賽類別"}
        >
          {competitions.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.title[lang]}
            </a>
          ))}
          <a href="#result">{lang === "en" ? "Results" : "比賽結果"}</a>
        </nav>
      </div>
      {competitions.map((group) => (
        <Section key={group.id} id={group.id} title={group.title[lang]}>
          <div className="feature-row">
            <img src={asset(group.image)} alt="" loading="lazy" />
            <ul className="programme-list">
              {group.items.map((item) => (
                <li key={item.en}>
                  {item[lang]}
                  <span>
                    {lang === "en" ? "Details to follow" : "詳情稍後公布"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}
      <Section id="result" title={lang === "en" ? "Results" : "比賽結果"}>
        <p>
          {lang === "en"
            ? "Results will be organised by competition, category and round. Official results will be published after verification."
            : "比賽結果將按項目、組別及賽段整理，並於核實後公布。"}
        </p>
        <div className="holding-action">
          <ArrowLink href="/competitions/results/">
            {lang === "en" ? "View results layout" : "查看賽果版面"}
          </ArrowLink>
        </div>
      </Section>
    </>
  );
}
export function ActivitiesPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Activities & Wellness" : "活動及健康體驗"}
        withLine
      />
      <Cards
        items={highlights.filter((item) => item.link.startsWith("/workshops"))}
      />
    </>
  );
}
export function WorkshopsPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Wellness Workshops" : "健康工作坊"}
        withLine
      />
      <Section
        title={
          lang === "en"
            ? "Time to move. Time together."
            : "一起活動，共享親子時光。"
        }
      >
        <div className="feature-row">
          <img
            src={asset("/images/workshops/Parenting-Yoga.jpg")}
            loading="lazy"
            alt={
              lang === "en" ? "Family yoga reference image" : "親子瑜伽參考圖片"
            }
          />
          <div>
            <p>
              {lang === "en"
                ? "A selection of shared experiences for wellbeing and family connection. The following activities are under consideration; the final three-workshop programme is still to be confirmed."
                : "透過共同體驗，關顧身心健康，增進家人連繫。以下為考慮中的活動選項，最終三項工作坊有待確認。"}
            </p>
            <Notice>
              {lang === "en"
                ? "Proposed options, not confirmed sessions."
                : "以下為建議選項，並非已確認場次。"}
            </Notice>
          </div>
        </div>
        <ul className="option-grid">
          {workshopOptions.map((item) => (
            <li key={item.en}>{item[lang]}</li>
          ))}
        </ul>
        <p>
          {lang === "en"
            ? "Slow jogging or Nordic walking is also being considered. Instructors, session times, age guidance and ticket arrangements will follow."
            : "另正考慮安排原地超慢跑或北歐健步行。導師、場次、適用年齡及攞籌安排將稍後公布。"}
        </p>
        <div className="holding-action">
          <ArrowLink href="/workshop-status/">
            {lang === "en"
              ? "Workshop queue & tickets"
              : "工作坊排隊及攞籌狀態"}
          </ArrowLink>
        </div>
      </Section>
    </>
  );
}
export function BoothsPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Activity Booths" : "活動攤位"}
        withLine
      />
      <Section
        title={
          lang === "en"
            ? "Play a little. Discover something new."
            : "輕鬆玩樂，發掘新體驗。"
        }
      >
        <div className="feature-row">
          <img src={asset("/images/home/games.png")} alt="" loading="lazy" />
          <div>
            <p>
              {lang === "en"
                ? "Enjoy a sports carnival with activities for different ages and abilities. The proposed line-up includes the following games."
                : "運動嘉年華帶來適合不同年齡及能力的遊戲體驗。建議項目包括以下活動。"}
            </p>
            <Notice>
              {lang === "en"
                ? "Booth line-up, opening times and participation details are provisional."
                : "攤位項目、開放時間及參加安排暫定。"}
            </Notice>
          </div>
        </div>
        <ul className="option-grid">
          {boothOptions.map((item) => (
            <li key={item.en}>{item[lang]}</li>
          ))}
        </ul>
      </Section>
    </>
  );
}
export function CommunityPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Community Engagement" : "社區關懷"}
        withLine
      />
      <Section
        title={
          lang === "en"
            ? "Celebrating care and connection."
            : "關愛彼此，連繫社群。"
        }
      >
        <div className="feature-row">
          <img
            src={asset("/images/home/community.jpg")}
            alt=""
            loading="lazy"
          />
          <div>
            <p>
              {lang === "en"
                ? "This year's event places an emphasis on caregiver appreciation and bringing people together across generations. Community and NGO engagement activities are being developed."
                : "今年活動著重向照顧者表達謝意，並促進不同世代之間的交流。社區及非政府機構參與活動正在籌備中。"}
            </p>
            <Notice>
              {lang === "en"
                ? "Partners and activity details will be announced once confirmed. Images are for reference."
                : "合作機構及活動詳情將於確認後公布。圖片只供參考。"}
            </Notice>
          </div>
        </div>
      </Section>
    </>
  );
}
export function FitnessPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Fitness Assessment" : "體適能評估"}
        withLine
      />
      <Section
        title={
          lang === "en" ? "Make time for your wellbeing." : "為健康留一點時間。"
        }
      >
        <p className="lead-copy">
          {lang === "en"
            ? "A dedicated fitness assessment zone is planned as part of the 2026 wellness programme."
            : "2026 健康活動計劃設有專屬體適能評估區。"}
        </p>
        <div className="venue-placeholder">
          <i className="bi bi-heart-pulse" aria-hidden="true" />
          <h3>
            {lang === "en"
              ? "Assessment details to follow"
              : "評估詳情稍後公布"}
          </h3>
          <p>
            {lang === "en"
              ? "Assessment items, facilitators, age guidance and participation arrangements are being confirmed."
              : "評估項目、負責人員、適用年齡及參加安排正在確認中。"}
          </p>
        </div>
      </Section>
    </>
  );
}
export function HoldingPage({ type }) {
  const lang = useLang();
  const content = {
    weather: {
      title: t("Adverse Weather", "惡劣天氣"),
      heading: t("Weather arrangements", "天氣安排"),
      body: t(
        "The 2026 adverse-weather and event-update arrangements will be published once approved. Please refer to the organiser's confirmed communications for the final event arrangements.",
        "2026 惡劣天氣及活動更新安排將於審批後公布。活動最終安排請以主辦機構確認的通知為準。",
      ),
    },
    terms: {
      title: t("Website Information", "網站資訊"),
      heading: t("About this preview", "關於此預覽"),
      body: t(
        "This is a working preview for HKEX Family Sports Day 2026. Programme details, translations and artwork are provisional. This preview does not collect registrations or participant information. Approved event terms, privacy information and contact details will be added before launch.",
        "此網站為香港交易所家庭運動日 2026 的工作預覽。活動詳情、翻譯及圖片均屬暫定。此預覽不收集報名或參加者資料。經確認的活動條款、私隱資訊及聯絡方式將於正式推出前加入。",
      ),
    },
  }[type];
  return (
    <>
      <InnerHead title={content.title[lang]} withLine />
      <Section title={content.heading[lang]}>
        <p className="lead-copy">{content.body[lang]}</p>
        <div className="holding-action">
          <ArrowLink href="/">
            {lang === "en" ? "Back to home" : "返回首頁"}
          </ArrowLink>
        </div>
      </Section>
    </>
  );
}
