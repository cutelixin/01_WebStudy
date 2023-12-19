<template>
    <div>
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="hello">点我显示hello</button>
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
<style>
    
</style>