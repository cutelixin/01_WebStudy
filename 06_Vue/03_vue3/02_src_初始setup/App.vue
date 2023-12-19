<template>
  <h1>我是App组件</h1>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>sex:{{sex}}</h2>
  <h2>vue2和vue3中的a:{{a}}</h2>
  <button @click="sayWelcome">vue3配置的sayWelcome</button><br><br>
  <button @click="sayHello">vue2配置的sayHello</button><br><br>
  <button @click="test1">在vue2的配置中读取vue3中的数据和方法</button><br><br>
  <button @click="test2">在vue3的配置中读取vue2中的数据和方法</button>
</template>

<script>

  // import {h} from 'vue'

  export default {
    name: 'App',
    data() {
      return {
        sex:'男',
        a:100
      }
    },
    methods: {
      sayWelcome(){
        alert('欢迎尚硅谷')
      },
      test1(){
        console.log(this.sex)
        console.log(this.name)
        console.log(this.age)
        console.log(this.sayHello)
      }
    },
    // 此处只是测试一下setup，暂时不考虑响应式的问题。
    setup(props) {
      let name = '张三'
      let age = 18
      let a = 200

      function sayHello(){
        alert(`我叫${name}，我今年${age}`)
      }


      function test2(){
        console.log(name)
        console.log(age)
        console.log(this.sex)
        console.log(this.sayWelcome)
      }

      // 返回一个对象（常用）
      return{
        name,
        age,
        sayHello,
        a,
        test2
      }

      // 返回一个函数（渲染）
      /* return ()=>{
        return h('h1','111')
      } */
    }
  }

</script>


