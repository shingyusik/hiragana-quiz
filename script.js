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

const VOCAB_ITEMS = [
  {
    word: "あさ",
    reading: "asa",
    meaning: "아침",
    example: "あさです。",
    note: "시간 표현의 기본 단어입니다.",
    kana: ["あ", "さ"]
  },
  {
    word: "いえ",
    reading: "ie",
    meaning: "집",
    example: "いえに かえります。",
    note: "장소 표현에서 자주 나옵니다.",
    kana: ["い", "え"]
  },
  {
    word: "うみ",
    reading: "umi",
    meaning: "바다",
    example: "うみが きれいです。",
    note: "형용사 예문과 같이 외우기 좋습니다.",
    kana: ["う", "み"]
  },
  {
    word: "えき",
    reading: "eki",
    meaning: "역",
    example: "えきは どこですか。",
    note: "문법 패턴 `A は どこ ですか`와 잘 붙습니다.",
    kana: ["え", "き"]
  },
  {
    word: "おちゃ",
    reading: "ocha",
    meaning: "차, 녹차",
    accepted: ["차", "녹차"],
    example: "おちゃを のみます。",
    note: "조사 `を`와 같이 복습하기 좋습니다.",
    kana: ["お", "ちゃ"]
  },
  {
    word: "かさ",
    reading: "kasa",
    meaning: "우산",
    example: "かさを もっています。",
    note: "가장 기본적인 생활 단어 중 하나입니다.",
    kana: ["か", "さ"]
  },
  {
    word: "きょう",
    reading: "kyou",
    meaning: "오늘",
    example: "きょうは いそがしいです。",
    note: "요음과 장음 느낌을 같이 익힐 수 있습니다.",
    kana: ["きょ", "う"]
  },
  {
    word: "くつ",
    reading: "kutsu",
    meaning: "신발",
    example: "くつを ぬぎます。",
    note: "`つ` 발음 연습에 좋습니다.",
    kana: ["く", "つ"]
  },
  {
    word: "さかな",
    reading: "sakana",
    meaning: "생선",
    example: "さかなを たべます。",
    note: "명사와 동사 연결 연습용으로 좋습니다.",
    kana: ["さ", "か", "な"]
  },
  {
    word: "しお",
    reading: "shio",
    meaning: "소금",
    example: "しおを すこし いれます。",
    note: "`し` 표기를 같이 익히기 좋습니다.",
    kana: ["し", "お"]
  },
  {
    word: "すし",
    reading: "sushi",
    meaning: "초밥",
    example: "すしが すきです。",
    note: "초급 회화에서 자주 쓰는 대표 단어입니다.",
    kana: ["す", "し"]
  },
  {
    word: "せんせい",
    reading: "sensei",
    meaning: "선생님",
    example: "せんせいは しんせつです。",
    note: "직업/호칭 표현으로 자주 나옵니다.",
    kana: ["せ", "ん"]
  },
  {
    word: "たまご",
    reading: "tamago",
    meaning: "달걀",
    example: "たまごを かいます。",
    note: "식재료 단어장에 자주 들어갑니다.",
    kana: ["た", "ご"]
  },
  {
    word: "ちず",
    reading: "chizu",
    meaning: "지도",
    example: "ちずを みます。",
    note: "`ち`와 `ず`를 같이 복습하기 좋습니다.",
    kana: ["ち", "ず"]
  },
  {
    word: "つき",
    reading: "tsuki",
    meaning: "달",
    example: "つきが きれいです。",
    note: "`tsu` 계열 읽기 훈련용입니다.",
    kana: ["つ", "き"]
  },
  {
    word: "てがみ",
    reading: "tegami",
    meaning: "편지",
    example: "てがみを かきます。",
    note: "동사 `かく`와 잘 묶입니다.",
    kana: ["て", "が", "み"]
  },
  {
    word: "とけい",
    reading: "tokei",
    meaning: "시계",
    example: "とけいを みて ください。",
    note: "시간 표현으로 확장하기 쉽습니다.",
    kana: ["と", "けい"]
  },
  {
    word: "ねこ",
    reading: "neko",
    meaning: "고양이",
    example: "ねこが います。",
    note: "`います` 패턴과 같이 외우기 좋습니다.",
    kana: ["ね", "こ"]
  },
  {
    word: "はな",
    reading: "hana",
    meaning: "꽃",
    example: "はなが きれいです。",
    note: "동음이의어도 있다는 점을 같이 기억하면 좋습니다.",
    kana: ["は", "な"]
  },
  {
    word: "ひと",
    reading: "hito",
    meaning: "사람",
    example: "あの ひとは だれですか。",
    note: "기본 명사 중 사용 빈도가 높습니다.",
    kana: ["ひ", "と"]
  },
  {
    word: "ふね",
    reading: "fune",
    meaning: "배",
    accepted: ["배", "선박"],
    example: "ふねで いきます。",
    note: "`ふ`를 `fu`로 읽는 감각을 익히기 좋습니다.",
    kana: ["ふ", "ね"]
  },
  {
    word: "へや",
    reading: "heya",
    meaning: "방",
    example: "へやが ひろいです。",
    note: "장소 묘사 예문에서 자주 나옵니다.",
    kana: ["へ", "や"]
  },
  {
    word: "ほん",
    reading: "hon",
    meaning: "책",
    example: "ほんを よみます。",
    note: "목적어 조사와 같이 반복하기 좋습니다.",
    kana: ["ほ", "ん"]
  },
  {
    word: "みず",
    reading: "mizu",
    meaning: "물",
    example: "みずを のみます。",
    note: "가장 기본적인 생존 회화 단어입니다.",
    kana: ["み", "ず"]
  },
  {
    word: "やさい",
    reading: "yasai",
    meaning: "채소",
    example: "やさいを たべます。",
    note: "음식 단어 묶음으로 확장 가능합니다.",
    kana: ["や", "さ"]
  },
  {
    word: "ゆき",
    reading: "yuki",
    meaning: "눈",
    example: "ゆきが ふっています。",
    note: "날씨 표현과 함께 외우기 좋습니다.",
    kana: ["ゆ", "き"]
  },
  {
    word: "よる",
    reading: "yoru",
    meaning: "밤",
    example: "よるに べんきょうします。",
    note: "시간대 표현의 기본 단어입니다.",
    kana: ["よ", "る"]
  },
  {
    word: "りんご",
    reading: "ringo",
    meaning: "사과",
    example: "りんごが すきです。",
    note: "초급 단어장에서 매우 자주 나옵니다.",
    kana: ["り", "ん", "ご"]
  },
  {
    word: "れいぞうこ",
    reading: "reizouko",
    meaning: "냉장고",
    example: "れいぞうこに あります。",
    note: "생활 단어로 실전 활용도가 높습니다.",
    kana: ["れ", "い", "ぞ", "う", "こ"]
  },
  {
    word: "ろうか",
    reading: "rouka",
    meaning: "복도",
    example: "ろうかを あるきます。",
    note: "장음 `ou` 패턴을 같이 익힐 수 있습니다.",
    kana: ["ろ", "う", "か"]
  },
  {
    word: "おんがく",
    reading: "ongaku",
    meaning: "음악",
    example: "おんがくを ききます。",
    note: "`ん` 다음 자음 연결을 익히기 좋습니다.",
    kana: ["お", "ん", "が", "く"]
  },
  {
    word: "コーヒー",
    reading: "koohii",
    meaning: "커피",
    example: "コーヒーを のみます。",
    note: "카타카나 단어의 대표 예시입니다.",
    kana: ["コ", "ヒ"]
  },
  {
    word: "ケーキ",
    reading: "keeki",
    meaning: "케이크",
    example: "ケーキを たべます。",
    note: "장음 카타카나 단어입니다.",
    kana: ["ケ", "キ"]
  },
  {
    word: "ホテル",
    reading: "hoteru",
    meaning: "호텔",
    example: "ホテルに とまります。",
    note: "장소 표현과 같이 쓰기 좋습니다.",
    kana: ["ホ", "テ", "ル"]
  }
];

