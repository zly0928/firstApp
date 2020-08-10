<template>
<div>
    <div @click="$router.push({name:'detail',query:{nm:mitem.nm}})">
        <div>
            <ul>
                <li class="name">{{mitem.nm}}</li>
                <li class="showinfo">{{mitem.showInfo}}</li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
 export default {
        name: "movieList",
        props: ["mitem"], //通过mitem属性接收父组件的传值
        data() {
            return {};
        }
    }
</script>
<style scoped>
@import "../assets/css/movie-list.css";
</style>
    

