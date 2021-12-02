重要!!!
	HTTP协议 TCP/IP
		请求报文: 客户端向服务器发送数据
		响应报文: 服务器想客户端返回数据
		
	Fiddle工具: 抓包
	decodeURI()//中文转码
	/* HTTP介绍
	请求报文:
		1,请求行		GET http://www.baidu.com/... HTTP/1.1
			GET:		请求方式 GET/POST
			URL:		http://www.baidu.com/...
			HTTP/1.1	HTTP协议的版本
			
			ps:
			* https/http	协议(mongodb/ftp/ssh)
			* www.baidu.com	域名
			* /s			路径
			* ie=utf-8&f=8	查询字符串(query string)
			* #logo			锚点
		2,请求头	Accept:xxx
					Accept-Language:xxx
					User-Agent:xxx 来至于哪一个浏览器
					Accept-Encoding 客户端支持压缩方式
					...
		3,请求空行	
		4,请求体
			GET请求体空的,POST一般部位空
			ie=utf-8&f=8
			
	响应报文:
		1,相应行	HTTP/1.1 200 OK
			HTTP/1.1	协议的版本
			200			相应状态码 
			 (404找不到 403进制的 500服务器状态	403跳转)
			OK			相应的状态字符串
		2,相应头
			参考请求头
		3,相应空行
		4,相应体
			html/js/css/json/img/...
	*/
	
	/* 创建http服务,解析请求报文
	//1,引入http模块
	const http= require('http'); 
	//2,调用方法 创建服务对象
	// request 请求报文的封装对象
	// response 相应报文的封装对象
	
	const url = require('url');	//解析请求头
	const qs = require('querystring');	//解析报文体
	
	const serve = http.createServer(function(request,response){
		//获取报文中内容
		request.method;		//请求类型
		request.httpVersion;	//协议版本
		request.url;		//请求url 带数据
			url.parse(request.url,true).pathname; //url路径部分	
			url.parse(request.url,true).query; //url数据部分对象 	
			
		request.headers;	//请求头信息
		
		//提取请求体信息
		let body = '';
		//绑定data事件
		request.on('data',chunk =>{ 
			body +=chunk.toString();
		});
		//绑定end事件
		request.on('end',() =>{
			console.log(body);
			qs.parse(body);
			respon.end('Hello HTTP server')
		});
		
	});
	//3,监听端口 启动服务
	server.listen(8000,function(){
		console.log('服务已经启动,端口8000监听中');
	});
	*/
	
	/* 相应API的设置(返回报文)
	require('http')
	.createServer((request,response)=>{
		//行
			//状态码
			response.statusCode = 404;
			//状态字符串
			response.stuatusMessage = 'TEST';
		//头
			response.setHeader('Content-type','text/html;charset=utf-8')
		//体 不能为空
			response.write('123');
		response.end('ok');
	})
	.listen(80);
	*/
	
	/* 模块 (require引入时代码会执行)
	1,暴漏模块
	function add(a,b){return a+b;}
	module.exports = add;
	2,引入模块 ./不能省略
	const add = require('./暴漏模块的路径')
	add(a,b);
	3,http模块拆分
	
		文件1:
			model.exports = (request,respones)=>{
				resopnse.end();
			};
		文件2:
			model.exports = ()=>{console.log('服务启动成功')};
	
		文件3:
			model.exports = function(port){
				const http = require('http');
				const callFile1 = require('文件1');
				const server = http.createServer(callFile1);
				const callFile2 = require('文件2');
				server.listen(port,callFile2);
			}
		
		const server = require('文件3');
		server(8000);
	
	*/
		 
	/* Express
	//1,安装 express vpn i express
	//2,引入express 包
		const express = require('express');

	//3,创建引用对象
		const app = express();

	//4,路由的设置
		app.get('/',(require,response)=>{
			//设置相应
			response.end('hello express');
		});
		app.post('/login',(require,response)=>{
			//设置相应
			response.end('hello express');
		});
		app.all('/regiter',(require,response)=>{
			//设置相应
			response.end('hello express');
		});

	//监听端口
		app.listen(800,()=>{
			console.log('服务已经启动');
		});
	
	ps: send
	相当于:
	response.setHeader('Content-type','text/html;charset=utf-8')
	response.end();
	
	//获取查询字符串参数
	request.query
	
	//id为参数
	app.post('/login/:id.html',(require,response)=>{
			//设置相应
			let id = request.params.id;
			response.end(`id为 ${id} 的新闻`);
			//返回一个文件内容
			response.sendFail('文件决对路径');
			//跳转
			response.rediect('url地址');
			//下载响应
			response.download('下载文件的路径')
		});
	
	*/
	
	/* moment 时间处理插件
	const moment = require('moment');
	//YY-MM-DD HH:mm:ss 查找moment插件参数
	moment().format('YY-MM-DD HH:mm:ss');
	*/
	
	
	
	中间件函数
	1,全局中间件	所有都会走
		const express = require('express');
		const app = express();
		const moment = require('moment');
		//将用户的请求,记录在access.log [2020-10-26 10:10:10]
		
		//声明一个中间件函数 request请求对象 response响应对象 next函数
		let record = function(request,response,next){
			let time = moment().format('YYYY-MM-DD HH:mm:ss');
			const path = request.url;
			let str = `[${time}] ${path}`;
			fs.writeFileSync('./access.log',str,{flag:'a'});
			next();//调用next函数,继续app.get()方法
		}
		//中间件使用/配置
		app.user(record);

		app.get('/',(request,response)=>{
			response.send('中间件');
		});
		app.listen(80,()=>{
			console.log('服务启动');
		});
	2,路由中间件 只针对某个或多个路由的函数
		const express = require('express');
		const app = express();

		let checkUser = function(request,response,next){
			let isAdmin = request.query.admin;
			console.log(isAdmin);
			if(isAdmin ==='1'){
				next();//满足,调用函数
			}else{
				response.redirect('/login');
			}
		}
		
		//路由规则 只有 admin?admin=1 时才行 第二个参数
		app.get('/',checkUser,(request,response)=>{
			//获取admin url参数
			//query 将参数提取出来并json化
			response.send('ok');
		});
		
		app.listen(8080,()=>{
			console.log('this is 路由中间函数');
		});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	