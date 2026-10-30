
/* =========================================
   웹개발기초 실습과제 #2
   영화 데이터를 자바스크립트로
   Part A + Part B + Part C
========================================= */


/* =========================================
   Part A: 배열과 반복문
========================================= */

// A1. 영화 10편의 평균 평점
let sumA = 0;

for (let i = 0; i < ratings.length; i++) {
  sumA += ratings[i];
}

const averageA = sumA / ratings.length;

console.log(
  "A1. 평균 평점:",
  averageA.toFixed(1)
);


// A2. 최고 평점 영화
let maxA = 0;

for (let i = 1; i < ratings.length; i++) {
  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }
}

console.log(
  "A2. 최고 평점 영화:",
  titles[maxA],
  ratings[maxA]
);


// A3. 평점 8.0 이상 영화 수
let countA = 0;

for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8.0) {
    countA++;
  }
}

console.log(
  "A3. 평점 8.0 이상:",
  countA + "편"
);


// A4. 개봉 연대별 영화 수
let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countBeforeA = 0;

for (let i = 0; i < years.length; i++) {
  const decadeA = years[i] - (years[i] % 10);

  switch (decadeA) {
    case 2020:
      count2020A++;
      break;

    case 2010:
      count2010A++;
      break;

    case 2000:
      count2000A++;
      break;

    default:
      countBeforeA++;
  }
}

console.log(
  "A4. 연대별 영화 수:",
  "2020년대", count2020A + "편,",
  "2010년대", count2010A + "편,",
  "2000년대", count2000A + "편,",
  "그 이전", countBeforeA + "편"
);


// A5. 누적 관객 100만 명 이상 영화
let popularA = [];

for (let i = 0; i < audiences.length; i++) {
  if (audiences[i] >= 1000000) {
    popularA.push(titles[i]);
  }
}

console.log(
  "A5. 누적 관객 100만 명 이상:",
  popularA.length > 0
    ? popularA.join(", ")
    : "없음"
);



/* =========================================
   Part B: 함수와 객체 배열
========================================= */

// average : 영화 객체 배열 ⇒ 평균 평점
function average(list) {
  return averageBy(list, "rating");
}


// best : 영화 객체 배열 ⇒ 최고 평점 영화 객체
function best(list) {
  if (list.length === 0) {
    return null;
  }

  let result = list[0];

  for (const movie of list) {
    if (movie.rating > result.rating) {
      result = movie;
    }
  }

  return result;
}


// filterByRating : 영화 배열과 최소 평점 ⇒ 조건에 맞는 새 배열
function filterByRating(list, min) {
  return list.filter(movie => movie.rating >= min);
}


// sortBy : 객체 배열, 정렬 기준, 내림차순 여부 ⇒ 정렬된 새 배열
function sortBy(list, key, desc = false) {
  const direction = desc ? -1 : 1;

  return [...list].sort((a, b) => {
    if (
      typeof a[key] === "number" &&
      typeof b[key] === "number"
    ) {
      return (a[key] - b[key]) * direction;
    }

    return String(a[key]).localeCompare(
      String(b[key]),
      "ko"
    ) * direction;
  });
}


// search : 영화 배열과 검색어 ⇒ 제목이 일치하는 새 배열
function search(list, keyword) {
  const word = String(keyword).trim().toLowerCase();

  return list.filter(movie =>
    movie.title.toLowerCase().includes(word)
  );
}


// formatNumber : 숫자 ⇒ 쉼표가 포함된 문자열
function formatNumber(n) {
  return Number(n).toLocaleString("ko-KR");
}


// yearsSince : 개봉일 문자열 ⇒ 개봉 후 지난 연도 수
function yearsSince(dateStr) {
  const releaseYear = Number(dateStr.slice(0, 4));
  const currentYear = new Date().getFullYear();

  return currentYear - releaseYear;
}


// Part B: 요약 3줄 웹페이지 출력
const bestMovieB = best(movies);

const mostWatchedB = sortBy(
  movies,
  "audience",
  true
)[0];

const summaryB = [
  `B1. 전체 영화 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}`,
  `B2. 최고 평점 영화: ${bestMovieB.title} (${bestMovieB.rating}점), 개봉 후 ${yearsSince(bestMovieB.date)}년`,
  `B3. 최다 관객 영화: ${mostWatchedB.title}, 누적 관객 ${formatNumber(mostWatchedB.audience)}명`
];

document.getElementById("out").textContent =
  summaryB.join("\n");



/* =========================================
   Part C: TMDB 현재 상영 영화 분석
========================================= */

// getList : TMDB 응답 객체 ⇒ 영화 배열
function getList(data) {
  return data.results;
}


// averageBy : 객체 배열과 숫자 속성명 ⇒ 평균
function averageBy(list, key) {
  if (list.length === 0) {
    return 0;
  }

  let sum = 0;

  for (const item of list) {
    sum += Number(item[key]) || 0;
  }

  return sum / list.length;
}


// C1. TMDB 페이지 정보
const nowPlayingC = getList(TMDB);

console.log(
  "C1. 페이지 정보:",
  "현재 페이지", TMDB.page,
  "/ 전체 페이지", TMDB.total_pages,
  "/ 전체 결과", TMDB.total_results,
  "/ 현재 영화 수", nowPlayingC.length
);


// C2. 현재 상영 영화 평균 평점
console.log(
  "C2. 현재 상영 영화 평균 평점:",
  averageBy(
    nowPlayingC,
    "vote_average"
  ).toFixed(1)
);


// C3. 평점 상위 5편
console.log("C3. 평점 상위 5편:");

console.table(
  sortBy(
    nowPlayingC,
    "vote_average",
    true
  ).slice(0, 5),
  [
    "title",
    "release_date",
    "vote_average"
  ]
);


// C4. 영화 제목 검색
const keywordC = nowPlayingC.length > 0
  ? nowPlayingC[0].title.slice(0, 2)
  : "";

const searchResultsC = search(
  nowPlayingC,
  keywordC
);

console.log(
  `C4. "${keywordC}" 검색 결과:`,
  searchResultsC.length + "편"
);
