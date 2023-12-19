<template>
  <h4>x.y的值为：{{x.y}}</h4>
  <button @click="x.y++">点我加1（失效）</button>
  <button @click="x={y:999}">点我替换</button>
  <h4>{{person}}</h4>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">点击薪资增加</button>

</template>

<script>

  import {ref, reactive ,toRef , toRefs ,shallowReactive ,shallowRef} from 'vue' 

  export default {
    setup(props,context) {
      
      // let person = shallowReactive({ // 只考虑数据第一层的响应式
      let person = shallowReactive({
        name:'张三',
        age:'19',
        job:{
          j1:{
            salary:20
          }
        }
      })

      // shallowRef不进行对象响应式处理
      let x = shallowRef({
        y:0
      })

        // 返回一个对象（常用）
        return{
          x,
          person,
          ...toRefs(person)
        }
      }
    }
  
  </script>