<template>
    <div>
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
        <h3>学生性别:{{sex}}</h3>
        <input type="text" v-fbind:value="name">
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
    }
</script>
