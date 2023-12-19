<template>
    <div class="student">
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
        <h3>学生性别:{{sex}}</h3>
        <button @click="sendStudentName">发送学生姓名</button>
    </div>
</template>
<script>

    import pubsub from 'pubsub-js'

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
                pubsub.publish('hello',this.name)
            }
        },

    }
</script>

<style>
    .student{
        background: orange;
    }
</style>
