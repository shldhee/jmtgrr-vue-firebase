<template>
  <header class="header">
    <h1 class="header_logo-wrap">
      <router-link to="/" v-if="!loggedIn">
        <font-awesome-icon class="header_logo" icon="bolt" />
        JMTGram
      </router-link>
      <router-link to="/jmtzall" v-else
        ><font-awesome-icon class="header_logo" icon="bolt" />
        JMTGram</router-link
      >
    </h1>
    <nav class="nav">
      <router-link to="/" v-if="!loggedIn">Home</router-link>
      <router-link to="/jmtzall" v-else>Home</router-link>
      <!-- <router-link to="/jmtzall">
        JMTZ 리스트(전체)
      </router-link>-->
      <!-- <template v-if="!loggedIn">
        <router-link to="/join">가입</router-link>
        <router-link to="/login">로그인</router-link>
      </template>-->
      <template v-if="loggedIn">
        <router-link to="/jmtzcreate">등록</router-link>
        <router-link to="/jmtzlist">마이페이지</router-link>
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
  position: relative;
  // flex-direction: row;
  // align-items: center;
  padding: 0 2rem;
  // background: linear-gradient(to right, #d2527f, #d91e18);
  // background-color: #f3664e;
  border-bottom: 1px solid #0ed3d9;
  &_logo-wrap {
    > a {
      color: #0ed3d9;
      border: none;
      display: inline-flex;
      flex-direction: row;
      align-items: center;
    }

    > a:hover {
      color: #0ed3d9;
      border: none;
    }

    > a:hover > .header_logo {
      color: #0ed3d9;
    }

    color: #0ed3d9;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  &_logo {
    margin-right: 10px;
    color: #0ed3d9;
    font-size: 2rem;
    transition: all 1s;
  }
}

.nav {
  display: flex;
  align-items: center;
  min-height: 7rem;
  padding: 0.2em 1em;
  max-width: 1200px;
  margin: 0 auto;
  // margin-bottom: 5rem;
  justify-content: center;
}

a {
  font-size: 1.6rem;
  // font-weight: bold;
  color: #2e3131;
  margin: auto 1rem;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  transition: all 1s;

  &:hover {
    color: #0ed3d9;
    border-bottom: 2px solid #0ed3d9;
  }

  &:active {
    color: #0ed3d9;
    border-bottom: 2px solid #0ed3d9;
  }
}

.router-link-exact-active {
  color: #0ed3d9;
  border-bottom: 2px solid #0ed3d9;
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
