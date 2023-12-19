<template>
    <div class="school">
        <h2 >学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>
<script>

    import pubsub from 'pubsub-js'

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
            getStudentName(msgName,data){
                console.log('有人订阅了hello消息',msgName,data)
            }
        },
        mounted() {
            this.pubId = pubsub.subscribe('hello',this.getStudentName)
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style lang="less" scoped>
    .school{
        background: skyblue;
    }
</style>