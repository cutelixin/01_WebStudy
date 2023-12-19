# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 关于不同版本的vue

1.vue.js 与 vue.runtime.xx.js的区别

    (1).vue.js是完整版的Vue，包含：核心功能+模板解析器
    (2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器

2.因为vue.runtime.xxx.js没有模板解析器，所有不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

# ref属性

1.被用来给元素或子组件注册引用信息 (id替代者)

2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）

3.使用方式

    打标识：<h1 ref="xxx">.....</h1> 或 <School ref="xxx"></School>
    获取：this.$refs.xxx

# 配置项props

功能：让组件接收到外部传过来的数据

    (1). 传递数据：
        <Demo name="xxx"/>
    (2). 接收数据
        第一种方式 (只接收) ：
        props['name']

        第二种方式 (限制类型)：
            props:{
                name:String,
                age:Number,
                sex:String
            } 

        第三种方式 (限制类型、限制必要性、指定默认值)：
            props:{
                name:{
                    type:String, //nama是字符串类型
                    required:true, //name是必要传递的
                },
                age:{
                    type:Number,
                    default:99, //默认值
                },
                sex:{
                    type:String,
                    required:true
                }
            } 

>**备注**
>
>props是只读的，Vue底层会监测你的props修改，如果进行了修改，就会发出警告，若业务需求需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

# mixin (混合)

功能：可以把多个组件共用的配置提取成一个混入对象

使用方式：

    第一步定义混合，例如：
        {
            data(){...},
            methods:{...}
            ....
        }
    
    第二步使用混入，例如：
        (1).全局混入：Vue.mixin(xxx)
        (2).局部混入：mixin:['xxx']

# 插件

功能：用于增强Vue

本质：包含install方法的一个对象，install的第一个参数是vue，第二个以后的参数是插件使用者传递的数据。

定义插件：

    对象.install = function (Vue,options) {
        // 1.添加全局过滤器
        Vue.filter(...)

        // 2.添加全局指令
        Vue.directive(...)

        // 3.添加定义全局mixin
        Vue.mixin(...)

        // 4.添加实例方法
        Vue.prototype.$myMethod = function() {...}
        Vue.prototype.$myProperty = xxx
    }

使用插件：```Vue.use()```

# scoped样式

作用：让样式在局部生效，防止冲突。

写法：```<style scoped>```

# 总结TodoList案例

1.组件化编码流程：

    (1).拆分静态组件：组件要按照功能点拆分，命名不要与 html元素 冲突。

    (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
        1).一个组件在用：放组件自身即可
        2).一些组件在用：放他们共同的父组件导航（状态提升） 

    (3).实现交互：从绑定事件开始

2.props适用于：

    (1).父组件 == > 子组件 通信
    (2).子组件 == > 父组件 通信（要求父给子一个函数）

3.使用v-model要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的。

4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

# 组件的自定义事件 ($emit)

1.一种组件间的通信方式，适用于 子组件 ==> 父组件

2.使用场景：A是父组件，B是子组件，B想给A传递数据，那么就要给A中给B绑定自定义事件（事件的回调在A中）

3.绑定自定义事件：

1.  第一种方式，在父组件中```<demo @atguigu="test"></demo>``` 或 ```<demo v-on:atguigu="test"></demo>```

2.  第二种方式，在父组件中

```html
<demo ref="student"></demo>
....
mounted() {
    this.$refs.xxx.$on('atguigu',this.test)
},
```

3.  若想让自定义事件只能触发一次，可以使用once修饰符，或者$once方法。

4.触发自定义事件：```this.$emit('atguigu',数据)```

5.解绑自定义事件：```this.$off('atguigu')```

6.组件上也可以绑定原生DOM事件，需要使用native修饰符

7.注意：
> 
> 通过 ```this.$refs.xxx.$on('atguigu',回调)``` 绑定自定义事件的时候，回调要>么配置在methods中，要么使用箭头函数，否则this指向会出现问题。

# 全局事件总线 ($bus)

1.一种组件间通信的方式，适用于任意组件间通信。

2.安装全局事件总线：

```html
new Vue({
    ....
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
    }
    ....
})
```

3.使用事件总线

1.  接收数据：A组件想接收数据，则在A组件中给 $bus 绑定自定义事件，事件的回调留在A组件本身。

```html
    methods: {
        demo(data){....}
    },
    ....
    mounted() {
        this.$bus.$on('xxx',this.demo})
    },
```

