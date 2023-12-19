<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件的求和为{{sum}}</h3>
        <input type="text" placeholder="请输入人员名字" v-model="name">
        <button @click="add()">添加</button>
        <ul>
            <li v-for="item in personList" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>

    import {nanoid} from 'nanoid'
    // import {mapState,mapMutations} from 'vuex'

    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
            // ...mapState(['personList'])
        },
        methods: {
            add(){
                let obj = {id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',obj)
                this.name = ''
            }
            // ...mapMutations({add:'ADD'})
        },
    }
</script>

<style>
    
</style>