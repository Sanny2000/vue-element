// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies' // 引入cookies 插件
Vue.use(VueCookies);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios =axios;
Vue.prototype.axios = axios; //修改原型链
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

