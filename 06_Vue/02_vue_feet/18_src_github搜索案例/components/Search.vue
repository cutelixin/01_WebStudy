<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input 
                type="text" 
                placeholder="enter the name you search"
                v-model="keyWord"
          />
          &nbsp;
          <button @click="searchUsers">Search</button>
        </div>
      </section>
</template>
<script>

    import axios from 'axios'

    export default {
        name:'Search',
        data() {
            return {
                keyWord:'',
                state:{
                    isFirst:true,
                    isLoading:false,
                    errMsg:''
                }
            }
        },
        methods: {
            searchUsers(){
                let keyW = this.keyWord
                if(!keyW.trim()){ return alert('输入不能为空！')}
                
                this.state.isFirst = false;
                this.state.isLoading = true; 

                this.$bus.$emit('getUsers',[])
                this.$bus.$emit('getState',this.state)

                axios.get('https://api.github.com/search/users?q='+keyW).then(
                    res => {
                        this.state.isLoading = false; 

                        this.$bus.$emit('getUsers',res.data.items)
                        this.$bus.$emit('getLoading',this.state)

                        console.log('获取成功',res)
                    },
                    erro => {
                        this.state.isLoading = false; 
                        this.state.errMsg = erro.message;
                        
                        this.$bus.$emit('getLoading',this.state)
                        
                        console.log('获取失败',erro.message)
                    }
                )
            },
        },
    }
</script>
<style>
    
</style>