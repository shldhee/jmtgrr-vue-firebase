<template>
  <div>
    <h1>Load Items</h1>
    <div v-for="item in userItems" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userItems() {
      return this.$store.state.userItems
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    getItems() {
      this.$store.dispatch('getUserItems')
    }
  }
}
</script>
