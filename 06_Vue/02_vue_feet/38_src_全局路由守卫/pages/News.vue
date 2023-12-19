<template>
    <ul>
        <li :style="{opacity:opacity}">欢迎学习vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>
<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1
            }
        },
        /* beforeDestroy() {
            console.log('news组件将要被销毁')
            clearInterval(this.timer)
        },
        mounted() {
            this.timer = setInterval(() => {
                console.log(1)
                this.opacity -= 0.1;
                if(this.opacity <=0) this.opacity = 1;
            }, 100);
        }, */
        // 组件特有生命周期
        activated() {
            this.timer = setInterval(() => {
                console.log(1)
                this.opacity -= 0.1;
                if(this.opacity <=0) this.opacity = 1;
            }, 100);
            console.log('触发activated')
        },
        // 组件特有生命周期
        deactivated() {
            clearInterval(this.timer)
            console.log('触发deactivated')
        },
    }
</script>
<style>
    
</style>