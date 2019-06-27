<template>
  <div id="app">
    <app-nav />
    <NotificationContainer />
    <div class="main">
      <router-view class="container" />
    </div>
    <div class="fixed">
      <ul class="fixed_list">
        <!-- <li class="fixed_item">JMTgram</li> -->
        <li class="fixed_item fixed_item-sns">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
        </li>
        <li class="fixed_item">© 2019 JMTgram</li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import NotificationContainer from './components/NotificationContainer'

export default {
  components: { AppNav, NotificationContainer }
}
</script>

<style lang="scss">
@import './assets/style.scss';
</style>
