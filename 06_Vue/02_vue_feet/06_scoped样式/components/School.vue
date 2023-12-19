<template>
    <div class="demo">
        <h2 class="atguigu">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<script>

    export default {
        name:'School',
        data(){
            return{
                name:'尚硅谷abc',
                address:'北京'
            }
        },
    }
</script>

<style lang="less" scoped>
    .demo{
        background: blue;
        .atguigu{
            font-size: 40px;
        }
    }
</style>