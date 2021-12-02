#region 前置知识
	什么是回调:
		我们定义的,没有调用,执行了
		1,同步:
			主线程上执行,不会放入回调队列
			ps:数组遍历相关的回调函数forEach /Promise 的executor
		2,异步:
			不会立即执行,放入回调队列后执行
			ps:定时器回调/ajax回调/Promise的成功,失败回调
	
	错误类型:
		1. 错误的类型
					Error: 所有错误的父类型
					ReferenceError: 引用的变量不存在
					TypeError: 数据类型不正确
					RangeError: 数据值不在其所允许的范围内--ps(死循环)
						//演示：RangeError: 数据值不在其所允许的范围内
						/* const demo = ()=>{demo()}
						demo() */
					SyntaxError: 语法错误
		2. 错误处理
					捕获错误: try{}catch(){}
					抛出错误: throw error 
						ps:throw new Error('奇数不能被2整除');
		3. 错误对象 error
					message属性: 错误相关信息
					stack属性: 记录信息

#endregion

Promise
	Promise 是异步编程的新方案--ES6提出的
		(旧的是ajax--纯回调)
	
	具体表达:
		语法上:Promise是一个构造函数
		功能上:Promise的实例对象可以用来封装一个异步操作,可以获取成功失败的值
		
		const p = new Promise(executor);//executor是一个同步回调函数
	3种状态 只能切换成功/失败
		初始化(pending)
		成功(fulfilled)
		失败(rejected)
		
	executor参数:	
		resolve:会让Promise实例状态变为成功(fulfilled),并可以指定成功的value
		reject:会让Promise实例状态变为失败(rejected),并可以指定失败的reason
		new Promise((resolve,reject)=>{}).then(()=>{},()=>{})
			
			ps:	
			new Promise((resolve, reject)=>{
			 // resolve(100);
			 // reject(-100);
				  setTimeout(()=>{
					  //resolve('我是成功信息');
					  reject('我是失败信息');
				  },2000);
			  }).then(
			  //p.then('成功的回调','失败的回调');
				  (value)=>{
					  console.log(value); //100
				  },
				  (reason)=>{
					  console.log(reason); //100
				  }
			  );
		
	
	catch //只失败回调
		//只制定一个回调 成功没有回调不报错
		new Promise((resolve,reject)=>{}).catch(()=>{});
			等价:new Promise((resolve,reject)=>{}).then(underfind,()=>{})
	
	#region Promise对象
		resolve/reject 立即返回Promise的状态
			resolve/reject:
				非Promise:	显示值
				Promise:	只要有reject ,就失败
			ps:	
				Promise.resolve(100).then(
					value => {console.log('成功了'+value);}, //100
					reason =>{console.log('失败了'+reason);}
					);
	
		all/race 参数都为Promise数组
			all:
				p1,p2,p3都是Promise实例时
				const x = Promise.all([p1,p2,p3]);
				x.then(a,b);//所有成功都成功,只要有一个失败就失败
			race:
				p1,p2,p3都是Promise实例时
				const x = Promise.race([p1,p2,p3]);
				x.then(a,b);//谁最新出结果谁显示
	#endregion
	
	Promise的关键问题
		1,改变Promise实例状态
			只能改1次! 
			后面的代码不再执行
		2,改变Promise实例状态和指定回调函数谁先谁后
			1,都有可能,正常先指定回调,后改变状态,也有可能反
			2,如何先改状态,再回调:延迟一会再调用then
			3,Promise实例啥时候能得到数据
				1,先指定回调,状态发生改变时,回调就会调用,得到数据
				2,先改变状态,指定回调时,回调就会调用,得到数据
		3,then的链式调用
			1,简单表达:
				then返回的新的Promise实例对象状态:
					由then所指定的 回调函数执行结果 决定
			2,详细表达:
				1,如果then所指定的回调返回的是非Promise值a:
					那么[新Promise实例]状态为:成功(fulfilled),value为a
				2,如果then所指定的回调返回的是Promise实例P
					那么[新Promise实例]状态,值,都与p一致
				3,如果then所指定的回调抛出异常
					那么[新Promise实例]状态:reject,值为underfind
		3,中断Promise的链式调用
			return new Promise(()=>{});
		4,错误穿透
			链式最后加一个catch(()=>{
				return new Promise(()=>{})
			})		
		5,async/await
			基本使用:
				//async 修饰的函数返回值为Promise对象
				//await 右侧一般为Promise实例 值为Promise成功的值
					//异步等待 只想拿成功的值 只能用在async方法里
				ps:
				!/;(async()=>{
					try {
						const result1 = await p1;
						console.log(result1);
						const result2 = await p2;
						console.log(result2);
						//原理:
						const result1 = p1.then(
							(resolve)=>{
								console.log(result1);
							}
						);
					}catch(err){
						console.log(err);
					}
				})()		
		6,宏队列/微队列		
			异步都进队列
				定时器回调为宏任务-->宏队列
				Promise回调为微任务(只有1个.其他都是宏任务)-->微队列
				
				微队列>宏队列
	
	