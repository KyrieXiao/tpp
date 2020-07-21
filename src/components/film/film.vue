<template>
    <section>
        <div class="filmNav"> 
            <!-- 热门城市 -->
            <v-city class="hotcity"></v-city>
            <div class="showfilm">
                <p @click="filmid = 0" :class="{'active_font':filmid === 0}">正在热映</p>
                <p @click="filmid = 1" :class="{'active_font':filmid === 1}">即将热映</p>
                <span :class="{'active':filmid === 1}"></span>
            </div>
        </div>
        <!-- 正在热映 -->
        <v-liveShow v-show="filmid === 0"></v-liveShow>
        <!-- 即将热映 -->
        <v-soonShow v-show="filmid === 1"></v-soonShow>
    </section>
</template>

<script>
//引入city组件
import city from '@/components/city/city'

//引入liveShow组件
import liveShow from '@/components/liveShow/liveShow'

//引入soonShow组件
import soonShow from '@/components/soonShow/soonShow'

export default {
    name: 'film',
    components: {
        'v-city' : city,
        'v-liveShow' : liveShow,
        'v-soonShow' : soonShow
    },
    data(){
        return{
            filmid: 0,
        }
    }
}
</script>

<style scope>
    .filmNav{
        display: flex;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid grey;
        line-height: 50px;
        background: white;
    }
    .filmNav .hotcity{
        flex: 1;
    }
    .filmNav .showfilm{
        flex: 2;
        display: flex;
        position: relative;
    }
    .filmNav .showfilm p{
        flex: 1;
    }
    .filmNav .showfilm span{
        background: red;
        height: 2px;
        width: 40%;
        position: absolute;
        left: 5%;
        bottom: 0;
        transition: 300ms;
    }
    .filmNav .showfilm .active{
        left: 55%;
    }
    .filmNav .showfilm .active_font{
        color: red;
    }
</style>