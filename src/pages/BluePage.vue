<template>
    <div class="blue-page">
        <h3>蓝色 正在热映的电影</h3>
        <movie-list v-for="(h_item,index) in hotList" :key="index" :mitem="h_item"></movie-list>
        <!-- <button @click='$router.push({name:"detail"})'>点击进入电影详情页</button> -->
        <van-button type="default">默认按钮</van-button>
    </div>
</template>
<script>
//$router.push() 属于编程式路由
//如果要跳转一个路由，可以使用router-link的方式进行跳转，可是这样做有一定的局限性，假设，我们希望在进行路由跳转传入一些参数进去，
//为了解决这一个问题，vue-router就推出了编程式路由，以编程的形式解决路由的跳转问题
//1.可通过path跳转 this.$router.push({path: "/login"});
//2、 通过name去跳转 ，this.$router.push({name: "login",query: {id: user.id}});
//路由跳转后，地址栏会有变化
    import movieList from "@/components/movieList"; //引入组件
    import axios from 'axios';
    import { Button, Cell } from 'vant';
    
    export default {
        name: "BluePage",
        data() {
            return {
            // hotList: [{'nm':'妇联1','showInfo':'主演小罗'},{'nm':'反贪风暴','showInfo':'古天乐'}]
            hotList: []
            };
        },
        components: {
            movieList,  //注册组件
            [Button.name]:Button
        },
        created() {
        axios
         .get("assets/mock-data/list.json")
         .then(res => {
            this.hotList = res.data;
         });
   },
    }
</script>


