<template>
  <div class="hello">
    <form @submit.prevent="join">
      <label for="userId">email</label>
      <input v-model="email" type="text" name="userEmail" id="userEmail" />
      <label for="userPwd">pasword</label>
      <input v-model="password" type="password" name="userPwd" id="userPwd" />
      <button type="submit" name="button">JOIN</button>
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
    join() {
      this.$store
        .dispatch('join', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'jmtzcreate' })
        })
        .catch(error => {
          console.log('There was an error in JoinUser : ', error.message)
        })
    }
  }
}
</script>
