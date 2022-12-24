<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/atguigu/students').then(
        // 生产两个回调函数 一个成功请求的 一个请求失败的
        response=>{
          console.log('请求成功了',response.data);
          
        },
        error =>{
          console.log('请求失败了',error.message);
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/demo/cars').then(
        // 生产两个回调函数 一个成功请求的 一个请求失败的
        response=>{
          console.log('请求成功了',response.data);
          
        },
        error =>{
          console.log('请求失败了',error.message);
        }
      )
    }
  }
}
</script>
