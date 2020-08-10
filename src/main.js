// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// webpack.base.conf 这个文件中，有设置import相关的内容 包括：别名、@、后缀
import Vue from 'vue';
import App from './App';
import router from './router'
import pageTitle from '@/components/pageTitle'
 import axios from 'axios'

import { Grid, GridItem } from 'vant';
// rem
import "amfe-flexible";
import "@/components/Vant";

import '@/assets/css/curs.css'

require('./assets/mock')

Vue.use(Grid);
Vue.use(GridItem);
 Vue.prototype.$axios = axios


Vue.config.productionTip = false   // 在生产环境下把注释全部去掉
Vue.component('pageTitle',pageTitle)    // 注册全局组件


/* eslint-disable no-new */
new Vue({
  el: '#app',//el 参数，它是 DOM 元素中的 id.意味着我们接下来的改动全部在以上指定的 div 内，div 外部不受影响
  router,
  components: { App },
  template: '<App/>'
})
