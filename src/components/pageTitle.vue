<template>
  <div class="pageTitle">
    <div class="goback" v-if='showBack'  @click="$router.back()">
      返回
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
	name: 'pageTitle',
	props: ['showBack'] // 通过这个属性确定是否显示返回图标，这是父组件传入的值
}
</script>