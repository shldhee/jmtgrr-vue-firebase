<template>
  <div>
    <h1>Load Items</h1>
    <div v-for="item in userItems" :key="item.user">
      {{ item.email }}
      {{ item.category }}
      {{ item.name }}
      {{ item.menu }}
      {{ item.price }}
      {{ item.location }}
      {{ item.memo }}
      {{ item.like }}
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
