<template>
    <h2>我是Test组件</h2>
    <h2>当前鼠标点击坐标为：x:{{point.x}}，y:{{point.y}}</h2>
</template>

<script>

    import usePoint from '../hook/usePoint'

    export default {
        name:'Test',
        setup() {
            const point = usePoint()
            return {point}
        }
    }
</script>

<style>
    
</style>