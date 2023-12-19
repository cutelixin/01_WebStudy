import Vue from "vue"

export default {
    install(Vue,a,b,c){
        console.log(a,b,c)
        // 全局过滤器
        Vue.filter('mySlice',function(val){
            return val.slice(0,4)
        })

        // 全局指令
        Vue.directive('fbind',{
            bind(element,binding){
                element.value = binding.value
            },
            // 被绑定元素插入父节点时调用
            inserted(element,binding){
                element.focus()
            },
            // 指令所在的模板重新解析时
            update(element,binding) {
                element.value = binding.value
            },
        })

        // 定义全局mixin
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })

        Vue.prototype.hello = ()=>{
            alert('hello')
        }
    }
    
}