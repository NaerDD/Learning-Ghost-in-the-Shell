<template>
  <div>
    <!-- ref
        1被用来给元素或子组件注册引用信息（id的替代者）
        2应用在html标签上获取的是真实dom元素，应用在组件标签上是组件实例对象（vc）
        3使用方法 
          1打标识 <h1 ref='xxx'></h1>
          2获取 this.$ref.xxx
    -->
    <Student name="李四" sex="女" :age="18"/><hr>
    <Student name="王五" sex="男" :age="24"/>
    <!-- <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch" /> -->
  </div>
</template>

<script>
import Student from '../src/components/Student.vue'

export default {
  name:'App',
  components:{Student},
  // data() {
  //   return {
  //     msg:'欢迎学习Vue'
  //   }
  // },
  // methods: {
  //   showDOM(){
  //     console.log(this.$refs.title)//真实dom元素
  //     console.log(this.$refs.btn)//真是dom元素
  //     console.log(this.$refs.sch)//school组件的实例对象（vc）
  //   }
  // },
}
</script>

<style>

</style>