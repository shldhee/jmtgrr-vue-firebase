<template>
  <div class="home">
    <h1>JMTgram</h1>
    <p>존맛탱집을 가감없이 공유하는 서비스</p>
    <LoginUser v-if="!loggedIn"></LoginUser>
    <JMTZAll v-else></JMTZAll>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'
import LoginUser from './LoginUser.vue'
import JMTZAll from './JMTZAll.vue'
import NProgress from 'nprogress'

export default {
  components: { LoginUser, JMTZAll },
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
