<template>
<div>
    <van-tabbar route>
        <van-tabbar-item  to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item  to="/Menu" icon="search">菜单</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar> 
</div>
</template>

<script>
import { Tabbar,TabbarItem } from 'vant';
export default {
    name :'footer',
     components: {
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    },
    data() {
    return {
      active: 0,
    };
  },
    
}
</script>

    

