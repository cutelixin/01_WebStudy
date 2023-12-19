<template>
    <Demo @hello="showMsg" name="lily" age="15">
      <template v-slot:que>
        <span>111</span>
      </template>
      <template v-slot:qwe>
        <span>111</span>
      </template>
    </Demo>
</template>

<script>

  import Demo from './components/Demo.vue'

  export default {
    name: 'App',
    components:{Demo},
    setup(props) {
      
      function showMsg(val){
        alert('我要展示的信息是,' + val)
      }

      return{
        showMsg
      }
    }
  }

</script>


