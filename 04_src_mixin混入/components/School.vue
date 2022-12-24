<template>
  <div>
  <h2 @click="showName">学校名称:{{name}}</h2>
  <h2>学校地址:{{address}}</h2>
</div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin.js'

export default {
  name:'School',
  data() {
    return {
      name:'尚硅谷',
      address:'重庆渝中',
      // 原有就不混合
      x:666
    }
  },
  mixins:[hunhe,hunhe2],
  // mouted无论mixin.js有没有 都会融合上
  mounted() {
    console.log('你好啊！！！！！！')
  },
}
</script>
