// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'

// 关掉Vue的生产提示
Vue.config.productionTip = false

// 创建vue的实例对象
new Vue({
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
}).$mount('#app')

