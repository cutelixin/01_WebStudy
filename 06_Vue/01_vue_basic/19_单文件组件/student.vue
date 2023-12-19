<template>
    <!-- 组件结构 -->
    <div>
        <h1>学生名称：{{name}}</h1>
        <h1>学生年龄：{{age}}</h1>
    </div>
</template>

<script>
    // 组件交互相关代码
    export default {
        name:'Student',
        data() {
            return {
                name:'tom',
                age:18
            }
        },
    }

</script>

<style>
    
</style>