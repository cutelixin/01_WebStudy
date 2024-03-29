// 引入的不再是vue的构造函数，引入的是一个名为createApp的工厂函数 
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实际对象 ———— app（类似于之前vue2的vm，但app比vm更"轻"）
const app =  createApp(App)

// 挂载
app.mount('#app')

