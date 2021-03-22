// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
require('./mock/index')
require('./mock/userInfo')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
  // Antd
})
Vue.use(Antd)
