const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
	source: path.join(__dirname, 'js/todo'),
	build: path.join(__dirname, 'build/'),
	template: path.join(__dirname, 'index.html')
};

module.exports = {
	entry: PATHS.source + '/index.js',
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css"),
		new HtmlWebpackPlugin({
			template: PATHS.template
		}),
	]
};