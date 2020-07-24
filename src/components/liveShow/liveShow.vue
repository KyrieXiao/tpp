<template>
    <section>
        <!-- 左右滑动图片 -->
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" class="swipe-wrapper">
            <mt-swipe-item><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1433699704,1632990463&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649557168,2712487236&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2508987250,1640310781&fm=26&gp=0.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <!-- 电影布局 -->
        <div class="movielist"  ref="movieScroll">
            <ul class="movieList">
                <li v-for="(item,i) in movieDate" :key="i"> 
                    <div>                      
                        <p class="movieImg"><img class="itemImg" :src="item.poster" alt=""></p>               
                        <div class="movieText">
                            <router-link class="movieLink" :to=" {name: 'movie', params: {hid: i}}">
                                <h3>{{item.title}}</h3>
                                <span>{{item.language}}</span>
                                <p>{{item.actors | ellipsis(20)}}</p>
                                <p>{{item.plot_simple | ellipsis(40)}}</p>
                            </router-link>
                            <button>购买</button>
                        </div>
                    </div>
                    <div class="bot-text">
                        <p>1212五折狂欢</p>
                        <p>1212特惠抢票，名额有...</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
//引入better-scroll插件
import BScroll from 'better-scroll'
import movieJson from '../../../static/movie.json'


export default {
    name: 'liveShow',
    filters: {
    ellipsis (value,num) {
        if (!value) return ''
        if (value.length > num) {
            return value.slice(0,num) + '...'
        }
        return value
        }
    },
    data(){
        return{
            movieDate:[]
        }
    },
    created(){
        //获取热映电影数据
        // this.axios.get("../../static/movie.json")
        // .then((res)=>{
        //     this.movieDate = res.data.result
        //     console.log(this.movieDate)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        console.log(movieJson.result)
        this.movieDate = movieJson.result
    },
    mounted(){
        this.$nextTick(()=>{
            //$refs绑定元素
            console.log(this.scroll)
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.movieScroll,{
                    //开启点击事件 默认为false
                    click: true
                })
                console.log(this.scroll)
            }else if(!this.$refs.movieScroll){
                return
            }else{
                this.scroll.refresh()
            }
        })
    }
}
</script>
    
<style scoped>
    .swipe-wrapper{
        width: 100%;
        height: 45vmin;
        position: relative;
    }
    .swipe-wrapper img{
        height: 100%;
        width: 100%;        
    }
    .movieList{
        padding-left: 10px;
        position: absolute;
        top: 58vmin;
        z-index: -1;
    }
    .movieList li{
        padding-top: 10px;
        border-bottom: 1px solid #d9d9d9;
    }
    .movieList li div{
        display: flex;
    }
    .movieList li >div >.movieImg{
        width: 65px;
        height: 90px;
        border: 1px solid #cccccc;
    }
    .movieList .itemImg{
        width: 100%;
        height: 100%;
    }
    .movieList li .movieText{
        flex: 1;
        margin-left: 10px;
        border-bottom: 1px solid #d9d9d9;
    }
    .movieList li .movieLink{
        flex: 1;
        text-decoration: none;
        color: black;
    }
    .movieList li button{
        width: 45px;
        height: 24px;
        border: 1px solid red;
        border-radius: 3px;
        background: #ffffff;
        color: red;
        margin: auto 20px;
    }
    .bot-text{
        margin-left: 75px;
    }
    .bot-text :first-child{
        padding: 0px 5px;
        flex: 1;
        margin: 7px 0;
        color: orange;
        border-right: 2px solid #d9d9d9;
        overflow: hidden;
        height: 20px;
    }
    .bot-text :last-child{
        padding: 0px 5px;
        flex: 1;
        margin: 7px 0;
        overflow: hidden;
        height: 21px;
    }
</style>