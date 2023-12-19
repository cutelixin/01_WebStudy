<template>
  <h1>一个人的信息</h1>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>工作类型：{{job.type}}</h2>
  <h2>工作薪资：{{job.salary}}</h2>
  <button @click="changeInfo">点击修改信息</button>
  
</template>

<script>

  import {ref} from 'vue'

  export default {
    name: 'App',
    setup(props) {
      // 数据
      let name = ref('张三')
      let age = ref(18)
      let job = ref({
         type:"前端工程师",
         salary:'30k'
      })

      // 方法
      function changeInfo(){
          name.value = '李四'
          age.value = 41
          job.value.type = 'ui设计师'
          job.value.salary = '40k'
      }

      // 返回一个对象（常用）
      return{
        name,
        age,
        job,
        changeInfo
      }
    }
  }

</script>


