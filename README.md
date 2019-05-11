# jmt-vue-firebase

- vue, firebase 사용해 혼자만 알고 싶은 존맛탱 맛집 기록

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Todo

- BaseComponent 글로벌로 사용하기
  - `<BaseInput></BaseInput>` 클래스를 넣었는데 `input`에 적용되지 않고 `<div>`왜 적용될까?
  - `inheritAttrs` : this option does not affect class and style bindings.
- api 호출 시 성공, 실패 알림
- form validation

  - form
  - login, join

- 개인 취향 그래프? 도형?
- 음식고르기 랜덤

### Problem

- `rootState` `Vuex` 최상위 전체에서 접근 가능
  - `modeuls`에 `state` 접근할때 사용할때 사용

* **Global Before Guards**

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

* **Route Guard**
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
  - 같은 컴포넌트안에서 state의 다른 부분들의 접근할때 this.\$store.state.something 이렇게 하면 너무 길고 반복적이라 비효율적이다.
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

- **NProgress**

  - `NProgress.start()` 하고 라우트 레코드 meta 검사하여 로그인 권한이 필요한 페이지 분기처리할때
  - `login, join`에서는 component안에 적용

- getJMTZ에 아무것도 없을때 워닝 required때문인듯 확인 요망
- `this.$emit('input', event.target.value)` `input`에 대해 다시 보기
  - 해결 : `v-model`이 `input` 이벤트를 받는다.

### Done

- LOGIN 버튼 누르면 바로 넘어감 또는 기존 DB 가지고 있음(로그아웃시)
- 로그아웃시 로그인 화면으로 넘어감
- 로그인 권한 있는 페이지에서 로그아웃 해도 로그인 화면으로 넘어감
  - 해결 : `router meta 사용`
    ```js
    meta: {
        authRequired: true
    },
    router.beforeEach((routeTo, routeFrom, next) => {
        NProgress.start()
        // console.log(authComputed.loggedIn())
        // console.log({ ...authComputed })
        // console.log(!authComputed.loggedIn())
        // console.log(store.state.user.isAuthenticated)
        // console.log(!store.state.user.isAuthenticated)
        if (routeTo.matched.some(record => record.meta.authRequired)) {
            if (!store.state.user.isAuthenticated) {
            next({
                path: '/login'
            })
            } else {
            next()
            }
        } else {
            next()
        }
        })
    ```
- LOGIN 후 뒤로가기 할때 다시 로그인 페이지 나옴

  - 해결 : **router.replace 사용**
    - https://router.vuejs.org/kr/guide/essentials/navigation.html

- 속성 바인딩
  - `v-bind:categories="categories`를 통해 자식에 `BaseSelect`에 전달
    - `categories="categories"`가 되는줄알았는데 문자열만 가능
