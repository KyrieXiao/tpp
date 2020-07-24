<template>
  <section >
		<div class="filmDeil">
			<p class="filmImg"><img :src="movieDeteil.poster" alt=""></p>
			<div>
				<h3>{{movieDeteil.title}}</h3>
				<p>{{movieDeteil.year}}</p>
				<p>{{movieDeteil.language}}</p>
				<p>{{movieDeteil.genres}}</p>
				<p>{{movieDeteil.actors}}</p>
			</div>
		</div>
		<div class="filmText" ref="deteilScroll"><div>{{movieDeteil.plot_simple}}</div></div>
		<div class="goNext" @click="goBack">返回上一页</div>
	</section>
</template>

<script>
//引入better-scroll插件
import BScroll from 'better-scroll'
import movieJson from '../../../static/movie.json'

export default {
	name: "movie",
	data (){
		return{
			movieDeteil: {}
		}
	},
	methods: {
		goBack (){
			this.$router.go(-1)
		}
	},
	created (){
		console.log(this.$route.params.hid);
		// this.axios.get("../../static/movie.json")
		// .then((res) => {
		// 	this.movieDeteil = res.data.result[this.$route.params.hid]
		// 	console.log(this.movieDeteil);
		// })
		// .catch((err) => {
		// 	console.log(err);
		// })
		this.movieDeteil = movieJson.result[this.$route.params.hid]
	},
	mounted(){
		this.$nextTick(()=>{
			//$refs绑定元素
			console.log(this.scroll)
			if(!this.scroll){
				this.scroll = new BScroll(this.$refs.deteilScroll,{
					//开启点击事件 默认为false
					click: true
				})
				console.log(this.scroll)
			}else if(!this.$refs.deteilScroll){
				return
			}else{
				this.scroll.refresh()
			}
		})
	}
}
</script>

<style scoped>
.filmDeil{
	display: flex;
	padding: 20px 20px;
	background: #2a86ab;
}
.filmDeil .filmImg{
	width: 25vmin;
	height: 35vmin;
	border:1px solid #cccccc;
	margin-right: 15px;
}
.filmDeil .filmImg img{
	height: 100%;
	width: 100%;
}
.filmDeil div{
	flex: 1;
	color: white;
}
.filmDeil div p{
	line-height: 7.5vmin;
}
.filmText div{
	word-wrap: break-word;
	padding: 20px;
	line-height: 7.5vmin;
	height: 385px;
	overflow-y: scroll;
}
.goNext{
	width: 100%;
	height: 70px;
	background: #d8d8d8;
	position: fixed;
	bottom: 0;
	text-align: center;
	line-height: 70px;
	color: white;
}
</style>