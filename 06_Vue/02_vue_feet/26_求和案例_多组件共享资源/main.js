// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 引入插件
import vueResourse from 'vue-resource'
// 引入store
import store from "./store";
// 关掉Vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(vueResourse)


// 创建vue的实例对象
new Vue({
    render: h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount('#app')

