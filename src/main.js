import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;  //使用this.$http.post发送post请求，需要让发出的post请求不会被浏览器转换成option请求

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
