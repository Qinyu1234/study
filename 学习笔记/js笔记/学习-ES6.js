//__dirname 始终保存当前文件所在文件夹绝对路径--node.js
border-collapse: collapse	table边框合并
/* let const 解构赋值
1,let
	1,不允许重复声明
	2,外部不会获取块级作用域(if(){}else{} for(){})的声明
	3,不存在变量提升
	4,不影响作用域链
2,const	常量
	关于对象数组,不会报错
	因为指向的是对象的路径
	
解构赋值	
const arr = ['宋小宝','宋小宝1','宋小宝2'];
	let [song,song1,song2] = arr;
	
	//对象结构
	const star = {
		name:'于谦',
		tags:['抽烟','喝酒','烫头']
		say:function(){
			console.log('我可以说相声');
		}
	};
	let{name,tags,say} = star;
	
	连续解构赋值+重命名
	let obj = {a:1,b:{c:2}};
	const {b{c}} = obj;
	const {b{c:value}} = obj;
	console.log(value); //2
*/

/* 模板字符串 简化写法 箭头函数
模板字符串
1,直接使用换行符 `` 反引号
	let s = `<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>		
			</ul>`;
2,字符串变量拼接
	let a = '魏翔';
	let b = `我非常喜欢 ${a},他很搞笑`

简化写法
	let name = "a";
	let pos = 'b';
	let change = function(){console.log('c')}

	const atguigu={
		//ES5写法
		//name:name,
		//pos:pos,
		//change:change
		//ES6简化写法
		name,
		pos,
		change
	}			
箭头函数
	let add = (a,b,c) =>{return a+b+c}
	特点:
		1,this是静态的,指向其所在作用域下的this
		2,不能使用构造函数 new
		3,不能使用 arguments
	简写
		1,省略小括号:当形参有且只有一个时
		2,省略花括号:当代码体只有一条语句时,执行结果为函数返回值
			let pow = num => num*num;
	
	ps:	箭头函数
	
		不适用:
		1,回调于this相关,不能用箭头函数
		2,对象的方法
		
		使用:
		1,回调于this无关
		2,数组方法回调filter forEach map(对数组进行回调执行,返回新数组)
		
*/

/* rest spread
rest
	function main(a,b,...args){
		//arguments 获取实参
		console.log(arguments)
		//rest 参数
		console.log(args)
	}
spread 
	1,数组的展开
		const arr = ["1","2","3"];
		function fn(){
			console.log(arguments);
			
		}
		fn(...arr)//相当于fn("1","2","3");
	2,对象的展开
		const sk1 = {
			q:'123';
		};
		const sk2 = {
			w:'234';
		};
		const sk3 = {
			e:'345';
		};
		const mangseng = {...sk1,...sk2,...sk3};
		
ps:
	数组合并：const zuhe = [...arr,...arr2];
	新数组合并:const xin = [...arr];
	将伪数组转为数组:
	const divs = document.querySelectorAll('div');
	const result = [...divs];
*/

/* Set 集合 自动去重
1,声明:
	const s = new Set();
	const s1= new Set([1,3,4,5,6]);
2,个数
	s1.size
3,添加
	s1.add(21)
4,删除
	s1.delete(4);
5,检测是否有元素
	s1.has(30);\
6,清空
	s1.clear();
7,for...of遍历
	for(let v of s1){
		console.log(v);
	}
	
ps:
1.数组去重
	const arr = [1,2,3,3,2,12,5,5]
	//集合
	const s = new Set(arr);
	const result = [...s];
2,交集
	const arr1 = [1,2,3,4,5,1,2];
	const arr2 = [3,4,5,4,5,6];
	
	const result = [...new Set(arr1)].filter(item =>{
		return (new Set(arr2)).has(item);
	})
3,并集
	const result = [...new Set([...new Set(arr1),...new Set(arr2)])];
4,差集
	const arr1 = [1,2,3,4,5,1,2];
	const arr2 = [3,4,5,4,5,6];
	const result = [...new Set(arr1)].filter(item =>{
		return !(new Set(arr2)).has(item);
	})
*/
  
