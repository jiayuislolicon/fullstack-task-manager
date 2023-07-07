const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.config.base');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    static: {
      directory: paths.src,
    },
  },
  module: {
    rules: [
      {
        test: /\.[js]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
});
