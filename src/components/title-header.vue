<!--功能页面 头部组件-->
<template>
    <div class="headerC">
         <van-nav-bar
            :title="title"
            left-arrow
            @click-left="$router.go(-1)"
            />
    </div>
</template>

<script>
export default {
    props: ['title'], //通过props获取父组件传递过来的值
}
</script>

<style >

    .van-nav-bar {
    /* background: #043c80; */
    background: var(--borderColor)
  }
  .van-nav-bar__title{
          color: white;
  }
</style>


