数据请求:
	//简单请求
	GET:	
			query(参数key=balue&key=value 是urlencode编码) 
			params(路由/xx/xx/xx/老刘/18)
	POST
	//复杂请求
	PUT	//2次请求 put(路由)+options(嗅探请求)
	DELETE

原生AJAX	
	#region
	优势:页面无刷新获取数据
	缺点:1,没有浏览历史,不能回退
		 2,存在跨域问题
		 3,SEO(爬虫)不友好
	
	核心对象
	XMLHttpRequest
	
	xhr的物种状态
	0: 实例出来那一刻,初始状态
	1: open已经调用,但send还没调用,此时可以修改请求头内容
	2: send已经调用,无法修改请求头
	3; 已经回来一部分数据,小的数据回来了,打的数据有待进一步接受,响应头回来了
	4; 手机全部反回了
	#endregion
	
	ps:
	1,原生ajax-get:
		#region
		//1,创建xhr实例对象
		const xhr =new XMLHttpRequest();
		
		//on 当xx时候
		//ready 准备
		//state
		//xhr内部有5种状态:0(实例出来那一刻),1,2,3,4(数据回来)
		xhr.onreaadystatechange = ()={
			if(xhr.readState == 1){
				//请求头设置
				xhr.setRequestHeader('dem',123);
			}
			if(xhr.readyState === 4){
				//获取响应头
				console.log(xhr.getAllResponseHeaders());
				if(xhr.status >= 200 $$ xhr.status <300){
					console.log(xhr.res);
				}
			}
		}
		//2,指定发送请求的method url 参数
		xhr.open('get','http:127.0.0.1:8080/test+get?name=laoliu');
		//3,发送请求
		xhr.send();
		#endregion
	
	2,原生ajax-post:
		#region
		//1,创建xhr实例对象
		const xhr =new XMLHttpRequest();
		
		xhr.onreaadystatechange = ()={
			if(xhr.readyState === 4){
				//获取响应头
				console.log(xhr.getAllResponseHeaders());
				if(xhr.status >= 200 $$ xhr.status <300){
					console.log(xhr.res);
				}
			}
		}
		//2,指定发送请求的method url 参数
		xhr.open('POST','http:127.0.0.1:8080/test-get');
		
		//3,发送请求
		
			//1,urlencoded类型数据
			xhr.setRequestHeader('Content-type','appliction/x-www-form-urlencoded');
			xhr.send('name=laoli&age=21');
			
			//2,json数据
			const person = {name:'12',age:21};
			xhr.setRequestHeader('Content-type','appliction/json');
			xhr.send(JSON.stringify(person));
		#endregion
		
		#region 拓展:
			//超时
			xhr.timeout = 2000;
			xhr.ontimeout = ()=>{
				console.log('网速不稳定,请切换后重试');
			}
			//出错回调
			xhr.onerror = ()=>{
				console.log('当前网络不稳定,请稍后重试');
			}
			
			//取消请求 取消返回 
			xhr.abort();
		#endregion
	
	jQuery封装的ajax:
		#region
			//完整版	
			$.ajax({
			  url:'http://127.0.0.1:8181/test-get3',
			  method:'GET',//(默认值get) post将get改为post即可
			  dataType:'json',//配置相应数据
			  data:{school:'asd'},//数据
			  timeout:2000,//超时时间
			  //成功的回调
			  success:(result)=>{
				const {name,age,sex} = result;
				content.append(`姓名:${name},年龄:${age},性别:${sex}`);
			  },
			  //失败的回调
			  error:(err)=>{
				console.log(err);
			  }
			})

			//精简版 get改为post即可
			$.get('http://127.0.0.1:8181/test-get3',{school:'asd'},(result)=>{
				console.log(result);
			},'json');
		#endregion
	
	同源策略
		同源指:协议,域名(IP),端口 必须完全相同
	
	限制:
		1,ccookie不能读取
		2,DOM无法获得
		3,Ajax不能获取数据
	
	解决跨域:
		#region JSONP
			只支持get请求
			原生JSONP
				get:form/xhr/浏览器地址/img/src/link标签
				
				//1,创建script节点
				const scriptNode = document.createElement('script');
				//2,给节点指定src 属性(请求地址)
				scriptNode.src = 'http://localhost:8181/test_jsonp';
				//3,将节点放入页面
				document.body.appendChild(scriptNode);
				window.demo = (a) =>{
					console.log(a);
				}
			ps:demo方法可以通过url传递给后台,取出后返回
		
			jQuey封装的JSONP
				$.getJSON('http://localhost:8181/test_jsonp?callback=?',{},(data)=>{
					console.log(data)
				})
		#endregion
	
	cors
		返回报文头设置:
			原生:
			get/post
				res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:6334');//允许地址跨域
				res.setHeader('Access-Control-Expose-Headers','*');//返回所有响应头
			put 需要在app.put(路由)和app.options(嗅探请求)中都设置
				res.setHeader('Access-Control-Allow-Methods','*');//允许跨域请求方式
			
			yarn add cors
			const cors = require('cors');
			app.use(cors);
	
	
	
	
	
	
	
	
	
	
	
	