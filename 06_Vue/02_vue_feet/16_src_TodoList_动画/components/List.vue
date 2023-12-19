<template >
    <ul class="todo-main">
		<transition-group appear>
			<Item 
				v-for="todo in todos" 
				:key="todo.id" 
				:todo="todo" 
				>
			</Item>
		</transition-group>
    </ul>
</template>
<script>
    import Item from './Item.vue'
    export default {
        name:'List',
		props:['todos'],
        components:{
            Item
        },
		
    }
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}

	.v-enter-active,.v-leave-active{
		transition: 1s linear;
	}

	.v-enter,.v-leave-to{
		transform: translateX(100%);
	}
	.v-enter-to,.v-leave{
		transform: translateX(0);
	}

</style>