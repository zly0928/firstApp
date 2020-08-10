<template>
    <div>
        <h1>user</h1>
        <p>欢迎回来,{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                // msg: "我是page1组件"
                msg:""
            }
        },
        watch:{
//to表示即将要进入的那个组件，from表示从哪个组件过来的
            $route(to,from){
                this.msg=to.params.name; 
                console.log(111);
            }
        }
    }
</script>