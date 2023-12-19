<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{myAge}}</h3>
        <h3>学生性别:{{sex}}</h3>
        <button @click="changeAge">尝试修改年龄</button>
    </div>
</template>
<script>
export default {
    name:"Student",
    data() {
        return {
            msg:'你好，我是尚硅谷的学生',
            myAge:this.age
        }
    },
    props:['name','sex','age'], //简单接收
    methods: {
        changeAge(){
            this.myAge++;
        }
    },

    // 接收的同时对数据进行类型限制
    /* props:{
        name:String,
        age:Number,
        sex:String
    } */

    // 接收的同时对数据进行类型限制 + 默认值的指定 + 必要性的限制
    /* props:{
        name:{
            type:String, //nama是字符串类型
            required:true, //name是必要传递的
        },
        age:{
            type:Number,
            default:99, //默认值
        },
        sex:{
            type:String,
            required:true
        }
    } */
    
}
</script>
