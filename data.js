
/* Part A: 배열 4개 */

// 영화 제목 (내 영화 5편 + 박스오피스 5편)
const titles = [
  "스파이더맨: 브랜드 뉴 데이",
  "인사이드 아웃 2",
  "겨울왕국",
  "주토피아",
  "모아나",
  "극장판 치이카와: 인어 섬의 비밀",
  "암살자(들)",
  "타짜: 벨제붑의 노래",
  "오디세이",
  "웨일폴: 고래에 먹힌 남자"
];

// 영화 평점
const ratings = [
  8.5, 7.5, 7.2, 7.8, 7.6,
  7.4, 7.2, 7.0, 8.0, 6.6
];

// 개봉 연도
const years = [
  2026, 2024, 2013, 2016, 2016,
  2026, 2026, 2026, 2026, 2026
];

// 누적 관객 수 (내 영화는 0)
const audiences = [
  0, 0, 0, 0, 0,
  1828903, 3249086, 1911186, 12267655, 56361
];


/* Part B: 영화 객체 배열 */

const movies = [
  {
    title: "스파이더맨: 브랜드 뉴 데이",
    date: "2026-07-29",
    year: 2026,
    rating: 8.5,
    audience: 0,
    poster: "/mt6uZzy7DAsncHlGGzMsyNgLR6v.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "인사이드 아웃 2",
    date: "2024-06-12",
    year: 2024,
    rating: 7.5,
    audience: 0,
    poster: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "겨울왕국",
    date: "2014-01-16",
    year: 2013,
    rating: 7.2,
    audience: 0,
    poster: "/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "주토피아",
    date: "2016-02-17",
    year: 2016,
    rating: 7.8,
    audience: 0,
    poster: "/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "모아나",
    date: "2017-01-12",
    year: 2016,
    rating: 7.6,
    audience: 0,
    poster: "/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    date: "2026-09-30",
    year: 2026,
    rating: 7.4,
    audience: 1828903,
    poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
    type: "boxoffice",
    rank: 1
  },
  {
    title: "암살자(들)",
    date: "2026-09-23",
    year: 2026,
    rating: 7.2,
    audience: 3249086,
    poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
    type: "boxoffice",
    rank: 2
  },
  {
    title: "타짜: 벨제붑의 노래",
    date: "2026-09-23",
    year: 2026,
    rating: 7.0,
    audience: 1911186,
    poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg",
    type: "boxoffice",
    rank: 3
  },
  {
    title: "오디세이",
    date: "2026-08-05",
    year: 2026,
    rating: 8.0,
    audience: 12267655,
    poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg",
    type: "boxoffice",
    rank: 4
  },
  {
    title: "웨일폴: 고래에 먹힌 남자",
    date: "2026-10-14",
    year: 2026,
    rating: 6.6,
    audience: 56361,
    poster: "/6ke2azOZ9sfe7SMn7rPhQWd0FPD.jpg",
    type: "boxoffice",
    rank: 5
  }
];
