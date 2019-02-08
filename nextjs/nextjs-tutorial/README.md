# nextjs-tutorial

## 정리

- `~/pages/**` 를 참조해서 클라이언트 페이지를 생성함

- `import Link from 'next/link'` 와 같은 내장 컴포넌트가 제공됨
   -  `<Link />` 를 통해 react-router 를 구현할수 있음
   -  `<Link />` 는 HOC 로 동작하므로, 스타일링은 컴포넌트에 직접 적용해야함
   -  `<Link />` 에 대한 유일한 요구사항은 onClick 속성을 가질수있는 DOM 이어야 한다는 것임

- `~/components/**` 에서 `~/pages/**` 에서 사용할 공통 컴포넌트를 관리할수 있음
   - 디렉토리명에 대한 제한은 없음
   - 디렉토리명 제한사항은 `~/pages/**` 가 유일함
   - `~/pages/**` 안에 `~/components/**` 가 위치할 수도 있음

- `import { withRouter } from 'next/router'` 를 통해 react-router 의 리소스에 접근할 수 있음
  - `{props.router.query.title}` 와 같은 방식으로 쿼리스트링 파라미터에 접근할 수 있음

-  `<Link as={"/p/hello-nextjs"} href={"/post?title=Hello%20Next.js"}>` 와 같이 URL 에 대한 alias 를 설정할 수 있음
  - `as` 속성은 브라우저에 표시되는 URL 값이고, `href` 속성은 어플리케이션에서 사용하는 URL 임
  - 내부적으로 browser history 를 사용해서 동작함

- `<Link as={}>` 속성을 설정했을때, 브라우저를 새로고침하면 404 에러가 발생함
   - 이는 브라우저 새로고침으로 다시 전달받은 URL 을 기준으로 `~/pages/**` 에서 페이지를 찾기때문에 발생하는 문제임

- 서버코드를 커스터마이징하는것으로 브라우저 URL 과 `~/pages/**` 경로 불일치 문제를 해결할 수 있음  
  (참고: https://github.com/zeit/next.js#custom-server-and-routing)
  - 예를들어, 서버에서 `HTTP GET /p/:id` 와 같은 요청을 받으면 내부적으로 `HTTP GET /post/:id` 인 것처럼 react-router 에게 전달하도록 전처리 할 수 있음
```javascript
server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id } 
  app.render(req, res, actualPage, queryParams)
})
```

- `Component.getInitialProps` 를 통해 컴포넌트 초기값 설정 같은 전처리 작업이 가능함
  - 예를 들어, 브라우저 새로고침과 같은 깨끗한 컴포넌트를 요청하는 상황에서 서버사이드에서는 해당 페이지의 컴포넌트 일부분을 렌더링 한 다음 반환하게 되는데, 이때 `Component.getInitialProps` 와 함께 다른 컴포넌트 라이프사이클 함수들이 호출됨
  - 서버사이드에서 호출되는 함수를 통해서 초기데이터를 미리 바인딩해 놓을 수 있음
  - 크롤링 봇 등이 SSR 기반 페이지를 수집할 수 있는 이유가 여기에 있음
  
- SSR 중에 호출되는 몇몇 라이프사이클 함수는 클라이언트사이드에서는 호출되지 않을 수 있음
  - 서버사이드에서 동작하는 라이프사이클 함수
    - 최초 요청 & 새로고침했을 때 : getInitialProps → componentWillMount → render
  - 클라이언트사이드에서 동작하는 라이프사이클 함수  
    - 새로고침했을 때 : componentWillMount → render → componentDidMount
    - 다른페이지로 이동했을 때 : componentWillUnmount
    - 다른페이지에서 돌아왔을 때 : getInitialProps → componentWillMount → render → componentDidMount

- `next build` 을 통해 프로젝트를 빌드한 다음 `next start -p 3000` 을 통해 빌드된 프로젝트를 서비스할 수 있음
  - 빌드와 배포에는 환경변수를 production 으로 지정하는것을 권장함
  - 한번 빌드한 프로젝트는 몇번이고 서비스 인스턴스로 만들수있음 (horizontally scale)


## 참고

> https://nextjs.org/learn  
> https://github.com/zeit/next.js#fetching-data-and-component-lifecycle  

