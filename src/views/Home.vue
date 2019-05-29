<template>
  <div class="home">
    <h1>JMTgram</h1>
    <p>존맛탱집을 공유하는 서비스</p>
    <LoginUser v-if="!loggedIn"></LoginUser>
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
.home {
  padding: 3rem;
}
</style>
