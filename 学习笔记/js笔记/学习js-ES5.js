js-ES5

/* 运行模式-严格模式
混杂模式:正常运行模式
严格模式:
	1,声明
		1,全局声明
		"use strict"
		2,函数内声明
		function(){
			"use strict"
		}
	2,特点
		1,不允许使用未声明的变量
			//banzhuren = 'xiaochengzi';
		2,函数内部的this不指向window
			//function fn(){
			//	conlsoe.log(this);
			//}
			//fn()
		3,eval	作用域eval是函数,接受字符串,对字符串进行 js语法解析
			eval('alert(123)');
			eval('var a = 100;var b = 200;');
		4,对象不能有重复属性
			//let obj = {
			//	a:100,
			//	a:20
			//}
		5,函数不允许有同名形参
			//function(a,a,a){}

*/

/* Object扩展
	1,create 以指定对象为原型创建新的对象,同时可以为新的对象添加属性并对属性进行描述(继承)	1/2只能使用1个
		1:
		//指定值
		value:'帕萨塔',
		//是否可以更改属性值,默认false不可以
		writable:false,
		//属性是否可以删除 true可以
		configurable:false,
		//属性是否可以枚举
		enumerable:true
		2:
		get:function(){return 20000}, //获取
        set:function(value){
            this.jiage=value;}	..设置
		
		//ps新建一个对象
        var car={
            name:'汽车',
            run:function(){console.log('我可以跑');}
			}
        var passte=Object.create(car,{
            bbb:{
                value:'帕萨塔',
                //writable是否可以更改属性值,默认false不可以
                writable:false,
                //属性是否可以删除 true表示可以 false默认不可以
                configurable:false,
                //属性是否可以枚举
                enumerable:true
            },
            ppp:{
                //get  是一个对象的方法,无需手动调用
                get:function(){
                    console.log('p被调用');
                    return 20000
                },
                set:function(value){
                   // console.log('值被修改了');
                   this.jiage=value;
                  
                    console.log(`价格被改成${value}`);
                    
                }
            }
        })

       // passte.bbb='大众'
       //delete passte.bbb
       passte.ppp=3000000//更改的值会作为set的参数传递
       //console.log(passte.ppp); 获取get的属性值
	
	2,defineProperties 为对象添加属性
		1,
		var sanlun={
			name:'三轮车'
		}
		Object.defineProperties(sanlun,{
			brand:{
				value:'金蛙',
			}
			price:{
				set:function(){}
				get:function(){return 123}
			}
		})

*/

/* bind call apply

function add(a,b,c){console.log(this)}

	1,add.call({},3,4,5)	此时this指向{}

	2,add.apply({},[3,4,5]) [3,4,5]为一个参数,其他跟call一致

	3,bind会返回一个新的函数
		var obj = {name:'哈喽 '};
		var fn = add.apply(obj);
		fn(4,5,6) 为{name:'哈喽 '}
*/

/* 数据处理
	遍历:
		Object.key(obj) //返回的是参数对象的属性组成的数组
		let obj ={
			name:'zly',
			age:12
		}
		
		for:	基本循环,专门遍历数组
		for in	效率最低:专门遍历对象的,只能遍历枚举对象(会遍历原型)
		for of	(能遍历数字)
			//专门遍历可迭代数据,...
			//数组有迭代器
			//对象没有
		forEach	遍历数组,效率极高
		Object.keys(obj).foreach((item)=>{
			console.log(item,obj[item]);
		})
		
	排序:
	arr.sort((a,b)=>{
		return a-b  升序
		return b-a	降序
	})
*/


		
			
			
			
			
			
			
			
			
			
			
			
			
			
			