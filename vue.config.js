var path = require('path')
module.exports = {
	lintOnSave: false,
	// 基本路径
	baseUrl: './',
	// 输出文件目录
	outputDir: 'dist',
	// webpack-dev-server 相关配置
	devServer: {
		port: 8888,
		proxy: {
			'/yj': {
				target: "http://172.16.70.66:8767",
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/yj': 'http://172.16.70.66:8767'
				}
			}
		},  // 配置多个代理
	},
	css: {
		loaderOptions: {
			stylus: {
				import: path.resolve(__dirname, './src/stylus/variable.styl')
			},
		}
	}

}