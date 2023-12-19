<template>
    <div class="student">
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
        <h3>学生性别:{{sex}}</h3>
        <button @click="getStudentName">把学生名给app</button>
        <!-- <button @click="demo">触发demo事件</button> -->
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁组件实例对象</button>
    </div>
</template>
<script>

    export default {
        name:"Student",
        data() {
            return {
                name:'tom',
                age:19,
                sex:'男'
            }
        },
        methods: {
            getStudentName(){
                this.$emit('atguigu',this.name,600,800,9)
            },
            // demo(){
            //     this.$emit('demo',null)
            // },
            unbind(){
                this.$off('atguigu') //销毁一个自定义事件
                // this.$off(['atguigu','demo']) //销毁多个自定义事件
                // this.$off() //销毁全部自定义事件
            },
            death(){
                // 销毁了当前student组件的实例，销毁所有student实例的自定义事件。
                this.$destroy()
            }
        },
    }
</script>

<style>
    .student{
        background: orange;
    }
</style>
