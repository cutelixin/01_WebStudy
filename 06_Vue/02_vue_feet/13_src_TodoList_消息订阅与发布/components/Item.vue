<template >
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
				<!-- 如下代码也能实现功能，但是不太推荐，因为违反原则，修改了props -->
				<!-- <input type="text" v-model="todo.done"> -->
                <span>{{todo.title}}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        </li>
    </div>
</template>
<script>

	import pubsub from 'pubsub-js'

	export default {
		name:'Item',
		props:['todo'],
		methods: {
			// 勾选 or 取消勾选
			handleCheck(todoId){
				// 通知app组件将对应的 todo对象done值取反
				pubsub.publish('checkTodo',todoId)
				// this.$bus.$emit('checkTodo',todoId)
				// this.checkTodo(todoId)
			},
			// 删除
			handleDelete(todoId){
				if(confirm('确认删除吗')){
					pubsub.publish('deleteTodo',todoId)
					// this.$bus.$emit('deleteTodo',todoId)
				}
			}
		},
	}
</script>
<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>