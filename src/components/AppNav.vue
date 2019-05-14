<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>
    <template v-if="!loggedIn">
      <router-link to="/join">
        Join
      </router-link>
      <router-link to="/login">
        Login
      </router-link>
    </template>
    <template v-else>
      <router-link to="/jmtzcreate">
        JMTZCreate
      </router-link>
      <router-link to="/jmtzlist">
        JMTZList
      </router-link>
      <a href="#;" @click="logout">Logout</a>
    </template>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'

export default {
  mounted() {
    console.log('AppNav Mounted')
  },
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      console.log('Before dispatch user/logout')
      this.$store
        .dispatch('user/logout')
        .then(() => {
          this.$router.push({ name: 'home' })
          console.log('after dispatch user/logout and Before router push')
        })
        .catch(error => {
          console.log('There was en error : ', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 7rem;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #d2527f, #d91e18);
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
