import Vue from 'vue'
import './cube-ui/cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
