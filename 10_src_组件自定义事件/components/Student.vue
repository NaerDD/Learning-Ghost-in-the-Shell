<template>
  <div class="student" >
    <h2>姓名:{{  name }}</h2>
    <h2>性别: {{ sex }}</h2>
    <h2>当前求和为: {{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例（VC）</button>
  </div>
</template>

<script>

export default {
 name: "Student",
 data(){
   return {
      name: '张三',
      sex: '男',
      number:0
   }
 },
 methods:{
  add(){
    console.log('add回调被调用了');
    this.number++
  },
  sendStudentName(){
    // 触发student组件实例身上的atguigu事件
    this.$emit('atguigu',this.name,800,666,900)
    // this.$emit('demo')
  },
  unbind(){
    // 解绑atguigu事件 只能解绑一个事件
    this.$off('atguigu')
    // 解绑多个事件
    // this.$off(['atguigu','demo'])
    // 解绑所有的自定义事件
    // this.$off()
  },
  death(){
    // 销毁了当前Student组件的实例 销毁后所有Student实例的自定义事件全都不奏效
    this.$destroy()
  }
 }
}
</script>
<style lang="less" scoped>
  .student{
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
  }
</style>
