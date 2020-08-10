<template>
	<div>
        <page-title :showBack="true"></page-title>
		<h3>{{movieDetail}}</h3>
	</div>
</template>
<script>
export default {
  name: "detail",
   data() {
    return {
        // 这里获取 从路由传值传过来的电影id，然后进行数据请求
      movieDetail: this.$route.query.nm,
    };
  },
};
</script>