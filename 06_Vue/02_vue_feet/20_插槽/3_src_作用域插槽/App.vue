<template>
    <div class="container">

        <Category title="游戏">
            <template scope="atguigu">
                <ul>
                    <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
                </ul>
            </template>
       </Category>

       <Category title="游戏">
            <template scope="{games}">
                <ol>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="{games}">
                <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
            </template>
        </Category>

    </div>
</template>
<script>

    import Category from './components/Category.vue'

    export default {
        name:'App',
        components:{
            Category
		},
    }


</script>

<style>
    .container,.feet{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    img{
        display: block;
        width: auto;
        height: 100px;
        margin: auto;
        overflow: hidden;
    }
    h4{
        text-align: center;
    }   
    video{
        width: 100%;
    }
</style>



