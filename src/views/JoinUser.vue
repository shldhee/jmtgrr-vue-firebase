<template>
  <form @submit.prevent="join">
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

    <BaseButton type="submit">Join</BaseButton>
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
    join() {
      NProgress.start()
      this.$store
        .dispatch('user/join', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          // this.$router.push({ name: 'jmtzcreate' })
          this.$router.replace({ name: 'jmtzcreate' })
        })
        .catch(error => {
          NProgress.done()
          console.log('There was an error in JoinUser : ', error.message)
        })
    }
  }
}
</script>
