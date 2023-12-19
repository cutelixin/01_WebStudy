<template>
    <div>
        <h1 ref="title" v-text="msg"></h1>
        <button ref="btn" @click=showMsg>点我输出信息</button>
        <School ref="sch"></School>
    </div>
</template>
<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        data() {
            return {
                msg:'hello,尚硅谷'
            }
        },
        methods: {
            showMsg(){
                console.log('this',this.$refs)
                console.log(this.$refs.title) //真实DOM元素
                console.log(this.$refs.sch) //School组件的实例对象
            }
        },
    }
</script>
