const HIRAGANA_SET = [
  { kana: "あ", roman: ["a"], korean: ["아"] },
  { kana: "い", roman: ["i"], korean: ["이"] },
  { kana: "う", roman: ["u"], korean: ["우"] },
  { kana: "え", roman: ["e"], korean: ["에"] },
  { kana: "お", roman: ["o"], korean: ["오"] },
  { kana: "か", roman: ["ka"], korean: ["카"] },
  { kana: "き", roman: ["ki"], korean: ["키"] },
  { kana: "く", roman: ["ku"], korean: ["쿠"] },
  { kana: "け", roman: ["ke"], korean: ["케"] },
  { kana: "こ", roman: ["ko"], korean: ["코"] },
  { kana: "さ", roman: ["sa"], korean: ["사"] },
  { kana: "し", roman: ["shi", "si"], korean: ["시"] },
  { kana: "す", roman: ["su"], korean: ["스"] },
  { kana: "せ", roman: ["se"], korean: ["세"] },
  { kana: "そ", roman: ["so"], korean: ["소"] },
  { kana: "た", roman: ["ta"], korean: ["타"] },
  { kana: "ち", roman: ["chi", "ti"], korean: ["치"] },
  { kana: "つ", roman: ["tsu", "tu"], korean: ["츠", "쓰"] },
  { kana: "て", roman: ["te"], korean: ["테"] },
  { kana: "と", roman: ["to"], korean: ["토"] },
  { kana: "な", roman: ["na"], korean: ["나"] },
  { kana: "に", roman: ["ni"], korean: ["니"] },
  { kana: "ぬ", roman: ["nu"], korean: ["누"] },
  { kana: "ね", roman: ["ne"], korean: ["네"] },
  { kana: "の", roman: ["no"], korean: ["노"] },
  { kana: "は", roman: ["ha"], korean: ["하"] },
  { kana: "ひ", roman: ["hi"], korean: ["히"] },
  { kana: "ふ", roman: ["fu", "hu"], korean: ["후", "후우"] },
  { kana: "へ", roman: ["he"], korean: ["헤"] },
  { kana: "ほ", roman: ["ho"], korean: ["호"] },
  { kana: "ま", roman: ["ma"], korean: ["마"] },
  { kana: "み", roman: ["mi"], korean: ["미"] },
  { kana: "む", roman: ["mu"], korean: ["무"] },
  { kana: "め", roman: ["me"], korean: ["메"] },
  { kana: "も", roman: ["mo"], korean: ["모"] },
  { kana: "や", roman: ["ya"], korean: ["야"] },
  { kana: "ゆ", roman: ["yu"], korean: ["유"] },
  { kana: "よ", roman: ["yo"], korean: ["요"] },
  { kana: "ら", roman: ["ra"], korean: ["라"] },
  { kana: "り", roman: ["ri"], korean: ["리"] },
  { kana: "る", roman: ["ru"], korean: ["루"] },
  { kana: "れ", roman: ["re"], korean: ["레"] },
  { kana: "ろ", roman: ["ro"], korean: ["로"] },
  { kana: "わ", roman: ["wa"], korean: ["와"] },
  { kana: "を", roman: ["wo", "o"], korean: ["오", "워"] },
  { kana: "ん", roman: ["n", "nn"], korean: ["응", "은"] }
];

const DAKUTEN_SET = [
  { kana: "が", roman: ["ga"], korean: ["가"] },
  { kana: "ぎ", roman: ["gi"], korean: ["기"] },
  { kana: "ぐ", roman: ["gu"], korean: ["구"] },
  { kana: "げ", roman: ["ge"], korean: ["게"] },
  { kana: "ご", roman: ["go"], korean: ["고"] },
  { kana: "ざ", roman: ["za"], korean: ["자"] },
  { kana: "じ", roman: ["ji", "zi"], korean: ["지"] },
  { kana: "ず", roman: ["zu"], korean: ["즈"] },
  { kana: "ぜ", roman: ["ze"], korean: ["제"] },
  { kana: "ぞ", roman: ["zo"], korean: ["조"] },
  { kana: "だ", roman: ["da"], korean: ["다"] },
  { kana: "ぢ", roman: ["ji", "di"], korean: ["지", "디"] },
  { kana: "づ", roman: ["zu", "du"], korean: ["즈", "두"] },
  { kana: "で", roman: ["de"], korean: ["데"] },
  { kana: "ど", roman: ["do"], korean: ["도"] },
  { kana: "ば", roman: ["ba"], korean: ["바"] },
  { kana: "び", roman: ["bi"], korean: ["비"] },
  { kana: "ぶ", roman: ["bu"], korean: ["부"] },
  { kana: "べ", roman: ["be"], korean: ["베"] },
  { kana: "ぼ", roman: ["bo"], korean: ["보"] }
];

