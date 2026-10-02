"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "@/app/GlobalContext";
import { IntroPhoto } from "@/components/IntroPhoto";
import InnerHead from "@/app/common/InnerHead";
import { asset } from "@/lib/assets";
import { Reveal, RevealGroup, usePointerParallax, observeMotion } from "@/components/motion";
import {
  event,
  photography,
  stock,
  highlights,
  homeMoments,
  schedule,
  competitions,
  groupScoring,
  workshopOptions,
  workshopSessionGroups,
  movementActivities,
  boothOptions,
  boothHours,
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
export function Section({ id, title, children }) {
  return (
    <section id={id} className="content-section">
      <h2 className="section-title"><Reveal as="span">{title}</Reveal></h2>
      <RevealGroup className="content-section__body">{children}</RevealGroup>
    </section>
  );
}
function Cards({ items }) {
  const lang = useLang();
  return (
    <RevealGroup className="card-grid container">
      {items.map((item) => (
        <div key={item.link}>
          <Link className="card-grid__item" href={item.link}>
            <span className="card-grid__img">
              <img src={asset(item.img)} alt="" loading="lazy" />
            </span>
            <span className="card-grid__title">{item.title[lang]}</span>
            <span className="card-grid__desc">{item.description[lang]}</span>
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      ))}
    </RevealGroup>
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
      className="event-countdown"
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
const heroPhotos = [
  { src: stock.kidTrack, position: "34% 50%" },
  { src: stock.kidShoulders, position: "58% 50%" },
  { src: stock.kidPlane, position: "42% 50%" },
  { src: stock.picnic, position: "50% 50%" },
  { src: stock.swing, position: "42% 50%" },
  { src: stock.kidRedCap, position: "35% 50%" },
];
// How far (px at the section edge) each photo travels with the pointer; negative moves against it.
const heroDepths = [7, -5, 10, -8, 6, -6];
const statementDepths = [6, -5, 8, -6];
function HomeHero() {
  const lang = useLang();
  const photosRef = useRef(null);
  usePointerParallax(photosRef);
  return (
    <section className="home-hero" aria-labelledby="event-title">
      <div className="home-hero__photos" ref={photosRef} aria-hidden="true">
        {heroPhotos.map((photo, i) => (
          <span
            key={photo.src}
            className={`home-hero__photo home-hero__photo--${i + 1}`}
            data-depth={heroDepths[i]}
          >
            <IntroPhoto src={photo.src} position={photo.position} priority={i < 3} step={2 + i} />
          </span>
        ))}
      </div>
      <div className="home-hero__inner container">
        <Reveal as="h1" intro id="event-title">
          <span className="home-hero__name">
            {lang === "en" ? (
              <>
                <span>Family</span> <span>Sports Day</span>
              </>
            ) : (
              <span>家庭運動日</span>
            )}
          </span>
          <span className="home-hero__year">2026</span>
        </Reveal>
        <Reveal as="p" intro step={1} className="home-hero__details">
          <time dateTime="2026-12-12">{event.date[lang]}</time>
          <span aria-hidden="true">/</span>
          <span>{event.time[lang]}</span>
          <span aria-hidden="true">/</span>
          <span>{event.venue[lang]}</span>
        </Reveal>
        <ArrowLink href="/event-overview/">
          {lang === "en" ? "Explore the day" : "探索活動"}
        </ArrowLink>
      </div>
      <a className="home-hero__scroll" href="#about-event">
        <span>{lang === "en" ? "Discover more" : "了解更多"}</span>
        <i className="bi bi-arrow-down" aria-hidden="true" />
      </a>
    </section>
  );
}
const statementPhotos = [
  { src: stock.dadShoulders, position: "62% 50%" },
  { src: stock.toddler, position: "46% 50%" },
  { src: stock.ballPitGirl, position: "50% 50%" },
  { src: stock.headphones, position: "55% 50%" },
];
function HomeStatement() {
  const lang = useLang();
  const photosRef = useRef(null);
  usePointerParallax(photosRef);
  const words = lang === "en" ? ["Move.", "Connect.", "Enjoy."] : ["動起來。", "連繫。", "同樂。"];
  return (
    <section id="about-event" className="home-statement">
      <div className="home-statement__photos" ref={photosRef} aria-hidden="true">
        {statementPhotos.map((photo, i) => (
          <Reveal
            as="span"
            step={i}
            key={photo.src}
            className={`home-float home-float--${i + 1}`}
          >
            <span className="home-float__drift" data-depth={statementDepths[i]}>
              <img
                src={asset(photo.src)}
                alt=""
                width="509"
                height="339"
                loading="lazy"
                style={{ objectPosition: photo.position }}
              />
            </span>
          </Reveal>
        ))}
      </div>
      <div className="container">
        <Reveal as="p" className="home-statement__eyebrow">
          {lang === "en" ? "A day for every generation." : "每個世代，一起參與。"}
        </Reveal>
        <h2 className="home-statement__words">
          {words.map((word, i) => (
            <Reveal as="span" step={i} key={word}>
              {word}
            </Reveal>
          ))}
        </h2>
        <Reveal className="home-statement__row">
          <div className="home-statement__body">
            <p className="home-statement__lead">{event.intro[lang]}</p>
            <p>
              {lang === "en"
                ? "An inclusive celebration of wellbeing, family and our community."
                : "一起投入關顧健康、家庭與社群的共融活動。"}
            </p>
            <ArrowLink href="/event-overview/">
              {lang === "en" ? "About the event" : "認識活動"}
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function HomeIndex() {
  const lang = useLang();
  const [active, setActive] = useState(0);
  return (
    <section className="home-index" aria-labelledby="home-index-title">
      <div className="container">
        <Reveal className="home-head">
          <h2 id="home-index-title">{lang === "en" ? "What’s on" : "精彩活動"}</h2>
          <i className="bi bi-arrow-down-right" aria-hidden="true" />
        </Reveal>
        <div className="home-index__body">
          <Reveal className="home-index__stage" aria-hidden="true">
            <div className="home-index__frame">
            {highlights.map((item, i) => (
              <img
                key={item.link}
                className={i === active ? "is-active" : undefined}
                src={asset(item.img)}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
            </div>
            <p className="home-index__caption">{highlights[active].description[lang]}</p>
          </Reveal>
          <ol className="home-index__list">
            {highlights.map((item, i) => (
              <Reveal
                as="li"
                key={item.link}
                className={i === active ? "is-active" : undefined}
              >
                <Link
                  className="home-index__link"
                  href={item.link}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="home-index__thumb" aria-hidden="true">
                    <img src={asset(item.img)} alt="" loading="lazy" />
                  </span>
                  <span className="home-index__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="home-index__text">
                    <span className="home-index__title">{item.title[lang]}</span>
                    <span className="home-index__desc">{item.description[lang]}</span>
                  </span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
// Distance between identical copies of the strip, used to wrap the scroll position seamlessly.
const setWidth = (el) => el.children[homeMoments.length].offsetLeft - el.children[0].offsetLeft;
function HomeMoments() {
  const lang = useLang();
  const trackRef = useRef(null);
  // Native swipe/scroll stays available; drift rests offscreen, on hover and on focus.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    el.scrollLeft = setWidth(el);
    let frame = 0;
    let last = 0;
    let acc = el.scrollLeft;
    let active = false;
    let hovered = false;
    let focused = false;
    let dragging = false;
    const tick = (now) => {
      const dt = last ? Math.min(now - last, 64) : 0;
      last = now;
      const width = setWidth(el);
      if (width > 0) {
        acc += dt * 0.025;
        if (acc > width * 2.5) acc -= width;
        else if (acc < width * 0.5) acc += width;
        el.scrollLeft = acc;
      }
      frame = requestAnimationFrame(tick);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      acc = el.scrollLeft;
      if (active && !hovered && !focused && !dragging) frame = requestAnimationFrame(tick);
    };
    const enter = () => { hovered = true; update(); };
    const leave = () => { hovered = false; update(); };
    const focus = () => { focused = true; update(); };
    const blur = () => { focused = false; update(); };
    const down = () => { dragging = true; update(); };
    const up = () => { dragging = false; update(); };
    const listeners = [["pointerenter", enter], ["pointerleave", leave], ["focusin", focus], ["focusout", blur], ["pointerdown", down]];
    listeners.forEach(([event, handler]) => el.addEventListener(event, handler));
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    const stopObserving = observeMotion(el, (enabled) => { active = enabled; update(); });
    return () => {
      stopObserving();
      cancelAnimationFrame(frame);
      listeners.forEach(([event, handler]) => el.removeEventListener(event, handler));
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);
  return (
    <section className="home-moments" aria-labelledby="home-moments-title">
      <Reveal className="container home-moments__head">
        <h2 id="home-moments-title">
          {lang === "en" ? "The day at a glance" : "活動速覽"}
        </h2>
        <ArrowLink href="/gallery/">{lang === "en" ? "Photo gallery" : "相片集"}</ArrowLink>
      </Reveal>
      <Reveal step={1} className="home-moments__viewport">
        <ul className="home-moments__track" ref={trackRef} aria-hidden="true">
          {[0, 1, 2].flatMap((copy) =>
            homeMoments.map((moment) => (
              <li className={`home-moment home-moment--${moment.shape}`} key={`${copy}-${moment.img}`}>
                <img src={asset(moment.img)} alt="" loading="lazy" />
              </li>
            )),
          )}
        </ul>
      </Reveal>
    </section>
  );
}
function HomeVenue() {
  const lang = useLang();
  const facts = [
    [t("Date", "日期"), event.date],
    [t("Time", "時間"), event.time],
    [t("Open to", "對象"), t("HKEX colleagues & families", "同事及家人")],
  ];
  return (
    <section className="home-venue" aria-labelledby="home-venue-title">
      <div className="container">
        <div className="home-venue__top">
          <Reveal className="home-venue__title">
            <p className="home-venue__eyebrow">{lang === "en" ? "The venue" : "活動場地"}</p>
            <h2 id="home-venue-title">{event.venue[lang]}</h2>
          </Reveal>
          <Reveal className="home-venue__info" step={1}>
            <p className="home-venue__lead">
              {lang === "en"
                ? "The 2026 event brings track, field and family activities together at Kai Tak Youth Sports Ground."
                : "2026 家庭運動日將於啟德青年運動場舉行，集合田徑、團體及家庭活動。"}
            </p>
            <dl className="home-venue__facts">
              {facts.map(([label, value]) => (
                <div key={label.en}>
                  <dt>{label[lang]}</dt>
                  <dd>{value[lang]}</dd>
                </div>
              ))}
            </dl>
            <div className="home-venue__links">
              <ArrowLink href="/event-overview/venue/">
                {lang === "en" ? "Venue map & getting there" : "場地圖及交通"}
              </ArrowLink>
              <ArrowLink href="/event-overview/schedule/">
                {lang === "en" ? "Schedule & grouping" : "時間表及隊伍"}
              </ArrowLink>
            </div>
          </Reveal>
        </div>
        <Reveal as="figure" className="home-venue__photo">
          <img
            src={asset(photography.venue)}
            alt={
              lang === "en"
                ? "The main stand, running track and pitch at Kai Tak Youth Sports Ground"
                : "啟德青年運動場的看台、跑道及草地"
            }
            width="1920"
            height="1080"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
function HomeClosing() {
  const lang = useLang();
  return (
    <section className="home-cta" aria-labelledby="home-cta-title">
      <div className="home-cta__inner container">
        <Reveal as="h2" id="home-cta-title">
          {lang === "en" ? "See you on 12\u00a0December." : "12 月 12 日，運動場見！"}
        </Reveal>
        <Reveal className="home-cta__row" step={1}>
          <Countdown />
          <ArrowLink href="/event-overview/">
            {lang === "en" ? "Explore the day" : "探索活動"}
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStatement />
      <HomeIndex />
      <HomeMoments />
      <HomeVenue />
      <HomeClosing />
    </>
  );
}
const headPhotos = {
  overview: [
    { src: stock.kidShoulders, position: "58% 50%" },
    { src: stock.picnic, ratio: "4 / 3" },
  ],
  schedule: [
    { src: stock.kidRedCap, position: "30% 50%" },
    { src: stock.swing, position: "45% 50%", ratio: "4 / 3" },
  ],
  venue: [{ src: photography.venue, position: "30% 60%", ratio: "3 / 2" }],
  competitions: [
    { src: stock.runner, position: "62% 50%" },
    { src: stock.kidTrack, position: "35% 50%", ratio: "4 / 3" },
  ],
  activities: [
    { src: stock.kidPlane, position: "42% 50%" },
    { src: stock.picnic, position: "50% 50%", ratio: "4 / 3" },
  ],
  workshops: [
    { src: stock.stretch, position: "42% 50%" },
    { src: stock.watchApp, position: "60% 50%", ratio: "4 / 3" },
  ],
  booths: [
    { src: stock.ringToss, position: "50% 50%" },
    { src: stock.kidPlane, position: "42% 50%", ratio: "4 / 3" },
  ],
  community: [
    { src: stock.generations, position: "60% 50%" },
    { src: stock.forestHug, position: "50% 50%", ratio: "4 / 3" },
  ],
  fitness: [
    { src: stock.plank, position: "50% 50%" },
    { src: stock.watchApp, position: "60% 50%", ratio: "4 / 3" },
  ],
};
export function OverviewPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead
        title={lang === "en" ? "About the Event" : "活動介紹"}
        photos={headPhotos.overview}
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
            ? "Hosted by Hong Kong Exchanges and Clearing Limited, the day brings colleagues and their families together through sport, wellbeing and community. Activities bring together different generations, with a focus on inclusion and caregiver appreciation."
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
        photos={headPhotos.schedule}
      />
      <Section title={event.date[lang]}>
        <div className="schedule-list" data-reveal-group>
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
            ? "Check your team allocation in your event information and find your group’s seating area on the venue map."
            : "請查看活動資訊中的隊伍分配，並參照場地圖前往所屬隊伍的座位區。"}
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
        photos={headPhotos.venue}
      />
      <Reveal className="venue-map container">
        <a
          href={asset(`/images/about/Event-Map${lang === "en" ? "" : "-tc"}.jpg`)}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={lang === "en" ? "Open full-size venue map" : "開啟完整場地圖"}
        >
          <img
            src={asset(`/images/about/Event-Map${lang === "en" ? "" : "-tc"}.jpg`)}
            alt={lang === "en" ? "Sports ground and indoor area: activity zones, facilities and group seating" : "運動場及室內區域：活動區、設施及隊伍座位分布"}
            fetchPriority="high"
          />
        </a>
      </Reveal>
      <Section title={event.venue[lang]}>
        <p className="lead-copy">
          {lang === "en"
            ? "The 2026 event brings track, field and family activities together at Kai Tak Youth Sports Ground."
            : "2026 家庭運動日將於啟德青年運動場舉行，集合田徑、團體及家庭活動。"}
        </p>
      </Section>
      <Section title={lang === "en" ? "Getting there" : "交通安排"}>
        <p>
          {lang === "en"
            ? "Use the walking route from the Main Stadium car park to Kai Tak Youth Sports Ground to plan your arrival."
            : "從主場館停車場出發，可參照步行路線前往啟德青年運動場。"}
        </p>
        <div className="holding-action">
          <a className="go-btn" href={asset("/pdf/Route-from-Main-Stadium-Carpark-to-YSG.pdf")} target="_blank" rel="noreferrer noopener">
            <i className="bi bi-arrow-right" aria-hidden="true" />
            <span>{lang === "en" ? "View walking route (PDF)" : "查看步行路線（PDF）"}</span>
          </a>
        </div>
      </Section>
      <Section
        id="refreshments"
        title={lang === "en" ? "Refreshments" : "美味小食"}
      >
        <div className="feature-row">
          <img
            src={asset(photography.refreshments)}
            loading="lazy"
            alt={
              lang === "en"
                ? "Refreshments"
                : "美味小食"
            }
          />
          <div>
            <p>
              {lang === "en"
                ? "Take a break from the activities and enjoy light refreshments with your family. Find the snack kiosks on the venue map."
                : "活動之間，不妨與家人一起享用小食，休息充電。小食攤位位置請參照場地圖。"}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
function CompetitionDetails({ item, lang }) {
  const fields = [
    [t("Category", "組別"), item.category],
    [t("Location", "場區"), item.location],
    [t("Format", "賽制"), item.format],
    [t("Capacity", "名額"), item.capacity],
    [t("Time", "時間"), item.time],
  ].filter(([, value]) => value);
  return (
    <article className="programme-card">
      <h3>{item.title[lang]}</h3>
      <p>{item.description[lang]}</p>
      <dl className="programme-facts">
        {fields.map(([label, value]) => (
          <div key={label.en}>
            <dt>{label[lang]}</dt>
            <dd>{typeof value === "string" ? value : value[lang]}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
export function CompetitionsPage() {
  const lang = useLang();
  return (
    <>
      <InnerHead title={lang === "en" ? "Competitions" : "比賽"} photos={headPhotos.competitions} />
      <nav className="section-tabs container" aria-label={lang === "en" ? "Competition categories" : "比賽類別"}>
        {competitions.map((group) => (
          <a key={group.id} href={`#${group.id}`}>{group.title[lang]}</a>
        ))}
        <a href="#group-score">{groupScoring.title[lang]}</a>
        <a href="#result">{lang === "en" ? "Results" : "比賽結果"}</a>
      </nav>
      {competitions.map((group) => (
        <Section key={group.id} id={group.id} title={group.title[lang]}>
          <div className="programme-intro">
            <img src={asset(group.image)} alt="" loading="lazy" />
            <p className="lead-copy">{group.description[lang]}</p>
          </div>
          <div className="competition-grid" data-reveal-group>
            {group.items.map((item) => (
              <CompetitionDetails key={item.id} item={item} lang={lang} />
            ))}
          </div>
        </Section>
      ))}
      <Section id="group-score" title={groupScoring.title[lang]}>
        <div className="group-score-layout">
          <div className="group-score-copy">
            <p className="lead-copy">{groupScoring.description[lang]}</p>
            <p>{groupScoring.participation[lang]}</p>
          </div>
          <table className="group-score-table" aria-label={groupScoring.title[lang]}>
            <thead>
              <tr>
                <th scope="col">{lang === "en" ? "Competition position" : "比賽名次"}</th>
                <th scope="col">{lang === "en" ? "Points awarded" : "得分"}</th>
              </tr>
            </thead>
            <tbody>
              {groupScoring.positions.map((row) => (
                <tr key={row.points}>
                  <th scope="row">{row.rank[lang]}</th>
                  <td>{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section id="result" title={lang === "en" ? "Results" : "比賽結果"}>
        <p>
          {lang === "en"
            ? "Find race times, distances, match scores and rankings by competition, category and round."
            : "按比賽項目、組別及賽段，查閱時間、距離、比數及排名。"}
        </p>
        <div className="holding-action">
          <ArrowLink href="/competitions/results/">
            {lang === "en" ? "View results" : "查看賽果"}
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
        photos={headPhotos.activities}
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
      <InnerHead title={lang === "en" ? "Wellness Workshops" : "健康工作坊"} photos={headPhotos.workshops} />
      <Section title={lang === "en" ? "Time to move. Time together." : "一起活動，共享親子時光。"}>
        <div className="feature-row">
          <img
            src={asset(photography.yoga)}
            loading="lazy"
            alt={lang === "en" ? "Family yoga" : "親子瑜伽"}
          />
          <div>
            <p className="lead-copy">
              {lang === "en"
                ? "From martial arts and strength training to creative making and family wellbeing, discover a new way to spend time together."
                : "由武術、肌力訓練，到創意手作及親子健康體驗，一起發掘相處的新方式。"}
            </p>
            <div className="holding-action">
              <a href="#workshop-sessions" className="go-btn">
                <i className="bi bi-arrow-right" aria-hidden="true" />
                <span>{lang === "en" ? "Explore workshop sessions" : "查看工作坊場次"}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="workshop-grid" data-reveal-group>
          {workshopOptions.map((item) => (
            <article className="programme-card workshop-card" key={item.id}>
              <p className="programme-category">{item.focus[lang]}</p>
              <h3>{item.title[lang]}</h3>
              <p>{item.description[lang]}</p>
              <p className="activity-duration">
                <i className="bi bi-clock" aria-hidden="true" />
                {lang === "en" ? `${item.duration} minutes` : `${item.duration} 分鐘`}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section title={lang === "en" ? "Move at your own pace." : "找到自己的步伐。"}>
        <p className="lead-copy">
          {lang === "en"
            ? "Add a change of pace to your afternoon with super slow jogging or Nordic walking."
            : "透過原地超慢跑或北歐健步行，為下午活動帶來不一樣的節奏。"}
        </p>
        <ul className="movement-list">
          {movementActivities.map((item) => (
            <li key={item.title.en}>
              <h3>{item.title[lang]}</h3>
              <span>{lang === "en" ? `${item.duration} minutes` : `${item.duration} 分鐘`}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="workshop-sessions" title={lang === "en" ? "Workshop Sessions" : "工作坊場次"}>
        <div className="workshop-session-list" data-reveal-group>
          {workshopSessionGroups.map((group) => (
            <div className="workshop-session-row" key={group.id}>
              <div>
                <h3>{group.title[lang]}</h3>
                {group.activities && <p>{group.activities[lang]}</p>}
              </div>
              <ol className="session-times" aria-label={group.title[lang]}>
                {group.sessions.map((time, i) => (
                  <li key={time}>
                    <span>{lang === "en" ? `Session ${i + 1}` : `場次 ${i + 1}`}</span>
                    <strong>{time}</strong>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <div className="holding-action">
          <ArrowLink href="/workshop-status/">
            {lang === "en" ? "Workshop queue & tickets" : "工作坊排隊及攞籌狀態"}
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
        photos={headPhotos.booths}
      />
      <div className="programme-hours container">
        <span>{lang === "en" ? "Opening hours" : "開放時間"}</span>
        <strong>{boothHours}</strong>
      </div>
      <Section
        title={
          lang === "en"
            ? "Play a little. Discover something new."
            : "輕鬆玩樂，發掘新體驗。"
        }
      >
        <div className="feature-row">
          <img src={asset(photography.games)} alt="" loading="lazy" />
          <div>
            <p>
              {lang === "en"
                ? "Enjoy a sports carnival with activities for different ages and abilities. Explore the games below."
                : "運動嘉年華帶來適合不同年齡及能力的遊戲體驗。一起探索以下遊戲。"}
            </p>
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
        photos={headPhotos.community}
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
            src={asset(photography.community)}
            alt=""
            loading="lazy"
          />
          <div>
            <p>
              {lang === "en"
                ? "This year's event places an emphasis on caregiver appreciation and bringing people together across generations. Share a moment of appreciation and connect with the people who care for our community."
                : "今年活動著重向照顧者表達謝意，並促進不同世代之間的交流。透過共同參與，向身邊的照顧者表達心意，連繫社群。"}
            </p>
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
        photos={headPhotos.fitness}
      />
      <Section
        title={
          lang === "en" ? "Make time for your wellbeing." : "為健康留一點時間。"
        }
      >
        <div className="feature-row">
          <img
            src={asset(photography.fitness)}
            width="509"
            height="339"
            loading="lazy"
            alt={lang === "en" ? "Checking a smartwatch during a plank exercise" : "平板支撐時查看智能手錶"}
          />
          <p className="lead-copy">
            {lang === "en"
              ? "Visit the fitness assessment zone to get to know your fitness and wellbeing."
              : "到訪體適能評估區，了解自己的體適能狀況，關顧身心健康。"}
          </p>
        </div>
        <div className="wellness-panel">
          <i className="bi bi-heart-pulse" aria-hidden="true" />
          <h3>
            {lang === "en"
              ? "Get to know your fitness"
              : "了解自己的體適能"}
          </h3>
          <p>
            {lang === "en"
              ? "Speak with the team at the assessment zone about the activities and how to take part."
              : "歡迎向評估區的工作人員了解活動內容及參加方式。"}
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
        "Please check the organiser’s event communications for weather updates and any changes to the day’s arrangements.",
        "請留意主辦機構發出的天氣消息及活動通知，以了解當日安排的最新消息。",
      ),
    },
  }[type];
  return (
    <>
      <InnerHead title={content.title[lang]} />
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
