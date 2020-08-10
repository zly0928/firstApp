<template>
  <div class="home">
     
      <h1>{{ hTitle }}</h1>
      <div class="router">
          <button type="button" @click="goPage('/')">主页</button>
　　　　   <button type="button" @click="goPage('/red')">红页</button>
　　　　　 <button type="button" @click="goPage('/blue')">蓝页</button>
          <button type="button" @click="goBack('/')">返回上一页</button>
      </div>
       <Nav />
  </div>
  
</template>
<script>
    import Nav from '@/components/Nav.vue'
    export default {
      name: 'home',
      components: {
        Nav
      },
        methods: {
          goPage(page) {
              let currentPage = this.$route.path;
              if (currentPage !== page){
                  this.$router.push(page);
              }
          },
            goBack(){
              this.$router.go(-1)
            },
            goPageName(pageName) {
              // alert(name)
              this.$router.push({
                  name: pageName
              })
            }
        }
    }
</script>