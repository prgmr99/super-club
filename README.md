# 슈퍼코딩의 포트폴리오 동아리 Projet 메인 사이트

## 폴더 컨벤션

- 폴더는 무조건 소문자로만 EX => pages
- 컴포넌트 파일은 무조건 PascalCase Ex => Todo.jsx
- style은 style폴더에 따로 EX => 스타일링 컴포넌트 아래 X
- 매 폴더에 index.js 생성 후 named export 방식으로 경로 설정

## 코드,변수 컨벤션

- .env, api, key는 무조건 대문자로만
- 함수명은 camelCase
- 컴포넌트, 생성자 함수, Class는 PascalCase
- Styled-components는 각 컴포넌트별로 생성 확장자는 js
- className은 BEM 방식
- 코드는 최대한 함수형으로 작성

## 커밋 컨벤션

- 기능별로 커밋(최대한 상세히)
- pull request시에는 팀원들과 이야기
- 기능 추가 feat #이슈번호 :
- 스타일 style #이슈번호 :
- 수정 fix #이슈번호 :
- 삭제 delete #이슈번호 :
- 문서관련 docs #이슈번호 :
- 테스트 test #이슈번호 :

## git branch 전략

- Github Flow
- devMain에서 기능별 브랜치 생성 -> pr후 삭제
- [참고](https://hudi.blog/git-branch-strategy/)

## 협업 컨벤션

- 모르는거 있음 바로 묻기
- 개인 아이디어 또는 방법 편하게 말하기.
- 소통 많이 하기.
