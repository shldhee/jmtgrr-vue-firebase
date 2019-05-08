<template>
  <div class="hello">
    <form @submit.prevent="login">
      <label for="userId">email</label>
      <input v-model="email" type="text" name="userEmail" id="userEmail" />
      <label for="userPwd">pasword</label>
      <input v-model="password" type="password" name="userPwd" id="userPwd" />
      <button type="submit" name="button">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'jmtzlist' })
        })
    }
  }
}
</script>
