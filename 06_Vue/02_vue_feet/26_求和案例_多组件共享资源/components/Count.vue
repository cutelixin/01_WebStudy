<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为： {{bigSum}}</h3>
        <h4>我在{{school}},学习{{subject}}</h4>
        <h4>Person组件的总人数是{{personList.length}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>

    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

    export default {
        name:'sum',
        data() {
            return {
                n:1,
            }
        },
        computed:{

            // 借助mapState生成计算属性，从state中读取数据。（数组写法）
            ...mapState(['sum','school','subject','personList']),

            // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
            ...mapGetters(['bigSum'])
        },
        methods: {

            // 借助mapMutations生成方法，方法中会调用commit去联系mutations。（对象写法）
            ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),

            // 借助mapActions生成方法，方法中会调用dispatch去联系actions。（数组写法）
            ...mapActions(['incrementOdd','incrementWait'])
        },
    }
</script>

<style scoped>
    /* *{
        margin: px;
    } */
</style>
