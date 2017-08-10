// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/common/css/mui.css'
import '@/common/stylus/index.styl';

import mui from '@/common/js/mui.min.js'
Vue.prototype.mui = mui;

import '@/common/ali-icon/iconfont.css'

/*import fastclick from 'fastclick';
 fastclick.attach(document.body);*/

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
export default router;
