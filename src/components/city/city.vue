<template>
  <section>
    <div class="hotcity" @click="cityBool = true">
        <span>北京</span>
        <i class="iconfont icon-arrowdown"></i>
    </div>

    <div class="citylist" v-show="cityBool">
        <div class="checkHot">选择热门<i class="iconfont icon-cha" @click="cityBool = false"></i></div>
        <!-- 热门城市列表 -->
        <v-citylist></v-citylist>
    </div>
  </section>
</template>

<script>

//引入城市列表
import cityList from '@/components/cityList/cityList'

export default {
    name: 'city',
    components: {
        'v-citylist' : cityList
    },
    data(){
        return{
            cityBool : false
        }
    }
}
</script>

<style scoped>
    .citylist{
        position: fixed;
        top: 0;
        background: white;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .citylist .checkHot{
        position: relative;
        font-weight: bold;
        border-bottom: 1px solid grey;
        font-size: 20px;
        z-index: 3;
        background: white;
    }
    .citylist .checkHot i{
        position: absolute;
        right: 20px;
        font-size: 20px;
    }
</style>