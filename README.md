# NextCreator Pro 소개 페이지

Resend의 검은 배경, 큰 제목, 넓은 여백, 단계별 시연 구성을 참고해 만든 독립적인 정적 랜딩 페이지입니다. 첨부 화면의 로고·제품 그래픽·문구는 복제하지 않았습니다.

## 실행

`index.html`을 브라우저에서 열면 됩니다. 로컬 서버로 확인하려면 폴더에서 다음을 실행하세요.

```bash
python3 -m http.server 8000
```

그다음 `http://localhost:8000`에 접속합니다. Node.js나 패키지 설치가 필요하지 않습니다.

## 파일 구조

- `index.html`: 문구, 섹션, 링크 및 접근성 구조
- `style.css`: 색상, 반응형 레이아웃, 순수 CSS 장면 그래픽
- `app.js`: 제작 단계 탭과 모바일 메뉴

외부 리소스는 Google Fonts뿐입니다. 접속이 차단되어도 시스템 글꼴로 표시됩니다. 장면 그래픽은 앱의 실제 결과물이 아닌 CSS 예시입니다.

## 수정하기

1. 제목·설명·버튼 문구는 `index.html`에서 편집합니다.
2. 색상은 `style.css` 맨 위의 `:root` 변수를 바꿉니다.
3. 단계별 시연 문구는 `app.js`의 `steps` 배열을 수정합니다.
4. 앱 주소가 변경되면 `index.html`의 `https://next-creator-pro.vercel.app/` 링크를 교체합니다.

## 배포

GitHub 저장소에 세 파일을 업로드합니다. Vercel에서 저장소를 연결하고 Framework Preset을 `Other`로 선택합니다. Build Command는 비워두고 Output Directory는 `.`으로 설정하면 됩니다. 별도 API, 비밀 키, 데이터베이스는 이 소개 페이지에 필요하지 않습니다.

## 확인 항목

- 데스크톱과 모바일에서 가로 스크롤이 없는지 확인
- 메뉴 버튼과 제작 단계 탭을 키보드로 조작해 보기
- 스튜디오·갤러리 버튼이 실제 앱으로 연결되는지 확인
- 배포 후 메타 제목과 설명 확인

참조: [Resend](https://resend.com/) · [NextCreator Pro Studio](https://next-creator-pro.vercel.app/studio) · [Gallery](https://next-creator-pro.vercel.app/gallery)
