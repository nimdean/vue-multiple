// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Admin from './Admin';
import router from './router';
import './../../assets/css/common.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#admin',
  router,
  render: h => h(Admin)
})
