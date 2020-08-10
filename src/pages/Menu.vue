<template>
  <div>
    <!--搜索-->
    <div>
      <van-search
        v-model="value"
        shape="round"
        background="#043c80"
        placeholder="请输入搜索关键词"
        show-action
      >
        <template #action>
          <i class="iconfont icon-character personC"></i>
        </template>
      </van-search>
    </div>
    <!--菜单-->
    <main>
      <van-collapse v-model="activeNames">
        <van-collapse-item
          :title="itemM.title"
          :name="itemM.title"
          v-for="itemM in menuList"
          :key="itemM.id"
        >
          <van-cell
            :title="itemSub.pageN"
            is-link
            @click="$router.push({name: itemSub.pathName,query: {nm:itemSub.pageN}})"
            v-for="itemSub in itemM.subPages"
            :key="itemSub.id"
          />
        </van-collapse-item>
      </van-collapse>
    </main>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import axios from "axios";

//import https from '@/network/request'
export default {
  data() {
    return {
      activeNames: ["1"],
      mitem: "航司开账周期",
      menuList: [
        {
          id: "01",
          title: "基础信息",
          subPages: [
            {
              pathName: "openBank",
              pageN: "开立账户",
              id: "1"
            },
            {
              pathName: "capitalReportAbroad",
              pageN: "资金报告",
              id: "2"
            },
            {
              pathName: "detail",
              pageN: "航司开账周期",
              id: "3"
            }
          ]
        },
        {
          id: "02",
          title: "数据处理",
          subPages: [
            {
              pathName: "file",
              pageN: "文件上传",
              id: "1"
            }
          ]
        }
      ],
      title: "",
      value: ""
    };
  },
  components: {
    Footer
  }
  // created() {
  //         axios.get('/Menu')
  //         .then(res => {
  //             this.menuList = res.data.data;
  //             console.log(this.menuList);
  //         });
  //     },
};
</script>

<style scoped>
.personC {
  background: white;
  border-radius: 50px;
  margin-left: 0.3rem;
  font-size: 29px;
}
/* .top{
        background: #043c80;
    height: 60px;
}
     .search-inp {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 90%;
    height: 40px;
    padding: 0 0.5rem;
    background:#f2f3f5;
    border-radius: 20px;
    
   
  }

  .inp {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      padding-left: 1rem;
      color: rgba(255, 255, 255, 0.6);
    }

     i:first-child {
      font-size: 18px;
    } */
</style>