2.  提供数据：```this.$bus.$emit('xxx',数据)```

4.最好在 beforeDestroy 钩子中，用$off去解绑当前组件所用到的事件。

![全局事件总线](./img/%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF.png)

# 消息订阅与发布 (pubsub)

1.一种组件间通信的方式，适用于任意组件间通信。

2.使用步骤

1.  安装pubsub：npm i pubsub-js

2.  引入：import pubsub from 'pubsub-js'

3.  接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

```html
new Vue({
    methods: {
        demo(msgName,data){...}
    },
    ...
    mounted() {
        this.pubId = pubsub.subscribe('xxx',this.demo)
    },
})
```

4.  提供数据：```pubsub.publish('xxx',数据)```

5.  最好在 beforeDestroy 钩子中，用 ```pubsub.unsubscribe(this.pubId)``` 去取消订阅。

# nextTick

1.语法：this.$nextTick(回调函数)

2.作用：在下一次DOM更新结束后执行其指定的回调

3.什么时候用：当数据改变后，要基于更新后的新DOM进行某些操作时，要在$nextTick所指定的回调函数中执行。

# Vue封装的过度与动画

1.作用：在插入、更新或移除DOM元素的时候，在合适的时候给元素添加样式类名。

2.图示

![Vue封装的过度与动画](./img/Vue%E5%8A%A8%E7%94%BB.png)

3.写法

1.  准备好样式：

    + 元素进入的样式
    
        1. v-enter：进入的起点

        2. v-enter-active：进入的过程中

        3. v-enter-to：进入的终点

    + 元素离开的样式

        1. v-leave：进入的起点

        2. v-leave-active：进入的过程中

        3. v-leave-to：进入的终点

2.  使用 ```<transition>``` 包裹要过度的元素，并配置name属性：

```html
    <transition name="hello" :appear="true">
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
```

3.  备注：若有多个元素需要过度，则需要使用：```<transition-group>``` ，且每个元素都要指定```key```值。

# Vue脚手架配置代理

## 方法一

在vue.config.js中添加如下配置：

```html
    devServer: {
        proxy: 'http://localhost:5000'
    }
```

说明：

1.  优点：配置简单，请求资源时直接发给前端 (8080) 即可。

2.  缺点：不能配置多个代理，不能灵活控制请求是否走代理。

3.  工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务（优先匹配前端资源）

## 方法二

编写vue.config.js配置具体代理规则：

```html
module.exports = defineConfig({
  ...
  devServer: {
    proxy: {
      '/api1': { // 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000', //代理目标的基础路径
        pathRewrite:{'^/api':''},
        ws: true,            // 用于支持websocket
        changeOrigin: true    // 用于控制请求头中的host
      },
      '/api2': { // 匹配所有以 '/api2'开头的请求路径
        target: 'http://localhost:5001', //代理目标的基础路径
        pathRewrite:{'^/api2':''},
        ws: true,            // 用于支持websocket
        changeOrigin: true    // 用于控制请求头中的host
      }
    },
  }
})

/* 
    changeOrigin设置为true时，服务器收到的请求头中的host为：location:5000
    changeOrigin设置为false时，服务器收到的请求头中的host为：location:8080
    changeOrigin默认值为true
*/
```

说明：

1.  优点：可以配置多个代理，且可以灵活的控制请求是否走代理。

2.  缺点：配置略微繁琐，请求资源时必须加前缀。

# vue-resource (了解即可)

## 使用步骤

1.下载：npm i vue-resource

2.引入：import vueResourse from 'vue-resource'

3.使用：Vue.use(vueResourse)

4.页面事件中使用：

```html
this.$http.get(url).then(
    res => {},
    erro => {}
)
```

# 插槽

1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，使用于 父组件 === > 子组件

2.分类：默认插槽、具名插槽、作用域插槽

3.使用方式：

1.  默认插槽

```html
    父组件中:

        <Category title="美食">
            <div>html结构1</div>
        </Category>

    子组件：

        <template>
            <div>
                <!-- 定义插槽 -->
                <slot>插槽默认内容</slot>
            </div>
        </template>
```

2.  具名插槽

```html
    父组件中:

        <Category>
            <template slot="center">
                <div>html结构1</div>
            </template>

            <template v-slot:footer> 
                <div>html结构2</div>
            </template>
        </Category>

    子组件：

    <template>
        <div>
            <slot name="center">插槽默认内容</slot>
            <slot name="footer">插槽默认内容</slot>
        </div>
    </template>

```

