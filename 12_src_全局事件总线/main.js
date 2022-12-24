//引入Vue
import Vue from "vue";
//引入App
import App from './App';
//引入插件
// import plugins from './plugins';
//关闭Vue的生产提示
Vue.config.productionTip = false;
//vue应用插件
// Vue.use(plugins); 

// const Demo = Vue.extend({})
// const d = new Demo()



new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
});


