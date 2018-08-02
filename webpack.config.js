const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var webpackConfig = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
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
      title: "Wenfs's Blog",
      favicon: path.join(__dirname, 'static/favicon.ico'),
      filename: 'index.html',
      hash: true,
      // template:'template.html',
      showErrors: true,
      inject: 'head', //js插入的位置，true/'head'/'body'/false
      minify: {
        // collapseWhitespace: true, //去掉html的空格
      },
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin('wefashe版权所有'),
  ],
  devServer: {
    host: '127.0.0.1',
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