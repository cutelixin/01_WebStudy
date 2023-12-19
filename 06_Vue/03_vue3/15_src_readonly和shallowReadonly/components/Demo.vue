<template>
  <h4>sum的值为：{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>salary{{job.j1.salary}}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">点击薪资增加</button>

</template>

<script>

  import {ref, reactive ,toRefs ,readonly ,shallowReadonly} from 'vue' 

  export default {
    setup(props,context) {

      let sum = ref(0)
      
      let person = reactive({
        name:'张三',
        age:'19',
        job:{
          j1:{
            salary:20
          }
        }
      })

      // person = readonly(person)
      person = shallowReadonly(person)
      sum = readonly(sum)

        // 返回一个对象（常用）
        return{
          sum,
          ...toRefs(person)
        }
      }
    }
  
  </script>