3.  作用域插槽

    1.理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用的数据所遍历处理啊的结构由App组件决定）

    2.具体编码

```html
    父组件中:

        <Category>
            <template scope="scopeData">
                <!-- 生成的时ul列表 -->
                <ul>
                    <li v-for="g in scopeData" :key="g">{{g}}</li>
                </ul>
            </template>
       </Category>

        <Category>
            <template slot-scope="scopeData">
                <!-- 生成h4标题 -->
                <h4 v-for="g in scopeData" :key="g">{{g}}</h4>
            </template>
        </Category>


    子组件：

        <template>
            <div>
                <slot :games="games">插槽默认内容</slot>
            </div>
        </template>

        <script>
            export default {
                name:'Category',
                props:['title'],
                // 数据在子组件自身 
                data(){
                    return{
                        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                    }
                },
            }
        </script>
```

# Vuex

## 1.概念

在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件共享状态进行集中式的管理（读/写），也是一种组件间的通信方式，且适用于任意组件间的通信。

## 2.何时使用

多个组件需要共享数据时

## 3.搭建vuex环境

1.  创建文件：```src/store/index.js```

```html

    // 引入Vue核心库
    import Vue from 'vue'
    // 引入Vuex
    import Vuex from 'vuex'
    // 使用vuex插件
    Vue.use(Vuex)

    // 准备actions对象 ——— 用于响应组件中的动作
    const actions = {}

    // 准备mutations对象 ——— 用于操作数据（state）
    const mutations = {}

    // 准备state对象 ——— 用于存储数据
    const state = {}


    // 创建并暴露 store
    export default new Vuex.Store({
        actions,
        mutations,
        state
    })

```

2.  在mian.js中创建vm时传入store配置项

```html
    ...
    // 引入store
    import store from "./store";
    ....
    // 创建vue的实例对象 (vm)
    new Vue({
        render: h => h(App),
        store,
    }).$mount('#app')

```

## 4.基本使用

1.  初始化数据、配置actions、配置mutations、操作文件store.js

```html
    // 引入Vue核心库
    import Vue from 'vue'
    // 引入Vuex
    import Vuex from 'vuex'
    // 使用vuex
    Vue.use(Vuex)

    const actions = {
        // 响应组件中加的动作
        increment(context,value){
            context.commit('INCREMENT',value)
        },

    }

    const mutations = {
        // 执行加
        INCREMENT(state,value){
            state.sum += value
        },
    }

    //初始化数据
    const state = {
        sum:0,
    }

    // 创建并暴露 store
    export default new Vuex.Store({
        actions,
        mutations,
        state
    })

```

2.  组件中读取vuex中的数据：```this.$store.sum```

3.  组件中修改vuex中的数据：```this.$store.dispatch('actions中的方法',数据)``` 或 ```this.$store.commit('mutations中的方法',数据)```

>**备注** 
>
>若没有网络请求或其他业务逻辑，组件也可以越过actions，即不写 dispatch，直接编写 commit

## getter的使用

1.概念：当 state 中的数据需要经过加工后再使用时，可以使用 getters 加工。

2.在 store.js 中追加 getters 配置。

```html
····
// 准备state ——— 用于将state数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露 store
export default new Vuex.Store({
    ····
    getters
})
```

3.组件中读取数据；```$store.getters.bigSum```

## 四个map方法的使用

1.**mapState方法**：用于帮助我们映射 state 中的数据为计算属性

```html
computed:{
    // 借助mapState生成计算属性，从state中读取数据。（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),

    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject']),
},
```

2.**mapGetters方法**：用于帮助我们映射 getters 中的数据为计算属性

```html
computed:{
    // 借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    ...mapGetters({bigSum:'bigSum'})

    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(['bigSum'])
},
```

3.**mapActions方法**：用于帮助我们生成与actions对话的方法，即：包含 ``` this.$store.dispatch(xxx) ```的函数

```html
computed:{
    // 借助mapActions生成方法，方法中会调用dispatch去联系actions。（对象写法）
    ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),

    // 借助mapActions生成方法，方法中会调用dispatch去联系actions。（数组写法）
    ...mapActions(['incrementOdd','incrementWait'])
},
```

4.**mapMutations方法**：用于帮助我们生成与mutations对话的方法，即：包含 ``` this.$store.commit(xxx) ```的函数

