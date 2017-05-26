<template>
	<div>
		<h1>{{ msg }}</h1>

		<router-view class="aaa"></router-view>
	</div>
</template>
<script>
	export default {
		name: 'hi',
		data(){
			return{
				msg: 'Hi hi hi！哈哈哈哈哈！'
			}
		}
	}
</script>
<style scoped>
	a {
	  color: #42b983;
	}
</style>