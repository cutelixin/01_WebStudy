import axios from 'axios'
import { nanoid } from 'nanoid'

export default {
    namespaced:true,
    actions:{
        addWang(context,value){
            console.log(value)
            if(value.name.indexOf('王') == 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的名字必须姓王！！')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                res =>{
                    let obj = {id:nanoid(),name:res.data}
                    context.commit('ADD_PERSON',obj)
                    console.log('获取成功',res)
                },
                error =>{
                    let obj = {id:nanoid(),name:error.message}
                    context.commit('ADD_PERSON',obj)
                    console.log('获取失败',error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.push(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:"张三"},
            {id:'002',name:"李四"}
        ]
    },
    getters:{
        getFirstName(state){
            return state.personList[0].name
        }
    },
}