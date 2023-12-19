<template>
    <div class="child">
       <h3>我是child组件</h3> 
       <Son></Son>
    </div>
</template>

<script>

    import {inject} from 'vue'
    import Son from './Son.vue'

    export default {
        name:'Child',
        components:{Son},
        setup() {
            let car = inject('car')
            console.log(car,'child---')
        }
    }
</script>

<style>
    .child{
        background-color: skyblue;
        padding: 10px;
    }
</style>