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

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const submitButton = document.getElementById("submitButton");
const revealButton = document.getElementById("revealButton");
const nextButton = document.getElementById("nextButton");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const kanaDisplay = document.getElementById("kanaDisplay");
const questionHint = document.getElementById("questionHint");
const feedbackPanel = document.getElementById("feedbackPanel");
const remainingCount = document.getElementById("remainingCount");
const scoreCount = document.getElementById("scoreCount");
const streakCount = document.getElementById("streakCount");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

const state = {
  deck: [],
  current: null,
  score: 0,
  streak: 0,
  answered: 0,
  running: false,
  awaitingNext: false
};

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
  const currentQuestionCountsAsRemaining =
    Boolean(state.current) && !state.awaitingNext ? 1 : 0;

  remainingCount.textContent = String(state.deck.length + currentQuestionCountsAsRemaining);
  scoreCount.textContent = String(state.score);
  streakCount.textContent = String(state.streak);
  progressText.textContent = `${state.answered} / ${HIRAGANA_SET.length}`;

  const progressRatio = (state.answered / HIRAGANA_SET.length) * 100;
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
}

function loadNextQuestion() {
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
  state.current = null;
  state.running = false;
  state.awaitingNext = false;
  kanaDisplay.textContent = "끝";
  questionHint.textContent = "모든 문제를 완료했습니다. 다시 섞어서 한 번 더 풀 수 있습니다.";
  answerInput.value = "";
  setFeedback(
    `퀴즈 종료. 총 ${HIRAGANA_SET.length}문제 중 ${state.score}개 정답입니다.`,
    "neutral"
  );
  updateStatus();
  updateControls();
}

function startQuiz() {
  state.deck = shuffle(HIRAGANA_SET);
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
      `정답입니다. ${state.current.kana}의 허용 표기는 ${formatAnswers(state.current)} 입니다.`,
      "correct"
    );
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

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
revealButton.addEventListener("click", revealAnswer);
nextButton.addEventListener("click", loadNextQuestion);
answerForm.addEventListener("submit", submitAnswer);

updateStatus();
updateControls();
