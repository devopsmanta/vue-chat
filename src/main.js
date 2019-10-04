import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueChatScroll from 'vue-chat-scroll'

Vue.config.productionTip = false

Vue.use(VueChatScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
