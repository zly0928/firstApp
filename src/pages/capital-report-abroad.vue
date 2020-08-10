<!-- 资金报告 -->
<template>

  <div>
    <titleHeader :title="msg"></titleHeader>
    <!--//向子组件传值 -->

    <div class="caption-flex">
      <van-tabs v-model="active" @change="onchange">
        <van-tab title="应收账款"></van-tab>
        <van-tab title="实收账款"></van-tab>
      </van-tabs>
      <i class="iconfont icon-paixu caption-icon" @click="showPopup"></i>
    </div>
    <van-list style="margin-top: 10px;">
      <van-cell
        v-for="(item,index) in payList"
        :key="index"
        :title="item.ZHCODE"
        :value="item.ENCODE"
      />
    </van-list>

    <!-- 排序弹窗 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
      <van-cell v-for="item in listSort" :key="item" :title="item"/>
    </van-popup>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import titleHeader from "@/components/title-header"; //引用子组件页面
import Footer from "@/components/Footer";
import axios from "axios";
import https from "@/network/request";

export default {
  name: "capitalReportAbroad",
  components: {
    titleHeader,
    Footer,
    axios
  },
  data() {
    return {
      msg: this.$route.query.nm,
      active: 0,
      list: [],
      payList: [],
      listSort: ["排序1", "排序2"],
      show: false
    };
  },
  created() {
    let index = this.active + 1;
    this.list = this[`list${index}`]; // this.list1
    // this.getGoods();
    this.getCodes();
  },
  methods: {
    onchange(index) {
      this.list = this[`list${index + 1}`];
    },

    showPopup() {
      this.show = true;
    },
    getCodes() {
      //axios.get('http://10.1.18.166:8082/inv/ReportBillReceivable/queryAllCompanyCodes')
      https
        .get("/inv/ReportBillReceivable/queryAllCompanyCodes")
        .then(res => {
          this.payList = res.payload;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
/* .iconC{
        display: inline-block;
    position: relative;
} */
.caption-flex {
  display: flex;
  align-items: center;
}
.caption-icon {
  flex-grow: 1;
}
.van-tabs {
  flex-grow: 2;
}
</style>
