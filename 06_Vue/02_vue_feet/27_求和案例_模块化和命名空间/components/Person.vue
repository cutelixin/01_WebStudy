<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组件的求和为{{sum}}</h3>
        <h3>列表中第一个人的名字是{{firstName}}</h3>
        <input type="text" placeholder="请输入人员名字" v-model="name">
        <button @click="add()">添加</button>
        <button @click="addWang()">添加姓王的人</button>
        <button @click="addPerson()">添加一个人名字随机</button>
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
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstName(){
                return this.$store.getters['personAbout/getFirstName']
            }
            // ...mapState(['personList'])
        },
        methods: {
            add(){
                let obj = {id:nanoid(),name:this.name}
                this.$store.commit('personAbout/ADD_PERSON',obj)
                this.name = ''
            },
            addWang(){
                let obj = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addWang',obj)
            },
            addPerson(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
            // ...mapMutations({add:'ADD'})
        },
        mounted() {
            console.log(this.$store)
        },
    }
</script>

<style>
    
</style>