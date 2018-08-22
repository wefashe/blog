const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件配置
    entry: path.join(__dirname, 'src/main.js'),
    //出口文件配置             
    output: {
        //打包的路径 dist的绝对路径
        path: path.resolve(__dirname, 'dist'),
        //打包的文件名称 '[name].js'原文件名称
        filename: '[name]..[hash].js',
    },
    //模块处理配置           
    module: {
        rules: [{
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
                // file-loader是解析图片地址，把图片从源文件拷贝到目标文件并且修改源文件名字
                // url-loader可以在文件比较小的时候，直接变成base64字符串内嵌到页面中
                loader: 'url-loader',
                options: {
                    // 小于5k的图片自动转成base64格式，并且不会存在实体图片 
                    limit: 5 * 1024,
                    // 大于8k的图片打包后存放的目录
                    outputPath: 'images/',
                }
            }]
        }, {
            // css-loader用来处理css中url的路径
            // style-loader可以把css文件变成style标签插入head中
            // postcss-loader根据浏览器自动加上对应的css3的前缀，这里会加载配置文件
            // 多个loader是有顺序要求的，从右往左写，因为转换的时候是从右往左转换的
            test: /\.css$/,
            use: ['style-laoder', 'css-loader', 'postcss-loader'],
            include: path.join(__dirname, 'src'), //限制范围，提高打包速度
            exclude: /node_modules/
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
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(pclerocess.env.NODE_ENV)
        }),
        new Webpack.ProvidePlugin({
            '$': 'jquery'
        }),
    ],
    //服务器的配置           
    devServer: {
        //服务器启动根目录
        // contentBase: path.join(__dirname, "dist"), 
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