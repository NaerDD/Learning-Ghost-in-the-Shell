<template>
    <div class="container">
      <Category title="美食" :listData="foods">
        <img slot="center" src="https://img0.baidu.com/it/u=814882019,1942854740&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1671123600&t=d5c0cd60eb5144ecc9856aa48d5216f0" alt="">
        <a slot="footer" href="http://www.atguigu.com">更多美食</a>
      </Category>

      <Category title="游戏">
        <ul slot="center">
          <li v-for="g,index in games" :key="index">{{g}}</li>
        </ul>
        <div class="foot" slot="footer">
          <a  href="http://www.atguigu.com">单机游戏</a>
          <a  href="http://www.atguigu.com">网络游戏</a>
        </div>
      </Category>

      <Category  title="电影">
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <!-- 只有使用template时才能使用v-slot -->
        <template v-slot:footer>
          <div class="foot">
          <a  href="http://www.atguigu.com">经典</a>
          <a  href="http://www.atguigu.com">热门</a>
          <a  href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
        </template>
      </Category>
    </div>
</template>

<script>  
  import Category from './components/Category'
  
export default {
  name: "App",
  components:{Category},
  data(){
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
    }
  }
  
};
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
  h4{
    text-align: center;
  }
  
</style>