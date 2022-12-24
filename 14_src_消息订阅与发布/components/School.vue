<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "Chongqing Financial and Economic College",
      address: "重庆财经学院",
    };
  },
  mounted() {
    // console.log('School',this);
    // this.$bus.$on('hello',(data)=>{
    //   console.log('我是School组件，收到了数据',data);
    // })
    // 返回两个数据 一个a是返回数据名， 一个b是返回数据
    this.pubId = pubsub.subscribe('hello',function(a,b){
      // 这里的this是未定义 因为不是Vue中的方法 所以this不保证为VC 可以写成箭头函数 将this指出去 也可以在vue的methods里面定义一个demo
      console.log(this);
      console.log('有人发布了hello消息，hello消息的回调执行了',a,b);
      // console.log('有人发布了hello消息，hello消息的回调执行了',this.demo);
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>

