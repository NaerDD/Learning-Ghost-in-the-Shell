<template>
  <div>
    <h1>{{msg}}</h1>
  <h2>学生名称: {{name}}</h2>
  <h2>学生性别: {{sex}}</h2>
  <h2>学生年龄: {{myAge+1}}</h2>
 
  <button @click="updateAge">尝试修改收到的年龄</button>
  <!-- 
    props
    让部分组件接收使用外部传过来的数据  
   1传递数据
    <demo name='xxx'/>
    2接收数据：
      第一种方式 只（接收）：
      props:['name']
      第二种方式(限制类型)
      props：{  
        name:Number
      }
    第三种方式(限制类型、限制必要性、指定默认值)
    props:{ 
      name:{  
        type:String,
        required:true,
        default:'老王'
      }
    }
    备注 props是只读的,Vue底层会检测你对props的修改，如果进行了修改，就会发出警告
    如果业务确实需要修改 那么复制props中的内容到data中一份，去修改data中的数据，然后展示data中的数据

   -->
</div>
</template>

<script>
export default {
  name:'Student',
  data() {
    console.log(this);
    return {
      msg:'我是一个尚硅谷的学生',
      // name:'czw',
      myAge:this.age,
      // 性别:'男',
    }
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // 最简单的声明接受
  props:['name','age','sex']
  // 接受的同时 对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  // 接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
  // props:{
  //   name:{
  //     type:String, //必须是字符串类型
  //     required:true //name是必要的
  //   },
  //   age:{
  //     type:Number, //必须是字符串类型
  //     default:99 //可以不传 默认99 
  //   },
  //   sex:{
  //     type:String, //必须是字符串类型
  //     required:true //name是必要的
  //   },
  // }
}
</script>

<style>
  
</style>