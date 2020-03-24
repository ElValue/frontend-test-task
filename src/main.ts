import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h: any) => h(App)
}).$mount('#app')
