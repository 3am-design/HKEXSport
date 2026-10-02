import { t, photography } from "./event-2026";
// Display-only fixtures. Never use these values as official participant data.
export const galleryTags = [
  { id: "all", label: t("All photos", "所有相片") },
  { id: "sport", label: t("Competitions", "比賽") },
  { id: "wellness", label: t("Workshops", "工作坊") },
  { id: "community", label: t("Community", "社區") },
  { id: "carnival", label: t("Carnival", "嘉年華") },
];
export const galleryPhotos = [
  {
    id: "relay",
    tag: "sport",
    src: photography.relay,
    caption: t("Together on the track", "一起在跑道上"),
  },
  {
    id: "yoga",
    tag: "wellness",
    src: photography.yoga,
    caption: t("Time for family wellbeing", "親子健康時光"),
  },
  {
    id: "care",
    tag: "community",
    src: photography.community,
    caption: t("Connecting our community", "連繫社群"),
  },
  {
    id: "games",
    tag: "carnival",
    src: photography.games,
    caption: t("A little friendly competition", "輕鬆比拼"),
  },
  {
    id: "refreshment",
    tag: "carnival",
    src: photography.refreshments,
    caption: t("Time to recharge", "補充能量"),
  },
  {
    id: "wing-chun",
    tag: "wellness",
    src: photography.wingChun,
    caption: t("Learning Wing Chun", "體驗詠春"),
  },
  {
    id: "sprint",
    tag: "sport",
    src: photography.sprint,
    caption: t("Find your pace", "跑出自己的步伐"),
  },
  {
    id: "family-run",
    tag: "sport",
    src: photography.family,
    caption: t("Every generation, together", "一家大小，一起出發"),
  },
  {
    id: "fitness",
    tag: "wellness",
    src: photography.fitness,
    caption: t("Make time for wellbeing", "為健康留一點時間"),
  },
];
export const workshopQueues = [
  {
    id: "a",
    title: t("Family yoga", "親子瑜伽"),
    session: "13:45–14:30",
    status: "available",
    serving: "A012",
    waiting: 8,
    ticketsRemaining: 12,
  },
  {
    id: "b",
    title: t("Wing Chun", "詠春拳術及木人樁體驗"),
    session: "14:00–14:20",
    status: "full",
    serving: "B020",
    waiting: 15,
    ticketsRemaining: 0,
  },
  {
    id: "c",
    title: t("DIY dumbbells", "啞鈴 DIY"),
    session: "15:15–15:45",
    status: "upcoming",
    serving: null,
    waiting: 0,
    ticketsRemaining: null,
  },
];
// Entries support individual / relay teams, marks, DQ/DNS, points and match scores.
// Publication and validation belong to the future CMS; the preview is read-only.
export const resultEvents = [
  {
    id: "100m",
    title: t("100m sprint", "100 米短跑"),
    categories: [
      {
        id: "men",
        title: t("Men", "男子組"),
        rounds: [
          {
            id: "heat-1",
            title: t("Heat 1", "初賽 1"),
            metric: t("Time", "時間"),
            entries: [
              {
                id: "p1",
                rank: 1,
                name: t("101", "101"),
                mark: "13.20 s",
                status: "qualified",
              },
              {
                id: "p2",
                rank: 2,
                name: t("102", "102"),
                mark: "13.55 s",
                status: "qualified",
              },
            ],
          },
          {
            id: "final",
            title: t("Final", "決賽"),
            metric: t("Time", "時間"),
            entries: [
              {
                id: "p1",
                rank: 1,
                name: t("101", "101"),
                mark: "12.98 s",
                points: 10,
              },
              {
                id: "p2",
                rank: 2,
                name: t("102", "102"),
                mark: "13.40 s",
                points: 8,
              },
              {
                id: "p3",
                rank: null,
                name: t("103", "103"),
                mark: "—",
                status: "dns",
              },
            ],
          },
        ],
      },
      {
        id: "women",
        title: t("Women", "女子組"),
        rounds: [
          {
            id: "final",
            title: t("Final", "決賽"),
            metric: t("Time", "時間"),
            entries: [],
          },
        ],
      },
    ],
  },
  {
    id: "long-jump",
    title: t("Long jump", "跳遠"),
    categories: [
      {
        id: "men",
        title: t("Men", "男子組"),
        rounds: [
          {
            id: "final",
            title: t("Final", "決賽"),
            metric: t("Best distance", "最佳距離"),
            entries: [
              {
                id: "p4",
                rank: 1,
                name: t("104", "104"),
                mark: "4.82 m",
                attempts: ["4.60", "4.82", "Foul"],
                points: 10,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "relay",
    title: t("4 × 100m relay", "4 × 100 米接力賽"),
    categories: [
      {
        id: "team",
        title: t("Team", "團體組"),
        rounds: [
          {
            id: "final",
            title: t("Final", "決賽"),
            metric: t("Time", "時間"),
            entries: [
              {
                id: "team-a",
                rank: 1,
                name: t("Team 1", "第 1 隊"),
                members: ["101", "102", "103", "104"],
                mark: "58.42 s",
                points: 10,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "football",
    title: t("7-a-side football", "七人足球賽"),
    categories: [
      {
        id: "cross-team",
        title: t("Cross-team", "跨隊組"),
        rounds: [
          {
            id: "final",
            title: t("Final", "決賽"),
            metric: t("Score", "比數"),
            entries: [
              {
                id: "match-1",
                rank: null,
                name: t(
                  "Team 1 vs Team 2",
                  "第 1 隊 對 第 2 隊",
                ),
                mark: "2–1",
                status: "finished",
              },
            ],
          },
        ],
      },
    ],
  },
];
