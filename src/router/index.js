// 路由的引入、定义
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import page1 from '@/pages/page1';
import detail from '@/pages/detail';
import FirstPage from '@/pages/FirstPage';
import Menu from '../pages/Menu.vue';
import openBank from '@/pages/open-bank.vue';
import capitalReportAbroad from '@/pages/capital-report-abroad.vue';

Vue.use(Router)

export default new Router({
  base: '/aoxinwechat/',  //项目名称 访问路由页面都需要加上这个,访问的根路径为http://ip:port/webSite ,即相当于根路径为这个
  mode: 'history',//消去#
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',    // 碰到这个路径跳转路由至page1
    //   name: 'page1',   // 给这个路由取的一个别名
    //   component: page1    // 代表在当前路径下，加载page1路由
    // },
    {
      path: '/',    // 碰到这个路径跳转路由至page1
      name: 'FirstPage',   // 给这个路由取的一个别名
      component: FirstPage    // 代表在当前路径下，加载page1路由
    },
    {
    	path:'/movieDetail',
    	name: 'detail',
    	component: detail
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/openBank',
      name: 'openBank',
      component: openBank
    },
    {
      path: '/capitalReportAbroad',
      name: 'capitalReportAbroad',
      component: capitalReportAbroad
    }
  ]
})

//
// 0. 如果使用模块化机制编程，导入 Vue 和 VueRouter，要调用 Vue.use(VueRouter)
// 1. 定义（路由）组件。可以从其他文件 import 进来    如： import HelloWorld
// 2. 创建 router 实例 new Router ，然后传 `routes` 配置
// 3. 创建和挂载根实例。  在 new Vue中通过 router 配置参数注入路由
