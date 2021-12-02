	#region API:
		REST API : restful风格的API
			1,发送求情进行 增/删/改/查 哪个请求由请求方式决定
			2,同一个请求路径可以进行多个操作
			3,请求方式用到GET/POST/PUT/DELETE
			
				ps:url不变,只改变GET/POST/PUT/DELETE
		非REST API:
			1,请求方式不能表现 增/删/改/查
			2,一个请求路径对应一个操作
			3,一般只有 GET/POST
	#endregion	
	
	#region json-server
		json-server服务器(模拟)
			快速搭建REST API工具包
			
			ctr+c 停止服务器
			//json-server安装
			//npm i jsoon-server -g

			//2,启动
			//json-server name.json
	#endregion
	
	#region postman
	postman接口测试工具
		get/查 		:直接添加参数
		post/增		:用body 里的x-www-form-urlencoded
			json	:raw 手写
		put/改		:id用params改,其他用x-www-form-urlencoded
		delete/删	:用params改 	ps:url里/数据
	#endregion
	
	axios	
		前端最流行的ajax请求库
		react/vue官方推荐使用的axios发ajax请求
	
	#region axios使用
		:注,如果携带params参数,需要手动拼在url中
		增
			axios({
				url:'url',
				method:'POST',
				//data:{name:''},
				data:`name=asd`,
			}).then()
			axios.post(url:'url',{id:''})
			axios.post(url:'url',`name=asd`)
		删
			axios({
				url:'url/参数',//用的params参数
				method:'DELETE',
			}).then()
			axios.delete('url/参数')
		改
			axios({
				url:'url',
				method:'PUT',
				//data:{name:''},
				data:`name=asd`,
			}).then()
			axios.put(url:'url',{id:''})
		查
			axios({
				url:'url',
				method:'GET',
				params:{id:''},//没有参数为差全部
			}).then()
			axios.get(url:'url',{params:{id:''}})
	#endregion
		
	#region axios配置
		axios({
			url:'url',
			method:'GET',
			//params:{name:''},//配置query参数
			//data:{name:''}, //请求体配置json
			//data:`name=asd`, //请求体配置urlencoded
			//timeout:2000,//超时时间
			//headers:{demo:123},//请求头
			//responseType:'json',//配置相应数据格式 不用
		}).then()
	
		批量配置
			axios.defaults.timeout = 2000;
			axios.defaults.headers={name:'school'}
			axios.defaults.baseURL='http://127.0.0.1:5000';
	
			axios({
				url:'/person',
				method:'GET',
			}).then()
	#endregion
		
	#region create
		const axios2 = axios.create({
			timeout:5000;
			headers:{token:'school'}
			baseURL:'http://127.0.0.1:6000';
		});
		axios.defaults.timeout = 2000;
		axios.defaults.headers={name:'school'}
		axios.defaults.baseURL='http://127.0.0.1:5000';
	#endregion	
	
		
	#endregio	
	#region 拦截器&取消请求
		拦截器
			//请求拦截器
			axios.interceptors.request.use((config)=>{
				if(Date.now() %2 === 0){
					config.headers.token = 'atg'
				}
				return config;
			}) 
			//响应拦截器
			axios.interceptors.response.use(
				response =>{
					console.log('响应拦截器成功回调执行了');
					return response.data
				},
				error =>{
					console.log('响应拦截器失败回调执行了');
					return new Promise(()=>{})//promise不需要在考虑失败了
				}
			re)
			btn.onclic = async()=>{
				const result = await axios.get('url');
				console.log(result);
			}
		
		取消请求
			const {CancelToken} = axios//CancelToken能为一次请求打标识
			let cancel;
			axios({
					url:'url',
					method:'GET',
					cancelToken:new CancelTkoken((c)=>{
						//c是一个函数 调用c即取消发送
						cancel = c;
					})
				}).then()
			//机会合适取消发送
			cancel()
		
		取消请求和拦截器配合使用
			const {CancelToken,isCancel} = axios
			let cancel
			axios.interceptors.request.use((config)=>{
				if(cancel) cancel('重复点击取消了')
				config.cancelToken = new CancelToken(c=> cancel = c)
				//console.log('config-------'+config)
				return config
			})
			axios.interceptors.response.use(
				(response)=>{return response.data},
				error =>{
					if(isCancel(error)) console.log('取消的---',error.message);
					else console.log('失败了',error);
					return new Promise(()=>{})
				})

			btn1.onclick = async()=>{
				const result = await axios.get('http://localhost:5000/test1?delay=3000')
				console.log(result)
			}
			btn2.onclick = ()=>{
				cancel('我要取消');
			}
	#endregion
	
	#region 批量发送请求
		axios.all([
			axios.get('url'),
			axios.get('url?delay=3000'),
			axios.get('url'),
		]).then(
		response=>{
			//response 3秒后返回[url1,url2,url3]顺序排列
		},
		error =>{
			
		}
		);
	#endregion
	