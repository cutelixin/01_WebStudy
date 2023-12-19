export const mixins = {
    data(){
        return{
            name:'name',
            phone:'1101201120'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊')
    },
}