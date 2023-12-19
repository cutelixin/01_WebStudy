<template>
    <div class="school">
        <h2 >学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
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
        mounted() {
            this.$bus.$on('hello',(data)=>{
                console.log('我是school组件，我收到了'+data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<style lang="less" scoped>
    .school{
        background: skyblue;
    }
</style>