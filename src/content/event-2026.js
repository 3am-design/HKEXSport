// Source: 2026 Info Deck, pages 4–7. Page 6 is the 30 September update.
// Keep unresolved selection/timing notes in .local/PROJECT-NOTES.md, not the UI.
// Group scoring is carried forward from the 2025 site at the user’s request.
export const t = (en, zh) => ({ en, zh });

// Photography. The stock photos are Getty Images 509 px preview files in public/images/2026/getty-preview/,
// retained for the public demo at Eric’s request on 2 October; replace with licensed originals before final production release.
// Relay and Wing Chun stay as generated images (public/images/2026/photography-natural/) because the
// gallery captions describe them and no stock photo matches. The venue photo is a supplied image of the ground.
const stockPhoto = (id) => `/images/2026/getty-preview/${id}.webp`;
export const stock = {
  kidTrack: stockPhoto("640761067"), // child in sports uniform on the track
  kidRedCap: stockPhoto("925159158"),
  kidShoulders: stockPhoto("2154071156"), // child on shoulders, skyline
  kidPlane: stockPhoto("1362311403"),
  kidRun: stockPhoto("1415909275"),
  picnic: stockPhoto("1357673126"),
  swing: stockPhoto("1430939966"),
  dadShoulders: stockPhoto("1275872864"),
  toddler: stockPhoto("1225403728"),
  ballPitGirl: stockPhoto("2162734587"),
  ballPitFamily: stockPhoto("2162734585"),
  headphones: stockPhoto("1371234941"),
  runner: stockPhoto("1372077133"),
  stretch: stockPhoto("1223943716"),
  ringToss: stockPhoto("1465760652"),
  generations: stockPhoto("1368138956"),
  plank: stockPhoto("1279640595"),
  matcha: stockPhoto("1299543305"),
  watchApp: stockPhoto("1413208884"),
  forestHug: stockPhoto("1319818077"),
  camera: stockPhoto("1254581580"),
  huddle: stockPhoto("1275872985"),
};
export const photography = {
  sprint: stock.runner,
  family: stock.kidTrack,
  team: stock.huddle,
  relay: "/images/2026/photography-natural/relay.webp",
  yoga: stock.stretch,
  games: stock.ringToss,
  community: stock.generations,
  fitness: stock.plank,
  refreshments: stock.matcha,
  wingChun: "/images/2026/photography-natural/wing-chun.webp",
  venue: "/images/2026/venue/kai-tak-youth-sports-ground.webp",
};

export const event = {
  year: 2026,
  name: t("HKEX Family Sports Day 2026", "香港交易所家庭運動日 2026"),
  startsAt: "2026-12-12T13:00:00+08:00",
  date: t("12 December 2026 · Saturday", "2026 年 12 月 12 日 · 星期六"),
  time: t("13:00–18:00", "下午 1 時至 6 時"),
  venue: t("Kai Tak Youth Sports Ground", "啟德青年運動場"),
  intro: t(
    "An afternoon to get moving, spend time together and connect with colleagues and family. From friendly competition to shared moments of wellbeing, there is something for every generation.",
    "與同事和家人一起動起來，共享健康與歡樂的下午。由充滿活力的友誼賽，到放鬆身心的親子活動，讓不同年齡的家人都能樂在其中。",
  ),
};

export const navigation = [
  {
    label: t("Event Overview", "活動概覽"),
    href: "/event-overview/",
    child: [
      { label: t("About the Event", "活動介紹"), href: "/event-overview/" },
      {
        label: t("Schedule & Grouping", "時間表及隊伍"),
        href: "/event-overview/schedule/",
      },
      {
        label: t("About the Venue", "活動場地"),
        href: "/event-overview/venue/",
      },
      {
        label: t("Adverse Weather", "惡劣天氣"),
        href: "/event-overview/adverse-weather/",
      },
    ],
  },
  {
    label: t("Competitions", "比賽"),
    href: "/competitions/",
    child: [
      { label: t("Individual", "個人賽"), href: "/competitions/#individual" },
      { label: t("Family", "家庭賽"), href: "/competitions/#family" },
      { label: t("Team", "團體賽"), href: "/competitions/#group" },
      { label: t("Group Score System", "隊伍得分制度"), href: "/competitions/#group-score" },
      { label: t("Results", "比賽結果"), href: "/competitions/#result" },
    ],
  },
  {
    label: t("Activities & Wellness", "活動及健康體驗"),
    href: "/workshops-and-booths/",
    child: [
      {
        label: t("Community Engagement", "社區關懷"),
        href: "/workshops-and-booths/community/",
      },
      {
        label: t("Wellness Workshops", "健康工作坊"),
        href: "/workshops-and-booths/workshops/",
      },
      {
        label: t("Activity Booths", "活動攤位"),
        href: "/workshops-and-booths/booths/",
      },
      {
        label: t("Fitness Assessment", "體適能評估"),
        href: "/workshops-and-booths/fitness-assessment/",
      },
    ],
  },
  { label: t("Workshop Status", "工作坊狀態"), href: "/workshop-status/" },
  { label: t("Gallery", "相片集"), href: "/gallery/" },
];

