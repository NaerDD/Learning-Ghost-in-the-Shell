//引入Vue
import Vue from "vue";
//引入App
import App from './App';
//关闭Vue的生产提示
Vue.config.productionTip = false;

// 完整引入
// 引入ElementUI全部样式
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 使用ElementUI
// Vue.use(ElementUI)
// 部分引入
import { Button,Row,DatePicker } from 'element-ui';

Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker',DatePicker);




new Vue({
    el: '#app',
    render: h => h(App),
});

