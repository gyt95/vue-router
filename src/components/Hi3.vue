<template>
	<div>
		<h2>{{msg}}</h2>
	</div>
</template>
<script>
	export default{
		name: 'hi3',
		data(){
			return{
				msg: '你好！我就是Hi页面下的首页~~'
			}
		}
	}
</script>
<style scoped>
	h2{
		color: orange;
	}
</style>