// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'      
import App from './App'
import Routers from './routers'


var app_ID = "AASA7rV2pTEtxwjBzJ5u2gOq-gzGzoHsz",
    app_KEY = "VQXAdsVwuYb1pUiCfi3bvOAu";
AV.init({
  appId: app_ID,
  appKey: app_KEY
})


Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
	routes: Routers,
	mode:"history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
})
