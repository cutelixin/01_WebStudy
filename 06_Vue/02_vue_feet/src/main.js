// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI
// import ElementUI from 'element-ui';
// 引入ElementUI样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button , Row , DatePicker  } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 关掉Vue的生产提示
Vue.config.productionTip = false
// 使用ElementUI
// Vue.use(ElementUI)


// 创建vue的实例对象
new Vue({
    render: h => h(App),
}).$mount('#app')

