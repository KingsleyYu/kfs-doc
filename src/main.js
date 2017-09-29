// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import routes from './route.config';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/github-gist.css';

import MainHeader from './components/header'
import MainFooter from './components/footer'
import demoBlock from './components/demo-block'
import SideNav from './components/side-nav'
import Phone from './components/phone'

Vue.use(VueRouter);

Vue.config.productionTip = false

console.log('12345');
Vue.component('demo-block', demoBlock)
Vue.component('main-header', MainHeader)
Vue.component('main-footer', MainFooter)
Vue.component('side-nav', SideNav)
Vue.component('phone', Phone)


const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

// router.afterEach(route => {
//   const data = title[route.meta.lang];
//   for (let val in data) {
//     if (new RegExp('^' + val, 'g').test(route.name)) {
//       document.title = data[val];
//       return;
//     }
//   }
//   document.title = 'Element';
// });

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  render: h => h(App)
})