export const highlights = [
  {
    title: t("Competitions", "比賽"),
    description: t(
      "Track, field and team challenges bring colleagues and families together for an afternoon of friendly competition.",
      "田徑、團體及家庭挑戰，讓同事與家人一起享受比賽樂趣。",
    ),
    img: photography.sprint,
    link: "/competitions/",
  },
  {
    title: t("Wellness Workshops", "健康工作坊"),
    description: t(
      "Discover ways to move, unwind and enjoy time together, with a programme designed for different generations.",
      "透過適合不同年齡的健康體驗，一起舒展身心，共度親子時光。",
    ),
    img: photography.yoga,
    link: "/workshops-and-booths/workshops/",
  },
  {
    title: t("Activity Booths", "活動攤位"),
    description: t(
      "Try a new game and share a little friendly rivalry at the sports carnival.",
      "在運動嘉年華體驗新遊戲，和家人好友輕鬆比拼。",
    ),
    img: photography.games,
    link: "/workshops-and-booths/booths/",
  },
  {
    title: t("Community Engagement", "社區關懷"),
    description: t(
      "Celebrate the people who care for us and build connections across our community.",
      "向照顧者表達心意，透過共同參與，連繫彼此。",
    ),
    img: photography.community,
    link: "/workshops-and-booths/community/",
  },
  {
    title: t("Fitness Assessment", "體適能評估"),
    description: t(
      "A dedicated space to explore your fitness and wellbeing.",
      "在專屬區域了解自己的體適能狀況，關顧身心健康。",
    ),
    img: photography.fitness,
    link: "/workshops-and-booths/fitness-assessment/",
  },
  {
    title: t("Refreshments", "美味小食"),
    description: t(
      "Take a break and recharge at the food kiosks.",
      "到小食攤位休息一下，補充能量。",
    ),
    img: photography.refreshments,
    link: "/event-overview/venue/#refreshments",
  },
];

// Homepage photo strip (decorative; no captions).
export const homeMoments = [
  { img: stock.watchApp, shape: "portrait" },
  { img: stock.kidRun, shape: "wide" },
  { img: stock.forestHug, shape: "landscape" },
  { img: stock.camera, shape: "portrait" },
  { img: stock.kidRedCap, shape: "landscape" },
  { img: stock.ballPitFamily, shape: "square" },
];

export const schedule = [
  {
    time: "12:30–13:00",
    title: t("Arrival & welcome", "入場及迎賓"),
    description: t(
      "Colleagues and family members arrive at the venue.",
      "同事及家人陸續到達會場。",
    ),
  },
  {
    time: "13:00–13:30",
    title: t("Opening ceremony", "開幕典禮"),
    description: t(
      "Drum performance, the HKEX dance and cheering team, an all-audience stretch and the opening speech.",
      "欣賞鼓樂及香港交易所舞蹈啦啦隊表演，一起參與全場伸展運動，並迎接開幕致辭。",
    ),
  },
  {
    time: t("Afternoon", "下午時段"),
    title: t("Sports, activities & wellness", "運動、遊戲及健康體驗"),
    description: t(
      "Individual races, team and family games, leisure runs, workshops, activity booths and fitness assessment.",
      "個人賽、團體及家庭遊戲、休閒跑、工作坊、活動攤位及體適能評估。",
    ),
  },
  {
    time: t("Closing session", "閉幕環節"),
    title: t("Awards & closing ceremony", "頒獎及閉幕典禮"),
    description: t(
      "Celebrate the day's achievements. The event ends at 18:00.",
      "一起分享當日的精彩成果。活動於下午 6 時結束。",
    ),
  },
];

