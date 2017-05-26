<template>
	<div>
		<h2>{{msg}}</h2>
		<p>显示当前路由的参数值：{{$route.params.username}}</p>
		<p>显示当前路由的name值：{{$route.name}}</p>
		<div>
			<ul>
				<li>apple</li>
				<li>orange</li>
				<li>banana</li>
			</ul>
		</div>
	</div>

</template>
<script>
	export default{
		name: 'hi1',
		data(){
			return{
				msg: '你好！我是Hi页面下的第1个子页啊~~'
			}	
		}
	}
</script>
<style>
	ul{
		list-style: none;
	}
</style>