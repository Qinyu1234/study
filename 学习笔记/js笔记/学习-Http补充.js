/* 静态路由及请求体获取(bodyParser)

	//静态资源:长时间内容不发生改变的资源
	//##CSS
	//##JS
	//##图片
	//##音频
	//##视频
	//##字体

	//动态资源:内容时长会发生改变的
	//##首页
	//##列表页
	//##购物车
	//##订单
	const express = requiee('express');
	const app = express();
	//引入
	const bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended:false}));
	//数据存在 request.body 对象中

	//简易的自定义请求体处理中间件
	let myBodyParser = function(request, response, next){
		//获取请求体
		let body= '';
		//
		request.on('data', chunk => {
			body += chunk
		});

		request.on('end', () => {
			//解析
			const data = qs.parse(body);
			//将请求体对象作为属性 存储到 request 对象中
			request.body = data;
			next();
		})
	}

	//1,静态资源服务中间件 public文件夹
	app.use(express.static('./public'));

	//2,请求体参数获取 中间件 body-parser
	app.get('./form',(request,response)=>{
		//
		response.sendFile(__dirname+'/form.html');
	});

	app.post('./form',(request,response)=>{
		//
		response.sendFile(__dirname+'/form.html');
		console.log(request.body);
		response.send('请求体接收完毕');
	});

	app.listen(80,()=>{
		console.log('服务已经启动...80端口监听中...');
	});

*/

/* 路由器
	//1,创建路由文件router.js
		//1,引入express包
		const express = requiee('express');
		//2,创建路由器对象
		const router = express.Router();

		//3,路由操作
		router.get('./form',(request,response)=>{
			//
			response.sendFile(__dirname+'/form.html');
		});
		
		//4,暴露router对象
		module.exports = router;
	
	//2,主文件引入并使用
	const router = require('路径/router');
	app.use(router);
*/

/* ejs介绍与初体验 ejs模板

	1,变量的拼接
		//1,安装ejs
		//2,引入ejs
		const ejs = require('ejs');
		//3.调用

		//str 编译的字符串
		//data 数据对象

		let str = '<h1><%= msg %></h1>';
		let data = {msg: '王者荣耀王者荣耀王者荣耀王者荣耀'};
		const result = ejs.render(str,data);
		console.log(result);
	2,数据的遍历
		let str =   `<ul>
						<% for(let i = 0;i<song.length;i++){ %>
						<li><%= song[i]  %>></li>
						<% } %>
					</ul>`;
		let data = {
			song:[
				'123',
				'345',
				'12432',
				'阿斯蒂芬'
			]
		}
		const result = ejs.render(str,data);
		console.log(result);
	3,判断 如果是vip 不显示广告
		let str =   `<h2>按规定是否够的话</h2>
					 <% if(!vip){ %>
					 <p><%= ad %>></p>
					 <% } %>
					`;
		let data = {
			vip:0,
			ad:'阿斯顿发生的故事都发给第三方'
		};
		const result = ejs.render(str,data);
		console.log(result);
		
	4,ejs 在express 中使用
		const express = require('express');
		const app = express();
		const player = [
					{id:1,name:'施工方'},
					{id:2,name:'阿萨德刚发的啥风格'},
					{id:3,name:'水电费给对方是'}
					];
					
		//设置express 使用模板引擎 ejs  (view engine):固定
		app.set('view engine','ejs');
		//设置 ejs 使用的模板存放位置  ./views :html的存放文件  (views):固定
		app.set('views','./views');
		
		app.get('/',(request,response)=>{
			//到指定的文件夹下创建模板文件
			//设置模板响应 使用ejs编译 ./views/player.ejs文件
			response.render('player',{player:player});
		});

		app.listen(80,()=>{
			console.log('服务已经启动...80端口监听中...');
		});	


*/

