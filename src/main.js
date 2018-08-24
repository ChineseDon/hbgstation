// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import vuecookies from 'vue-cookies'
import 'lib-flexible/flexible.js'
import '@/assets/stylus/index.styl'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import vconsole from 'vconsole'

let vConsole = new vconsole()
// import Vconsole from 'vconsole'
// if(process.env.NODE_ENV === 'development') {
//   let console = new Vconsole()
// }


Vue.config.productionTip = false

FastClick.attach(document.body)
Vue.use(mandMobile)
Vue.use(vuecookies)
// router.beforeEach((to, from ,next) => {
//   // 强制把url信息留在微信浏览器
//
//   // setTimeout(function () {
//   //   window.location.href = window.location.href;
//   // }, 200);
//   next()
// })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h( App )
}).$mount('#hbgstation')
