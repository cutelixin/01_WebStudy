// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 引入mixin
import { mixins } from "./mixin";
// 关掉Vue的生产提示
Vue.config.productionTip = false

// 定义全局mixin
Vue.mixin(mixins)
// 创建vue的实例对象
new Vue({
    render: h => h(App),
}).$mount('#app')

