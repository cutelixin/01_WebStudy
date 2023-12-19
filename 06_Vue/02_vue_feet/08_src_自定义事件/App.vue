<template>
    <div class="app">
        <h1>{{msg}}-{{studnetName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolnName="getSchoolnName"></School>
        <!-- 通过父组件给子组件绑定一个自定义事件实现；子给父传递数据 （第一种方法） -->
        <!-- <Student v-on:atguigu="getStudentName" @demo="m1"></Student> -->
        <!-- 简写 和 触发一次 -->
        <!-- <Student @atguigu.once="getStudentName"></Student> -->
        <!-- 通过父组件给子组件绑定一个自定义事件实现；子给父传递数据 （第二种方法）-->
        <Student ref="student" @click.native="show"></Student>

    </div>
</template>
<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:"你好啊",
                studnetName:''
            }
        },
        components:{
            Student,
            School
        },
        methods:{
            getSchoolnName(val){
                console.log('getSchoolnName',val)
            },
            getStudentName(val,...params){
                this.studnetName = val
                console.log('getStudentName',val)
                console.log('params',params)
            },
            m1(){
                console.log('demo事件被触发了')
            },
            show(){
                alert(123)
            }
        },
        mounted() {
            this.$refs.student.$on('atguigu',this.getStudentName)
            // 事件只触发一次
            // this.$refs.student.$once('atguigu',this.getStudentName)
        },
    }
</script>

<style lang="css">
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>