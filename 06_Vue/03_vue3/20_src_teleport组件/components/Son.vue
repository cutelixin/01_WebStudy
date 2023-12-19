<template>
    <div class="son">
        <h3>我是son组件</h3> 

        <Dialog></Dialog>
     </div>
</template>
<script>

import Dialog from './Dialog'


export default {
    name:"Son",
    components:{Dialog}
}
</script>

<style>
    .son{
        background-color: orange;
        padding: 10px;
    }    
</style>