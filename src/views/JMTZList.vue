<template>
  <div>
    <h1>Load Items</h1>
    <div v-for="JMTZ in getJMTZs" :key="JMTZ.user">
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
  created() {
    console.log('Created!!')
  },
  beforeRouteUpdate() {
    console.log('beforeRouteUpdate', this.getJMTZs)
  },
  props: {
    getJMTZs: {
      type: Object,
      required: true
    }
  }
}
</script>
