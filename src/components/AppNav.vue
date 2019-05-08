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
      <a href="#;" @click="logout">Logout</a>
      <router-link to="/jmtzcreate">
        JMTZCreate
      </router-link>
      <router-link to="/jmtzshow">
        JMTZShow
      </router-link>
    </template>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'

export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}

.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}

.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}

button,
.button {
  cursor: pointer;
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;

  &.router-link-active {
    color: #2c3e50;
  }
}

.logoutButton {
  cursor: pointer;
}

.nav-welcome + button {
  margin-left: 0;
}
</style>
