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
    - 로그아웃시 로그인 화면으로 넘어감
    - 로그인 권한 있는 페이지에서 로그아웃 해도 로그인 화면으로 넘어감
- LOGIN 후 뒤로가기 할때 다시 로그인 페이지 나옴
- 알림
- form validation   
    - form
    - login, join



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
    ```js
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
        store.dispatch('getJMTZs').then(getJMTZs => {
            routeTo.params.getJMTZs = getJMTZs
            next()
        })
      }
    ```
    - `props: true`이면 `routeTo.params`가 `props`로 설정


- **mapState**
    - 같은 컴포넌트안에서 state의 다른 부분들의 접근할때 this.$store.state.something 이렇게 하면 너무 길고 반복적이라 비효율적이다.
    ```js
        computed: mapState(['getJMTZs'])
    ```
    
- **login유지**
    - firebase 세션 유지이용해야 될듯
    - 현재 localstorage로 하려다가 id, password 추가할려면 암호화해야 되므로 firebase로 설계를 다시 해야될듯하다.
    - 현재는 `router { meta }` 이용해서 로그인 화면으로

- **logout시 warning**
    - `vue.runtime.esm.js?2b0e:619 [Vue warn]: Missing required prop: "getJMTZs"`
    - 간헐적으로 발생하는데 확인필요

