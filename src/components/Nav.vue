<template>
    <div class="nav">
        <ul>
            <li :class="{active: currentPage === '/'}">
                <router-link to="/">主页</router-link>
            </li>
            <li :class="{active: currentPage === '/red'}">
                <router-link to="/red">红页</router-link>
            </li>
            <li :class="{active: currentPage === '/blue'}">
                <router-link to="/blue">蓝页</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "Nav",
        data(){
          return {
              currentPage:''
          }
        },
        created() {
            this.currentPage = this.$route.path;
        }
    }

</script>
<style scoped>
    .nav {
        width: 100%;
        height: 60px;
        background-color: orange;
    }
    .nav li {
        float: left;
        font: normal 20px/60px '微软雅黑';

    }
    .nav li:hover {
        cursor: pointer;
        background-color: aquamarine;
    }
    .nav li.active {
        cursor:pointer;
        background-color: aquamarine;
    }
    .nav li a {
        display: block;
        height: 60px;
        padding: 0 20px;
    }
</style>