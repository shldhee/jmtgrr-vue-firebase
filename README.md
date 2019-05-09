# jmt-vue-firebase

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Working

- LOGIN 버튼 누르면 바로 넘어감 또는 기존 DB 가지고 있음(로그아웃시)

### Problem

- `rootState` `Vuex` 최상위 전체에서 접근 가능
    - `modeuls`에 `state` 접근할때 사용할때 사용


- **Global Before Guards**
    - 전역등록
    - `beforeEach` : navigation이 될때마다 creation order에 따라 호출되어진다. 비동기이며 모든 hooks이 resolved되기전까지 navigation은 pending(대기)된다.
    - 3개의 인자를 받는다.(`to, from, next`)
    - `to`: 현재 이동할(되어진) Route
    - `from`: 현재 Route 이동하기전 Route
    - `next`: hook을 해결하기 위해 반드시 호출되어야 한다. `next`에는 몇가지 인자를 제공
        - `next()`
        - `next(false)`
        - `next('/') or next({path:'/'})`
        - `next(error)`

    - 참고 : https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

- **Route Guard**
    - `router.js` 라우트의 설정 객체에 직접 정의
    - `beforeEnter` : 전역 가드와 같은 signature? 역할?


- **mapState**
    - 같은 컴포넌트안에서 state의 다른 부분들의 접근할때 this.$store.state.something 이렇게 하면 너무 길고 반복적이라 비효율적이다.
    ```js
        computed: mapState(['getJMTZs'])
    ```
    