// 該文件專門用於创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

import Message from '../pages/Message.vue'
import News from '../pages/News.vue'

import Detail from '../pages/Detail.vue'
// 创建并暴露一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xiaoxi',
                    path:"message",
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{title:'详情'},
                            // props的第一种写法，值为对象，该对象种的所有key-value都会以props的形式传递给Detail组件。
                            // props:{a:1,b:'hello'}

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该组件接收到的所有的params参数，以props的形式传递给Detail组件。
                            // props:true

                            // props的第三种写法，值为函数，该函数返回的对象中的每一组key-value都会通过props传递给Detail组件。
                            props({query:{id,title}}){
                                return {id,title}
                            }

                            /* props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            } */
                        }
                    ]
                },
                {
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:true,
                        title:'新闻'
                    }
                },
            ]
        }
    ]
})

// 全局前置路由守卫 ————— 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log('全局前置路由守卫',to,from,next)
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu' ){
            next()
        }else{
            alert('no access')
        }
    }else{
        next()
    }
})


// 全局后置路由守卫 ————— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || 'vue_test'
    console.log('全局后置路由守卫',to,from)
})

export default router