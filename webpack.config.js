const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件配置
    entry: {},
    //出口文件配置             
    output: {
        //打包的路径 dist的绝对路径
        path: path.resolve(__dirname, 'dist'),
        //打包的文件名称 '[name].js'原文件名称
        filename: '[name].js',
    },
    //模块处理配置           
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    // 小于8k的图片自动转成base64格式，并且不会存在实体图片 
                    limit: 8192,
                    // 大于8k的图片打包后存放的目录
                    outputPath: 'images/',
                }
            }]
        }, {
            test: /\.(jsx|js)$/,
            use: 'babel-loader',
            // 只解析src目录下的js
            include: /src/,
            // 排除掉node_modules，优化打包速度
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }],
    },
    //各种插件配置             
    plugins: [
        //热部署
        // new webpack.HotModuleReplacementPlugin(),
    ],
    //服务器的配置           
    devServer: {
        //推荐设置为0.0.0.0,这样localhost、127.0.0.1、本机内网IP、别人电脑和手机都可访问
        host: '127.0.0.1',
        port: 8000,
        //只重新渲染被改代码的组件和数据，不刷新整个页面
        // hot: true,
        overlay: {
            //出现bug时，实时显示在网页上
            errors: true,
        },
        //代理，解决跨域问题
        // proxyTable: {
        //     '/': {
        //         //目标地址
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //     }
        // },
        //启动后自动打开浏览器
        open: true,
    },
};