<template>
  <div>
    <h1>Load Items</h1>
    <div v-for="JMTZ in userJMTZs" :key="JMTZ.user">
      {{ JMTZ.email }}
      {{ JMTZ.category }}
      {{ JMTZ.name }}
      {{ JMTZ.menu }}
      {{ JMTZ.price }}
      {{ JMTZ.location }}
      {{ JMTZ.memo }}
      {{ JMTZ.like }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userJMTZs() {
      return this.$store.state.getJMTZs
    }
  },
  mounted() {
    this.getJMTZs()
  },
  methods: {
    getJMTZs() {
      this.$store.dispatch('getJMTZs')
    }
  }
}
</script>
