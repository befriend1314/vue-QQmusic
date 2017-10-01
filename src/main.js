// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerOptions } from './options/index'

Vue.use(VueRouter)

const Outer = { template: '<router-view></router-view>' }
const router = new VueRouter(routerOptions)

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  ...Outer
})

app.$mount('#app')
