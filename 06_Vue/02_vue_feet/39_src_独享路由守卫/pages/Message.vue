<template>
    <div>
        <ul>
            <li v-for="m in messageList" ::key="m.id">
              <!-- 路由跳转并携带parmes参数，to的字符串写法 -->
              <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
              
              <!-- 路由跳转并携带parmes参数，to的对象写法 -->
              <router-link :to="{
                  name:'xiangqing',
                  query:{
                    id:m.id,
                    title:m.title
                  }
              }">
                  {{m.title}}
              </router-link>
              <button @click="handlePush(m)">push查看</button>
              <button @click="handleReplace(m)">replace查看</button>
              &nbsp;&nbsp;
            </li>
        </ul> 
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name:'Message',
        data() {
          return {
            messageList:[
              {id:'001',title:'message001'},
              {id:'002',title:'message002'},
              {id:'003',title:'message003'},
              {id:'004',title:'message004'},
            ]
          }
        },
        methods: {
          handlePush(m){
            // console.log(this.$router)
            this.$router.push({
              name:'xiangqing',
                  query:{
                    id:m.id,
                    title:m.title
              }
            })
          },
          handleReplace(m){
            this.$router.replace({
              name:'xiangqing',
                  query:{
                    id:m.id,
                    title:m.title
              }
            })
          }
        },
        beforeDestroy() {
          console.log('message will be destroy')
        },
    }
</script>
<style>
    
</style>