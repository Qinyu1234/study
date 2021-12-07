CommonJS & ES6(前端主要)

CommonJS //本质:module.exports
    //暴露语法 指向一个{}
        //第一种:
            //module.exports = {}
                //module.exports.a = functiuon(){}
        //第二种:
            //exports.xxx = value
    //引入语法
        //引入第三方模块 require(xxx) xxx为模块名
        //引入自定义模块 require(xxx) xxx为模块文件路径

    /* 浏览器使用:
        1,安装:npm i browserify -g
        2,翻译:borwserify ./app.js o ./build.js 讲./app.js翻译到build.js中 然后浏览器就能引入使用了*/
        
ES6
    // 每个文件都是一个模块
    // 需借助Babel 和Browserify一次编译代码才能执行
        // Babel:  将ES6转为ES5
        //         将jsx转为js
    
    1,暴露语法		暴露出去的都是对象
        //1,分别暴露 方法或变量前加 export
            //export function data(){}
            //export const data1 = '1',
			//暴露出去的对象{data,data1}
        //2,统一暴露    
            //export {data,data as data1}     
        //3,默认暴露 default后跟表达式 
            //export default{a:1,b:2} 
            //暴露出去的对象{default:{a:1,b:2}}
    2,引入 
        //1,分别暴露的引入 import {xx} from ''
            //1,{data as data1}(重命名)
            //需要import {dataFun,data} from ''
            //3,import * as obj from ''
        //2,统一暴露的引入
                //跟分别的一样
        //3,默认暴露的引入
			//完整写法 
			//import {default as obj} from ''
            //import obj from ''
        //4,混引入
            //import a1(默认),{stu1(分别),stu2(分别),stu3(统一),stu4(统一)} from ''
    //#region 引入babel 
        //cli:命令行接口中心 基本用不到
            // 1, 安装:npm i babel-cli browserify -g
            // 2, bael库:npm install(i) babel-preset-es2015
            // 3, 定义babelrc文件
            //     // {"presets":["es2015"]}
            // 使用:babel ./src(源文件) -d(翻译) ./build(翻译后的文件)
    //#endregion