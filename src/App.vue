<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 底部导航 -->
    <v-fixNav></v-fixNav>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
  //引入固定底部导航
import fixedNav from '@/components/fixedNav/fixedNav'

export default {
  name: 'App',
  components: {
    'v-fixNav' : fixedNav
  }
}
</script>

<style>
  /*样式清除*/
  *{margin:0;padding:0}
  li{list-style:none} */
  img{vertical-align:top;border:none}
  
  html{
    overflow: hidden;
  }

</style>
