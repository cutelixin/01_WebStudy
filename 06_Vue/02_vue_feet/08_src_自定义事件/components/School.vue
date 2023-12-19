<template>
    <div class="school">
        <h2 class="atguigu">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <!-- 通过父组件传递函数类型的props实现；子给父传递数据  -->
        <button @click="sendSchoolName">把学校名字给App</button>
    </div>
</template>
<script>

    export default {
        name:'School',
        props:['getSchoolnName'],
        data(){
            return{
                name:'尚硅谷abc',
                address:'北京'
            }
        },
        methods: {
            sendSchoolName(){
                this.getSchoolnName(this.name)
            }
        },
    }
</script>

<style lang="less" scoped>
    .school{
        background: skyblue;
    }
</style>