const HANDAKUTEN_SET = [
  { kana: "ぱ", roman: ["pa"], korean: ["파"] },
  { kana: "ぴ", roman: ["pi"], korean: ["피"] },
  { kana: "ぷ", roman: ["pu"], korean: ["푸"] },
  { kana: "ぺ", roman: ["pe"], korean: ["페"] },
  { kana: "ぽ", roman: ["po"], korean: ["포"] }
];

const YOUON_SET = [
  { kana: "きゃ", roman: ["kya"], korean: ["캬"] },
  { kana: "きゅ", roman: ["kyu"], korean: ["큐"] },
  { kana: "きょ", roman: ["kyo"], korean: ["쿄"] },
  { kana: "しゃ", roman: ["sha", "sya"], korean: ["샤"] },
  { kana: "しゅ", roman: ["shu", "syu"], korean: ["슈"] },
  { kana: "しょ", roman: ["sho", "syo"], korean: ["쇼"] },
  { kana: "ちゃ", roman: ["cha", "cya", "tya"], korean: ["차", "챠"] },
  { kana: "ちゅ", roman: ["chu", "cyu", "tyu"], korean: ["추", "츄"] },
  { kana: "ちょ", roman: ["cho", "cyo", "tyo"], korean: ["초", "쵸"] },
  { kana: "にゃ", roman: ["nya"], korean: ["냐"] },
  { kana: "にゅ", roman: ["nyu"], korean: ["뉴"] },
  { kana: "にょ", roman: ["nyo"], korean: ["뇨"] },
  { kana: "ひゃ", roman: ["hya"], korean: ["햐"] },
  { kana: "ひゅ", roman: ["hyu"], korean: ["휴"] },
  { kana: "ひょ", roman: ["hyo"], korean: ["효"] },
  { kana: "みゃ", roman: ["mya"], korean: ["먀"] },
  { kana: "みゅ", roman: ["myu"], korean: ["뮤"] },
  { kana: "みょ", roman: ["myo"], korean: ["묘"] },
  { kana: "りゃ", roman: ["rya"], korean: ["랴"] },
  { kana: "りゅ", roman: ["ryu"], korean: ["류"] },
  { kana: "りょ", roman: ["ryo"], korean: ["료"] }
];

const DAKUTEN_YOUON_SET = [
  { kana: "ぎゃ", roman: ["gya"], korean: ["갸"] },
  { kana: "ぎゅ", roman: ["gyu"], korean: ["규"] },
  { kana: "ぎょ", roman: ["gyo"], korean: ["교"] },
  { kana: "じゃ", roman: ["ja", "jya", "zya"], korean: ["자", "쟈"] },
  { kana: "じゅ", roman: ["ju", "jyu", "zyu"], korean: ["주", "쥬"] },
  { kana: "じょ", roman: ["jo", "jyo", "zyo"], korean: ["조", "죠"] },
  { kana: "びゃ", roman: ["bya"], korean: ["뱌"] },
  { kana: "びゅ", roman: ["byu"], korean: ["뷰"] },
  { kana: "びょ", roman: ["byo"], korean: ["뵤"] }
];

const HANDAKUTEN_YOUON_SET = [
  { kana: "ぴゃ", roman: ["pya"], korean: ["퍄"] },
  { kana: "ぴゅ", roman: ["pyu"], korean: ["퓨"] },
  { kana: "ぴょ", roman: ["pyo"], korean: ["표"] }
];

const SOKUON_SET = [
  { kana: "っか", roman: ["kka"], korean: ["까"] },
  { kana: "っき", roman: ["kki"], korean: ["끼"] },
  { kana: "っく", roman: ["kku"], korean: ["꾸"] },
  { kana: "っけ", roman: ["kke"], korean: ["께"] },
  { kana: "っこ", roman: ["kko"], korean: ["꼬"] },
  { kana: "っさ", roman: ["ssa"], korean: ["싸"] },
  { kana: "っし", roman: ["sshi", "ssi"], korean: ["씨"] },
  { kana: "った", roman: ["tta"], korean: ["따"] },
  { kana: "っち", roman: ["cchi", "tchi"], korean: ["찌"] },
  { kana: "っと", roman: ["tto"], korean: ["또"] }
];

const CHOON_SET = [
  { kana: "ああ", roman: ["aa"], korean: ["아아"] },
  { kana: "いい", roman: ["ii"], korean: ["이이"] },
  { kana: "うう", roman: ["uu"], korean: ["우우"] },
  { kana: "えい", roman: ["ei"], korean: ["에이"] },
  { kana: "ええ", roman: ["ee"], korean: ["에에"] },
  { kana: "おう", roman: ["ou"], korean: ["오우"] },
  { kana: "おお", roman: ["oo"], korean: ["오오"] },
  { kana: "かあ", roman: ["kaa"], korean: ["카아"] },
  { kana: "きい", roman: ["kii"], korean: ["키이"] },
  { kana: "くう", roman: ["kuu"], korean: ["쿠우"] },
  { kana: "けい", roman: ["kei"], korean: ["케이"] },
  { kana: "こう", roman: ["kou"], korean: ["코우"] }
];