const KATAKANA_EXAMPLES = [
  { word: "アイス", meaning: "아이스크림", kana: ["ア", "イ", "ス"] },
  { word: "カメラ", meaning: "카메라", kana: ["カ", "メ", "ラ"] },
  { word: "ケーキ", meaning: "케이크", kana: ["ケ", "キ"] },
  { word: "コーヒー", meaning: "커피", kana: ["コ", "ヒ"] },
  { word: "テレビ", meaning: "텔레비전", kana: ["テ", "レ"] },
  { word: "ホテル", meaning: "호텔", kana: ["ホ", "テ", "ル"] },
  { word: "バス", meaning: "버스", kana: ["バ", "ス"] },
  { word: "パン", meaning: "빵", kana: ["パ", "ン"] },
  { word: "ヨガ", meaning: "요가", kana: ["ヨ", "ガ"] },
  { word: "レストラン", meaning: "레스토랑", kana: ["レ", "ト", "ラ", "ン"] }
];

const GRAMMAR_ITEMS = [
  {
    pattern: "A は B です",
    meaning: "A는 B입니다",
    note: "명사문 기본형입니다. 자기소개, 신분 설명에서 가장 먼저 씁니다.",
    example: "わたし は がくせい です。"
  },
  {
    pattern: "A は B では ありません",
    meaning: "A는 B가 아닙니다",
    note: "정중한 부정형입니다. 처음 배우는 문장 부정에 가장 적합합니다.",
    example: "ここ は びょういん では ありません。"
  },
  {
    pattern: "A を Vます",
    meaning: "A를 V합니다",
    note: "목적어 조사 `を`를 익히는 핵심 패턴입니다.",
    example: "みず を のみます。"
  },
  {
    pattern: "A に いきます / きます",
    meaning: "A에 갑니다 / 옵니다",
    note: "방향 또는 도착 지점을 나타낼 때 씁니다.",
    example: "えき に いきます。"
  },
  {
    pattern: "A が あります / います",
    meaning: "A가 있습니다",
    note: "사물은 `あります`, 사람과 동물은 `います`를 씁니다.",
    example: "へや に ねこ が います。"
  },
  {
    pattern: "A は どこ ですか",
    meaning: "A는 어디입니까?",
    note: "장소를 묻는 가장 기본적인 표현입니다.",
    example: "えき は どこ ですか。"
  }
];

const OPTION_CONFIG = {
  dakuten: { label: "탁음", buttonId: "dakutenToggle" },
  handakuten: { label: "반탁음", buttonId: "handakutenToggle" },
  youon: { label: "요음", buttonId: "youonToggle" },
  sokuon: { label: "촉음", buttonId: "sokuonToggle" },
  choon: { label: "장음", buttonId: "choonToggle" }
};

