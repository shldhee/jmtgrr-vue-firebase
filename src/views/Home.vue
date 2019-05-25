<template>
  <div class="home">
    <h1>JMTgram</h1>
    <p>존맛탱집을 가감없이 공유하는 서비스</p>
    <login-user v-if="!loggedIn"></login-user>
    <router-view />
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
import LoginUser from './LoginUser.vue'
import NProgress from 'nprogress'

export default {
  components: { LoginUser },
  computed: {
    ...authComputed
  },
  watch: {
    loggedIn: function() {
      NProgress.done()
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
