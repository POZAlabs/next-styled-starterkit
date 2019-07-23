# Goal
* `SSR` + `Typescript` + `React` 기반 프론트엔드 프로젝트를 위한 보일러플레이트
* Pozalabs 프론트엔드에서 공통적으로 사용하는 라이브러리를 포함
--- 

# How To Use
* `yarn install` || `npm install`
* `yarn run dev` || `npm run dev`
* [`localhost:3000`](http://localhost:3000/)으로 접속해 정상적으로 실행되는지 확인
---

# Library List
- Core
  - react 
  - next.js
  - typescript

- State Management
  - redux
  - react-redux

- CSS
  - styled-components
  - NomalizeCSS

- Test
  - jest
  - @testing-library/react
  - jest-dom

- Network
  - axios

- Env
  - dotenv-webpack
---

# Scripts
> 💡 yarn을 이용해서 구현한 보일러플레이트이기 때문에 yarn을 기준으로 작성했습니다.

- `yarn install`: 보일러플레이트를 사용하기 위한 라이브러리 설치
- `yarn run dev` : localhost환경에서 실행
- `yarn run build` : 배포를 위한 빌드
<!-- - `yarn run start:staging`: staging서버를 통한 배포 -->
- `yarn run test` : jest를 통한 실시간 테스트
- `yarn run test:once` : jest를 통한 테스트 ☞ 전체 파일에 대한 테스트를 한번 진행합니다.
- `yarn run type-check`: typescript cli를 통한 `.ts`, `.tsx` 파일 컴파일 및 타입 체크
--- 
