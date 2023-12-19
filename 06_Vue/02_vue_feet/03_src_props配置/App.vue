<template>
    <div>
        <Student name="李四" :age="18" sex="女"></Student>
        <hr>
        <Student name="王老二" :age="58" sex="男"></Student>
    </div>
</template>
<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            Student
        },
    }
</script>
