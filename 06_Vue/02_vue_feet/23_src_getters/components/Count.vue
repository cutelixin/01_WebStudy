<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <h3>当前求和放大10倍为： {{$store.getters.bigSum}}</h3>
         
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>

    import {mapState,mapGetters} from 'vuex'

    export default {
        name:'sum',
        data() {
            return {
                n:1,
            }
        },
      
        methods: {
            increment(){
                this.$store.commit('INCREMENT',this.n)
            },
            decrement(){
                this.$store.commit('DECREMENT',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('incrementOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('incrementWait',this.n)
            }
        },
    }
</script>

<style scoped>
    *{
        margin: 2px;
    }
</style>