const CATEGORY_CONFIG = {
  hiragana: {
    label: "히라가나",
    description: "기본 문자와 확장 문자를 켜고 끄면서 읽기와 입력형 퀴즈를 연습합니다.",
    type: "kana"
  },
  katakana: {
    label: "카타카나",
    description: "외래어 중심 문자를 학습하고 같은 구조의 입력형 퀴즈로 확인합니다.",
    type: "kana"
  },
  vocab: {
    label: "단어",
    description: "읽기, 뜻, 예문을 보고 외운 뒤 뜻 맞히기 퀴즈로 확인합니다.",
    type: "vocab"
  },
  grammar: {
    label: "문법",
    description: "기초 문형의 의미와 예문을 먼저 보고 객관식 퀴즈로 빠르게 점검합니다.",
    type: "grammar"
  }
};

const heroContext = document.getElementById("heroContext");
const optionToolbar = document.getElementById("optionToolbar");
const mainCardLabel = document.getElementById("mainCardLabel");
const actionCardLabel = document.getElementById("actionCardLabel");
const mainPanel = document.getElementById("mainPanel");
const actionPanel = document.getElementById("actionPanel");
const statusPanel = document.getElementById("statusPanel");
const notePanel = document.getElementById("notePanel");

const categoryButtons = {
  hiragana: document.getElementById("categoryHiragana"),
  katakana: document.getElementById("categoryKatakana"),
  vocab: document.getElementById("categoryVocab"),
  grammar: document.getElementById("categoryGrammar")
};

const modeButtons = {
  learn: document.getElementById("modeLearn"),
  quiz: document.getElementById("modeQuiz")
};

const optionButtons = Object.fromEntries(
  Object.entries(OPTION_CONFIG).map(([key, config]) => [
    key,
    document.getElementById(config.buttonId)
  ])
);

function createDefaultKanaOptions() {
  return {
    dakuten: false,
    handakuten: false,
    youon: false,
    sokuon: false,
    choon: false
  };
}

function createEmptyQuizState() {
  return {
    running: false,
    deck: [],
    current: null,
    answered: 0,
    score: 0,
    streak: 0,
    awaitingNext: false,
    autoAdvanceTimer: null,
    message: "",
    tone: "neutral"
  };
}

const state = {
  category: "hiragana",
  mode: "learn",
  learnIndexByCategory: {
    hiragana: 0,
    katakana: 0,
    vocab: 0,
    grammar: 0
  },
  categoryOptions: {
    hiragana: createDefaultKanaOptions(),
    katakana: createDefaultKanaOptions()
  },
  quiz: createEmptyQuizState()
};