/* Map 多数用于缓存
	1,声明
		const m = new Map();
	2,添加元素
		m.set('mei','小橙子');
		let key = {};
		m.set(key,'asdf');
		
		console.log(m.get('mei'));//结果为小橙子
		console.log(m.get(key));//asdf
	3,删除
		m.delete('mei');
		
	4,检测
		m.has('mei');
		
	5,元素个数
		m.size;
		
	6,清空
		m.clear();
*/

/* class 语法糖
	ES5继承
		function Phone(brand){
			this.brand = brand;
		}
		Phone.prototype.call = function(someone){
			console.log(`我可以给 ${sameone} 打电话`);
		}
		function SmartPhone(brand,price){
			Phone.call(this,brand);
			this.price = price;
		}
		SmartPhone.prototype = new Phone;
		SamrtPhone.prototype.constructor = SmartPhone;
		//添加
		SmartPhone.prototype.playGame = function(){
			console.log('我可以用来玩游戏');
		}

	ES6继承
		class phone{
				//构造方法
				constructor(brand,price){
					this.brand = brand;
					this.price = price;
				}
				//方法
				call(sameone){
					console.log(`我可以给 ${sameone} 打电话`);
				}
			}

		class SamrtPhone extends Phone{
			//之类对象属性初始化
			constructor(brand,price,storage,pixel){
				//调用父类的构造方法 属性初始化
				supper(brand,price);
				this.storage = storage;
				this.pixel = pixel;
			}
			playGame(){
				console.log('我可以用来玩游戏');
			}
		}

getter get price(){return price}
setter set price(v){this.jiage = price}

*/

/* ES6拓展
ES6数值拓展
	1,二进制:0b开头 0b1111(15)
	  八进制:0o开头 0o666
	  十六进制:0x开头 0xff
	2,Number.isFinite(12) 检测一个数组是否为有限数
	3,Number.isNaN() 检测一个数值是否为NaN
	4,Number.paseInt() 将字符串转为整数
	5,Math.trunc() 将数字小数部分抹掉
	6,Number.isInteger() 判断一个数是否为整数
	7,Math.pow() 幂运算  ES7:2 ** 10  2的10次方
ES6对象拓展
	1,=== Object.is(n1,n2) 判断两个数值是否完全相等
	2,Object.assign(objA,objB) 属性合并,B对象属性加到A上并返回A
	3,直接修改__proto__ 设置原型 (用不着)
	
*/

/* 数据的拷贝
	浅拷贝:
		1,直接复制	=
		2,数组
			1,concat
			2,slice()
			3,拓展运算符
		3,对象
			//使用assign 创建对象 Object.assign(objA,objB)
	深拷贝 
		1,JSON 不能复制方法
			// stringify 将JS对象转为JSON格式字符换
			// parse 将JSON字符串转为JS对象
			const school = {
				name :'尚硅谷',
				pos:['1','2'],
				founer:{
					name:'asd'
				}
				change:function(){
					console.log('改变');
				}
			}
			//将对象 转为 JSON格式字符串
			let str = JSON.stringify(school);
			//将JSON格式字符串 转为 对象
			let newSchool = JSON.parse(str)
		2,递归拷贝
			思路:
				//创建数据容器:
				const newSchool = {};
				//name 
				newSchool.name = school.name;
				//pos
				newSchool.pos = [];
				newSchool.pos[0] = school.pos[0];
				newSchool.pos[1] = school.pos[1];
				newSchool.pos[2] = school.pos[2];
				//founder
				newSchool.founder = {};
				newSchool.founder.name = school.founder.name;
				//方法
				newSchool.change = school.change.bind(newSchool);
			2,封装:
			//拷贝的方法
			//封装一个函数  采用递归方法进行克隆
			function deepClone(data){
				//创建一个与待克隆数据的容器
				let container;
				//判断容器的类型
				let type = dataType(data);
					console.log(type);
				if(type.indexOf('Object') !== -1){
					container = {};
				}
				if(type.indexOf('Array') !== -1){
					container = [];
				}
				
				//for in 能遍历数组/对象
				for(let i in data){
					// console.log(i);
					let type = dataType(data[i]);
					if(type.indexOf('Object') !== -1|| type.indexOf('Array') !== -1){
						container[i] = deepClone(data[i]);
					}else{
						container[i] = data[i];
					}

				}
				return container;
			}
			
			//封装一个函数,用于获取数据类型
			function dataType (data){
				 //let type = Object.prototype.toString.call(data);
				//console.log(type,typeof type);//返回值为字符串
				return Object.prototype.toString.call(data);
			}
		
			//调用函数完成深拷贝
			const newSchool = deepClone(school);

*/			
	
