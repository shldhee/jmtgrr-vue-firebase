<template>
  <div class="notification_bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  computed: {
    notificationTypeClass() {
      return `notification_bar-${this.notification.type}`
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: mapActions('notification', ['remove'])
}
</script>

<style lang="scss" scoped>
.notification_bar {
  margin: 1rem 0;
}
.notification_bar-error {
  color: coral;
}
.notification_bar-success {
  color: darkcyan;
}
</style>
