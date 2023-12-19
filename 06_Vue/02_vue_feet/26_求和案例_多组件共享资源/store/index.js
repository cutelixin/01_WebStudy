// 该文件用于创建vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 准备actions ——— 用于响应组件中的动作
const actions = {
    /* increment(context,value){
        context.commit('INCREMENT',value)
    },
    decrement(context,value){
        context.commit('DECREMENT',value)
    }, */
    incrementOdd(context,value){
        if(context.state.sum % 2){
            context.commit('INCREMENT',value)
        }
    },
    incrementWait(context,value){
        setTimeout(() => {
            context.commit('INCREMENT',value)
        }, 500);
    }
}

// 准备mutations ——— 用于操作数据（state）
const mutations = {
    INCREMENT(state,value){
        state.sum += value
    },
    DECREMENT(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.push(value)
    }
}

// 准备state ——— 用于存储数据
const state = {
    sum:0,
    subject:'前端',
    school:'尚硅谷',
    personList:[
        {id:'001',name:"张三"},
        {id:'002',name:"李四"}
    ]
}

// 准备state ——— 用于将state数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

