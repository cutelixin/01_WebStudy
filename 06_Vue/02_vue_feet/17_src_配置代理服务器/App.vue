<template>
	<div >
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
		<ul v-if="students">
			<li v-for="item in students" ::key="item.id">
				姓名：{{item.name}}-年龄：{{item.age}}
			</li>
		</ul>
    </div>
</template>
<script>

	import axios from 'axios'

    export default {
        name:'App',
        
        data(){
            return{
				students:[]
            }
        },
		methods: {
			getStudents(){
				axios.get('http://localhost:8080/atguigu/students').then(
					res=>{
						console.log('请求成功',res.data)
						this.students = res.data
					},
					error =>{
						console.log('请求失败',error.message)
					}
				)
			},
			getCars(){
				axios.get('http://localhost:8080/demo/cars').then(
					res=>{
						console.log('获取成功',res.data)
					},
					erro=>{
						console.log('获取失败',erro.message)
					}
				)
			}
		},
    }

	/* 
		changeOrigin设置为true时，服务器收到的请求头中的host为：location:5000
		changeOrigin设置为false时，服务器收到的请求头中的host为：location:8080
		changeOrigin默认值为true
	*/
</script>




