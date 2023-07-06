const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDir = "dist";

// TailwindCss loader 配置：https://www.iwenson.com/articles/react-with-tailwindcss-from-scratch

module.exports = {
	entry: "./client/index.js",
	output: {
		path: path.join(__dirname, outputDir),
		filename: "[name].[contenthash].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"postcss-loader",
				],
			},
			{
				test: /\.(png|jge?g|webp|woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 8192,
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".*", ".js", ".jsx"], // 讓你再引入的時候不需要加上後綴詞
	},
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true,
		proxy: {
			"/api": "http://localhost:8080",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			favicon: "./public/favicon.ico",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash].css",
		}),
		new CleanWebpackPlugin(),
	],
};
