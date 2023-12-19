<template>
    <div class="app">
      <h3>我是App组件</h3>
      <h4>name:{{name}}</h4>
      <h4>price:{{price}}</h4>
      <Child></Child>
    </div>
</template>

<script>

  import {reactive ,toRefs ,provide} from 'vue'

  import Child from './components/Child.vue'

  export default {
    name: 'App',
    components:{Child},
    setup() {
      const car = reactive({
          name:"奔驰",
          price:40
      })

      // 给自己的后代组件传递数据
      provide('car',car)
      
      return{...toRefs(car)}
    }
  }

</script>

<style>
    .app{
      background-color: gray;
      padding: 10px;
    }
</style>

