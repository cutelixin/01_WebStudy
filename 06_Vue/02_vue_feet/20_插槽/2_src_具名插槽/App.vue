<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" :src="img" alt="美食图片">
            <a slot="footer" href="http://www.atguigu.com/">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <div class="feet" slot="footer">
                <a href="http://www.atguigu.com/">单机游戏</a>
                <a href="http://www.atguigu.com/">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <img slot="center" :src="films_img" alt= "地址图片">
            <template v-slot:footer>
                <div class="feet">
                    <a href="http://www.atguigu.com/">经典</a>
                    <a href="http://www.atguigu.com/">热门</a>
                    <a href="http://www.atguigu.com/">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
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
    a{
        display: inline-block;
        /* margin: auto; */
        text-align: center;
    }   
    video{
        width: 100%;
    }
</style>



