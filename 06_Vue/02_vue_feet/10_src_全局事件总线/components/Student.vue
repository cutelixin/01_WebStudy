<template>
    <div class="student">
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
        <h3>学生性别:{{sex}}</h3>
        <button @click="sendStudentName">发送名字给school组件</button>
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
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        },
    }
</script>

<style>
    .student{
        background: orange;
    }
</style>
