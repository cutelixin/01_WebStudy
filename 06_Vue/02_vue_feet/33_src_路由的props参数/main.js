// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 引入vueRouter
import vueRouter from 'vue-router'
// 引入路由器
import routers from './router'

// 关掉Vue的生产提示
Vue.config.productionTip = false
// 應用vue-router
Vue.use(vueRouter)


// 创建vue的实例对象
new Vue({
    render: h => h(App),
    router:routers
}).$mount('#app')

