// Working content derived from the 2026 Info Deck. All programme copy is draft.
// Page 6 (30 September update) supersedes earlier competition timing where clear.
// Conflicting times, selection options and unconfirmed rules remain unpublished.
export const t = (en, zh) => ({ en, zh });

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
  preview: t(
    "2026 preview · Programme and visuals are provisional",
    "2026 預覽 · 活動內容及圖片暫定",
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
    img: "/images/home/competition.jpg",
    link: "/competitions/",
  },
  {
    title: t("Wellness Workshops", "健康工作坊"),
    description: t(
      "Discover ways to move, unwind and enjoy time together, with a programme designed for different generations.",
      "透過適合不同年齡的健康體驗，一起舒展身心，共度親子時光。",
    ),
    img: "/images/home/workshop.jpg",
    link: "/workshops-and-booths/workshops/",
  },
  {
    title: t("Activity Booths", "活動攤位"),
    description: t(
      "Try a new game and share a little friendly rivalry at the sports carnival.",
      "在運動嘉年華體驗新遊戲，和家人好友輕鬆比拼。",
    ),
    img: "/images/home/games.png",
    link: "/workshops-and-booths/booths/",
  },
  {
    title: t("Community Engagement", "社區關懷"),
    description: t(
      "Celebrate the people who care for us and build connections across our community.",
      "向照顧者表達心意，透過共同參與，連繫彼此。",
    ),
    img: "/images/home/community.jpg",
    link: "/workshops-and-booths/community/",
  },
  {
    title: t("Fitness Assessment", "體適能評估"),
    description: t(
      "A dedicated space to explore your fitness and wellbeing. Assessment details will be announced.",
      "在專屬區域了解自己的體適能狀況，評估詳情將稍後公布。",
    ),
    img: "/images/about/event-intro.jpg",
    link: "/workshops-and-booths/fitness-assessment/",
  },
  {
    title: t("Refreshments", "美味小食"),
    description: t(
      "Take a break and recharge at the food kiosks. Menu and redemption details will follow.",
      "到小食攤位休息一下，補充能量。餐單及換領安排將稍後公布。",
    ),
    img: "/images/home/refreshment.jpg",
    link: "/event-overview/venue/#refreshments",
  },
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
      "Come together to start the afternoon.",
      "齊集會場，展開充滿活力的下午。",
    ),
  },
  {
    time: t("Afternoon", "下午時段"),
    title: t("Sports, activities & wellness", "運動、遊戲及健康體驗"),
    description: t(
      "Individual races, team and family games, leisure runs, workshops, activity booths and fitness assessment. Detailed timings are being finalised.",
      "個人賽、團體及家庭遊戲、休閒跑、工作坊、活動攤位及體適能評估。各項活動時間有待確認。",
    ),
  },
  {
    time: t("Closing session", "閉幕環節"),
    title: t("Awards & closing ceremony", "頒獎及閉幕典禮"),
    description: t(
      "Celebrate the day's achievements. The event ends at 18:00; the ceremony start time will be confirmed.",
      "一起分享當日的精彩成果。活動於下午 6 時結束，典禮開始時間將另行公布。",
    ),
  },
];

export const competitions = [
  {
    id: "individual",
    title: t("Individual Competitions", "個人賽"),
    image: "/images/competitions/img-1-1.jpg",
    items: [
      t("100m sprint", "100 米短跑"),
      t("Parachute run", "降落傘跑"),
      t("Long jump", "跳遠"),
    ],
  },
  {
    id: "family",
    title: t("Family Activities & Races", "家庭活動及比賽"),
    image: "/images/competitions/img-2-1.jpg",
    items: [
      t("Baby crawl", "寶寶爬行賽"),
      t("Family obstacle challenge", "家庭障礙挑戰賽"),
      t("1km & 3km leisure runs", "1 公里及 3 公里休閒跑"),
    ],
  },
  {
    id: "group",
    title: t("Team Competitions", "團體賽"),
    image: "/images/competitions/img-3-1.jpg",
    items: [
      t("4 × 100m relay", "4 × 100 米接力賽"),
      t("7-a-side football", "七人足球賽"),
      t("Penalty shootout", "十二碼射門賽"),
      t("Tug of war", "拔河賽"),
    ],
  },
];

export const workshopOptions = [
  t("Wing Chun & wooden dummy experience", "詠春拳術及木人樁體驗"),
  t("At-home strength training", "居家肌力訓練"),
  t("DIY dumbbells", "啞鈴 DIY"),
  t("Family yoga", "親子瑜伽"),
  t("Family massage", "親子按摩"),
  t("Family Muay Thai", "親子泰拳"),
];
export const boothOptions = [
  t("Floor curling", "地壺球"),
  t("Cornhole", "布袋球"),
  t("Finnish skittles", "芬蘭木柱"),
  t("Spikeball", "圓網球"),
  t("Football darts", "足球飛鏢"),
  t("Sport stacking", "競技疊杯"),
];
