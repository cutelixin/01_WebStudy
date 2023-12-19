<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
        <button @click="showName">点我显示学校名字</button>
    </div>
</template>

<script>
    // 组件交互相关代码
    export default {
        name:'School',
        data() {
            return {
                name:'尚硅谷',
                address:'beijing'
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }

</script>

<style>
    .demo{
        background: orange;
    }
</style>