import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import page1 from '../pages/page1.vue';
import page2 from '../pages/page2.vue';
import user from '../pages/user.vue';
import phone from '../pages/phone.vue';
import computer from '../pages/computer.vue';
import RedPage from '../pages/RedPage.vue';
import BluePage from '../pages/BluePage.vue';
import Home from '../pages/home.vue';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
          },
            {
            path: '/red',
            name: 'red',
            component: RedPage
          },
            {
            path: '/blue',
            name: 'blue',
            component: BluePage
          },
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // },
        // {
        //     path: '/page1',
        //     name: 'page1',
        //     component: page1,
        //     children: [
        //         {
        //             path: "phone",
        //             component: phone
        //         },
        //         {
        //             path: "computer",
        //             component: computer
        //         },
        //     ]
        // },
        // {
        //     path: '/page2',
        //     name: 'page2',
        //     component: page2
        // },
        // //使用冒号标记，当匹配到的时候，参数值会被设置到this.$route.params中
        // {
        //     path: '/user/:name',
        //     name: 'user',
        //     component: user
        // }
    ]
})

// 0. 如果使用模块化机制编程，导入 Vue 和 VueRouter，要调用 Vue.use(VueRouter)
// 1. 定义（路由）组件。可以从其他文件 import 进来    如： import HelloWorld
// 2. 创建 router 实例 new Router ，然后传 `routes` 配置
// 3. 创建和挂载根实例。  在 new Vue中通过 router 配置参数注入路由
