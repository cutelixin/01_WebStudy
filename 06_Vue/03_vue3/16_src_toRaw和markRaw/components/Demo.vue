<template>
  <h4>sum的值为：{{sum}}</h4>
  <button @click="sum++">点我++</button>
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
  <h2>salary:{{job.j1.salary}}K</h2>
  <h3 v-show="person.car">座驾信息:{{person.car}}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">点击薪资增加</button>
  <button @click="showRowPerson">输出最原始的person</button>
  <button @click="addCar">添加一台车</button>
  <button v-show="person.car" @click="person.car.name += '!'">修改汽车名字</button>
  <button v-show="person.car" @click="person.car.price++">修改汽车价格</button>

</template>

<script>

  import {ref, reactive ,toRefs ,toRaw ,markRaw} from 'vue' 

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
        },
      })

      function showRowPerson(){
        let p = toRaw(person)
        p.age++
        console.log(p)
      }

      function addCar(){
        let car = {name:'奔驰',price:99}
        person.car = markRaw(car)
        console.log(person.car)
      }

        // 返回一个对象（常用）
        return{
          sum,
          person,
          ...toRefs(person),
          showRowPerson,
          addCar
        }
      }
    }
  
  </script>