// Categories and capacities: p5. Zones and explicit leisure-run times: p6–7.
export const competitions = [
  {
    id: "individual",
    title: t("Individual Competitions", "個人賽"),
    description: t("Find your pace on the track and put your power to the test in the field.", "在跑道上挑戰速度，在田賽中展現力量。"),
    image: photography.sprint,
    items: [
      {
        id: "100m",
        title: t("100m sprint", "100 米短跑"),
        description: t("Sprint along the straight in the men's and women's races, with heats followed by the final.", "男子及女子組於直線跑道競逐，賽事分為初賽及決賽。"),
        category: t("Men & women", "男子組及女子組"),
        location: t("Track", "跑道"),
        format: t("Heats & final", "初賽及決賽"),
      },
      {
        id: "parachute-run",
        title: t("Parachute run", "降落傘跑"),
        description: t("Take on a sprint with the added resistance of a running parachute.", "帶上跑步降落傘，在阻力中挑戰衝刺速度。"),
        category: t("Men", "男子組"),
        location: t("Track", "跑道"),
        capacity: t("12 participants", "12 人"),
      },
      {
        id: "long-jump",
        title: t("Long jump", "跳遠"),
        description: t("Build up speed on the approach and take your leap in the men's or women's field event.", "助跑、起跳，在男子或女子跳遠賽中挑戰距離。"),
        category: t("Men & women", "男子組及女子組"),
        location: t("Long jump area", "跳遠區"),
      },
    ],
  },
  {
    id: "family",
    title: t("Family Activities & Races", "家庭活動及比賽"),
    description: t("From first crawls to a run together, share the day with every generation of your family.", "由寶寶爬行到親子同跑，一家大小都可以一起參與。"),
    image: photography.family,
    items: [
      {
        id: "baby-crawl",
        title: t("Baby crawl", "寶寶爬行賽"),
        description: t("Cheer on the youngest members of the family in their own crawl along the baby track.", "為家中最年幼的成員打氣，見證寶寶在專屬賽道上的每一步。"),
        category: t("Ages 1–2", "1 至 2 歲"),
        location: t("Baby track · left semicircle", "寶寶賽道・左側半圓區"),
      },
      {
        id: "family-obstacle",
        title: t("Family obstacle challenge", "家庭障礙挑戰賽"),
        description: t("Work together as a family and make your way through a series of obstacles on the track.", "一家人互相配合，一起完成跑道上的障礙挑戰。"),
        category: t("Family", "家庭組"),
        location: t("Full track", "整圈跑道"),
      },
      {
        id: "leisure-1km",
        title: t("1km leisure run", "1 公里休閒跑"),
        description: t("Enjoy a shorter parent-child run along the Kai Tak route.", "沿啟德路線輕鬆同跑，享受較短途的親子跑步時光。"),
        category: t("Parent-child pairs", "親子組"),
        location: t("Kai Tak route", "啟德路線"),
        capacity: t("20 pairs · 40 participants", "20 對親子・40 人"),
        time: "15:00–15:15",
      },
      {
        id: "leisure-3km",
        title: t("3km leisure run", "3 公里休閒跑"),
        description: t("Spend a little more time moving together on the longer Kai Tak route.", "挑戰較長的啟德路線，與家人一起享受跑步樂趣。"),
        category: t("Parent-child pairs", "親子組"),
        location: t("Kai Tak route", "啟德路線"),
        capacity: t("20 pairs · 40 participants", "20 對親子・40 人"),
        time: "15:45–16:15",
      },
    ],
  },
  {
    id: "group",
    title: t("Team Competitions", "團體賽"),
    description: t("Pass the baton, take your shot and pull together. Every team has a part to play.", "傳好接力棒、把握射門機會、齊心發力，一起為隊伍爭分。"),
    image: photography.team,
    items: [
      {
        id: "relay",
        title: t("4 × 100m relay", "4 × 100 米接力賽"),
        description: t("Four runners, one team: carry the baton around a full lap of the track.", "四名隊員接力完成一圈跑道，每人跑出 100 米。"),
        category: t("Men & women", "男子組及女子組"),
        location: t("Full track", "整圈跑道"),
        capacity: t("16 participants per category", "每組 16 人"),
      },
      {
        id: "football",
        title: t("7-a-side football", "七人足球賽"),
        description: t("Team matches take place across two pitches, followed by the final and third-place match.", "各隊於兩個球場展開比賽，並競逐決賽及季軍賽。"),
        category: t("Cross-team", "跨隊組"),
        location: t("Football pitches 1 & 2", "足球場 1 及 2"),
        format: t("Matches, final & third-place match", "賽事、決賽及季軍賽"),
      },
      {
        id: "penalty-shootout",
        title: t("Penalty shootout", "十二碼射門賽"),
        description: t("Step up to the spot in a team shootout, with final and third-place rounds.", "站上十二碼點，與隊友一起競逐決賽及季軍賽。"),
        category: t("Cross-team", "跨隊組"),
        location: t("Football pitches 1 & 2", "足球場 1 及 2"),
      },
      {
        id: "tug-of-war",
        title: t("Tug of war", "拔河賽"),
        description: t("Bring your team together for a test of coordination and collective strength.", "集合隊伍的力量與默契，齊心迎接拔河挑戰。"),
        category: t("Cross-team", "跨隊組"),
        location: t("Right semicircle", "右側半圓區"),
      },
    ],
  },
];

