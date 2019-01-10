<template>
	<div id="app">
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
@import './stylus/common.styl'
</style>
