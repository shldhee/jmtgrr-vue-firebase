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
import { mapState } from 'vuex'

export default {
  computed: mapState(['getJMTZs'])
}
</script>