const OPTION_CONFIG = {
  dakuten: {
    label: "탁음",
    buttonId: "dakutenToggle",
    count: () => DAKUTEN_SET.length
  },
  handakuten: {
    label: "반탁음",
    buttonId: "handakutenToggle",
    count: () => HANDAKUTEN_SET.length
  },
  youon: {
    label: "요음",
    buttonId: "youonToggle",
    count: (options) => {
      let count = YOUON_SET.length;

      if (options.dakuten) {
        count += DAKUTEN_YOUON_SET.length;
      }

      if (options.handakuten) {
        count += HANDAKUTEN_YOUON_SET.length;
      }

      return count;
    }
  },
  sokuon: {
    label: "촉음",
    buttonId: "sokuonToggle",
    count: () => SOKUON_SET.length
  },
  choon: {
    label: "장음",
    buttonId: "choonToggle",
    count: () => CHOON_SET.length
  }
};

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const submitButton = document.getElementById("submitButton");
const revealButton = document.getElementById("revealButton");
const nextButton = document.getElementById("nextButton");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const kanaDisplay = document.getElementById("kanaDisplay");
const questionHint = document.getElementById("questionHint");
const deckHint = document.getElementById("deckHint");
const feedbackPanel = document.getElementById("feedbackPanel");
const remainingCount = document.getElementById("remainingCount");
const scoreCount = document.getElementById("scoreCount");
const streakCount = document.getElementById("streakCount");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const optionButtons = Object.fromEntries(
  Object.entries(OPTION_CONFIG).map(([key, config]) => [
    key,
    document.getElementById(config.buttonId)
  ])
);

const state = {
  deck: [],
  current: null,
  score: 0,
  streak: 0,
  answered: 0,
  options: {
    dakuten: false,
    handakuten: false,
    youon: false,
    sokuon: false,
    choon: false
  },
  running: false,
  awaitingNext: false,
  autoAdvanceTimer: null
};

function clearAutoAdvanceTimer() {
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }
}

function shuffle(items) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
}

