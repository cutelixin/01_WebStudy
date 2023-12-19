<template>
  <h1>一个人的信息</h1>
  <h2>name:{{person.name}}</h2>
  <h2>age:{{person.age}}</h2>
  <h2>工作类型：{{person.job.type}}</h2>
  <h2>工作薪资：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <h2>测试c的值为：{{person.job.a.b.c}}</h2>
  <button @click="changeInfo">点击修改信息</button>
  
</template>

<script>

  import {reactive} from 'vue'

  export default {
    name: 'App',
    setup(props) {
      // 数据
      let person = reactive({
        name:'张三',
        age:18,
        job:{
          type:"前端工程师",
         salary:'30k',
         a:{
            b:{
              c:888
            }
         }
        },
        hobby:['抽烟','喝酒','烫头']
      })
       
      // 方法
      function changeInfo(){
          person.name = '李四'
          person.age = 41
          person.job.type = 'ui设计师'
          person.job.salary = '40k'
          person.job.a.b.c = '000'

          person.hobby[0] = '11'
  
          console.log('job',person.job)
      }

      // 返回一个对象（常用）
      return{
        person,
        changeInfo
      }
    }
  }

</script>


