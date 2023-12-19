<template>
  <h4>{{person}}</h4>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>薪资：{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">点击薪资增加</button>

</template>

<script>

  import {reactive ,toRef , toRefs} from 'vue' 

  export default {
    setup(props,context) {
      let person = reactive({
        name:'张三',
        age:'19',
        job:{
          j1:{
            salary:20
          }
        }
      })

        // 返回一个对象（常用）
        return{
          person,
          /* name:toRef(person,'name'),
          age:toRef(person,'age'),
          salary:toRef(person.job.j1,'salary'), */
          ...toRefs(person)
        }
      }
    }
  
  </script>