<template>
  <form @submit.prevent="login">
    <div class="group">
      <label for="userId">email</label>
      <input v-model="email" type="text" name="userEmail" id="userEmail" />
    </div>
    <div class="group">
      <label for="userPwd">pasword</label>
      <input v-model="password" type="password" name="userPwd" id="userPwd" />
    </div>
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
