<template>
    <input type="text" v-model="keyWord">
    <h1>{{keyWord}}</h1>
</template>

<script>


  import {ref ,customRef} from 'vue'

  export default {
    name: 'App',
    setup() {

      // 自定义一个ref：————名为：myRef
      function myRef(val){
        let timer //节流防抖
        return customRef((track,trigger)=>{
          return{
            get(){
              console.log('有人从容器myRef中读取了数据',val)
              track() //通知vue追踪value的变化（提前和get商量一下，让它认为这个val是有效的）
              return val
            },
            set(newVal){
              console.log('有人从容器myRef中修改了数据',newVal)
              clearTimeout(timer)
              timer = setTimeout(()=>{
                val = newVal
                trigger() //通知vue去重新解析模板
              },500)
            }
          }
        })
      }

      // let keyWord = ref('hello')  // 使用vue提供的ref
      let keyWord = myRef('hello')   // 使用用户自定义的ref
      return {keyWord}
    }
  }

</script>


