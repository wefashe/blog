const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
// const config = require('./src/util/config');
// import config from './src/util/config';
const path = require('path');

var config = {
  username: 'wefashe',
  nickname: 'Wenfs'
};

var webpackConfig = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve:{
    extensions:['.vue','.js', '.json'],
    alias:{
      '@':path.resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'less-loader'
      ]
    }, {
      test: /\.(jsx|js)$/,
      use: 'babel-loader',
      include: /src/,
      exclude: /node_modules/
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          name: '[name]-img-[hash].[ext]',
          outputPath: 'images/',
        }
      }]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: (config.nickname || config.username) + "'s Blog",
      favicon: path.join(__dirname, 'static/favicon.ico'),
      filename: 'index.html',
      // hash: true,
      template:'index.html',
      // showErrors: true,
      // inject: 'head', //js插入的位置，true/'head'/'body'/false
      minify: {
        // collapseWhitespace: true, //去掉html的空格
      },
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin('wefashe版权所有'),
  ],
  devServer: {
    host: '127.0.0.1',
    // host: '0.0.0.0',
    port: 8080,
    overlay: {
      //出现bug时，实时显示在网页上
      errors: true,
    },
    hot: true, //模块热替换
    open: true,
  }
};


module.exports = webpackConfig;