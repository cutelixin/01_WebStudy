<template>
    <div>
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点我显示学校名</button>
    </div>
</template>
<script>
    // import {mixins} from '../mixin.js'

    export default {
        name:'School',
        data(){
            return{
                name:'尚硅谷',
                address:'北京'
            }
        },
        // mixins:[mixins]
    }
</script>
<style>
    
</style>