<template>
  <div class="notification_container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from './NotificationBar.vue'
import { mapState } from 'vuex'
export default {
  components: { NotificationBar },
  computed: mapState('notification', ['notifications'])
}
</script>

<style lang="scss" scoped>
.notification_container {
  position: fixed;
  bottom: 0;
}
</style>
