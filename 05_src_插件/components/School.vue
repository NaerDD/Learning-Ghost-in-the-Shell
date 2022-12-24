<template>
   <div >
     <h2>学校名称:{{name}}</h2>
     <h2>学校地址: {{address}}</h2>
     <button @click="test">点我测试一下hello方法</button>
   </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
       name: 'Chongqing Financial and Economic College',
       address: '重庆财经学院',
    }
  },
  methods:{
    test(){
      this.hello();
    }
  }
}
</script>

