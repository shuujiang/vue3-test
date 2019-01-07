<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>
<script>
export default {
	mounted() {
		console.log(process.env.NODE_ENV, 13)
		let url = "/info/findList"
		this.axios.post(url)
		.then(res =>{
			console.log(res, 15)
		})
	},
}
</script>

<style lang="stylus">
#app
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	margin-top 60px
	// background-color blue
</style>
