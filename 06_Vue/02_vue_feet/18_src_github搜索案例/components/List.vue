<template>
    <div class="row" >
        <!-- 展示用户列表 -->
        <div v-show="users.length" class="card" v-for="item in users" :key="item.login">
            <a :href="item.html_url" target="_blank">
                <img :src="item.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{item.login}}</p>
        </div>
        <!-- 展示欢迎词 -->
        <h1 v-show="state.isFirst">please input the keyword</h1>
        <!-- 展示加载中 -->
        <h1 v-show="state.isLoading">Loading....</h1>
        <!-- 展示错误信息 -->
        <h1 v-show="state.errMsg">{{state.errMsg}}</h1>
      </div>
</template>
<script>
export default {
    name:'List',
    data() {
        return {
            state:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
            },
            users:[],
        }
    },
    mounted() {
        this.$bus.$on('getUsers',(data)=>{
            this.users = data
        });
        this.$bus.$on('getState',data=>{
            this.state = data
        })
    },
    beforeDestroy() {
        this.$bus.$off(['getUsers','getLoading'])
    },
}
</script>

<style scoped>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>