<template>
    <div class="red-page">
        红色
        <!-- <Nav></Nav>
        <h1 class="title" @click="alterTitle">{{ title }}</h1> -->
    </div>
</template>
<script>
    import Nav from '@/components/Nav'
    export default {
        name: "RedPage",
        data() {
            return {
                title: '红页'
            }
        },
        methods: {
            alterTitle() {
                alert(this.title)
            }
        },
        components: {
            Nav
        },
        beforeCreate() {
            console.log('组件创建了，但数据和方法还未提供');
            // console.log(this.$data);
            // console.log(this.$options.methods);
            console.log(this.title);
            console.log(this.alterTitle);
        },
        // 该钩子需要掌握，一般该组件请求后台的数据，都是在该钩子中完成
        // 1）请求来的数据可以给页面变量进行赋值
        // 2）该节点还只停留在虚拟DOM范畴，如果数据还需要做二次修改再渲染到页面，
        //  可以在beforeMount、mounted钩子中添加逻辑处理
        created() {
            console.log('组件创建了，数据和方法已提供');
            // console.log(this.$data);
            // console.log(this.$options.methods);
            console.log(this.title);
            console.log(this.alterTitle);
            console.log(this.$options.name);
        },
        destroyed() {
            console.log('组件销毁完毕')
        }
    }
</script>


