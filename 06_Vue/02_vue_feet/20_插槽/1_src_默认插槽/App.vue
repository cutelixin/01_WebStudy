<template>
    <div class="container">
        <Category title="美食">
            <img :src="img" alt="美食图片">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <img :src="address" alt="地址图片">
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
        data(){
            return{
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《拆弹专家》','《你好，李焕英》','《银河护卫队》'],
                img:'https://img1.baidu.com/it/u=1468259305,2620238262&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666',
                films_img:'https://img2.baidu.com/it/u=2281104515,2554096595&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=714'
            }
        },
    }


</script>

<style>
    .container{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>



