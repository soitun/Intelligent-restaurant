import Vue from 'vue'
import Router from 'vue-router'
import api from '../fetch/api';

//home
import goodsList from '@/page/goods/list'
import login from '@/page/login/login'
import mine from '@/page/mine/mine'
import orderList from '@/page/order/orderList'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
  ]
});

router.beforeEach((to, from, next) => {
  //如果路由中设置了meta.requiresAuth 即 需要token验证 ， 若token 不存在 则重定向至 登录界面
  if (to.matched.some(record => record.meta.requiresAuth) && !api.getCookie('token')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next() // 确保一定要调用 next()
  }
});

export default router;
