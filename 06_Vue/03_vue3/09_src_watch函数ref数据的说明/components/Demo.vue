<template>
    <h2>当前求和为:{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <h2>{{msg}}</h2>
    <button @click="msg += '!'">点我改变信息</button>
    <hr>
    <h2>name:{{person.name}}</h2>
    <h2>age:{{person.age}}</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增加年龄</button>
  </template>
  
  <script>
  
    import {reactive , ref , watch} from 'vue' 
  
    export default {
      setup(props,context) {
        // 数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = ref({
          name:'张三',
          age:'19',
          
        })

        // 此处不可以sum.value，会导致无法监听数据，
        watch(sum,(newVal,oldVal)=>{
            console.log('sum数据发生变化',newVal,oldVal)
        })

        // 此处借助ref定义的数据类型为对象时，value借助了reactive，此处deep无效
        watch(person.value,(newVal,oldVal)=>{
            console.log('person数据发生变化',newVal,oldVal)
        })

        // 此处利用deep深度监视功能，监视person对象里面的value属性
        watch(person,(newVal,oldVal)=>{
            console.log('person数据发生变化',newVal,oldVal)
        },{deep:true})

        // 返回一个对象（常用）
        return{
          sum,
          msg,
          person
        }
      }
    }
  
  </script>