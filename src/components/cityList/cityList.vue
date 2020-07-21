<template>
  <section class="hotcity">
      <div class="citylist" ref="cityScroll">
        <ul >
            <li>
                <span>热门</span>
                <p @click="cityShow" >北京</p>
                <p @click="cityShow" >上海</p>
                <p @click="cityShow" >广州</p>
            </li>
            <li v-for="(item,i) in cityData" :key="i">
                <span>{{item.initial}}</span>
                <p @click="cityShow" v-for="(itemCity,i) in item.list" :key="i">{{itemCity.name}}</p>
            </li>
        </ul>          
      </div>
      <ul class="citycode">
          <li>
              <span>热门</span>
              <p v-for="(item,i) in cityData" :key="i">{{item.initial}}</p>
          </li>
      </ul>
  </section>
</template>

<script>
//引入better-scroll插件
import BScroll from 'better-scroll'

export default {
    name: 'cityList',
    data(){
        return{
            cityData: []
        }
    },
    methods: {
        cityShow: function(e){
            console.log(e.target.textContent)
        }
    },
    created(){
        //获取热门城市数据
        this.axios.get("../../static/city.json")
        .then((res)=>{
            console.log(res.data.city)
            this.cityData = res.data.city          
            console.log(this.cityData)
        })
        .catch(function(err){
            console.log(err)
        })
    },
    mounted(){
        this.$nextTick(()=>{
            //$refs绑定元素
            console.log(this.scroll)
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.cityScroll,{
                    //开启点击事件 默认为false
                    click: true
                })
                console.log(this.scroll)
            }else if(!this.$refs.cityScroll){
                return
            }else{
                this.scroll.refresh()
            }
        })
    }
}
</script>

<style scoped>
    .hotcity{
        display: flex;
        height: 100%;      
    }
    .hotcity .citylist{
        flex: 1;
        text-align: left;
        border-right: 1px solid #d9d9d9;
        padding-right: 30px;
    }
    .hotcity .citylist >ul >li >span{
        display: block;
        background: lightgrey;
        padding-left: 20px;
        font-weight: bold;
    }
    .hotcity .citylist >ul >li >p{
        display: block;
        padding-left: 20px;
    }
    .hotcity .citylist ul li p:hover{
        background: lavender;
    }
    .hotcity .citycode{
        width: 50px;
        line-height: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>