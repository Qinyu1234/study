//#region 模块打包器 === 构建工具 (默认处理js/json)
    //Webpack会将前端所有的资源文件(js/json/css/img/less/...)都作为模块处理
    //app.js是webpack的入口,所有外部文件都要在这里引入
        //能将ES6的模块化语法转为浏览器识别的语法
    //五大核心概念 npm i webpack@4
        // 1,入口(entry)    指示webpack应该是用哪个模块,来作为构建内部依赖图的开始
        // 2,输出(output)   在哪里输出文件,已经如何命名这些文件
        // 3,加载器(Loader) 处理那些非JavaScrip文件(webpack自身只能解析js和json)
        // 4,插件(plugins)  执行范围更广的任务,从打包到优化都可以实现
        // 5,模式(mode)     有生产摩米士production和开发模式development
    //安装
        //npm i webpack@4 webpack-cli@3 -g 全局安装,作为指令使用
        //npm i webpack@4 webpack-cli@3 -D 本地安装,作为本地依赖使用
        //使用webpack ./src/js/app.js -o ./build/js/app.js --mode=development
    //配置文件
        //webpack.config.js 地址跟src平级
    //Loader
        //将源码外面文件夹变成包 npm init --yes
        //npm install css-loader -D

const { devServer } = require("./config/webpack.config")



    //依赖
        //开发依赖:帮助程序员加工代码的库,都是开发依赖
        //生产依赖:帮助程序员实现功能效果的库,都是生产依赖


        // srtack overflow
        // 思否
//#endregion


//#region webpack.config.js配置 
基本
//#region 
    module.export = {
        entry:'',//入口
        output:{},//出口
        module:{ //配置loader
            rules:[]
        },
        plugin:[],//配置plugin
        model:工作模式
    }
//#endregion

开发
    //#region 开发
        Loader
            webpack5用webpack4的loader
                //     type: 'javascript/auto'
            模板
                //     test: /\.css$/i,
                //     use: [
                //         "style-loader", 
                //         "css-loader",
                //     ],

            css
                //css-loader style-loader

            less
                //css-loader style-loader less-loader
                
            样式中图片&html中图片处理优化
                //url-loader
                // test: /\.(png|jpg|gif)$/,
                //     options: {
                //     outputPath:'imgs',
                //     publicPath:'./imgs',
                //     name:'[hash:5].[ext]',
                //     limit:8 * 1024, //图片大小,小于此时转为base64
                //   }
            配置解析其他文件
                //file-loader
                // exclude:/\.(html|less|css|png|jpg|bmp|js|gif|json)$/,
                // loader: 'file-loader',
                // options: {
                //   outputPath:'media',
                //   name:'[hash:5].[ext]',
                // },
            解析html中的图片   
                // {
                //     test: /\.(html)$/,
                //     use: ['html-loader'],
                // },

        插件(plugin)
            html
                // html:html-webpack-plugin
                //     const HtmlWebpackPlugin = require('html-webpack-plugin')
                //     plugins:[new HtmlWebpackPlugin({
                //     template: './src/index.html'
                //     })]
            

        热更新(devServer)
            //webpack-dev-server
            // devServer:{
            //     port:5000,//开启服务器的端口号
            //     open:true,
            // }
    //#endregion

生产
    //#region 生产
            不需要
            热更新(devServer)

        提取css为单独文件(mini-css-extract-plugin)
            // const MiniCssExtractPlugin = require('mini-css-extract-plugin');
            // new MiniCssExtractPlugin({
            //     filename:'/css/index.css'
            // })
            // const baseCssLoader = [
            //     MiniCssExtractPlugin.loader,
            //     'css-loader',
            // ]
        兼容性处理
            1,copnfig中
            // const baseCssLoader = [
            //     MiniCssExtractPlugin.loader,
            //     'css-loader',
            //     {
            //         loader: "postcss-loader",
            //         options: {
            //             postcssOptions: {
            //                 plugins: [
            //                     "postcss-preset-env",
            //                 ],
            //             },
            //         },
            //     },
            // ]
            2,package.json中
                // "browserslist": {
                //     "development": [
                //     "last 1 chrome version",
                //     "last 1 firefox version",
                //     "last 1 safari version"
                //     ],
                //     "production": [
                //     ">0.2%",
                //     "not dead",
                //     "not op_mini all",
                //     "ie 10"
                //     ]
                // }
        语法检查Eslint
            //配置eslint-config-airbnb-base
            //空格 === 等
        js语法转换babel
            //babel-loader @babel/core @babel/preset-env
            //ES6基础语法 ->ES5 
        js兼容
            //@babel/polyfil
            //ES6高级语法->ES5 ie不认识parmise
            //在js中引入即可
        代码压缩(生产模式只压缩html&js)
            //css optimize-css-assets-webpacks-plugin
    //#endregion
    
//#endregion

    