```html
computed:{
    // 借助mapMutations生成方法，方法中会调用commit去联系mutations。（对象写法）
    ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

    // 借助mapMutations生成方法，方法中会调用commit去联系mutations。（对象写法）
    ...mapMutations(['INCREMENT','DECREMENT']),
},
```

>备注：mapActions 与 mapMutations使用时，若需要传递参数需要：在模板中绑定好事件时传递好参数，否则参数时事件对象。

## 模块化 + 命名空间

1.目的：让代码更好维护，让多种数据分类更加明确

2.修改：store.js 

```html
    const countAbout = {
        namespaced:true, //开启命名空间
        state:{x:1},
        mutations:{...},
        actions:{...},
        getters:{
            bigSum(state){
                return state.sum * 10
            }
        },
    }

    const personAbout = {
        namespaced:true, //开启命名空间
        state:{...},
        mutations:{...},
        actions:{...},
    }

    const store = new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})
```

3.开启命名空间后，组件读取 state 数据

```html
// 方式一：自己直接读取
this.$store.state.personAbout.personList

// 方式二：借助 mapState 读取
...mapState('countAbout',['sum','school','subject']),
```

4.开启命名空间后，组件读取 getters 数据

```html
// 方式一：自己直接读取
this.$store.getters['personAbout/getFirstName']

// 方式二：借助 mapState 读取
...mapGetters('countAbout',['bigSum'])
```

5.开启命名空间后，组件中调用 dispatch

```html
// 方式一：自己直接dispatch
this.$store.dispatch('personAbout/addWang',obj)

// 方式二：借助 mapActions 读取
...mapActions('countAbout',['incrementOdd','incrementWait'])
```

6.开启命名空间后，组件中调用 commit

```html
// 方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',obj)

// 方式二：借助 mapMutations 读取
...mapMutations('countAbout',{increment:'INCREMENT',decrement:'DECREMENT'}),
```

## 路由

1.  理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理

2.  前端路由：key是路径，value是组件

### 1. 基本使用

1.  安装vue-router，命令：npm i vue-router

2.  应用插件：vue.use(VueRouter)

3.  编写router配置项：

```html
// 引入VueRouter
import VueRouter from "vue-router";
// 引入路由组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

// 创建router实例对象并暴露一个路由器，去管理一组一组的路由规则
const router =  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
```

4.  实现切换（active-class可配置高亮样式）

```
<router-link to="/about" active-class="active">About</router-link>
```

5.  指定展示位置

```html
<!-- 路由组件呈现的位置 -->
<router-view></router-view>
```

### 2.几个注意点

1.  路由组件通常存放在 pages 文件夹，一般组件通常存放在 components 文件夹中。

2.  通过切换，“隐藏”了的路由组件，默认是被销毁的，需要的时候再去挂载。

3.  每个组件都有自己的 $route 属性，里面存储着自己的路由信息。

4.  整个应用只要一个 router，可以通过组件的 $router 属性获取到。

### 3.多级路由

1.  配置路由规则，使用chilren配置项：

```html
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[                  //通过children配置子级路由
                {
                    path:'message',     //此处一定不要写：/message
                    component:Message
                },
                {
                    path:'news',        //此处一定不要写：/news
                    component:News
                },
            ]
        }
    ]
```

2.  跳转（要写完整路径）：

```html
<router-link to="/home/news">News</router-link>
```

### 4.路由的query参数

1.  传递参数

```html
    <!-- 路由跳转并携带query参数，to的字符串写法 -->
    <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
    
    <!-- 路由跳转并携带query参数，to的对象写法 -->
    <router-link :to="{
        path:'/home/message/detail',
        query:{
        id:m.id,
        title:m.title
        }
    }">
        {{m.title}}
    </router-link>
```
2.  接收参数

```html
<template>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
    </ul>
</template>
```

### 5.命名路由

1.作用：可以简化路由的跳转。

2.如何使用；

1.  给路由命名：

```html
    {
        path:'/demo',
        component:Demo,
        children:[
            {
                path:"test",
                component:Test,
                children:[
                    {
                        name:'hello',
                        path:'welcome',
                        component:Hello
                    }
                ]
            },
        ]
    }
```

2.  简化跳转

```html
    <!-- 简化前，需要写完整的路径 -->
    <router-link to="/demo/test/welcome">welcome</router-link>

    <!-- 简化后，直接通过名字跳转 -->
    <router-link to="{name:'hello'}">welcome</router-link>

    <!-- 简化写法，配合传递参数 -->

    <router-link :to="{
        name:'hello',
        query:{
        id:666,
        title:'你好'
        }
    }">
        跳转
    </router-link>
```

