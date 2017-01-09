var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'dist/'),
		publicPath:'dist/',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['css']
			},{
				test:/\.(png|jpg|gif|svg)$/,
				loaders:['file'],
				options: {
          			name: '[name].[ext]?[hash]'
				}
			},{
				test:/\.js$/,
				loader: 'babel-loader',
        		exclude: /node_modules/
			},{
				test: /\.vue$/,
        		loader: 'vue-loader'
			}
		]
	}
}
