import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var firebaseConfig = {
  apiKey: 'AIzaSyCW6WKT3O2rI8hAR9QJjPt8u_Rj9M20u9A',
  authDomain: 'jmt-vue-firebase.firebaseapp.com',
  databaseURL: 'https://jmt-vue-firebase.firebaseio.com',
  projectId: 'jmt-vue-firebase',
  storageBucket: 'jmt-vue-firebase.appspot.com',
  messagingSenderId: '455230855717',
  appId: '1:455230855717:web:86ec32e2ad834086'
}
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