// Unchanged scoring policy from the 2025 competitions page.
export const groupScoring = {
  title: t("Group Score System", "隊伍得分制度"),
  description: t("All group family and team competitions count towards the group’s overall score.", "所有團體家庭賽及團體賽的成績均計入隊伍總分。"),
  participation: t("No participation points are awarded.", "所有比賽不設參與分。"),
  positions: [
    { rank: t("1st", "第一名"), points: 10 },
    { rank: t("2nd", "第二名"), points: 8 },
    { rank: t("3rd", "第三名"), points: 6 },
    { rank: t("4th", "第四名"), points: 5 },
    { rank: t("5th", "第五名"), points: 4 },
  ],
};

// Workshop activities: p7. Durations/session blocks: p6, 30 September update.
// The brief lists six candidates for three workshops. Selection remains a content
// decision; these activity descriptions do not introduce instructors or eligibility.
export const workshopOptions = [
  {
    id: "wing-chun",
    title: t("Wing Chun & wooden-post practice", "詠春拳術及木人樁體驗"),
    description: t("Explore Wing Chun movements and experience practice with the wooden training post.", "認識詠春拳術動作，體驗木人樁練習。"),
    duration: 20,
    focus: t("Martial arts", "武術體驗"),
  },
  {
    id: "strength",
    title: t("At-home strength training", "居家肌力訓練"),
    description: t("Explore strength-training movements that fit into an at-home exercise routine.", "認識適合融入家居運動習慣的肌力訓練動作。"),
    duration: 30,
    focus: t("Everyday movement", "日常運動"),
  },
  {
    id: "dumbbells",
    title: t("DIY dumbbells", "啞鈴 DIY"),
    description: t("Combine making and movement with a hands-on dumbbell activity.", "結合動手製作與運動元素，體驗啞鈴 DIY。"),
    duration: 30,
    focus: t("Creative activity", "創意手作"),
  },
  {
    id: "yoga",
    title: t("Family yoga", "親子瑜伽"),
    description: t("Share a yoga session with your family and make time to move together.", "與家人一起參與瑜伽，共享親子活動時光。"),
    duration: 45,
    focus: t("Family wellbeing", "親子健康"),
  },
  {
    id: "massage",
    title: t("Family massage", "親子按摩"),
    description: t("Spend time together through a shared family massage experience.", "透過親子按摩體驗，與家人共享相處時光。"),
    duration: 45,
    focus: t("Family wellbeing", "親子健康"),
  },
  {
    id: "muay-thai",
    title: t("Family Muay Thai", "親子泰拳"),
    description: t("Discover Muay Thai movements together in a family activity.", "一家人一起認識泰拳動作，投入親子運動體驗。"),
    duration: 45,
    focus: t("Family movement", "親子運動"),
  },
];
export const movementActivities = [
  { title: t("Super slow jogging", "原地超慢跑"), duration: 30 },
  { title: t("Nordic walking", "北歐健步行"), duration: 15 },
];
export const workshopSessionGroups = [
  {
    id: "family-wellbeing",
    title: t("Family wellbeing & strength", "親子健康及肌力體驗"),
    activities: t("Family massage, family Muay Thai, family yoga or at-home strength training", "親子按摩、親子泰拳、親子瑜伽或居家肌力訓練"),
    sessions: ["13:45–14:30", "14:45–15:30", "15:45–16:30"],
  },
  {
    id: "wing-chun",
    title: t("Wing Chun", "詠春拳術及木人樁體驗"),
    sessions: ["14:00–14:20", "14:30–14:50", "15:00–15:20", "15:30–15:50"],
  },
  {
    id: "dumbbells",
    title: t("DIY dumbbells", "啞鈴 DIY"),
    sessions: ["13:45–14:15", "14:30–15:00", "15:15–15:45", "16:00–16:30"],
  },
  {
    id: "movement",
    title: t("Jogging / walking", "跑步／步行體驗"),
    activities: t("Super slow jogging or Nordic walking", "原地超慢跑或北歐健步行"),
    sessions: ["13:45–14:15", "14:30–15:00", "15:15–15:45", "16:00–16:30"],
  },
];

export const boothHours = "13:30–17:15";
export const boothOptions = [
  t("Floor curling", "地壺球"),
  t("Cornhole", "布袋球"),
  t("Finnish skittles", "芬蘭木柱"),
  t("Spikeball", "圓網球"),
  t("Football darts", "足球飛鏢"),
  t("Sport stacking", "競技疊杯"),
];
