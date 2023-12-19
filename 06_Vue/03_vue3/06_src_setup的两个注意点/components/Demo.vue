<template>
    <h1>一个人的信息</h1>
    <h2>name:{{person.name}}</h2>
    <h2>age:{{person.age}}</h2>
    <button @click="test">展示信息</button>
    <slot name="qwe"></slot>
    <slot name="que"></slot>
  </template>
  
  <script>
  
    import {reactive} from 'vue'
  
    export default {
      name: 'App',
      props:['name','age'],
      emits:['hello'],
      /* beforeCreate() {
        console.log('beforeCreate')
      }, */
      setup(props,context) {

        console.log('setup')

        // console.log('props',props)
        // console.log('context',context.attrs) // 相当于vue2中的$attrs
        // console.log('context',context.emit)  // 触发自定义事件
        // console.log('context',context.slots) // 插槽
        

        function test(){
            context.emit('hello',999)
        }

        // 数据
        let person = reactive({
          name:'张三',
          age:18,
        })
         
        // 返回一个对象（常用）
        return{
          person,
          test
        }
      }
    }
  
  </script>