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

const VOCAB_GROUP_CONFIG = {
  all: {
    label: "전체",
    description: "모든 단어를 한 번에 섞어서 학습합니다."
  },
  weather: {
    label: "날씨",
    description: "날씨와 자연 상태를 설명하는 표현입니다."
  },
  number: {
    label: "숫자",
    description: "가장 기본적인 수 표현을 빠르게 익힙니다."
  },
  time: {
    label: "시간",
    description: "하루, 날짜, 주와 해를 말할 때 쓰는 기본 시간 표현입니다."
  },
  emotion: {
    label: "감정",
    description: "기분과 상태를 말할 때 자주 쓰는 형용사 묶음입니다."
  },
  body: {
    label: "신체",
    description: "몸과 얼굴, 손발을 말할 때 쓰는 기본 신체 부위 단어입니다."
  },
  food: {
    label: "음식",
    description: "먹고 마시는 표현과 식재료 중심 단어입니다."
  },
  place: {
    label: "장소",
    description: "위치, 이동, 공간과 연결되는 단어 묶음입니다."
  },
  daily: {
    label: "일상 표현",
    description: "하나의 주제에 고정하기 애매하지만 자주 쓰이는 기본 단어입니다."
  },
  nature: {
    label: "자연",
    description: "자연물과 생물을 묶어서 익히는 단어입니다."
  },
  conjunction: {
    label: "접속사",
    description: "문장과 문장을 자연스럽게 이어주는 기본 연결 표현입니다."
  }
};

const VOCAB_GROUP_TAGS = {
  weather: ["날씨"],
  number: ["숫자"],
  time: ["시간"],
  emotion: ["감정"],
  body: ["신체"],
  food: ["음식"],
  place: ["장소"],
  daily: ["일상 표현"],
  nature: ["자연"],
  conjunction: ["접속사"]
};

const VOCAB_KOREAN_READING = {
  あさ: "아사",
  いえ: "이에",
  うみ: "우미",
  えき: "에키",
  おちゃ: "오차",
  かさ: "카사",
  きょう: "쿄오",
  くつ: "쿠츠",
  さかな: "사카나",
  しお: "시오",
  すし: "스시",
  せんせい: "센세이",
  たまご: "타마고",
  ちず: "치즈",
  つき: "츠키",
  てがみ: "테가미",
  とけい: "토케이",
  ねこ: "네코",
  はな: "하나",
  ひと: "히토",
  ふね: "후네",
  へや: "헤야",
  ほん: "혼",
  みず: "미즈",
  やさい: "야사이",
  ゆき: "유키",
  よる: "요루",
  いま: "이마",
  きのう: "키노오",
  あした: "아시타",
  ひる: "히루",
  ばん: "반",
  まいにち: "마이니치",
  まいあさ: "마이아사",
  まいばん: "마이반",
  しゅうまつ: "슈우마츠",
  せんしゅう: "센슈우",
  らいしゅう: "라이슈우",
  ことし: "코토시",
  きょねん: "쿄넨",
  らいねん: "라이넨",
  じかん: "지칸",
  とき: "토키",
  りんご: "링고",
  れいぞうこ: "레이조오코",
  ろうか: "로오카",
  おんがく: "옹가쿠",
  コーヒー: "코오히이",
  ケーキ: "케에키",
  ホテル: "호테루",
  あめ: "아메",
  はれ: "하레",
  くもり: "쿠모리",
  かぜ: "카제",
  ゼロ: "제로",
  れい: "레이",
  いち: "이치",
  に: "니",
  さん: "산",
  よん: "욘",
  し: "시",
  ご: "고",
  ろく: "로쿠",
  なな: "나나",
  しち: "시치",
  はち: "하치",
  きゅう: "큐우",
  く: "쿠",
  じゅう: "쥬우",
  うれしい: "우레시이",
  かなしい: "카나시이",
  たのしい: "타노시이",
  こわい: "코와이",
  げんき: "겐키",
  そして: "소시테",
  でも: "데모",
  しかし: "시카시",
  だから: "다카라",
  それから: "소레카라",
  また: "마타",
  それとも: "소레토모",
  つまり: "츠마리",
  さらに: "사라니",
  しかも: "시카모",
  ところが: "토코로가",
  それなのに: "소레나노니",
  とはいえ: "토와이에",
  なぜなら: "나제나라",
  というのは: "토이우노와",
  だって: "닷테",
  そのため: "소노타메",
  すなわち: "스나와치",
  要するに: "요오스루니",
  例えば: "타토에바",
  いわば: "이와바",
  したがって: "시타갓테",
  それで: "소레데",
  ゆえに: "유에니",
  からだ: "카라다",
  あたま: "아타마",
  かお: "카오",
  め: "메",
  みみ: "미미",
  くち: "쿠치",
  て: "테",
  あし: "아시",
  おなか: "오나카",
  くび: "쿠비",
  うで: "우데",
  かた: "카타",
  ひざ: "히자",
  ゆび: "유비",
  せなか: "세나카",
  むね: "무네",
  は: "하"
};

