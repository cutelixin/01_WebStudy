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
  <hr>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.job.j1.salary++">点击薪资增加</button>

</template>

<script>

  import {reactive , ref , watch ,watchEffect} from 'vue' 

  export default {
    setup(props,context) {
      // 数据
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name:'张三',
        age:'19',
        job:{
          j1:{
            salary:20
          }
        }
      })

      // 监视
      watch(sum,(newVal,oldVal)=>{
          console.log('sum数据发生变化',newVal,oldVal)
      })

      // 数据被调用则监测到，与computed类似，但是更注重过程
      watchEffect(()=>{
        console.log('watchEffect被调用了')
        let x1 = sum.value
        let x2 = person.job.j1.salary
      })



        
        // 返回一个对象（常用）
        return{
          sum,
          msg,
          person
        }
      }
    }
  
  </script>