/* Buffer(缓冲器)
	//Buffer 声明创建 
	 Buffer.alloc创建时会对内容进行重置   allocUnsafe不重置 
	const buf = Buffer.alloc(8);
	const buf = Buffer.allocUnsafe(8);
	//from  一个汉字3个字节
	const buf3 = Buffer.from('我和你');
	// //获取第一个字节的内容 可以直接用索引  也是一种数组对象
	.toString()
	buf3[0]
*/	

/* 文件读取写入 小文件
	//1.引入fs 模块
		const fs = require('fs');

	//2.调用fs中方法 write 写入 File 文件 flag:r只读 w可写 a追加
		//writeFile 异步API
		let res = fs.writeFile ('./home.html','xxxxxx',{flag:'a'},function(err){
			//err
			if(err){console.log('写入失败');return;}
			}); //写入次数少简单内容
	//writeFileSync 同步API
	fs.writeFileSync('./home.html','xxxxxx');
	//做服务,使用 异步
	//做文件处理,使用  同步  
*/

/* 流 批量写入 大文件批量
	1,引入fs模块
	const fs = require('fs');

	2,创建写入流对象
	const ws = fs.createWriteStream('./home.html');

	3,执行写入
	ws.write('asd');

	4,关闭流
	ws.close();
	
	//读取
	const rs = fs.createReadStream('./home.html');
	//绑定事件 when 当...的时候 
	//chun块 当读取完一块数据后 触发
		rs.on('data',(chunk) =>{console.log(chunk.toString())})
	//当读取流打开的时候触发
		rs.on('open',() =>{})
	
	//移动/重命名
	rs.rename('旧路径','新路径',err=>{});
*/

/* 文件夹 操作
	const fs = require('fs');
	//创建文件夹
		fs.mkdir('路径',err=>{if(err) throw err;})
	//读取文件夹
		fs.readdir('路径',(err,files)=>{if(err) throw err;})
	//删除文件夹
		fs.rmdir('路径',{recursive:true}err=>{if(err) throw err;})
*/
 



		
/* 迭代器Iterator 了解思想
	const arr = ['F1','F2','F3','F4'];
	//for of v为arr里的值
	for(let v of arr){
		console.log(v);
	}
	
	//得到iterator
	const iterator = arr[Symbol.iterator]();
	console.log(iterator.next(););
	
	//for in i 为arr里的指引
	for(let i in arr){
		console.log(i);
	}
ps:
	const team = {
		name: '终极一班',
		members:[
			'F1',
			'F2',
			'F3',
			'F4'
	],
	//添加Symbol.iterator
	[Symbol.iterator]:function(){
		let index = 0;
		return{
			next:()=>{
				//声明对象
				const result = {value:this.members[index],done:false}
				index++;
				//判断下标,修改[done]属性值
				if(index>=this.members.length){
					result.done = true;
				}
				return result;
			}
		};
	}

	//需求
	for(let v of team){
		console.log(v);
	}

*/

/* Symbol 了解
	原始数据类型Symbol,表示独一无二的值
	1,创建Symbol
		1,第一种
			let s1 = Symbol();
		2,第二种
			let s1 = Symbol('xxx');
			let s2 = Symbol('xxx');
			s1===s2 false
		3,第三种
			let s1 = Symbol().for('200826');
			let s2 = Symbol().for('200826');
			s1===s2 true
	2,用途:用变量存储symbode值,然后用存储的值创建对象属性
	let game = {};
	let str = "run";
	let method={
		up:Symbol(),
		down:Symbol(),
		//内部添加方法
		[str]:function(){} //mothod里会有run方法
		[method.up]:function(){}
	}
	//外部添加up方法
	game[method.up] = function(){}

	//调用
	game[method.up]();

	console.log(game)
*/












	