### 6.路由的params参数

1.  配置路由，声明接收params参数

```html
{
    path:'/home',
    component:Home,
    children:[
        {
            path:"message",
            component:Message,
            children:[
                {
                    name:'xiangqing',
                    path:'detail/:id/:title', //使用占位符声明接收params参数
                    component:Detail
                }
            ]
        }
    ]
}
```

2.  传递参数

```html
    <!-- 路由跳转并携带parmes参数，to的字符串写法 -->
    <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>
              
    <!-- 路由跳转并携带parmes参数，to的对象写法 -->
    <router-link :to="{
        name:'xiangqing',
        params:{
        id:m.id,
        title:m.title
        }
    }">
        {{m.title}}
    </router-link>
```

>**特别注意**
>
>路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3.  接收参数

```html
<template>
    <ul>
        <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li>
    </ul>
</template>
```

### 7.路由的props配置

作用：让路由组件更方便的接收到参数

```html

{
    name:'xiangqing',
    path:'detail/:id/:title',
    component:Detail,

    // props的第一种写法，值为对象，该对象种的所有key-value都会以props的形式传递给Detail组件。（值为固定数值）
    props:{a:1,b:'hello'}

    // props的第二种写法，值为布尔值，若布尔值为真，就会把该组件接收到的所有的params参数，以props的形式传递给Detail组件。
    props:true

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

```

### 8. ```<router-link>``` 的replace属性

1.作用：控制路由跳转时操作浏览器历史记录的模式。

2.浏览器的历史记录有两种写入方式：分别为 push 和 replace，push 是追加历史记录，replace 是替换当前的聊天记录。路由跳转时默认为 push。

3.如何开启 replace 模式：```<router-link replace ....>News</router-link>```

### 9.编程式路由导航

1.作用：不借助 ```<router-link>``` 实现路由跳转，让路由跳转更加灵活

2.具体编码

```html

// $router 的两个API
this.$router.push({
    name:'xiangqing',
        query:{
        id:m.id,
        title:m.title
    }
})


this.$router.replace({
    name:'xiangqing',
        query:{
        id:m.id,
        title:m.title
    }
})

// 后退
this.$router.back()
// 前进
this.$router.forward()
// 可前进可后退
this.$router.go(3)
        
```

### 10.缓存路由组件

1.作用：让不展示的路由组件保持挂载，不被销毁。

2.具体编码：

```html
<keep-alive include="News">  //News为组件名
    <router-view></router-view>
</keep-alive>
```

### 11.组件的两个生命周期钩子

1.作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。

2.具体名字：

1.  activated 路由组件被激活时触发。

2.  deactivated 路由组件失活时触发。

### 12.路由守卫

1.作用：对路由进行权限的控制。

2.分类：全局守卫、独享守卫、组件内守卫

3.全局守卫：

```html
// 全局前置路由守卫 ————— 初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log('全局前置路由守卫',to,from,next)
    if(to.meta.isAuth){         // 判断当前路由是否需要进行权限控制 
        if(localStorage.getItem('school') === 'atguigu' ){ //权限控制基本规则
            next() // 放行
        }else{
            alert('no access')
        }
    }else{
        next()    // 放行
    }
})


// 全局后置路由守卫 ————— 初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || 'vue_test'   // 修改网页title
    console.log('全局后置路由守卫',to,from)
})
```

4.独享守卫

```html
beforeEnter:(to,from,next)=>{
    console.log('beforeEnter',to,from,next)
    if(localStorage.getItem('school') === 'atguigu' ){ //权限控制基本规则
        next()
    }else{
        alert('no access')
    }
}
```

5.组件内守卫

```html
// 通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
    ...
}

// 通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {
    console.log('beforeRouteEnter')
    next()
}
```
### 13. 路由器的两种工作模式

1.对于一个url来说，什么是hash值？————— # 及其后面的内容就是hash值。

2.hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。

3.hash模式：

1.  地址中永远带着#，不美观

2.  若以后将地址通过第三方手机app分享，若app校验较严，则地址会被标记为不合法。

4.history模式：

1.  地址干净、美观。

2.  兼容性和hash模式相比略差。

3.  应用部署上线时需要后端人员支持，解决刷新页面服务器404的问题。