const VOCAB_ITEMS = [
  {
    word: "あさ",
    reading: "asa",
    meaning: "아침",
    example: "あさです。",
    note: "시간 표현의 기본 단어입니다.",
    kana: ["あ", "さ"],
    group: "time",
    tags: ["하루", "회화"]
  },
  {
    word: "いえ",
    reading: "ie",
    meaning: "집",
    example: "いえに かえります。",
    note: "장소 표현에서 자주 나옵니다.",
    kana: ["い", "え"],
    group: "place",
    tags: ["생활 공간", "이동"]
  },
  {
    word: "うみ",
    reading: "umi",
    meaning: "바다",
    example: "うみが きれいです。",
    note: "형용사 예문과 같이 외우기 좋습니다.",
    kana: ["う", "み"],
    group: "nature",
    tags: ["장소", "여행"]
  },
  {
    word: "えき",
    reading: "eki",
    meaning: "역",
    example: "えきは どこですか。",
    note: "문법 패턴 `A は どこ ですか`와 잘 붙습니다.",
    kana: ["え", "き"],
    group: "place"
  },
  {
    word: "おちゃ",
    reading: "ocha",
    meaning: "차, 녹차",
    accepted: ["차", "녹차"],
    example: "おちゃを のみます。",
    note: "조사 `を`와 같이 복습하기 좋습니다.",
    kana: ["お", "ちゃ"],
    group: "food",
    tags: ["음료", "회화"]
  },
  {
    word: "かさ",
    reading: "kasa",
    meaning: "우산",
    example: "かさを もっています。",
    note: "가장 기본적인 생활 단어 중 하나입니다.",
    kana: ["か", "さ"],
    group: "daily",
    tags: ["생활 물건", "날씨"]
  },
  {
    word: "きょう",
    reading: "kyou",
    meaning: "오늘",
    example: "きょうは いそがしいです。",
    note: "요음과 장음 느낌을 같이 익힐 수 있습니다.",
    kana: ["きょ", "う"],
    group: "time",
    tags: ["날짜", "회화"]
  },
  {
    word: "くつ",
    reading: "kutsu",
    meaning: "신발",
    example: "くつを ぬぎます。",
    note: "`つ` 발음 연습에 좋습니다.",
    kana: ["く", "つ"],
    group: "daily",
    tags: ["생활 물건"]
  },
  {
    word: "さかな",
    reading: "sakana",
    meaning: "생선",
    example: "さかなを たべます。",
    note: "명사와 동사 연결 연습용으로 좋습니다.",
    kana: ["さ", "か", "な"],
    group: "food"
  },
  {
    word: "しお",
    reading: "shio",
    meaning: "소금",
    example: "しおを すこし いれます。",
    note: "`し` 표기를 같이 익히기 좋습니다.",
    kana: ["し", "お"],
    group: "food"
  },
  {
    word: "すし",
    reading: "sushi",
    meaning: "초밥",
    example: "すしが すきです。",
    note: "초급 회화에서 자주 쓰는 대표 단어입니다.",
    kana: ["す", "し"],
    group: "food"
  },
  {
    word: "せんせい",
    reading: "sensei",
    meaning: "선생님",
    example: "せんせいは しんせつです。",
    note: "직업/호칭 표현으로 자주 나옵니다.",
    kana: ["せ", "ん"],
    group: "daily",
    tags: ["사람", "호칭"]
  },
  {
    word: "たまご",
    reading: "tamago",
    meaning: "달걀",
    example: "たまごを かいます。",
    note: "식재료 단어장에 자주 들어갑니다.",
    kana: ["た", "ご"],
    group: "food"
  },
  {
    word: "ちず",
    reading: "chizu",
    meaning: "지도",
    example: "ちずを みます。",
    note: "`ち`와 `ず`를 같이 복습하기 좋습니다.",
    kana: ["ち", "ず"],
    group: "place"
  },
  {
    word: "つき",
    reading: "tsuki",
    meaning: "달",
    example: "つきが きれいです。",
    note: "`tsu` 계열 읽기 훈련용입니다.",
    kana: ["つ", "き"],
    group: "nature",
    tags: ["시간", "하늘"]
  },
  {
    word: "てがみ",
    reading: "tegami",
    meaning: "편지",
    example: "てがみを かきます。",
    note: "동사 `かく`와 잘 묶입니다.",
    kana: ["て", "が", "み"],
    group: "daily",
    tags: ["생활 물건", "행동"]
  },
  {
    word: "とけい",
    reading: "tokei",
    meaning: "시계",
    example: "とけいを みて ください。",
    note: "시간 표현으로 확장하기 쉽습니다.",
    kana: ["と", "けい"],
    group: "daily",
    tags: ["시간", "생활 물건"]
  },
  {
    word: "ねこ",
    reading: "neko",
    meaning: "고양이",
    example: "ねこが います。",
    note: "`います` 패턴과 같이 외우기 좋습니다.",
    kana: ["ね", "こ"],
    group: "nature",
    tags: ["동물", "존재 표현"]
  },
  {
    word: "はな",
    reading: "hana",
    meaning: "꽃",
    example: "はなが きれいです。",
    note: "동음이의어도 있다는 점을 같이 기억하면 좋습니다.",
    kana: ["は", "な"],
    group: "nature",
    tags: ["식물", "묘사"]
  },
  {
    word: "ひと",
    reading: "hito",
    meaning: "사람",
    example: "あの ひとは だれですか。",
    note: "기본 명사 중 사용 빈도가 높습니다.",
    kana: ["ひ", "と"],
    group: "daily",
    tags: ["사람", "회화"]
  },
  {
    word: "ふね",
    reading: "fune",
    meaning: "배",
    accepted: ["배", "선박"],
    example: "ふねで いきます。",
    note: "`ふ`를 `fu`로 읽는 감각을 익히기 좋습니다.",
    kana: ["ふ", "ね"],
    group: "daily",
    tags: ["교통", "이동"]
  },
  {
    word: "へや",
    reading: "heya",
    meaning: "방",
    example: "へやが ひろいです。",
    note: "장소 묘사 예문에서 자주 나옵니다.",
    kana: ["へ", "や"],
    group: "place",
    tags: ["생활 공간", "묘사"]
  },
  {
    word: "ほん",
    reading: "hon",
    meaning: "책",
    example: "ほんを よみます。",
    note: "목적어 조사와 같이 반복하기 좋습니다.",
    kana: ["ほ", "ん"],
    group: "daily",
    tags: ["생활 물건", "학습"]
  },
  {
    word: "みず",
    reading: "mizu",
    meaning: "물",
    example: "みずを のみます。",
    note: "가장 기본적인 생존 회화 단어입니다.",
    kana: ["み", "ず"],
    group: "food",
    tags: ["음료", "생활"]
  },
  {
    word: "やさい",
    reading: "yasai",
    meaning: "채소",
    example: "やさいを たべます。",
    note: "음식 단어 묶음으로 확장 가능합니다.",
    kana: ["や", "さ"],
    group: "food"
  },
  {
    word: "ゆき",
    reading: "yuki",
    meaning: "눈",
    example: "ゆきが ふっています。",
    note: "날씨 표현과 함께 외우기 좋습니다.",
    kana: ["ゆ", "き"],
    group: "weather",
    tags: ["자연"]
  },
  {
    word: "よる",
    reading: "yoru",
    meaning: "밤",
    example: "よるに べんきょうします。",
    note: "시간대 표현의 기본 단어입니다.",
    kana: ["よ", "る"],
    group: "time",
    tags: ["하루", "회화"]
  },
  {
    word: "いま",
    reading: "ima",
    meaning: "지금",
    example: "いま べんきょうします。",
    note: "현재 시점을 말할 때 가장 자주 쓰는 기본 표현입니다.",
    kana: ["い", "ま"],
    group: "time",
    tags: ["현재", "회화"]
  },
  {
    word: "きのう",
    reading: "kinou",
    meaning: "어제",
    example: "きのう あめでした。",
    note: "`きょう`, `あした`와 세트로 외우기 좋습니다.",
    kana: ["き", "の", "う"],
    group: "time",
    tags: ["날짜", "과거"]
  },
  {
    word: "あした",
    reading: "ashita",
    meaning: "내일",
    example: "あした いきます。",
    note: "미래 일정을 말할 때 바로 쓰는 단어입니다.",
    kana: ["あ", "し", "た"],
    group: "time",
    tags: ["날짜", "미래"]
  },
  {
    word: "ひる",
    reading: "hiru",
    meaning: "낮, 점심",
    accepted: ["낮", "점심"],
    example: "ひるに ごはんを たべます。",
    note: "하루 시간대와 식사 표현을 함께 익히기 좋습니다.",
    kana: ["ひ", "る"],
    group: "time",
    tags: ["하루", "식사"]
  },
  {
    word: "ばん",
    reading: "ban",
    meaning: "밤, 저녁",
    accepted: ["밤", "저녁"],
    example: "ばんに ほんを よみます。",
    note: "`よる`와 함께 밤 시간대를 말할 때 자주 나옵니다.",
    kana: ["ば", "ん"],
    group: "time",
    tags: ["하루", "회화"]
  },
  {
    word: "まいにち",
    reading: "mainichi",
    meaning: "매일",
    example: "まいにち にほんごを べんきょうします。",
    note: "습관을 말할 때 동사와 같이 묶어 외우면 좋습니다.",
    kana: ["ま", "い", "に", "ち"],
    group: "time",
    tags: ["반복", "습관"]
  },
  {
    word: "まいあさ",
    reading: "maiasa",
    meaning: "매일 아침",
    accepted: ["매일 아침", "매일아침"],
    example: "まいあさ みずを のみます。",
    note: "반복되는 아침 습관을 말할 때 쓰기 좋습니다.",
    kana: ["ま", "い", "あ", "さ"],
    group: "time",
    tags: ["반복", "하루"]
  },
  {
    word: "まいばん",
    reading: "maiban",
    meaning: "매일 밤",
    accepted: ["매일 밤", "매일밤", "매일 저녁", "매일저녁"],
    example: "まいばん おんがくを ききます。",
    note: "저녁이나 밤에 반복하는 행동을 말할 때 씁니다.",
    kana: ["ま", "い", "ば", "ん"],
    group: "time",
    tags: ["반복", "하루"]
  },
  {
    word: "しゅうまつ",
    reading: "shuumatsu",
    meaning: "주말",
    example: "しゅうまつに えいがを みます。",
    note: "약속이나 계획을 말할 때 자주 쓰는 시간 표현입니다.",
    kana: ["しゅ", "う", "ま", "つ"],
    group: "time",
    tags: ["주", "계획"]
  },
  {
    word: "せんしゅう",
    reading: "senshuu",
    meaning: "지난주",
    accepted: ["지난주", "저번 주", "저번주"],
    example: "せんしゅう えきに いきました。",
    note: "`らいしゅう`와 반대되는 과거 주 표현입니다.",
    kana: ["せ", "ん", "しゅ", "う"],
    group: "time",
    tags: ["주", "과거"]
  },
  {
    word: "らいしゅう",
    reading: "raishuu",
    meaning: "다음 주",
    accepted: ["다음 주", "다음주"],
    example: "らいしゅう テストが あります。",
    note: "다가오는 일정을 말할 때 쓰는 기본 단어입니다.",
    kana: ["ら", "い", "しゅ", "う"],
    group: "time",
    tags: ["주", "미래"]
  },
  {
    word: "ことし",
    reading: "kotoshi",
    meaning: "올해",
    accepted: ["올해", "금년"],
    example: "ことしは いそがしいです。",
    note: "현재 연도를 말할 때 쓰는 쉬운 시간 표현입니다.",
    kana: ["こ", "と", "し"],
    group: "time",
    tags: ["해", "현재"]
  },
  {
    word: "きょねん",
    reading: "kyonen",
    meaning: "작년",
    accepted: ["작년", "지난해"],
    example: "きょねん にほんに いきました。",
    note: "지난해 일을 말할 때 쓰는 과거 표현입니다.",
    kana: ["きょ", "ね", "ん"],
    group: "time",
    tags: ["해", "과거"]
  },
  {
    word: "らいねん",
    reading: "rainen",
    meaning: "내년",
    example: "らいねん また きます。",
    note: "미래 계획을 말할 때 자주 쓰입니다.",
    kana: ["ら", "い", "ね", "ん"],
    group: "time",
    tags: ["해", "미래"]
  },
  {
    word: "じかん",
    reading: "jikan",
    meaning: "시간",
    example: "じかんが あります。",
    note: "시간이 있다, 없다 같은 기본 문장으로 확장하기 좋습니다.",
    kana: ["じ", "か", "ん"],
    group: "time",
    tags: ["기본", "회화"]
  },
  {
    word: "とき",
    reading: "toki",
    meaning: "때, 시간",
    accepted: ["때", "시간"],
    example: "ひまな ときに ほんを よみます。",
    note: "상황이나 시점을 말할 때 쓰는 기본 명사입니다.",
    kana: ["と", "き"],
    group: "time",
    tags: ["시점", "문장 연결"]
  },
  {
    word: "りんご",
    reading: "ringo",
    meaning: "사과",
    example: "りんごが すきです。",
    note: "초급 단어장에서 매우 자주 나옵니다.",
    kana: ["り", "ん", "ご"],
    group: "food"
  },
  {
    word: "れいぞうこ",
    reading: "reizouko",
    meaning: "냉장고",
    example: "れいぞうこに あります。",
    note: "생활 단어로 실전 활용도가 높습니다.",
    kana: ["れ", "い", "ぞ", "う", "こ"],
    group: "daily",
    tags: ["생활 물건", "음식"]
  },
  {
    word: "ろうか",
    reading: "rouka",
    meaning: "복도",
    example: "ろうかを あるきます。",
    note: "장음 `ou` 패턴을 같이 익힐 수 있습니다.",
    kana: ["ろ", "う", "か"],
    group: "place"
  },
  {
    word: "おんがく",
    reading: "ongaku",
    meaning: "음악",
    example: "おんがくを ききます。",
    note: "`ん` 다음 자음 연결을 익히기 좋습니다.",
    kana: ["お", "ん", "が", "く"],
    group: "daily",
    tags: ["취미", "회화"]
  },
  {
    word: "コーヒー",
    reading: "koohii",
    meaning: "커피",
    example: "コーヒーを のみます。",
    note: "카타카나 단어의 대표 예시입니다.",
    kana: ["コ", "ヒ"],
    group: "food"
  },
  {
    word: "ケーキ",
    reading: "keeki",
    meaning: "케이크",
    example: "ケーキを たべます。",
    note: "장음 카타카나 단어입니다.",
    kana: ["ケ", "キ"],
    group: "food"
  },
  {
    word: "ホテル",
    reading: "hoteru",
    meaning: "호텔",
    example: "ホテルに とまります。",
    note: "장소 표현과 같이 쓰기 좋습니다.",
    kana: ["ホ", "テ", "ル"],
    group: "place",
    tags: ["여행", "카타카나"]
  },
  {
    word: "あめ",
    reading: "ame",
    meaning: "비",
    example: "きょうは あめです。",
    note: "날씨 표현에서 가장 자주 나오는 기본 단어입니다.",
    kana: ["あ", "め"],
    group: "weather"
  },
  {
    word: "はれ",
    reading: "hare",
    meaning: "맑음",
    accepted: ["맑음", "화창함"],
    example: "あしたは はれです。",
    note: "날씨 예보 표현과 같이 외우기 좋습니다.",
    kana: ["は", "れ"],
    group: "weather",
    tags: ["상태"]
  },
  {
    word: "くもり",
    reading: "kumori",
    meaning: "흐림",
    example: "きょうは くもりです。",
    note: "날씨 상태를 묘사할 때 자주 쓰입니다.",
    kana: ["く", "も", "り"],
    group: "weather"
  },
  {
    word: "かぜ",
    reading: "kaze",
    meaning: "바람",
    example: "かぜが つよいです。",
    note: "날씨와 자연 현상을 함께 떠올리면 기억이 잘 남습니다.",
    kana: ["か", "ぜ"],
    group: "weather"
  },
  {
    word: "ゼロ / れい",
    reading: "zero / rei",
    koreanReading: "제로 / 레이",
    meaning: "영, 0",
    accepted: ["영", "0", "제로", "레이"],
    example: "りんごは ゼロです。",
    note: "0은 `ゼロ`를 가장 흔하게 쓰고, 격식 있는 표현에서는 `れい`도 씁니다.",
    kana: ["ゼ", "ロ", "れ", "い"],
    group: "number",
    tags: ["기본 숫자", "0"]
  },
  {
    word: "いち",
    reading: "ichi",
    meaning: "하나, 1",
    accepted: ["하나", "1", "일"],
    example: "いちは いちばん はじめの かずです。",
    note: "기본 숫자 1입니다. 뒤에 붙는 말에 따라 소리가 바뀌는 경우가 있습니다.",
    kana: ["い", "ち"],
    group: "number",
    tags: ["기본 숫자", "1"]
  },
  {
    word: "に",
    reading: "ni",
    meaning: "둘, 2",
    accepted: ["둘", "2", "이"],
    example: "にと さんを いっしょに よみます。",
    note: "기본 숫자 2입니다. 짧아서 소리와 뜻을 바로 연결하기 좋습니다.",
    kana: ["に"],
    group: "number",
    tags: ["기본 숫자", "2"]
  },
  {
    word: "さん",
    reading: "san",
    meaning: "셋, 3",
    accepted: ["셋", "3", "삼"],
    example: "さんまで かぞえます。",
    note: "기본 숫자 3입니다. 사람 호칭 `さん`과 표기는 같지만 숫자로도 자주 씁니다.",
    kana: ["さ", "ん"],
    group: "number",
    tags: ["기본 숫자", "3"]
  },
  {
    word: "よん / し",
    reading: "yon / shi",
    koreanReading: "욘 / 시",
    meaning: "넷, 4",
    accepted: ["넷", "4", "사"],
    example: "よんまで かぞえます。",
    note: "4는 `し`도 있지만 초급 회화에서는 `よん`을 먼저 익히는 편이 좋습니다.",
    kana: ["よ", "ん", "し"],
    group: "number",
    tags: ["기본 숫자", "4"]
  },
  {
    word: "ご",
    reading: "go",
    meaning: "다섯, 5",
    accepted: ["다섯", "5", "오"],
    example: "ごまで かぞえます。",
    note: "기본 숫자 5입니다. 탁음 `ご` 발음을 같이 익힐 수 있습니다.",
    kana: ["ご"],
    group: "number",
    tags: ["기본 숫자", "5"]
  },
  {
    word: "ろく",
    reading: "roku",
    meaning: "여섯, 6",
    accepted: ["여섯", "6", "육"],
    example: "ろくまで かぞえます。",
    note: "기본 숫자 6입니다. 뒤에 붙는 단위에 따라 `ろっ`처럼 바뀌기도 합니다.",
    kana: ["ろ", "く"],
    group: "number",
    tags: ["기본 숫자", "6"]
  },
  {
    word: "なな / しち",
    reading: "nana / shichi",
    koreanReading: "나나 / 시치",
    meaning: "일곱, 7",
    accepted: ["일곱", "7", "칠"],
    example: "ななまで かぞえます。",
    note: "7은 `しち`도 있지만 초급에서는 `なな`를 먼저 익히면 헷갈림이 적습니다.",
    kana: ["な", "な", "し", "ち"],
    group: "number",
    tags: ["기본 숫자", "7"]
  },
  {
    word: "はち",
    reading: "hachi",
    meaning: "여덟, 8",
    accepted: ["여덟", "8", "팔"],
    example: "はちまで かぞえます。",
    note: "기본 숫자 8입니다. `ち` 소리까지 함께 복습할 수 있습니다.",
    kana: ["は", "ち"],
    group: "number",
    tags: ["기본 숫자", "8"]
  },
  {
    word: "きゅう / く",
    reading: "kyuu / ku",
    koreanReading: "큐우 / 쿠",
    meaning: "아홉, 9",
    accepted: ["아홉", "9", "구"],
    example: "きゅうまで かぞえます。",
    note: "9는 `く`도 있지만 기본 숫자로는 `きゅう`를 먼저 고정하세요.",
    kana: ["きゅ", "う", "く"],
    group: "number",
    tags: ["기본 숫자", "9"]
  },
  {
    word: "じゅう",
    reading: "juu",
    meaning: "열, 10",
    accepted: ["열", "10", "십"],
    example: "じゅうまで かぞえます。",
    note: "기본 숫자 10입니다. 11부터는 `じゅう` 뒤에 숫자를 붙여 확장합니다.",
    kana: ["じゅ", "う"],
    group: "number",
    tags: ["기본 숫자", "10"]
  },
  {
    word: "うれしい",
    reading: "ureshii",
    meaning: "기쁘다",
    example: "とても うれしいです。",
    note: "감정 형용사는 `です`와 붙여서 통째로 익히는 편이 좋습니다.",
    kana: ["う", "れ", "し", "い"],
    group: "emotion"
  },
  {
    word: "かなしい",
    reading: "kanashii",
    meaning: "슬프다",
    example: "すこし かなしいです。",
    note: "반대 감정 단어와 짝으로 외우면 오래 갑니다.",
    kana: ["か", "な", "し", "い"],
    group: "emotion"
  },
  {
    word: "たのしい",
    reading: "tanoshii",
    meaning: "즐겁다, 재미있다",
    accepted: ["즐겁다", "재미있다"],
    example: "きょうは たのしいです。",
    note: "회화에서 자주 쓰이는 대표적인 감정 형용사입니다.",
    kana: ["た", "の", "し", "い"],
    group: "emotion"
  },
  {
    word: "こわい",
    reading: "kowai",
    meaning: "무섭다",
    example: "その えいがは こわいです。",
    note: "감상을 말할 때 자주 나오는 형용사입니다.",
    kana: ["こ", "わ", "い"],
    group: "emotion"
  },
  {
    word: "げんき",
    reading: "genki",
    meaning: "건강함, 활기참",
    accepted: ["건강함", "활기참", "건강하다", "활기차다"],
    example: "きょうも げんきです。",
    note: "인사 표현과 같이 묶으면 실전 활용도가 높습니다.",
    kana: ["げ", "ん", "き"],
    group: "emotion",
    tags: ["상태", "인사", "일상 표현"]
  },
  {
    word: "からだ",
    reading: "karada",
    meaning: "몸, 신체",
    accepted: ["몸", "신체"],
    example: "からだを うごかします。",
    note: "운동이나 건강 이야기에서 가장 먼저 쓰는 기본 단어입니다.",
    kana: ["か", "ら", "だ"],
    group: "body",
    tags: ["건강", "기본"]
  },
  {
    word: "あたま",
    reading: "atama",
    meaning: "머리",
    example: "あたまが いたいです。",
    note: "아픈 곳을 말할 때 바로 쓸 수 있는 신체 단어입니다.",
    kana: ["あ", "た", "ま"],
    group: "body",
    tags: ["얼굴", "통증"]
  },
  {
    word: "かお",
    reading: "kao",
    meaning: "얼굴",
    example: "かおを あらいます。",
    note: "일상 행동 표현과 같이 외우기 좋습니다.",
    kana: ["か", "お"],
    group: "body",
    tags: ["얼굴", "생활"]
  },
  {
    word: "め",
    reading: "me",
    meaning: "눈",
    example: "めを とじます。",
    note: "짧은 단어라서 글자와 뜻을 바로 연결하는 연습에 좋습니다.",
    kana: ["め"],
    group: "body",
    tags: ["얼굴", "감각"]
  },
  {
    word: "みみ",
    reading: "mimi",
    meaning: "귀",
    example: "みみで ききます。",
    note: "같은 글자가 반복되는 쉬운 신체 단어입니다.",
    kana: ["み"],
    group: "body",
    tags: ["얼굴", "감각"]
  },
  {
    word: "くち",
    reading: "kuchi",
    meaning: "입",
    example: "くちを あけます。",
    note: "`ち` 발음과 함께 익히기 좋은 기본 단어입니다.",
    kana: ["く", "ち"],
    group: "body",
    tags: ["얼굴"]
  },
  {
    word: "て",
    reading: "te",
    meaning: "손",
    example: "てを あらいます。",
    note: "생활 동작과 가장 자주 결합하는 신체 단어입니다.",
    kana: ["て"],
    group: "body",
    tags: ["손발", "생활"]
  },
  {
    word: "あし",
    reading: "ashi",
    meaning: "발, 다리",
    accepted: ["발", "다리"],
    example: "あしが いたいです。",
    note: "문맥에 따라 발이나 다리를 가리킬 수 있습니다.",
    kana: ["あ", "し"],
    group: "body",
    tags: ["손발", "통증"]
  },
  {
    word: "おなか",
    reading: "onaka",
    meaning: "배, 복부",
    accepted: ["배", "복부"],
    example: "おなかが すきました。",
    note: "배고픔을 말하는 표현과 같이 자주 나옵니다.",
    kana: ["お", "な", "か"],
    group: "body",
    tags: ["몸통", "회화"]
  },
  {
    word: "くび",
    reading: "kubi",
    meaning: "목",
    example: "くびが いたいです。",
    note: "몸 상태를 설명할 때 유용한 단어입니다.",
    kana: ["く", "び"],
    group: "body",
    tags: ["몸통", "통증"]
  },
  {
    word: "うで",
    reading: "ude",
    meaning: "팔",
    example: "うでを あげます。",
    note: "동작 표현과 함께 익히기 좋은 신체 단어입니다.",
    kana: ["う", "で"],
    group: "body",
    tags: ["손발", "동작"]
  },
  {
    word: "かた",
    reading: "kata",
    meaning: "어깨",
    example: "かたが いたいです。",
    note: "통증 표현과 자연스럽게 연결됩니다.",
    kana: ["か", "た"],
    group: "body",
    tags: ["몸통", "통증"]
  },
  {
    word: "ひざ",
    reading: "hiza",
    meaning: "무릎",
    example: "ひざを まげます。",
    note: "운동이나 자세를 설명할 때 쓰기 좋은 단어입니다.",
    kana: ["ひ", "ざ"],
    group: "body",
    tags: ["손발", "동작"]
  },
  {
    word: "ゆび",
    reading: "yubi",
    meaning: "손가락, 발가락",
    accepted: ["손가락", "발가락"],
    example: "ゆびを さします。",
    note: "손가락과 발가락을 모두 가리킬 수 있습니다.",
    kana: ["ゆ", "び"],
    group: "body",
    tags: ["손발"]
  },
  {
    word: "せなか",
    reading: "senaka",
    meaning: "등",
    example: "せなかが いたいです。",
    note: "아픈 부위를 설명하는 문장으로 바로 확장하기 좋습니다.",
    kana: ["せ", "な", "か"],
    group: "body",
    tags: ["몸통", "통증"]
  },
  {
    word: "むね",
    reading: "mune",
    meaning: "가슴",
    example: "むねが いたいです。",
    note: "몸통 부위를 말할 때 필요한 기본 단어입니다.",
    kana: ["む", "ね"],
    group: "body",
    tags: ["몸통"]
  },
  {
    word: "は",
    reading: "ha",
    meaning: "이, 치아",
    accepted: ["이", "치아"],
    example: "はを みがきます。",
    note: "조사 `は`와 글자는 같지만 단어로는 `치아`를 뜻합니다.",
    kana: ["は"],
    group: "body",
    tags: ["얼굴", "생활"]
  },
  {
    word: "そして",
    reading: "soshite",
    meaning: "그리고",
    example: "あさです。そして はれです。",
    note: "앞 문장에 내용을 자연스럽게 이어 붙일 때 쓰는 기본 접속사입니다.",
    kana: ["そ", "し", "て"],
    group: "conjunction",
    tags: ["순접", "기본"]
  },
  {
    word: "でも",
    reading: "demo",
    meaning: "하지만, 그런데",
    accepted: ["하지만", "그런데", "그래도"],
    example: "あめです。でも いきます。",
    note: "앞 내용과 반대되는 흐름을 만들 때 자주 씁니다.",
    kana: ["で", "も"],
    group: "conjunction",
    tags: ["역접", "회화"]
  },
  {
    word: "しかし",
    reading: "shikashi",
    meaning: "그러나",
    accepted: ["그러나", "하지만"],
    example: "たのしいです。しかし むずかしいです。",
    note: "`でも`보다 조금 더 딱딱하고 글말 느낌이 있는 역접 표현입니다.",
    kana: ["し", "か", "し"],
    group: "conjunction",
    tags: ["역접", "글말"]
  },
  {
    word: "だから",
    reading: "dakara",
    meaning: "그래서, 그러니까",
    accepted: ["그래서", "그러니까", "그러므로"],
    example: "きょうは あめです。だから かさを もっています。",
    note: "이유를 말한 뒤 결과를 이어줄 때 쓰는 초급 핵심 표현입니다.",
    kana: ["だ", "か", "ら"],
    group: "conjunction",
    tags: ["이유", "결과", "회화"]
  },
  {
    word: "それから",
    reading: "sorekara",
    meaning: "그리고 나서, 그 다음에",
    accepted: ["그리고 나서", "그 다음에", "그다음에", "그리고"],
    example: "ほんを よみます。それから てがみを かきます。",
    note: "시간 순서대로 다음 행동을 이어 말할 때 쓰기 좋습니다.",
    kana: ["そ", "れ", "か", "ら"],
    group: "conjunction",
    tags: ["순서", "회화"]
  },
  {
    word: "また",
    reading: "mata",
    meaning: "또, 또한",
    accepted: ["또", "또한", "다시"],
    example: "あした また べんきょうします。",
    note: "추가 정보나 반복되는 행동을 붙일 때 자주 쓰입니다.",
    kana: ["ま", "た"],
    group: "conjunction"
  },
  {
    word: "それとも",
    reading: "soretomo",
    meaning: "아니면, 혹은",
    accepted: ["아니면", "혹은", "또는"],
    example: "コーヒーですか。それとも おちゃですか。",
    note: "두 선택지를 놓고 묻는 질문에서 자주 나오는 연결 표현입니다.",
    kana: ["そ", "れ", "と", "も"],
    group: "conjunction",
    tags: ["선택", "질문"]
  },
  {
    word: "つまり",
    reading: "tsumari",
    meaning: "즉, 다시 말해",
    accepted: ["즉", "다시 말해", "다시말해", "그러니까"],
    example: "ここは えきです。つまり べんりです。",
    note: "앞 내용을 짧게 정리하거나 바꿔 말할 때 씁니다.",
    kana: ["つ", "ま", "り"],
    group: "conjunction"
  },
  {
    word: "さらに",
    reading: "sarani",
    meaning: "게다가, 더욱더",
    accepted: ["게다가", "더욱더", "더구나", "또한"],
    example: "彼女は歌が上手だ。さらにダンスもできる。",
    note: "순접 표현입니다. 앞 내용에 더 강한 추가 정보를 붙일 때 씁니다.",
    kana: ["さ", "ら", "に"],
    group: "conjunction"
  },
  {
    word: "しかも",
    reading: "shikamo",
    meaning: "게다가, 더군다나",
    accepted: ["게다가", "더군다나", "더구나"],
    example: "このレストランは美味しい。しかも安い。",
    note: "순접 표현입니다. 좋은 점이나 특징을 덧붙여 강조할 때 자주 씁니다.",
    kana: ["し", "か", "も"],
    group: "conjunction"
  },
  {
    word: "ところが",
    reading: "tokoroga",
    meaning: "그런데, 예상과 다름",
    accepted: ["그런데", "예상과 다름", "하지만"],
    example: "彼に電話した。ところが、出なかった。",
    note: "역접 표현입니다. 예상과 다른 결과가 나왔을 때 씁니다.",
    kana: ["と", "こ", "ろ", "が"],
    group: "conjunction"
  },
  {
    word: "それなのに",
    reading: "sorenanoni",
    meaning: "그런데도",
    accepted: ["그런데도", "그럼에도", "그럼에도 불구하고"],
    example: "たくさん寝た。それなのに、まだ眠い。",
    note: "역접 표현입니다. 앞 내용과 반대되는 상태가 이어질 때 씁니다.",
    kana: ["そ", "れ", "な", "の", "に"],
    group: "conjunction"
  },
  {
    word: "とはいえ",
    reading: "towaie",
    meaning: "그렇다고 해도",
    accepted: ["그렇다고 해도", "그렇다고는 해도", "하지만"],
    example: "彼は賢い。とはいえ、完璧ではない。",
    note: "역접 표현입니다. 앞 내용을 인정하면서 제한이나 반대 내용을 덧붙입니다.",
    kana: ["と", "は", "い", "え"],
    group: "conjunction"
  },
  {
    word: "なぜなら",
    reading: "nazenara",
    meaning: "왜냐하면",
    example: "遅れました。なぜなら、電車が止まったからです。",
    note: "이유와 원인을 설명할 때 쓰는 기본 표현입니다.",
    kana: ["な", "ぜ", "な", "ら"],
    group: "conjunction"
  },
  {
    word: "というのは",
    reading: "toiunoha",
    meaning: "왜냐하면",
    accepted: ["왜냐하면", "그 이유는"],
    example: "彼は行きません。というのは、風邪をひいたからです。",
    note: "앞 문장의 이유를 뒤에서 차분히 설명할 때 씁니다.",
    kana: ["と", "い", "う", "の", "は"],
    group: "conjunction"
  },
  {
    word: "だって",
    reading: "datte",
    meaning: "왜냐하면",
    accepted: ["왜냐하면", "왜냐면"],
    example: "だって、お腹がすいたんだもん。",
    note: "이유를 말할 때 쓰는 구어체 표현입니다. 친한 사이의 말투에 가깝습니다.",
    kana: ["だ", "っ", "て"],
    group: "conjunction"
  },
  {
    word: "そのため",
    reading: "sonotame",
    meaning: "그래서, 그 때문에",
    accepted: ["그래서", "그 때문에", "그때문에", "그러므로"],
    example: "大雨だった。そのため、試合は中止になった。",
    note: "이유와 원인을 공식적으로 설명할 때 잘 어울리는 표현입니다.",
    kana: ["そ", "の", "た", "め"],
    group: "conjunction"
  },
  {
    word: "すなわち",
    reading: "sunawachi",
    meaning: "즉",
    accepted: ["즉", "다시 말해", "다시말해"],
    example: "この試験は難しい。すなわち、合格率が低い。",
    note: "앞 내용을 딱딱하게 정리하거나 다시 설명할 때 씁니다.",
    kana: ["す", "な", "わ", "ち"],
    group: "conjunction"
  },
  {
    word: "要するに",
    reading: "yousuruni",
    meaning: "요컨대",
    accepted: ["요컨대", "간단히 말해", "간단히말해", "결국"],
    example: "要するに、彼は怠け者だ。",
    note: "여러 내용을 짧게 요약해서 결론을 말할 때 씁니다.",
    kana: ["よう", "す", "る", "に"],
    group: "conjunction"
  },
  {
    word: "例えば",
    reading: "tatoeba",
    meaning: "예를 들면",
    accepted: ["예를 들면", "예를들면", "예컨대"],
    example: "私は果物が好きです。例えば、りんごやバナナです。",
    note: "예시를 들어 설명을 쉽게 만들 때 쓰는 표현입니다.",
    kana: ["た", "と", "え", "ば"],
    group: "conjunction"
  },
  {
    word: "いわば",
    reading: "iwaba",
    meaning: "말하자면",
    accepted: ["말하자면", "이를테면"],
    example: "彼は、いわば生き字引だ。",
    note: "비유하거나 쉬운 말로 바꿔 설명할 때 쓰는 표현입니다.",
    kana: ["い", "わ", "ば"],
    group: "conjunction"
  },
  {
    word: "したがって",
    reading: "shitagatte",
    meaning: "따라서",
    accepted: ["따라서", "그러므로", "그 결과"],
    example: "この店は人気だ。したがって、予約が必要だ。",
    note: "결론이나 결과를 격식 있게 이어줄 때 씁니다.",
    kana: ["し", "た", "が", "っ", "て"],
    group: "conjunction"
  },
  {
    word: "それで",
    reading: "sorede",
    meaning: "그래서",
    accepted: ["그래서", "그리하여"],
    example: "頭が痛い。それで、薬を飲んだ。",
    note: "앞 상황 때문에 뒤 행동이나 결과가 이어질 때 쓰는 말입니다.",
    kana: ["そ", "れ", "で"],
    group: "conjunction"
  },
  {
    word: "ゆえに",
    reading: "yueni",
    meaning: "그러므로",
    accepted: ["그러므로", "따라서", "그 때문에"],
    example: "彼は努力した。ゆえに、成功した。",
    note: "결론이나 결과를 격식 있게 말할 때 쓰는 표현입니다.",
    kana: ["ゆ", "え", "に"],
    group: "conjunction"
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
const vocabGroupToolbar = document.getElementById("vocabGroupToolbar");
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
  vocabGroup: "all",
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

function getVocabGroupMeta(group = state.vocabGroup) {
  return VOCAB_GROUP_CONFIG[group] || VOCAB_GROUP_CONFIG.all;
}

function getVocabItems(group = state.vocabGroup) {
  if (group === "all") {
    return VOCAB_ITEMS;
  }

  return VOCAB_ITEMS.filter((item) => item.group === group);
}

function getCategoryDisplayLabel(category = state.category) {
  if (category !== "vocab") {
    return CATEGORY_CONFIG[category].label;
  }

  const groupLabel = getVocabGroupMeta().label;
  return groupLabel === "전체" ? CATEGORY_CONFIG.vocab.label : `${CATEGORY_CONFIG.vocab.label} · ${groupLabel}`;
}

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
  if (state.category === "vocab") {
    const groupLabel = getVocabGroupMeta().label;
    const scope = groupLabel === "전체" ? "전체 단어" : `${groupLabel} 묶음`;
    return `${CATEGORY_CONFIG[state.category].label} 퀴즈를 시작하면 ${scope}에서 문제가 랜덤으로 출제됩니다.`;
  }

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
    return getVocabItems();
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

function getVocabKoreanReading(item) {
  return item.koreanReading || VOCAB_KOREAN_READING[item.word] || "";
}

function getVocabTags(item) {
  return [...new Set([...(VOCAB_GROUP_TAGS[item.group] || []), ...(item.tags || [])])];
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
    const koreanReading = getVocabKoreanReading(question.item);
    return `${question.item.word}의 뜻은 ${question.item.meaning}이고 읽기는 ${question.item.reading}${koreanReading ? `, 한국어식 발음은 ${koreanReading}` : ""}입니다.`;
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
  resetQuiz(`${getCategoryDisplayLabel(category)}로 이동했습니다. 퀴즈는 새로 시작됩니다.`);
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

function setVocabGroup(group) {
  if (state.category !== "vocab" || state.vocabGroup === group || !VOCAB_GROUP_CONFIG[group]) {
    return;
  }

  state.vocabGroup = group;
  ensureLearnIndexInRange("vocab");
  resetQuiz(`${getVocabGroupMeta().label} 묶음으로 변경했습니다. 퀴즈는 다시 시작됩니다.`);
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

function renderVocabGroupToolbar() {
  vocabGroupToolbar.innerHTML = Object.entries(VOCAB_GROUP_CONFIG)
    .map(([key, config]) => {
      const isActive = state.vocabGroup === key;
      return `
        <button
          class="ghost-button subcategory-button ${isActive ? "is-active" : ""}"
          type="button"
          data-vocab-group="${escapeHtml(key)}"
          aria-pressed="${String(isActive)}"
        >
          ${escapeHtml(config.label)}
        </button>
      `;
    })
    .join("");
}

function renderHeroContext() {
  let context = CATEGORY_CONFIG[state.category].description;

  if (state.category === "hiragana") {
    context += ` 현재 범위: ${getKanaDeckSummary(state.category)}.`;
  } else if (state.category === "vocab") {
    const vocabItems = getCategoryItems("vocab");
    context += ` 현재 묶음: ${getVocabGroupMeta().label} (${vocabItems.length}개). ${getVocabGroupMeta().description}`;
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

  const showVocabGroupToolbar = state.category === "vocab";
  vocabGroupToolbar.hidden = !showVocabGroupToolbar;
  vocabGroupToolbar.style.display = showVocabGroupToolbar ? "flex" : "none";

  if (showVocabGroupToolbar) {
    renderVocabGroupToolbar();
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
  const groupMeta = getVocabGroupMeta(item.group);
  const koreanReading = getVocabKoreanReading(item);
  const vocabTags = getVocabTags(item);

  return `
    <div class="learn-stage">
      <div>
        <h2 class="stage-heading">단어 학습</h2>
        <p class="stage-copy">${escapeHtml(groupMeta.label)} 묶음에서 읽기, 뜻, 예문을 한 세트로 익힌 뒤 뜻 맞히기 퀴즈로 넘어가세요.</p>
      </div>
      <div class="symbol-frame">
        <div class="prompt-main is-text">${escapeHtml(item.word)}</div>
      </div>
      <div class="meta-strip">
        <span class="meta-pill">분류 ${escapeHtml(groupMeta.label)}</span>
        <span class="meta-pill">읽기 ${escapeHtml(item.reading)}</span>
        ${koreanReading ? `<span class="meta-pill">발음 ${escapeHtml(koreanReading)}</span>` : ""}
        <span class="meta-pill">뜻 ${escapeHtml(item.meaning)}</span>
      </div>
      <div class="info-panel">
        <h3 class="stage-heading">예문과 메모</h3>
        <p class="stage-copy">${escapeHtml(item.example)}</p>
        <p class="helper-copy">${escapeHtml(item.note)}</p>
        <p class="helper-copy">문자 조각</p>
        <div class="tag-list">
          ${item.kana.map((kana) => `<span class="tag-chip">${escapeHtml(kana)}</span>`).join("")}
        </div>
        <p class="helper-copy">태그</p>
        <div class="tag-list">
          ${vocabTags.map((tag) => `<span class="tag-chip">${escapeHtml(tag)}</span>`).join("")}
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

  if (!item) {
    return `
      <div class="action-stack">
        <div class="empty-card">현재 범위에 표시할 학습 항목이 없습니다.</div>
      </div>
    `;
  }

  const detail =
    state.category === "hiragana"
      ? `현재 범위는 ${getKanaDeckSummary(state.category)}이며 총 ${items.length}문자가 포함됩니다.`
      : state.category === "katakana"
        ? "현재 항목의 핵심은 외래어 예시와 함께 문자를 모양째 익히는 것입니다."
        : state.category === "vocab"
          ? `현재 묶음은 ${getVocabGroupMeta().label}이며 총 ${items.length}개 단어가 포함됩니다.`
          : "현재 항목의 핵심은 문형의 의미와 쓰임을 동시에 익히는 것입니다.";

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
          <h2 class="stage-heading">${getCategoryDisplayLabel()} 퀴즈 준비</h2>
          <p class="stage-copy">${escapeHtml(getQuizIdleMessage())}</p>
        </div>
        <div class="prompt-frame">
          <div class="prompt-main is-text">Start</div>
        </div>
        <div class="info-panel">
          <h3 class="stage-heading">출제 방식</h3>
          <p class="stage-copy">${escapeHtml(
            state.category === "vocab"
              ? getVocabGroupMeta().description
              : CATEGORY_CONFIG[state.category].description
          )}</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="quiz-stage">
      <div>
        <h2 class="stage-heading">${getCategoryDisplayLabel()} 퀴즈</h2>
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
  mainCardLabel.textContent = `${getCategoryDisplayLabel()} ${state.mode === "learn" ? "학습" : "퀴즈"}`;
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
          ? `${getVocabGroupMeta().label} 묶음`
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
    if (state.vocabGroup === "daily") {
      return state.mode === "learn"
        ? [
            "일상 표현 묶음은 한 주제에 딱 고정하기 애매하지만 자주 쓰이는 단어를 모아둔 완충 카테고리입니다.",
            "대표 분류는 단순하게 유지하고, 태그에서 시간·사람·생활 물건처럼 겹치는 성격을 확인하세요.",
            "`ひと / ほん / おんがく`처럼 자주 나오는 단어는 짧은 문장으로 바로 연결해보면 기억이 오래 갑니다."
          ]
        : [
            "일상 표현 퀴즈는 뜻을 맞힌 뒤 태그를 보고 어떤 상황에서 쓰는지 같이 확인하세요.",
            "애매한 단어일수록 하나의 분류명보다 예문 속 사용 장면을 기억하는 편이 좋습니다.",
            "정답 확인 후 같은 태그의 단어를 학습 모드에서 이어 보면 복습 흐름이 자연스럽습니다."
          ];
    }

    if (state.vocabGroup === "time") {
      return state.mode === "learn"
        ? [
            "시간 단어는 `きのう / きょう / あした`처럼 과거, 현재, 미래 순서로 묶으면 빠르게 정리됩니다.",
            "`あさ / ひる / よる`는 하루 시간대, `せんしゅう / らいしゅう`는 주 단위 표현으로 나눠 외우세요.",
            "일정 표현은 `...に いきます`, 습관 표현은 `まいにち ...します`처럼 문장째 반복하면 좋습니다."
          ]
        : [
            "시간 퀴즈는 뜻을 맞힌 뒤 과거, 현재, 미래 중 어디에 속하는지 같이 확인하세요.",
            "`まいあさ / まいばん`처럼 반복을 나타내는 단어는 행동 동사와 함께 떠올리면 덜 헷갈립니다.",
            "오답이 난 단어는 같은 축의 반대말이나 이웃 단어와 세트로 다시 보세요."
          ];
    }

    if (state.vocabGroup === "weather") {
      return state.mode === "learn"
        ? [
            "날씨 단어는 `きょうは ... です` 패턴과 같이 묶어 외우면 회화 전환이 빠릅니다.",
            "`あめ / はれ / くもり / ゆき`처럼 서로 대비되는 단어를 세트로 반복하세요.",
            "예문을 읽을 때는 상태를 머릿속 장면으로 떠올리면 기억이 잘 남습니다."
          ]
        : [
            "날씨 묶음은 비슷한 문장 구조가 반복되니 뜻을 맞힌 뒤 예문도 같이 읽으세요.",
            "`눈`과 `비`처럼 헷갈리는 단어는 오답 후 바로 학습 모드에서 다시 확인하는 편이 좋습니다.",
            "형용사나 상태 명사는 `です`와 붙여서 소리 내면 정착이 빨라집니다."
          ];
    }

    if (state.vocabGroup === "number") {
      return state.mode === "learn"
        ? [
            "숫자는 단독 의미보다 `몇 개`, `몇 분` 같은 세트로 떠올리는 편이 오래 갑니다.",
            "`よん`처럼 실제 회화에서 더 자주 쓰는 읽기를 먼저 고정하세요.",
            "짧은 단어일수록 소리와 의미를 즉시 연결하는 훈련이 중요합니다."
          ]
        : [
            "숫자 퀴즈는 빠르게 대답해도 좋지만, 맞힌 뒤 발음을 한 번 더 읽어보는 편이 좋습니다.",
            "헷갈리면 한국어 숫자 순서를 세지 말고 일본어 표기 자체를 바로 인식하세요.",
            "숫자는 다음 단계에서 날짜와 시간 표현으로 확장하기 좋습니다."
          ];
    }

    if (state.vocabGroup === "emotion") {
      return state.mode === "learn"
        ? [
            "감정 형용사는 `...です` 형태로 통째로 외우면 바로 말하기에 쓸 수 있습니다.",
            "`うれしい / かなしい`처럼 반대 감정을 쌍으로 반복하면 기억이 오래 갑니다.",
            "`げんき`처럼 상태를 나타내는 표현은 인사 문장과 연결해보세요."
          ]
        : [
            "감정 단어는 의미만 맞히지 말고 어떤 상황에서 쓰는지도 같이 떠올려야 합니다.",
            "쉼표가 있는 뜻은 대표 의미만 맞혀도 되지만, 뉘앙스 차이는 학습 모드에서 다시 확인하세요.",
            "맞힌 뒤 `きょうは ... です`로 짧은 문장을 만들어보면 실전 전환이 빨라집니다."
          ];
    }

    if (state.vocabGroup === "body") {
      return state.mode === "learn"
        ? [
            "신체 단어는 `...が いたいです` 패턴과 묶으면 바로 상태 표현으로 확장됩니다.",
            "`め / て / は`처럼 짧은 단어는 글자 하나와 뜻을 빠르게 연결하는 연습에 좋습니다.",
            "얼굴, 몸통, 손발 태그를 기준으로 나눠 보면 비슷한 부위끼리 기억하기 쉽습니다."
          ]
        : [
            "신체 퀴즈는 뜻을 맞힌 뒤 예문에서 어떤 동사와 연결되는지 같이 확인하세요.",
            "`あし`처럼 발과 다리 둘 다 가능한 단어는 대표 의미를 넓게 받아들입니다.",
            "오답이 난 단어는 바로 `...が いたいです` 문장으로 한 번 말해보면 복습 효과가 좋습니다."
          ];
    }

    if (state.vocabGroup === "conjunction") {
      return state.mode === "learn"
        ? [
            "접속사는 뜻만 외우기보다 앞뒤 문장의 관계를 같이 잡아야 오래 갑니다.",
            "`でも / しかし`는 반대 흐름, `だから`는 이유와 결과, `それから`는 순서 연결로 묶어보세요.",
            "짧은 문장 두 개를 직접 이어 말해보면 실제 회화에서 바로 꺼내기 쉽습니다."
          ]
        : [
            "접속사 퀴즈는 한국어 뜻을 맞힌 뒤 예문 속 앞뒤 관계까지 확인하세요.",
            "비슷한 뜻이 있어도 문장 분위기가 다를 수 있으니 `でも`와 `しかし`를 비교해보면 좋습니다.",
            "정답 확인 후 같은 접속사로 새 문장을 하나 만들어보면 기억이 빠르게 고정됩니다."
          ];
    }

    return state.mode === "learn"
      ? [
          "단어는 `표기 + 읽기 + 뜻 + 예문`을 한 묶음으로 외우는 편이 오래 갑니다.",
          "뜻만 보지 말고 예문 속 조사까지 같이 보면 문법과 연결됩니다.",
          "하위 카테고리를 좁혀서 반복한 뒤 전체 묶음으로 다시 섞어보면 복습 효율이 높습니다."
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

function handleVocabGroupClick(event) {
  const button = event.target.closest("[data-vocab-group]");

  if (!button) {
    return;
  }

  setVocabGroup(button.dataset.vocabGroup);
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

vocabGroupToolbar.addEventListener("click", handleVocabGroupClick);
actionPanel.addEventListener("click", handleActionClick);
actionPanel.addEventListener("submit", handleActionSubmit);

resetQuiz();
renderApp();
