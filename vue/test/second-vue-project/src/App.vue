<template>
<div id="app">
	<img src="../src/assets/logo.png" height="200" width="200" alt="">
	<h1>{{msg}}</h1>
	<h2>{{road}}</h2>
	<button v-on:click="onClick">Click Me</button>
</div>
</template>

<script>
	export default {
		name:'app',
		data(){
			return{
				msg:'Hello Vue.js',
				road:''
			}
		},
		methods:{
			onClick:function(){
				this.road = 'A Tough and Fascinating Road to Front-End'
			}
		}
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
	color:#41B883;
}
</style>