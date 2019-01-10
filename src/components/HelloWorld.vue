<template>
	<div class="hello" id="cesiumContainer">
	
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			url: './aa.jpg'
		}
	},
	methods: {
		mapFun(){
			var imageLayer = new AMap.ImageLayer({
				url: 'http://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/img/dongwuyuan.jpg',
				bounds: new AMap.Bounds(
					[116.327911, 39.939229],
					[116.342659, 39.946275]
				),
				zooms: [15, 18]
			});
			var map = new AMap.Map('cesiumContainer', {
				resizeEnable: true,
				center: [116.33719, 39.942384],
				zoom: 15,
				layers: [
					new AMap.TileLayer(),
					imageLayer
				]
			});
		}
	},
	mounted() {
		this.mapFun()
	},
}
</script>
<style lang="stylus">
.hello
	width 90%
	height 100%
	background-color aa
</style>
