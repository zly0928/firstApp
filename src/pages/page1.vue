<template>
  <div>
    <div class="pageTitle">猫眼电影</div>
    <ul class="topNav">
      <li :class="[showHot==1?'active':'']" @click="showHot=1">蓝色</li>
      <li :class="[showHot==0?'active':'']" @click="showHot=0">红色</li>
    </ul>
    <div class="main">
      <BluePage v-show="showHot==1"></BluePage>
      <RedPage v-show="showHot==0"></RedPage>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
//组件化开发, 在需要的地方1）引入组件  2）components 申明 3）<RedPage>  ？？？   组件引入理解的应该是类似于 头部、底部这样的
import BluePage from '@/pages/BluePage';
import RedPage from '@/pages/RedPage';
import Footer from "@/components/Footer";

export default {
  name: "page1",
  components: {
    BluePage,RedPage,Footer
  },
  data() {
    return {
      showHot:1
    };
  }
};
</script>
<style scoped>
/** 其他样式代码已注释，demo有完整代码 **/
.active{
  color: rgb(229, 72, 71);
  border-bottom: 2px solid rgb(229, 72, 71);
}
</style>