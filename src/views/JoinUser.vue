<template>
  <form @submit.prevent="join">
    <div class="group">
      <label for="userId">email</label>
      <input v-model="email" type="text" name="userEmail" id="userEmail" />
    </div>
    <div class="group">
      <label for="userPwd">pasword</label>
      <input v-model="password" type="password" name="userPwd" id="userPwd" />
    </div>
    <button type="submit" name="button">JOIN</button>
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
