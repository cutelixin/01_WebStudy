<template>
    <div>
        <h2>{{msg}}</h2>
        <h3>学生姓名:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
        <h3>学生性别:{{sex}}</h3>
        <button @click="showName">点我显示名字</button>
    </div>
</template>
<script>
    // import {mixins} from '../mixin.js'

    export default {
        name:"Student",
        data() {
            return {
                msg:'你好，我是尚硅谷的学生',
                name:'tom',
                age:19,
                sex:'男'
            }
        },
        // mixins:[mixins],
        // mounted() {
        //     console.log('hello')
        // },
    }
</script>
