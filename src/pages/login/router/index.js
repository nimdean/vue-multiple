import Vue from 'vue';
import Router from 'vue-router';
import login from '../views/login';
import findPassword from '../views/findPassword';
import regist from '../views/regist';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login',
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword
    },{
      path: '/regist',
      name: 'regist',
      component: regist
    }
  ]
})
