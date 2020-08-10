<!-- 开立账户 -->
<template>
    <div>
    <!-- <div>
         <van-nav-bar
            :title="msg"
            left-arrow
            @click-left="$router.go(-1)"
            />
    </div> -->
     <titleHeader :title = "msg"></titleHeader> <!--//向子组件传值 -->
    <div>
        <van-cell >
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
            <template #right-icon>
                <van-icon name="search" class="search=icon" @click="showPopup"/>
            </template>
        </van-cell>

        <van-collapse v-model="activeNames">
            <van-collapse-item name="1" v-for="itemR in listRow" :key="itemR.id">
                <van-cell   title="服务商代码1" :value="itemR.f1"/>
                 <van-cell   title="航空公司代码" :value="itemR.f2"/>
            </van-collapse-item>
            <!-- <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item> -->
        </van-collapse>



        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
            <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
                <van-cell v-for="item in list" :key="item" :title="item" />
            <!-- </van-list> -->
        </van-popup>
    </div>
    <div>
        <Footer/>
    </div>
         
    </div>
</template>
<script>
import Footer from "@/components/Footer";
import axios from 'axios';
import titleHeader from "@/components/title-header"  //引用子组件页面

    export default {
        data () {
            return {
                msg: this.$route.query.nm,
                show: false,
                 //list:['服务商代码','航空公司代码','开账周期','预付快设定额','币种','预付快期限','备注'],
                list:[],
                listRow:[{'id':'1','f1':'v50','f2':'zs'}],
                value1: '',
                value2: 'a',
                option1: [
                    { text: '', value: '' },
                    { text: '全部商品', value: 1 },
                    { text: '新款商品', value: 2 },
                    { text: '活动商品', value: 3 },
                ],
                option2: [
                    { text: '默认排序', value: 'a' },
                    { text: '好评排序', value: 'b' },
                    { text: '销量排序', value: 'c' },
                ],
                activeNames: ['1'],
            }
        },
        methods: {
            showPopup() {
            this.show = true;
            },
        },
        components: {
            Footer,
            titleHeader
        },
        created() {
            axios.get('/phone')
            .then(res => {
                this.list = res.data.data;
                console.log(this.list);
            });
        },
        //  methods: {
        //     onClickLeft() {
        //         console.log('返回');
        //     //Toast();
        //     },
           
        // },
    }
</script>