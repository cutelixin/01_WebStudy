<template>
    <h1>一个人的信息</h1>
    firstName:<input type="text" v-model="person.firstName">
    <br>
    lastName: <input type="text" v-model="person.lastName">
    <br>
    name:{{person.fullName}}
    <br>
    name:<input type="text" v-model="person.fullName">
  </template>
  
  <script>
  
    import {reactive , computed} from 'vue'
  
    export default {
      setup(props,context) {
        // 数据
        let person = reactive({
            firstName:'张',
            lastName:'三',
        })

        //  计算属性-简写形式(只考虑读的情况)
        /* person.fullName = computed(()=>{
            return person.firstName + '-' + person.lastName
        }) */

        // 完整形式
        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.lastName
            },
            set(value){
                const arr = value.split('-');
                person.firstName = arr[0]
                person.lastName = arr[1]
            }
        })
         
        // 返回一个对象（常用）
        return{
          person,
        }
      }
    }
  
  </script>