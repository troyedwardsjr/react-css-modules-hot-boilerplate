'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'babel-polyfill',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.join(__dirname, 'app/js/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new HtmlWebpackPlugin({
			template: 'app/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	eslint: {
		configFile: '.eslintrc',
		failOnWarning: false,
		failOnError: false
	},
	module: {
		loaders: [
			{
				test: /\.js(x|)?$/,
				loader: ["babel-loader"],
				include: path.resolve(__dirname, 'app/'),
				query: {
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015', 'react', 'stage-0'],
				}
			},
			{
				test: /\.json?$/,
				loader: 'json'
			},
			{
				test: /\.css$/,
				loaders: [
					'style?sourceMap',
					'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
				]
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass?modules&localIdentName=[name]---[local]---[hash:base64:5]'
			},
			{
				test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/,
				loader: 'file'
			}
		]
	}
};
