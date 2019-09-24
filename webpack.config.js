const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
	entry: './src/scripts/main.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})	
	]
}