function clearAutoAdvanceTimer() {
  if (state.quiz.autoAdvanceTimer) {
    window.clearTimeout(state.quiz.autoAdvanceTimer);
    state.quiz.autoAdvanceTimer = null;
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
  return value.trim().toLowerCase().replace(/[\s.,/·:;!?-]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toKatakana(text) {
  return text.replace(/[\u3041-\u3096]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) + 0x60)
  );
}

function mapKanaScript(items) {
  return items.map((item) => ({
    ...item,
    kana: toKatakana(item.kana)
  }));
}

const KANA_SETS = {
  hiragana: {
    base: HIRAGANA_SET,
    dakuten: DAKUTEN_SET,
    handakuten: HANDAKUTEN_SET,
    youon: YOUON_SET,
    dakutenYouon: DAKUTEN_YOUON_SET,
    handakutenYouon: HANDAKUTEN_YOUON_SET,
    sokuon: SOKUON_SET,
    choon: CHOON_SET
  },
  katakana: {
    base: mapKanaScript(HIRAGANA_SET),
    dakuten: mapKanaScript(DAKUTEN_SET),
    handakuten: mapKanaScript(HANDAKUTEN_SET),
    youon: mapKanaScript(YOUON_SET),
    dakutenYouon: mapKanaScript(DAKUTEN_YOUON_SET),
    handakutenYouon: mapKanaScript(HANDAKUTEN_YOUON_SET),
    sokuon: mapKanaScript(SOKUON_SET),
    choon: mapKanaScript(CHOON_SET)
  }
};

function getQuizIdleMessage() {
  return `${CATEGORY_CONFIG[state.category].label} 퀴즈를 시작하면 문제가 랜덤으로 출제됩니다.`;
}

function resetQuiz(customMessage) {
  clearAutoAdvanceTimer();
  state.quiz = createEmptyQuizState();
  state.quiz.message = customMessage || getQuizIdleMessage();
}

function getCategoryItems(category) {
  if (category === "hiragana" || category === "katakana") {
    const sets = KANA_SETS[category];
    const options = state.categoryOptions[category];
    const pool = [...sets.base];

    if (options.dakuten) {
      pool.push(...sets.dakuten);
    }

    if (options.handakuten) {
      pool.push(...sets.handakuten);
    }

    if (options.youon) {
      pool.push(...sets.youon);

      if (options.dakuten) {
        pool.push(...sets.dakutenYouon);
      }

      if (options.handakuten) {
        pool.push(...sets.handakutenYouon);
      }
    }

    if (options.sokuon) {
      pool.push(...sets.sokuon);
    }

    if (options.choon) {
      pool.push(...sets.choon);
    }

    return pool;
  }

  if (category === "vocab") {
    return VOCAB_ITEMS;
  }

  return GRAMMAR_ITEMS;
}

function getKanaDeckSummary(category) {
  const options = state.categoryOptions[category];
  const summary = ["기본 46자"];

  Object.entries(OPTION_CONFIG).forEach(([key, config]) => {
    if (options[key]) {
      summary.push(config.label);
    }
  });

  return summary.join(" + ");
}

function ensureLearnIndexInRange(category) {
  const items = getCategoryItems(category);
  const maxIndex = Math.max(items.length - 1, 0);
  const currentIndex = state.learnIndexByCategory[category] ?? 0;
  state.learnIndexByCategory[category] = Math.min(Math.max(currentIndex, 0), maxIndex);
}

function getCurrentLearnItem() {
  const items = getCategoryItems(state.category);
  const index = state.learnIndexByCategory[state.category];
  return items[index];
}

function getAcceptedKanaAnswers(item) {
  return [...item.roman, ...item.korean];
}

function getAcceptedVocabAnswers(item) {
  if (item.accepted) {
    return item.accepted;
  }

  return item.meaning
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function buildQuizQuestion(item) {
  if (CATEGORY_CONFIG[state.category].type === "kana") {
    return {
      kind: "text",
      item,
      prompt: item.kana,
      promptClass: "",
      helper: "발음을 영어 또는 한글로 입력하세요.",
      placeholder: "예: shi / 시",
      accepted: getAcceptedKanaAnswers(item)
    };
  }

  if (state.category === "vocab") {
    return {
      kind: "text",
      item,
      prompt: item.word,
      promptClass: "is-text",
      helper: "뜻을 한국어로 입력하세요.",
      placeholder: "예: 우산",
      accepted: getAcceptedVocabAnswers(item)
    };
  }

  const distractors = shuffle(
    GRAMMAR_ITEMS.filter((candidate) => candidate.pattern !== item.pattern).map(
      (candidate) => candidate.meaning
    )
  ).slice(0, 3);

  return {
    kind: "choice",
    item,
    prompt: item.pattern,
    promptClass: "is-text",
    helper: item.example,
    choices: shuffle([item.meaning, ...distractors]),
    accepted: item.meaning
  };
}

function formatQuestionAnswer(question) {
  if (!question) {
    return "";
  }

  if (CATEGORY_CONFIG[state.category].type === "kana") {
    return `${question.item.kana}의 정답은 영문 ${question.item.roman.join(", ")} / 한글 ${question.item.korean.join(", ")} 입니다.`;
  }

  if (state.category === "vocab") {
    return `${question.item.word}의 뜻은 ${question.item.meaning}이고 읽기는 ${question.item.reading}입니다.`;
  }

  return `${question.item.pattern}의 뜻은 ${question.item.meaning}입니다. ${question.item.note}`;
}

function setQuizMessage(message, tone = "neutral") {
  state.quiz.message = message;
  state.quiz.tone = tone;
}

function loadNextQuestion() {
  clearAutoAdvanceTimer();

  if (state.quiz.deck.length === 0) {
    finishQuiz();
    return;
  }

  const rawItem = state.quiz.deck.pop();
  state.quiz.current = buildQuizQuestion(rawItem);
  state.quiz.awaitingNext = false;
  setQuizMessage(state.quiz.current.helper, "neutral");
  renderApp();
  focusAnswerInput();
}

function startQuiz() {
  const items = shuffle(getCategoryItems(state.category));

  if (items.length === 0) {
    return;
  }

  resetQuiz();
  state.quiz.running = true;
  state.quiz.deck = items;
  loadNextQuestion();
}

function finishQuiz() {
  const total = state.quiz.answered;
  clearAutoAdvanceTimer();
  state.quiz.running = false;
  state.quiz.current = null;
  state.quiz.awaitingNext = false;
  setQuizMessage(`퀴즈 종료. 총 ${total}문제 중 ${state.quiz.score}개 정답입니다.`, "neutral");
  renderApp();
}

function submitTextAnswer(value) {
  const question = state.quiz.current;

  if (!question || state.quiz.awaitingNext) {
    return;
  }

  const normalizedAnswer = normalizeInput(value);

  if (!normalizedAnswer) {
    setQuizMessage("입력을 비워둘 수 없습니다. 답을 적어주세요.", "wrong");
    renderApp();
    focusAnswerInput();
    return;
  }

  const isCorrect = question.accepted.some(
    (candidate) => normalizeInput(candidate) === normalizedAnswer
  );

  state.quiz.answered += 1;
  state.quiz.awaitingNext = true;

  if (isCorrect) {
    state.quiz.score += 1;
    state.quiz.streak += 1;
    setQuizMessage(`정답입니다. ${formatQuestionAnswer(question)}`, "correct");
    state.quiz.autoAdvanceTimer = window.setTimeout(() => {
      state.quiz.autoAdvanceTimer = null;
      loadNextQuestion();
    }, 900);
  } else {
    state.quiz.streak = 0;
    setQuizMessage(`오답입니다. ${formatQuestionAnswer(question)}`, "wrong");
  }

  renderApp();
}

function submitChoiceAnswer(choice) {
  const question = state.quiz.current;

  if (!question || state.quiz.awaitingNext) {
    return;
  }

  const isCorrect = choice === question.accepted;

  state.quiz.answered += 1;
  state.quiz.awaitingNext = true;

  if (isCorrect) {
    state.quiz.score += 1;
    state.quiz.streak += 1;
    setQuizMessage(`정답입니다. ${formatQuestionAnswer(question)}`, "correct");
    state.quiz.autoAdvanceTimer = window.setTimeout(() => {
      state.quiz.autoAdvanceTimer = null;
      loadNextQuestion();
    }, 1000);
  } else {
    state.quiz.streak = 0;
    setQuizMessage(`오답입니다. ${formatQuestionAnswer(question)}`, "wrong");
  }

  renderApp();
}

function revealAnswer() {
  const question = state.quiz.current;

  if (!question || state.quiz.awaitingNext) {
    return;
  }

  clearAutoAdvanceTimer();
  state.quiz.answered += 1;
  state.quiz.streak = 0;
  state.quiz.awaitingNext = true;
  setQuizMessage(`정답 공개. ${formatQuestionAnswer(question)}`, "neutral");
  renderApp();
}

function focusAnswerInput() {
  const input = document.getElementById("quizAnswerInput");

  if (input && !input.disabled) {
    input.focus();
  }
}

function setCategory(category) {
  if (state.category === category) {
    return;
  }

  state.category = category;
  ensureLearnIndexInRange(category);
  resetQuiz(`${CATEGORY_CONFIG[category].label}로 이동했습니다. 퀴즈는 새로 시작됩니다.`);
  renderApp();
}

function setMode(mode) {
  if (state.mode === mode) {
    return;
  }

  state.mode = mode;
  resetQuiz();
  renderApp();
}

function moveLearnIndex(direction) {
  const items = getCategoryItems(state.category);

  if (items.length === 0) {
    return;
  }

  const currentIndex = state.learnIndexByCategory[state.category];
  const nextIndex = (currentIndex + direction + items.length) % items.length;
  state.learnIndexByCategory[state.category] = nextIndex;
  renderApp();
}

function randomizeLearnIndex() {
  const items = getCategoryItems(state.category);

  if (items.length === 0) {
    return;
  }

  state.learnIndexByCategory[state.category] = Math.floor(Math.random() * items.length);
  renderApp();
}

function toggleKanaOption(key) {
  if (state.category !== "hiragana") {
    return;
  }

  state.categoryOptions[state.category][key] = !state.categoryOptions[state.category][key];
  ensureLearnIndexInRange(state.category);
  resetQuiz("출제 범위를 변경했습니다. 퀴즈는 다시 시작됩니다.");
  renderApp();
}

function renderHeroContext() {
  let context = CATEGORY_CONFIG[state.category].description;

  if (state.category === "hiragana") {
    context += ` 현재 범위: ${getKanaDeckSummary(state.category)}.`;
  }

  context += ` 지금은 ${state.mode === "learn" ? "학습" : "퀴즈"} 모드입니다.`;
  heroContext.textContent = context;
}

function renderStaticUi() {
  Object.entries(categoryButtons).forEach(([key, button]) => {
    const isActive = state.category === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  Object.entries(modeButtons).forEach(([key, button]) => {
    const isActive = state.mode === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  const showOptionToolbar = state.category === "hiragana";
  optionToolbar.hidden = !showOptionToolbar;
  optionToolbar.style.display = showOptionToolbar ? "flex" : "none";

  if (showOptionToolbar) {
    Object.entries(OPTION_CONFIG).forEach(([key, config]) => {
      const button = optionButtons[key];
      const enabled = state.categoryOptions[state.category][key];
      button.classList.toggle("is-active", enabled);
      button.setAttribute("aria-pressed", String(enabled));
      button.textContent = `${config.label}: ${enabled ? "ON" : "OFF"}`;
    });
  }

  renderHeroContext();
}

function renderKanaLearn(item) {
  const relatedItems =
    state.category === "hiragana"
      ? VOCAB_ITEMS.filter(
          (vocab) => vocab.word.includes(item.kana) || vocab.kana.includes(item.kana)
        ).slice(0, 3)
      : KATAKANA_EXAMPLES.filter(
          (example) => example.word.includes(item.kana) || example.kana.includes(item.kana)
        ).slice(0, 3);

  const relatedMarkup =
    relatedItems.length > 0
      ? `
        <div class="info-panel">
          <h3 class="stage-heading">연결 예시</h3>
          <p class="stage-copy">해당 문자가 포함된 단어나 외래어 예시를 같이 보세요.</p>
          <div class="tag-list">
            ${relatedItems
              .map(
                (example) =>
                  `<span class="tag-chip">${escapeHtml(example.word)} · ${escapeHtml(example.meaning)}</span>`
              )
              .join("")}
          </div>
        </div>
      `
      : `
        <div class="info-panel">
          <h3 class="stage-heading">학습 포인트</h3>
          <p class="stage-copy">이 문자는 발음과 허용 입력 표기를 먼저 익힌 뒤, 바로 퀴즈에서 입력해보는 방식이 가장 효율적입니다.</p>
        </div>
      `;

  return `
    <div class="learn-stage">
      <div>
        <h2 class="stage-heading">${CATEGORY_CONFIG[state.category].label} 문자 학습</h2>
        <p class="stage-copy">현재 선택한 문자 범위를 기준으로 한 글자씩 집중해서 외웁니다.</p>
      </div>
      <div class="symbol-frame">
        <div class="learn-symbol">${escapeHtml(item.kana)}</div>
      </div>
      <div class="meta-strip">
        <span class="meta-pill">영문 ${escapeHtml(item.roman.join(", "))}</span>
        <span class="meta-pill">한글 ${escapeHtml(item.korean.join(", "))}</span>
      </div>
      ${relatedMarkup}
    </div>
  `;
}

function renderVocabLearn(item) {
  return `
    <div class="learn-stage">
      <div>
        <h2 class="stage-heading">단어 학습</h2>
        <p class="stage-copy">읽기, 뜻, 예문을 한 묶음으로 익힌 뒤 뜻 맞히기 퀴즈로 넘어가세요.</p>
      </div>
      <div class="symbol-frame">
        <div class="prompt-main is-text">${escapeHtml(item.word)}</div>
      </div>
      <div class="meta-strip">
        <span class="meta-pill">읽기 ${escapeHtml(item.reading)}</span>
        <span class="meta-pill">뜻 ${escapeHtml(item.meaning)}</span>
      </div>
      <div class="info-panel">
        <h3 class="stage-heading">예문과 메모</h3>
        <p class="stage-copy">${escapeHtml(item.example)}</p>
        <p class="helper-copy">${escapeHtml(item.note)}</p>
        <div class="tag-list">
          ${item.kana.map((kana) => `<span class="tag-chip">${escapeHtml(kana)}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderGrammarLearn(item) {
  return `
    <div class="learn-stage">
      <div>
        <h2 class="stage-heading">문법 학습</h2>
        <p class="stage-copy">문형의 의미를 먼저 잡고 예문으로 쓰임을 확인한 다음 객관식 퀴즈로 검증합니다.</p>
      </div>
      <div class="symbol-frame">
        <div class="prompt-main is-text">${escapeHtml(item.pattern)}</div>
      </div>
      <div class="meta-strip">
        <span class="meta-pill">의미 ${escapeHtml(item.meaning)}</span>
      </div>
      <div class="info-panel">
        <h3 class="stage-heading">핵심 설명</h3>
        <p class="stage-copy">${escapeHtml(item.note)}</p>
        <p class="helper-copy">${escapeHtml(item.example)}</p>
      </div>
    </div>
  `;
}

function renderLearnMainPanel() {
  const item = getCurrentLearnItem();

  if (!item) {
    return '<div class="empty-card">표시할 학습 항목이 없습니다.</div>';
  }

  if (CATEGORY_CONFIG[state.category].type === "kana") {
    return renderKanaLearn(item);
  }

  if (state.category === "vocab") {
    return renderVocabLearn(item);
  }

  return renderGrammarLearn(item);
}

function renderLearnActionPanel() {
  const items = getCategoryItems(state.category);
  const currentIndex = state.learnIndexByCategory[state.category] + 1;
  const item = getCurrentLearnItem();
  const detail =
    state.category === "hiragana"
      ? `현재 범위는 ${getKanaDeckSummary(state.category)}이며 총 ${items.length}문자가 포함됩니다.`
      : `현재 항목의 핵심은 ${
          state.category === "katakana"
            ? "외래어 예시와 함께 문자를 모양째 익히는 것"
            : state.category === "vocab"
              ? "뜻과 읽기를 같이 묶어 기억하는 것"
              : "문형의 의미와 쓰임을 동시에 익히는 것"
        }입니다.`;

  const currentTitle =
    state.category === "grammar"
      ? item.pattern
      : item.word || item.kana;

  return `
    <div class="action-stack">
      <div class="info-panel">
        <h3 class="stage-heading">현재 포커스</h3>
        <p class="stage-copy">${escapeHtml(currentTitle)}</p>
        <p class="helper-copy">${escapeHtml(detail)}</p>
      </div>
      <div class="info-panel">
        <h3 class="stage-heading">학습 이동</h3>
        <p class="helper-copy">이전/다음으로 넘기거나 랜덤으로 섞어서 훑을 수 있습니다.</p>
        <div class="action-row">
          <button class="ghost-button" type="button" data-action="prev-learn">이전</button>
          <button class="primary-button" type="button" data-action="next-learn">다음</button>
          <button class="ghost-button" type="button" data-action="random-learn">랜덤</button>
          <button class="ghost-button" type="button" data-action="go-quiz">퀴즈로 전환</button>
        </div>
      </div>
      <div class="feedback-panel neutral">
        ${currentIndex} / ${items.length}번째 항목입니다.
      </div>
    </div>
  `;
}

function renderQuizMainPanel() {
  const question = state.quiz.current;

  if (!state.quiz.running && !question) {
    return `
      <div class="quiz-stage">
        <div>
          <h2 class="stage-heading">${CATEGORY_CONFIG[state.category].label} 퀴즈 준비</h2>
          <p class="stage-copy">${escapeHtml(getQuizIdleMessage())}</p>
        </div>
        <div class="prompt-frame">
          <div class="prompt-main is-text">Start</div>
        </div>
        <div class="info-panel">
          <h3 class="stage-heading">출제 방식</h3>
          <p class="stage-copy">${escapeHtml(CATEGORY_CONFIG[state.category].description)}</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="quiz-stage">
      <div>
        <h2 class="stage-heading">${CATEGORY_CONFIG[state.category].label} 퀴즈</h2>
        <p class="stage-copy">${escapeHtml(question.helper)}</p>
      </div>
      <div class="prompt-frame">
        <div class="${CATEGORY_CONFIG[state.category].type === "kana" ? "quiz-symbol" : "prompt-main"} ${escapeHtml(question.promptClass)}">
          ${escapeHtml(question.prompt)}
        </div>
      </div>
      <div class="info-panel">
        <h3 class="stage-heading">문제 힌트</h3>
        <p class="stage-copy">${escapeHtml(question.helper)}</p>
        ${
          question.kind === "choice"
            ? `<p class="helper-copy">${escapeHtml(question.item.example)}</p>`
            : ""
        }
      </div>
    </div>
  `;
}

function renderQuizActionPanel() {
  const question = state.quiz.current;

  if (!state.quiz.running && !question) {
    return `
      <div class="action-stack">
        <div class="info-panel">
          <h3 class="stage-heading">퀴즈 시작</h3>
          <p class="stage-copy">현재 과목의 문제를 섞어서 순서대로 출제합니다.</p>
          <div class="action-row">
            <button class="primary-button" type="button" data-action="start-quiz">퀴즈 시작</button>
          </div>
        </div>
        <div class="feedback-panel ${escapeHtml(state.quiz.tone)}">
          ${escapeHtml(state.quiz.message)}
        </div>
      </div>
    `;
  }

  if (question.kind === "text") {
    return `
      <div class="action-stack">
        <form id="quizAnswerForm" class="action-form" autocomplete="off">
          <input
            id="quizAnswerInput"
            class="answer-input"
            type="text"
            name="answer"
            placeholder="${escapeHtml(question.placeholder)}"
            ${state.quiz.awaitingNext ? "disabled" : ""}
          />
          <div class="action-row">
            <button class="primary-button" type="submit" ${state.quiz.awaitingNext ? "disabled" : ""}>
              정답 확인
            </button>
            <button class="ghost-button" type="button" data-action="reveal-answer" ${
              state.quiz.awaitingNext ? "disabled" : ""
            }>
              정답 보기
            </button>
            <button class="ghost-button" type="button" data-action="next-question" ${
              state.quiz.awaitingNext ? "" : "disabled"
            }>
              다음 문제
            </button>
            <button class="ghost-button" type="button" data-action="restart-quiz">다시 섞기</button>
          </div>
        </form>
        <div class="feedback-panel ${escapeHtml(state.quiz.tone)}">
          ${escapeHtml(state.quiz.message)}
        </div>
      </div>
    `;
  }

  return `
    <div class="action-stack">
      <div class="info-panel">
        <h3 class="stage-heading">뜻 고르기</h3>
        <div class="choice-list">
          ${question.choices
            .map(
              (choice) => `
                <button
                  class="choice-button"
                  type="button"
                  data-choice="${escapeHtml(choice)}"
                  ${state.quiz.awaitingNext ? "disabled" : ""}
                >
                  ${escapeHtml(choice)}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="action-row">
        <button class="ghost-button" type="button" data-action="reveal-answer" ${
          state.quiz.awaitingNext ? "disabled" : ""
        }>
          정답 보기
        </button>
        <button class="ghost-button" type="button" data-action="next-question" ${
          state.quiz.awaitingNext ? "" : "disabled"
        }>
          다음 문제
        </button>
        <button class="ghost-button" type="button" data-action="restart-quiz">다시 섞기</button>
      </div>
      <div class="feedback-panel ${escapeHtml(state.quiz.tone)}">
        ${escapeHtml(state.quiz.message)}
      </div>
    </div>
  `;
}

function renderMainPanel() {
  mainCardLabel.textContent = `${CATEGORY_CONFIG[state.category].label} ${state.mode === "learn" ? "학습" : "퀴즈"}`;
  actionCardLabel.textContent =
    state.mode === "learn"
      ? "학습 컨트롤"
      : state.category === "grammar"
        ? "문항 선택"
        : "정답 입력";

  mainPanel.innerHTML = state.mode === "learn" ? renderLearnMainPanel() : renderQuizMainPanel();
  actionPanel.innerHTML = state.mode === "learn" ? renderLearnActionPanel() : renderQuizActionPanel();
}

function renderStatusPanel() {
  const items = getCategoryItems(state.category);

  if (state.mode === "learn") {
    const currentIndex = items.length === 0 ? 0 : state.learnIndexByCategory[state.category] + 1;
    const thirdStat =
      state.category === "hiragana"
        ? getKanaDeckSummary(state.category)
        : state.category === "katakana"
          ? "기본 카타카나"
        : state.category === "vocab"
          ? "읽기·뜻·예문"
          : "문형·의미·예문";

    statusPanel.innerHTML = `
      <div class="status-grid">
        <div class="stat-item">
          <span class="stat-name">총 항목</span>
          <strong>${items.length}</strong>
        </div>
        <div class="stat-item">
          <span class="stat-name">현재 위치</span>
          <strong>${currentIndex}</strong>
        </div>
        <div class="stat-item">
          <span class="stat-name">학습 포커스</span>
          <strong class="stat-copy">${escapeHtml(thirdStat)}</strong>
        </div>
      </div>
      <div class="progress-area">
        <div class="progress-meta">
          <span>학습 진행</span>
          <span>${currentIndex} / ${items.length}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${items.length === 0 ? 0 : (currentIndex / items.length) * 100}%"></div>
        </div>
      </div>
    `;
    return;
  }

  const remainingCount =
    state.quiz.running && state.quiz.current && !state.quiz.awaitingNext
      ? state.quiz.deck.length + 1
      : state.quiz.deck.length;
  const totalCount = items.length;
  const progressRatio = totalCount === 0 ? 0 : (state.quiz.answered / totalCount) * 100;

  statusPanel.innerHTML = `
    <div class="status-grid">
      <div class="stat-item">
        <span class="stat-name">남은 문제</span>
        <strong>${remainingCount}</strong>
      </div>
      <div class="stat-item">
        <span class="stat-name">정답 수</span>
        <strong>${state.quiz.score}</strong>
      </div>
      <div class="stat-item">
        <span class="stat-name">연속 정답</span>
        <strong>${state.quiz.streak}</strong>
      </div>
    </div>
    <div class="progress-area">
      <div class="progress-meta">
        <span>퀴즈 진행</span>
        <span>${state.quiz.answered} / ${totalCount}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progressRatio}%"></div>
      </div>
    </div>
  `;
}

function getGuideItems() {
  if (state.category === "hiragana") {
    return state.mode === "learn"
      ? [
          "기본 46자를 먼저 훑고, 필요할 때만 탁음/요음/촉음을 켜는 편이 효율적입니다.",
          "영문 표기와 한글 표기를 같이 읽어두면 퀴즈 입력 허용 범위가 넓어집니다.",
          "비슷한 글자 `さ/き`, `ぬ/め`, `れ/ね`를 따로 묶어서 반복해보세요."
        ]
      : [
          "정답은 영문과 한글 둘 다 인정됩니다.",
          "오답이 난 글자는 학습 모드에서 다시 보고 바로 재도전하는 흐름이 좋습니다.",
          "확장 문자 범위를 바꾸면 퀴즈가 새로 초기화됩니다."
        ];
  }

  if (state.category === "katakana") {
    return state.mode === "learn"
      ? [
          "카타카나는 외래어, 브랜드명, 의성어에 자주 쓰입니다.",
          "히라가나와 비슷해 보이지만 획 느낌이 다르니 모양 자체로 구분하세요.",
          "예시 외래어를 같이 보면 장음과 탁음 기억이 훨씬 쉬워집니다."
        ]
      : [
          "카타카나도 히라가나와 같은 방식으로 발음을 입력합니다.",
          "외래어 단어를 떠올리면서 읽으면 속도가 빨라집니다.",
          "장음이 켜져 있을 때는 `コーヒー` 같은 패턴을 같이 의식하세요."
        ];
  }

  if (state.category === "vocab") {
    return state.mode === "learn"
      ? [
          "단어는 `표기 + 읽기 + 뜻 + 예문`을 한 묶음으로 외우는 편이 오래 갑니다.",
          "뜻만 보지 말고 예문 속 조사까지 같이 보면 문법과 연결됩니다.",
          "히라가나 단어와 카타카나 단어를 함께 보는 것이 실제 읽기 감각에 좋습니다."
        ]
      : [
          "단어 퀴즈는 일본어 단어를 보고 한국어 뜻을 맞히는 방식입니다.",
          "뜻이 길거나 쉼표가 있는 경우 대표 의미만 맞혀도 통과하도록 일부 허용했습니다.",
          "정답을 본 뒤에는 읽기까지 소리 내서 같이 확인하는 편이 좋습니다."
        ];
  }

  return state.mode === "learn"
    ? [
        "문법은 정의만 외우지 말고 예문과 함께 묶어서 익히세요.",
        "조사와 동사 위치를 눈으로 먼저 익히고, 의미를 한국어로 정리하면 좋습니다.",
        "기초 문형은 단어 학습과 같이 반복할 때 훨씬 빨리 체화됩니다."
      ]
    : [
        "문법 퀴즈는 자유입력보다 객관식이 더 정확하게 의미 구분을 확인합니다.",
        "틀린 선택지는 비슷한 뜻이므로 왜 다른지 한 번 더 비교해보는 것이 중요합니다.",
        "예문을 같이 읽어보고 다시 학습 탭으로 돌아가면 정착 속도가 빨라집니다."
      ];
}

function renderNotePanel() {
  const items = getGuideItems();

  notePanel.innerHTML = `
    <div class="note-stack">
      <div class="note-block">
        <p class="note-copy">현재 과목과 모드에 맞는 학습 팁입니다.</p>
        <ul class="note-list">
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function renderApp() {
  ensureLearnIndexInRange(state.category);
  renderStaticUi();
  renderMainPanel();
  renderStatusPanel();
  renderNotePanel();
}

function handleActionClick(event) {
  const choiceButton = event.target.closest("[data-choice]");

  if (choiceButton) {
    submitChoiceAnswer(choiceButton.dataset.choice);
    return;
  }

  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const action = actionButton.dataset.action;

  if (action === "prev-learn") {
    moveLearnIndex(-1);
    return;
  }

  if (action === "next-learn") {
    moveLearnIndex(1);
    return;
  }

  if (action === "random-learn") {
    randomizeLearnIndex();
    return;
  }

  if (action === "go-quiz") {
    setMode("quiz");
    return;
  }

  if (action === "start-quiz") {
    startQuiz();
    return;
  }

  if (action === "restart-quiz") {
    startQuiz();
    return;
  }

  if (action === "reveal-answer") {
    revealAnswer();
    return;
  }

  if (action === "next-question") {
    loadNextQuestion();
  }
}

function handleActionSubmit(event) {
  if (event.target.id !== "quizAnswerForm") {
    return;
  }

  event.preventDefault();
  const formData = new FormData(event.target);
  submitTextAnswer(String(formData.get("answer") || ""));
}

Object.entries(categoryButtons).forEach(([key, button]) => {
  button.addEventListener("click", () => setCategory(key));
});

Object.entries(modeButtons).forEach(([key, button]) => {
  button.addEventListener("click", () => setMode(key));
});

Object.keys(OPTION_CONFIG).forEach((key) => {
  optionButtons[key].addEventListener("click", () => toggleKanaOption(key));
});

actionPanel.addEventListener("click", handleActionClick);
actionPanel.addEventListener("submit", handleActionSubmit);

resetQuiz();
renderApp();
