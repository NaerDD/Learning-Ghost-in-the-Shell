//引入Vue
import Vue from "vue";
//引入App
import App from './App';
// 引入Vue resource
import VueResource from "vue-resource";
//关闭Vue的生产提示
Vue.config.productionTip = false;
// 使用插件
Vue.use(VueResource)


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        //事件总线
       Vue.prototype.$bus = this;
    }
});

