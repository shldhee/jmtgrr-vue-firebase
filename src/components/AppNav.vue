<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/jmtzall">
        JMTZ 리스트(전체)
      </router-link>
      <template v-if="!loggedIn">
        <router-link to="/join">
          가입
        </router-link>
        <router-link to="/login">
          로그인
        </router-link>
      </template>
      <template v-else>
        <router-link to="/jmtzcreate">
          JMTZ 등록
        </router-link>
        <router-link to="/jmtzlist">
          JMTZ 리스트(개인)
        </router-link>
        <a href="#;" @click="logout">Logout</a>
      </template>
    </nav>
  </header>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'

export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          console.log('There was en error : ', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  // background: linear-gradient(to right, #d2527f, #d91e18);
  background-color: #f3664e;
}

.nav {
  display: flex;
  align-items: center;
  min-height: 7rem;
  padding: 0.2em 1em;
  max-width: 1200px;
  margin: 0 auto;
  // margin-bottom: 5rem;
}

a {
  font-size: 2.8rem;
  // font-weight: bold;
  color: #2e3131;
  margin: auto 1rem;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 1s;

  &:hover {
    color: white;
    border-bottom: 2px solid #fff;
  }

  &:active {
    color: white;
    border-bottom: 2px solid #fff;
  }
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
