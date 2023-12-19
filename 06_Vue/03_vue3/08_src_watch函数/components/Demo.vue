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
  
    import {reactive , ref , watch} from 'vue' 
  
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

        // 方法一：监视ref所定义的一个响应式数据
        /* watch(sum,(newVal,oldVal)=>{
          console.log('sum发生变化',newVal,oldVal)
        },{immediate:true}) */

        // 方法二：监视ref所定义的多个响应式数据
        /* watch([sum,msg],(newVal,oldVal)=>{
          console.log('sum发生变化',newVal,oldVal)
        },{immediate:true}) */

        /* 方法三：监视reactive所定义的一个响应式数据的全部属性
        1.注意：此处无法正确的获取oldvalue
        2.注意：强制开启了深度监视 (deep配置无效) */

        /* watch(person,(newVal,oldVal)=>{
          console.log('person发生变化',newVal,oldVal)
        },{deep:false}) //此处deep失效 */

        // 方法四：监视reactive所定义的一个响应式数据的某个属性
        /* watch(()=>person.name,(newVal,oldVal)=>{
          console.log('person.name发生变化',newVal,oldVal)
        }) */

        // 方法五：监视reactive所定义的一个响应式数据的某些属性
        // watch([()=>person.name,()=>person.age],(newVal,oldVal)=>{
        //   console.log('person.name发生变化',newVal,oldVal)
        // })

        // 特殊情况
        watch(()=>person.job,(newVal,oldVal)=>{
          console.log('person.name发生变化',newVal,oldVal)
        },{deep:true}) // 此处由于监视的是reactive定义的对象中的某个属性，所以deep有效

        // 返回一个对象（常用）
        return{
          sum,
          msg,
          person
        }
      }
    }
  
  </script>