/* cookie 
 
	本质是存储在浏览器端的文本
	通过http请求头传递给服务器
	服务器响应回来的文件
	
	注意点:
	cookie 电脑中不能直接查看 加密
	cookie 按照域名进行分类保存的
	
	cookie 不足:
	1.数量一般不超过50个
	2,cookie太多,会导致响应变慢,降低用户体验
	
	设置:cookie-parser
	
	const express = require('express');
	const app = express();
	//1,安装cookie-parser
	//2,引入cookie-parser
	const cookieParser = require('cookie-parser');
	//3,设置中间件
	app.use(cookieParser());

	//4,设置cookie
	app.get('/set-cookie',(request,response)=>{
		//set-cookie中的path 是设置此cookie 生效的路径[path=/] 此网站所有路径都有效
		response.cookie('name','xiaohai');
		//maxAge 单位毫秒 此cookie具有时效性
		response.cookie('email','xiaohai@163.com',{maxAge:3*60*1000});
		response.send('cookie的设置');
	});
	//5,读取cookie
	app.get('/get-cookie',(request,response)=>{
		//读取 cookie 可以自己去报文头里取
		console.log(request.cookies); //有s
		response.send('cookie 的读取');
	});

	//6,清空cookie
	app.get('/clear-cookie',(request,response)=>{
		//清空 cookie
		response.clearCookie('email');
		response.send('cookie 的删除');
	});

	app.listen(80,()=>{
		console.log('80服务已经启动');
	});
*/

/* session

	保存在服务端的数据
	
	服务器保存1234:{name:123,email:3214}
	通过set-cookie:id = 1234 返回响应报文
	
	const express = require('express');
	//1,安装 express-session
	//2,引入
	const session = require('express-session');
	const app = express();
	//3,设置中间件
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true
	}))

	//设置 session 用户登录成功后
	app.get('/set-session',(request,response)=>{
		request.session.name='xiaoming';
		request.session.email='xiaoming@123.com';
		response.send('设置完毕');
	});

	//读取 session
	app.get('/get-session',(request,response)=>{
		console.log('用户为:'+request.session.name);
		console.log('邮箱为:'+request.session.email);
		response.send('读取完毕');
	});
	//销毁 session
	app.get('/destroy-session',(request,response)=>{
		request.session.destroy(function (){
			console.log('销毁成功');
			response.send('安全退出登录');
		});
	});

	app.listen(80,()=>{
		console.log('80服务已经启动');
	});
*/

/* MongoDB
查资料

mongoose npm包
	插入/批量插入	insertOne/insertMant
	删除/批量删除	deleteOne/deletMany	
	更新/数据更新	updateOne/updateMany
	读取数据/批量	findOne/find
	根据id获取数据	findById
	
	自定义读取:name:1,password:1 要的写1 exec回调
		UserModel.find().select({name:1,password:1}).exec((err,data)=>{if(err) throw err;});
	排序 hot 1升序 -1降序
		UserModel.find().sort({name:1}).select({name:1,password:1}).exec((err,data)=>{if(err) throw err;});
	降序 读取10条 skip跳过xx条  limit()取出xx条
		UserModel.find().sort({name:1}).skip(0).limit(10).select({name:1,password:1}).exec((err,data)=>{if(err) throw err;});
	
	//1,安装mongoose
	//2,引入mongoose 模块
	const mongoose = require('mongoose');

	//3,连接数据库 connect preject 数据库的名称
	//mongoose.connect('mongodb://127.0.0.1:27017/project',{userNewUrlParser:true,useUnifiedTopology:true});
	mongoose.connect('mongodb://127.0.0.1:27017/project');
	//4,设置成功连接的回调
	mongoose.connection.on('open',()=>{
		//5,创建文档结构对象 new Person
		const UserSchema = new mongoose.Schema({
			username:String,
			password:String,
			age:Number
		});
		//6,创建模型对象 users集合名称
		const UserModel = mongoose.model('users',UserSchema);
		//7,数据操作
		UserModel.create({
			username:'zhangsan',
			password:'123sadf',
			age:123
		},(err,data)=>{
			//若有错误
			if(err) throw err;
			//若没有错误
			console.log(data);
			//8,选做 关闭数据库连接 项目是中不会加的
			mongoose.connection.close();
		});
		
		//7,数据操作/批量插入
		UserModel.insertMany([
		{
			username:'zhangsan',
			password:'123sadf',
			age:123
			},
		{
			username:'sgsdfg',
			password:'1',
			age:54
		}
		],(err,data)=>{
			//若有错误
			if(err) throw err;
			//若没有错误
			console.log(data);
			//8,选做 关闭数据库连接 项目是中不会加的
			mongoose.connection.close();
		});
		
		//7,数据操作/删除
		UserModel.deleteOne({'name':'zhangsan'},(err,data)=>{
			//若有错误
			if(err) throw err;
			if(data.deleteCount >= 1){
				console.log('删除成功');
			}else{
				console.log('删除失败');
			}
			//若没有错误
			console.log(data);
			//8,选做 关闭数据库连接 项目是中不会加的
			mongoose.connection.close();
		});
		console.log('连接成功');
	});
*/

HTTP服务补充

