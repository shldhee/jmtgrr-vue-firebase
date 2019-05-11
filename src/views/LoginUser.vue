<template>
  <form @submit.prevent="login">
    <BaseInput
      label="userEmail"
      title="email"
      v-model="email"
      placeholder="이메일을 입력해주세요"
      type="text"
      class="group"
    />

    <BaseInput
      label="userPwd"
      title="password"
      v-model="password"
      placeholder="비밀번호를 입력해주세요"
      type="password"
      class="group"
    />
    <button type="submit" name="button">LOGIN</button>
  </form>
</template>

<script>
import NProgress from 'nprogress'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      NProgress.start()
      this.$store
        .dispatch('user/login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          // this.$router.push({ name: 'jmtzlist' })
          this.$router.replace({ name: 'jmtzlist' })
        })
        .catch(() => {
          NProgress.done()
        })
    }
  }
}
</script>
