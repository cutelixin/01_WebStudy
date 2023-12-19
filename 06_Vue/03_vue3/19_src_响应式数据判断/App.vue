<template>
  <h3>我是App组件</h3>
</template>

<script>

  import {ref ,reactive ,toRefs ,readonly ,isProxy ,isReactive ,isReadonly, isRef} from 'vue'


  export default {
    name: 'App',
    setup() {
      const car = reactive({
          name:"奔驰",
          price:40
      })      
      const sum = ref(0)
      const car2 = readonly(car)

      console.log('isRef',isRef(sum))
      console.log('isReactive',isReactive(car))
      console.log('isReadonly',isReadonly(car2))
      console.log('isProxy',isProxy(car))
      console.log('isProxy',isProxy(car2))
      
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

