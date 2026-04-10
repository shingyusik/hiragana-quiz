# Hiragana Quiz

히라가나, 카타카나, 단어, 문법을 한 화면에서 학습하고 퀴즈로 확인하는 정적 웹 페이지입니다.
랜덤으로 표시되는 문자나 단어를 보고 키보드로 답을 입력하면 정답 여부를 확인할 수 있습니다.

## 기능

- 히라가나 46자 랜덤 출제
- 영어 로마자 입력 지원
- 한국어 발음 입력 지원
- 단어 학습과 뜻 맞히기 퀴즈 지원
- 날씨, 숫자, 감정, 신체, 음식, 장소, 일상 표현, 자연, 접속사 단어 묶음 지원
- `정답 확인`, `정답 보기`, `다음 문제` 흐름 제공
- 정답 수, 연속 정답, 진행률 표시
- 별도 빌드 없이 실행 가능한 정적 페이지

## 실행 방법

가장 간단한 방법은 `index.html` 파일을 브라우저에서 바로 여는 것입니다.

파일 경로:

- [/Users/shinggyusik/Desktop/01_Project/hiragana-quiz/index.html](/Users/shinggyusik/Desktop/01_Project/hiragana-quiz/index.html)

로컬 서버로 실행하려면 프로젝트 폴더에서 아래 명령을 사용할 수 있습니다.

```bash
python3 -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000` 으로 접속하면 됩니다.

## 파일 구조

- [index.html](/Users/shinggyusik/Desktop/01_Project/hiragana-quiz/index.html): 페이지 구조와 퀴즈 UI
- [styles.css](/Users/shinggyusik/Desktop/01_Project/hiragana-quiz/styles.css): 레이아웃, 색상, 반응형 스타일
- [script.js](/Users/shinggyusik/Desktop/01_Project/hiragana-quiz/script.js): 히라가나 데이터와 퀴즈 로직

## 사용 방법

1. 상단 탭에서 학습할 과목을 고릅니다.
2. `학습` 탭에서 항목을 훑거나 `퀴즈` 탭에서 `퀴즈 시작`을 누릅니다.
3. 화면에 보이는 문자나 단어의 답을 입력합니다.
4. 알고 있으면 `정답 확인`, 모르겠으면 `정답 보기`를 누릅니다.
5. 결과를 확인한 뒤 `다음 문제`로 넘어갑니다.
6. 모든 문제를 풀면 `다시 섞기`로 새로 시작할 수 있습니다.

## 정답 입력 예시

- `し` → `shi`, `si`, `시`
- `ち` → `chi`, `ti`, `치`
- `つ` → `tsu`, `tu`, `츠`

입력값은 대소문자와 공백을 무시합니다.

## 커스터마이징

문제 데이터와 허용 답안은 [script.js](/Users/shinggyusik/Desktop/01_Project/hiragana-quiz/script.js) 상단의 문자 배열과 단어 배열에서 수정할 수 있습니다.

- 발음 표기 추가
- 특정 글자 제외 또는 추가
- 탁음, 반탁음, 요음 확장
- 단어 묶음과 허용 뜻 답안 추가
