# 🐱JMTZ

- 혼자만 알고 싶은 존맛탱 맛집 기록 with Vue, Firebase https://jmtgrr.firebaseapp.com
- 가입, 로그인(로그아웃), 존맛탱집 작성, 존맛탱집 리스트

## 🐶개발 환경

- Vue(VueCLI)
- Vuex
- Firebase
- Chart.js
- NProgress
- lodash

## 🐭설치 방법

```
npm install
npm run serve
```

## 🐹사용 예제

- 스크린샷

## 🐰업데이트 내역

- 

## 🐺해야 할 일

 - [ ] 음식고르기 랜덤(JMTZ LIST 개인)
 - [ ] 전체 리스트 공유(JTMZ ALL 생성)
 - [ ] 이메일 인증(FIREBASE 활용)
 - [ ] 비밀번호 찾기(FIREBASE 활용)
 - [ ] 리스트 수정
 - [ ] FIREBASE API KEY 확인

## 🐸문제

- **logout시 warning**
  - `vue.runtime.esm.js?2b0e:619 [Vue warn]: Missing required prop: "getJMTZs"`
  - 간헐적으로 발생하는데 확인필요

## 🐯완료, 문제 해결 및 학습 내용

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

  - `/modules/user.js/`에 있는 state.user에 접근할떄(namespaced)
    ```js
    template
    $store.state.user.user

    script
    this.$store.state.user.user
    ```

- **login유지**
  - firebase 세션 유지이용해야 될듯
  - 현재 localstorage로 하려다가 id, password 추가할려면 암호화해야 되므로 firebase로 설계를 다시 해야될듯하다.
  - 현재는 `router { meta }` 이용해서 로그인 화면으로

- **NProgress**

  - `NProgress.start()` 하고 라우트 레코드 meta 검사하여 로그인 권한이 필요한 페이지 분기처리할때
  - `login, join`에서는 component안에 적용

- getJMTZ에 아무것도 없을때 워닝 required때문인듯 확인 요망
- `this.$emit('input', event.target.value)` `input`에 대해 다시 보기
  - 해결 : `v-model`이 `input` 이벤트를 받는다.

- input validate error
  - v-model에서 신택스슈가에서
    :value="event.title"
    @input="(value) => { event.title = value }" 이걸로 input 이벤트 발생하는데
    v-on="\$listeneres"로 다시 input를 받으니깐 중복!
- LOGIN 버튼 누르면 바로 넘어감 또는 기존 DB 가지고 있음(로그아웃시), 로그아웃시 로그인 화면으로 넘어감, 로그인 권한 있는 페이지에서 로그아웃 해도 로그인 화면으로 넘어감
  - 해결 : `router meta 사용`
    ```js
    // 예제
    const router = new VueRouter({
        routes: [
            {
            path: '/foo',
            component: Foo,
            children: [
                {
                path: 'bar',
                component: Bar,
                // 메타 필드
                meta: { requiresAuth: true }
                }
            ]
            }
        ]
    })
    ```

    - `routes` 객체를 **라우트 레코드**라고 합니다. 중첩이 가능, 따라서 `/foo/bar`의 경우는 `/foo`,`/bar` 둘다 일치
    - `routeTo.matched`는 라우트와 일치하는 모든 라이트 코드를 배열로 노출, 여기서 meta 속성접근하여 검사


    ```js
    meta: {
        authRequired: true
    },
    router.beforeEach((routeTo, routeFrom, next) => {
        NProgress.start()
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

- BaseComponent 글로벌로 사용하기
  - `<BaseInput></BaseInput>` 클래스를 넣었는데 `input`에 적용되지 않고 `<div>`왜 적용될까?
  - `inheritAttrs` : this option does not affect class and style bindings.

- form validation
  - vuelidate 사용
  - @blur, \$linsters 이벤트 충돌, computed로 해결
  - validations, JMTZObject로 접근
  - blur : 클릭했다 나가면, 즉 한번 터치하고 나가게 되면 touch 적용
    - 그러면 \$dirty true 말그대로 더럽게됐다. 한번 건들였다.
    - $error : this.$dirty && !this.$pending && this.$invalid. 여기서 dirty, invalid 사용해 에러 발생. 처음 로드되자마자 에러 메세지 뜨면 안되니 터치된 후 적용하기

- api 호출 시 성공, 실패 알림, 중복 이메일
    - `NotificationContainer, NotificationBar` 컴포넌트 생성하여 `dispatch-> commit`으로 Vuex 관리

- 개인 통계 그래프
    - https://www.chartjs.org/docs/latest/charts/doughnut.html
    - https://vue-chartjs.org/guide/#troubleshooting
    - https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/