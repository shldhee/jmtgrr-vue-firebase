<template>
  <div>
    <h2>로그인이 무사히 되었습니다.^^</h2>
    <button @click="order(item)">Order</button>
  </div>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'

export default {
  computed: {
    ...authComputed
  },
  data() {
    return {
      item: {
        id: 1,
        name: 'lee',
        food: 'hamburger'
      }
    }
  },
  methods: {
    order(item) {
      if (this.loggedIn) {
        this.$store.dispatch('addItem', item)
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
