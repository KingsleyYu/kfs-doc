// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/github-gist.css';

import MainHeader from './components/header'
import MainFooter from './components/footer'
import DemoBlock from './components/demo-block'
import SideNav from './components/side-nav'
import Phone from './components/phone'

Vue.config.productionTip = false

Vue.component('demo-block', DemoBlock)
Vue.component('main-header', MainHeader)
Vue.component('main-footer', MainFooter)
Vue.component('side-nav', SideNav)
Vue.component('phone', Phone)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
