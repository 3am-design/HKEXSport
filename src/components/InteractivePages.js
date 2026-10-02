"use client";
import { useRef, useState } from "react";
import { useGlobalContext } from "@/app/GlobalContext";
import InnerHead from "@/app/common/InnerHead";
import { Section } from "./EventPages";
import { asset } from "@/lib/assets";
import {
  galleryTags,
  galleryPhotos,
  workshopQueues,
  resultEvents,
} from "@/content/demo-2026";
const useLang = () => useGlobalContext().state.lang;
export function GalleryPage() {
  const lang = useLang();
  const [tag, setTag] = useState("all");
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const photos = galleryPhotos.filter(
    (photo) => tag === "all" || photo.tag === tag,
  );
  const openPhoto = (photo) => {
    setSelected(photo);
    dialog.current.showModal();
  };
  return (
    <>
      <InnerHead title={lang === "en" ? "Photo Gallery" : "相片集"} />
      <Section title={lang === "en" ? "Shared moments." : "一起留下精彩瞬間。"}>
        <div
          className="filter-tags"
          role="group"
          aria-label={
            lang === "en" ? "Filter photos by one tag" : "按單一分類篩選相片"
          }
        >
          {galleryTags.map((item) => (
            <button
              aria-pressed={tag === item.id}
              key={item.id}
              onClick={() => setTag(item.id)}
            >
              {item.label[lang]}
            </button>
          ))}
        </div>
        <p className="result-count" aria-live="polite">
          {lang === "en"
            ? `${photos.length} photos`
            : `${photos.length} 張相片`}
        </p>
        <div className="gallery-grid">
          {photos.map((photo) => (
            <button
              className="gallery-photo"
              key={photo.id}
              onClick={() => openPhoto(photo)}
            >
              <img
                src={asset(photo.src)}
                alt={photo.caption[lang]}
                loading="lazy"
              />
              <span>
                {photo.caption[lang]}
                <i aria-hidden="true" className="bi bi-arrows-angle-expand" />
              </span>
            </button>
          ))}
        </div>
        <dialog
          ref={dialog}
          className="photo-dialog"
          aria-label={lang === "en" ? "Photo" : "相片"}
          onClick={(e) => {
            if (e.target === dialog.current) dialog.current.close();
          }}
        >
          <button
            className="dialog-close"
            aria-label={lang === "en" ? "Close photo" : "關閉相片"}
            onClick={() => dialog.current.close()}
          >
            ×
          </button>
          {selected && (
            <figure>
              <img src={asset(selected.src)} alt={selected.caption[lang]} />
              <figcaption>{selected.caption[lang]}</figcaption>
            </figure>
          )}
        </dialog>
      </Section>
    </>
  );
}
export function WorkshopStatusPage() {
  const lang = useLang();
  const labels = {
    available: lang === "en" ? "Tickets available" : "尚有籌號",
    full: lang === "en" ? "Fully allocated" : "籌號已派完",
    upcoming: lang === "en" ? "Not yet open" : "尚未開放",
  };
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Workshop Status" : "工作坊狀態"}
      />
      <Section
        title={
          lang === "en"
            ? "Queues & tickets, at a glance."
            : "排隊及攞籌狀態，一目了然。"
        }
      >
        <div className="queue-grid" aria-live="polite">
          {workshopQueues
            .map((item) => (
              <article className="queue-card" key={item.id}>
                <span className={`status-pill status-pill--${item.status}`}>
                  {labels[item.status]}
                </span>
                <h3>{item.title[lang]}</h3>
                <p>
                  {lang === "en" ? "Session" : "場次"}{" "}
                  {item.session}
                </p>
                <div className="serving-number">
                  <span>{lang === "en" ? "Now serving" : "現正叫號"}</span>
                  <strong>{item.serving || "—"}</strong>
                </div>
                <dl>
                  <div>
                    <dt>{lang === "en" ? "Waiting tickets" : "等候籌號"}</dt>
                    <dd>{item.waiting}</dd>
                  </div>
                  <div>
                    <dt>{lang === "en" ? "Tickets remaining" : "剩餘籌號"}</dt>
                    <dd>{item.ticketsRemaining ?? "—"}</dd>
                  </div>
                </dl>
              </article>
            ))}
        </div>
        <p className="status-footnote">
          {lang === "en"
            ? "Please follow the instructions from venue staff when your number is called."
            : "叫號後，請按照現場工作人員的指示參與活動。"}
        </p>
      </Section>
    </>
  );
}
export function ResultsPage() {
  const lang = useLang();
  const [eventId, setEventId] = useState(resultEvents[0].id);
  const [categoryId, setCategoryId] = useState(
    resultEvents[0].categories[0].id,
  );
  const [roundId, setRoundId] = useState(
    resultEvents[0].categories[0].rounds[0].id,
  );
  const competition = resultEvents.find((item) => item.id === eventId);
  const category = competition.categories.find(
    (item) => item.id === categoryId,
  );
  const round = category.rounds.find((item) => item.id === roundId);
  const statusLabel = (status) =>
    ({
      qualified: lang === "en" ? "Qualified" : "晉級",
      dns: lang === "en" ? "Did not start" : "未出賽",
      dq: lang === "en" ? "Disqualified" : "取消資格",
      finished: lang === "en" ? "Finished" : "已完賽",
    })[status] || "—";
  return (
    <>
      <InnerHead
        title={lang === "en" ? "Competition Results" : "比賽結果"}
      />
      <Section
        title={
          lang === "en" ? "Every round. Every result." : "每個賽段，每項成績。"
        }
      >
        <div className="results-filters">
          <label className="select-field">
            {lang === "en" ? "Competition" : "比賽項目"}
            <select
              value={eventId}
              onChange={(e) => {
                const next = resultEvents.find(
                  (item) => item.id === e.target.value,
                );
                setEventId(next.id);
                setCategoryId(next.categories[0].id);
                setRoundId(next.categories[0].rounds[0].id);
              }}
            >
              {resultEvents.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title[lang]}
                </option>
              ))}
            </select>
          </label>
          <label className="select-field">
            {lang === "en" ? "Category" : "組別"}
            <select
              value={categoryId}
              onChange={(e) => {
                setCategoryId(e.target.value);
                setRoundId(
                  competition.categories.find(
                    (item) => item.id === e.target.value,
                  ).rounds[0].id,
                );
              }}
            >
              {competition.categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title[lang]}
                </option>
              ))}
            </select>
          </label>
          <label className="select-field">
            {lang === "en" ? "Round" : "賽段"}
            <select
              value={roundId}
              onChange={(e) => setRoundId(e.target.value)}
            >
              {category.rounds.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title[lang]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="results-heading" aria-live="polite">
          <h3>
            {competition.title[lang]} · {category.title[lang]} ·{" "}
            {round.title[lang]}
          </h3>
        </div>
        {round.entries.length ? (
          <div
            className="results-scroll"
            role="region"
            aria-label={lang === "en" ? "Results table" : "賽果表格"}
            tabIndex={0}
          >
            <table className="results-table">
              <thead>
                <tr>
                  <th scope="col">{lang === "en" ? "Rank" : "名次"}</th>
                  <th scope="col">
                    {lang === "en" ? "Bib number / team" : "號碼布／隊伍"}
                  </th>
                  <th scope="col">{round.metric[lang]}</th>
                  <th scope="col">{lang === "en" ? "Points" : "積分"}</th>
                  <th scope="col">{lang === "en" ? "Status" : "狀態"}</th>
                </tr>
              </thead>
              <tbody>
                {round.entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.rank ?? "—"}</td>
                    <th scope="row">
                      {entry.name[lang]}
                      {entry.members && (
                        <small>{entry.members.join(" / ")}</small>
                      )}
                      {entry.attempts && (
                        <small>
                          {lang === "en" ? "Attempts: " : "各次成績："}
                          {entry.attempts
                            .map((attempt) =>
                              attempt === "Foul" && lang === "zh"
                                ? "犯規"
                                : attempt,
                            )
                            .join(" / ")}
                        </small>
                      )}
                    </th>
                    <td>{entry.mark}</td>
                    <td>{entry.points ?? "—"}</td>
                    <td>{statusLabel(entry.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="empty-state">
            {lang === "en"
              ? "No results published for this category yet."
              : "此組別暫未有已公布賽果。"}
          </p>
        )}
      </Section>
    </>
  );
}
