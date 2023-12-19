// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 引入插件
import plugins from "./plugins";

// 关掉Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins,1,2,3)

// 创建vue的实例对象
new Vue({
    render: h => h(App),
}).$mount('#app')

