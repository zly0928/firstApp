<template>
    <div>
        <van-cell title="常用功能" is-link value="查看全部"/>
        <van-grid :column-num="3" :gutter="10">
        <van-grid-item v-for="value in list" :key="value" text="文字"  >
            <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />  
            {{value}}
        </van-grid-item>
        <!-- <van-grid-item  text="文字" />
        <van-grid-item  text="文字" />
        <van-grid-item  text="文字" /> -->
        </van-grid>
    <div>
        
    </div>
    </div>
</template>

<script>
import { image} from 'vant';
import Footer from "@/components/Footer";
export default {
    data(){
        return {
            list : ['1','2','3']
        }
    },
 components: {
        [image.name]:image,
        Footer
    },
}
</script>