function normalizeInput(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function getQuizPool() {
  const pool = [...HIRAGANA_SET];

  if (state.options.dakuten) {
    pool.push(...DAKUTEN_SET);
  }

  if (state.options.handakuten) {
    pool.push(...HANDAKUTEN_SET);
  }

  if (state.options.youon) {
    pool.push(...YOUON_SET);

    if (state.options.dakuten) {
      pool.push(...DAKUTEN_YOUON_SET);
    }

    if (state.options.handakuten) {
      pool.push(...HANDAKUTEN_YOUON_SET);
    }
  }

  if (state.options.sokuon) {
    pool.push(...SOKUON_SET);
  }

  if (state.options.choon) {
    pool.push(...CHOON_SET);
  }

  return pool;
}

function getTotalQuestionCount() {
  return getQuizPool().length;
}

function getDeckSummary() {
  const summary = ["기본 46자"];

  Object.entries(OPTION_CONFIG).forEach(([key, config]) => {
    if (!state.options[key]) {
      return;
    }

    summary.push(`${config.label} ${config.count(state.options)}자`);
  });

  return `현재 문제풀: ${summary.join(" + ")}`;
}

function getAcceptedAnswers(item) {
  return [...item.roman, ...item.korean].map(normalizeInput);
}

function formatAnswers(item) {
  return `영문: ${item.roman.join(", ")} / 한글: ${item.korean.join(", ")}`;
}

function setFeedback(message, tone = "neutral") {
  feedbackPanel.className = `feedback-panel ${tone}`;
  feedbackPanel.textContent = message;
}

function updateStatus() {
  const totalQuestionCount = getTotalQuestionCount();
  const currentQuestionCountsAsRemaining =
    Boolean(state.current) && !state.awaitingNext ? 1 : 0;

  remainingCount.textContent = String(state.deck.length + currentQuestionCountsAsRemaining);
  scoreCount.textContent = String(state.score);
  streakCount.textContent = String(state.streak);
  progressText.textContent = `${state.answered} / ${totalQuestionCount}`;

  const progressRatio = totalQuestionCount === 0 ? 0 : (state.answered / totalQuestionCount) * 100;
  progressFill.style.width = `${progressRatio}%`;
}

function updateControls() {
  const canAnswer = state.running && Boolean(state.current) && !state.awaitingNext;
  const canMoveNext = state.running && state.awaitingNext;
  const canRestart = state.running || state.answered > 0;

  answerInput.disabled = !canAnswer;
  submitButton.disabled = !canAnswer;
  revealButton.disabled = !canAnswer;
  nextButton.disabled = !canMoveNext;
  restartButton.hidden = !canRestart;
  deckHint.textContent = getDeckSummary();

  Object.entries(OPTION_CONFIG).forEach(([key, config]) => {
    const button = optionButtons[key];
    const enabled = state.options[key];

    button.setAttribute("aria-pressed", String(enabled));
    button.classList.toggle("is-active", enabled);
    button.textContent = `${config.label}: ${enabled ? "ON" : "OFF"}`;
  });
}

function loadNextQuestion() {
  clearAutoAdvanceTimer();

  if (state.deck.length === 0) {
    finishQuiz();
    return;
  }

  state.current = state.deck.pop();
  state.awaitingNext = false;
  kanaDisplay.textContent = state.current.kana;
  questionHint.textContent = "발음을 영어 또는 한글로 입력한 뒤 정답 확인을 누르세요.";
  answerInput.value = "";
  setFeedback("정답을 입력해보세요.", "neutral");
  updateStatus();
  updateControls();
  answerInput.focus();
}

function finishQuiz() {
  const totalQuestionCount = getTotalQuestionCount();

  clearAutoAdvanceTimer();
  state.current = null;
  state.running = false;
  state.awaitingNext = false;
  kanaDisplay.textContent = "끝";
  questionHint.textContent = "모든 문제를 완료했습니다. 다시 섞어서 한 번 더 풀 수 있습니다.";
  answerInput.value = "";
  setFeedback(
    `퀴즈 종료. 총 ${totalQuestionCount}문제 중 ${state.score}개 정답입니다.`,
    "neutral"
  );
  updateStatus();
  updateControls();
}

function startQuiz() {
  clearAutoAdvanceTimer();
  state.deck = shuffle(getQuizPool());
  state.current = null;
  state.score = 0;
  state.streak = 0;
  state.answered = 0;
  state.running = true;
  state.awaitingNext = false;

  loadNextQuestion();
}

function submitAnswer(event) {
  event.preventDefault();

  if (!state.current || state.awaitingNext) {
    return;
  }

  const userAnswer = normalizeInput(answerInput.value);

  if (!userAnswer) {
    setFeedback("입력을 비워둘 수 없습니다. 발음을 적어주세요.", "wrong");
    return;
  }

  const acceptedAnswers = getAcceptedAnswers(state.current);
  const isCorrect = acceptedAnswers.includes(userAnswer);

  state.answered += 1;
  state.awaitingNext = true;

  if (isCorrect) {
    state.score += 1;
    state.streak += 1;
    setFeedback(
      `정답입니다. ${state.current.kana}의 허용 표기는 ${formatAnswers(state.current)} 입니다. 곧 다음 문제로 넘어갑니다.`,
      "correct"
    );
    state.autoAdvanceTimer = window.setTimeout(() => {
      state.autoAdvanceTimer = null;
      loadNextQuestion();
    }, 900);
  } else {
    state.streak = 0;
    setFeedback(
      `오답입니다. ${state.current.kana}의 정답은 ${formatAnswers(state.current)} 입니다.`,
      "wrong"
    );
  }

  updateStatus();
  updateControls();
}

function revealAnswer() {
  if (!state.current || state.awaitingNext) {
    return;
  }

  clearAutoAdvanceTimer();
  state.answered += 1;
  state.streak = 0;
  state.awaitingNext = true;
  answerInput.value = "";

  setFeedback(
    `정답 공개. ${state.current.kana}의 정답은 ${formatAnswers(state.current)} 입니다.`,
    "neutral"
  );

  updateStatus();
  updateControls();
}

function toggleOption(key) {
  const label = OPTION_CONFIG[key].label;

  state.options[key] = !state.options[key];

  if (state.running || state.answered > 0) {
    startQuiz();
    setFeedback(
      `${label}을 ${state.options[key] ? "활성화" : "비활성화"}하고 문제를 다시 섞었습니다.`,
      "neutral"
    );
    return;
  }

  updateStatus();
  updateControls();
  setFeedback(
    `${label}이 ${state.options[key] ? "활성화" : "비활성화"}되었습니다.`,
    "neutral"
  );
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
revealButton.addEventListener("click", revealAnswer);
nextButton.addEventListener("click", loadNextQuestion);
answerForm.addEventListener("submit", submitAnswer);

Object.keys(OPTION_CONFIG).forEach((key) => {
  optionButtons[key].addEventListener("click", () => toggleOption(key));
});

updateStatus();
updateControls();
