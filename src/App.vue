<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- router-link定义页面中点击触发部分　　 -->
    <!-- <div>
      <router-link to="/"></router-link>
    </div> -->

    <!-- <router-link to="/page1">Page1</router-link> -->
      <!-- <router-link to="/page2">Page2</router-link> -->

    <!-- //添加两个router-link标签 -->
    <!-- <div>
      <router-link to="/user/xianyu">动态路由咸鱼</router-link>
      <router-link to="/user/mengxiang">动态路由梦想</router-link>
    </div> -->
<!-- router-view定义页面中显示部分 -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Footer
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
