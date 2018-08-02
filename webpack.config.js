const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var webpackConfig = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'wefashe的博客',
      favicon: path.join(__dirname, 'static/favicon.ico'),
      filename: 'index.html',
      hash: true,
      // template:'template.html',
      showErrors: true
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};


module.exports = webpackConfig;