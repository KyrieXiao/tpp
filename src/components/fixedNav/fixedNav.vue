<template>
  <nav>
      <ul>
          <li><router-link to="/"><i class="iconfont icon-dianying"></i>电影</router-link></li>
          <li><router-link to="/cinema"><i class="iconfont icon-mall"></i>影院</router-link></li>
          <li><router-link to="/mine"><i class="iconfont icon-ziyuan"></i>我的</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'fixedNav',
}
</script>

<style scoped>
    /*样式清除*/
    *{margin:0;padding:0}
    li{list-style:none} */
    img{vertical-align:top;border:none}

    a{
        text-decoration: none;
        color:gray;
    }
    .router-link-active{
        text-decoration: none;
        
    }
    .router-link-exact-active{
        color: red;
    }

    nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        border-top: 1px solid gray;
        background: white;
    }
    nav ul{
        display: flex;
    }
    nav ul li {
        flex: 1;
        padding: 10px 0;
    }
    nav ul li i{
        font-size: 22px;
        display: block;
    }
</style>