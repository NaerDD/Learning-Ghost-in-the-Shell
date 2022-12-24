// 人员管理相关配置
import axios from "axios";
import { nanoid } from "nanoid";
export default {
  namespaced:true,
  actions:{
    addPersonWang(context,value){
      if(value.name.indexOf('王') === 0){
        context.commit('ADD_PERSON',value)
      }else{
        alert('请输入王姓的人名')
      }
    },
    addPersonServer(context){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        Response =>{
          context.commit('ADD_PERSON',{id:nanoid(),name:Response.data})
        },
          error =>{
            alert(error.message)
        }
      )
    }
  },
  mutations:{
    ADD_PERSON(state,value){
      console.log('mutations中的ADD_PERSON被调用了',state,value);
      state.personList.unshift(value)
    }
  },
  state:{
    personList:[
      {id:'001',name:'张三'}
    ]
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  }
}