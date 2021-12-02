js

/* 对象/函数:
1,数据类型
	1,undefined
	2,Null
	3,Boolean
	4,Number
	5,String
	6,Object
	
	判断属性是否属于该对象
	"123" in object
	 
	立即执行函数
	(function(){
		alert("立即执行的函数");
	})();
	
2构造函数: +new
function Person(){}

原型prototype 
	所有的实例都可指向原型
	"123" in object 回去原型里寻找

	只有对象自身中有该属性时才会返回true
	object.hasOwnProperTy("")

构造函数.prototype = 函数的原型 = 函数实例.__proto__

函数的原型.__proto__ = object

*/

/* 数组

	方法:
	
		添加元素到数组最后一位
		push()
		删除数组中最后一个元素
		pop();
		
		添加元素到数组第一位
		unshift();
		删除数组第一个元素
		shift();
		
		从某个已有数组中选取指定元素
		slice(); arr.slice("开始的索引","结束的索引(可省略/-1为倒数一个");
		
		从某个已有数组中删除(2个参数)/(3个参数)替换指定元素
		splice(); arr.slice("开始的索引","删除的个数","替换的元素");
		
		将数组转为string
		arr.join("连接符号"); 参数默认为","
	
	a连接b
		a.concat(b)
	
	遍历:forEach IE8以上才行
		arr.forEach(function(value , index , obj){
			console.log("value为arr的每个元素");
			console.log("index为arr的每个元素的索引");
			console.log("obj为arr的对象");
		});
		
		for(var a in arr){}
*/

/* 函数的方法
	function fun(){}
	fun.call(obj,2,3);
	fun.apply(obj);
		都会调用函数执行,可指定函数的this
			call();可将实参在对象后依次传递
			apply();可将实参封装到一个数组中统一传递
		
		函数参数:
		arguments[]
		
	字符串的方法:
	concat()
	toString();
	splice("起始位",结束个数);
	substring("起始位","结束位(不包括)");
	splite();
	toUpperCase()
	toLowerCase()
*/

/* 正则表达式

语法:		var 变量 = new RegExp("正则表达式","匹配模式");
匹配模式:	i/忽略大小写 g/全局匹配模式
			测定是否符合test();
1
	1,创建正则表达式对象
		a,构造函数创建
		var reg = new RegExp("a");
		b,字面量创建
		var reg = /a/i;
		
		var str = "a";
	2,匹配模式
		var result = reg.test(str);
1:|或
	reg=/a|b|c/;
2:[]
	/[abc]/ a或b或c
	/[a-z]/ 小写字母
	/[A-Z]/ 大写字母
	/[A-z]/ 字母
	/a[bde]c/ abc/adc/aec
	/[0-9]/
3:[^ab] 除了[]里的都可以[^abc]返回ture
4:{} 量词 
	/a{3}/ 3个连续a 
	/a{1,3}/ 1次-3次
	/a{3,}/ 3次以上
4:+
	/ab+c/ 1次以上的b 相当于 /ab{1,}c/
5:*
	/ab*c/ 0次以上的b 相当于 /ab{0,}c/
6:?	
	/ab?c/ 0次或1次的b 相当于 /ab{0,1}c/
7:^ $
	/^abc|abc$/ abc开头||abc结尾
8:. 任意字符 \. 单纯.
9:其他
	\w "任意字符" "数字" "_" [A-z0-9_]
	\W 除了 任意字符 数字 _[^A-z0-9_]
	\d 任意数字 [0-9]
	\D 除了数字 [^0-9]
	\s 空格 
	\S 除了空格
	\b 单词边界 
		children 匹配child [\schild\s]
	\B 除了单词边界	
	
方法:
	a,solic(正则表达式);
		var ss = 1a2b3c4d5f6e;
		var result = str.splic(/[A-z]/);
	b,search()
		可以搜索字符串是否含有指定内容
		如果搜索到,返回第一次出现额索引,否则-1
			result = str.search(/a[1-9]c/);
	c,match() 根据正则,将字符串中符合的内容提取出来
		result = str.match(/A-z/g);匹配所有的字符提取出来
	d,replace();
	
例子
	匹配开头和结尾的空格
		/^\s*|\s*$/g 
	邮件: hello	.nihao	@	abc	.com	.cn
	任意字母下划线 .任意字母下划线 @ 任意字母数字 .任意字母(2-5位) .任意字母(2-5位)
	\w{3,}  (\.\w+)*[整个部分可有可无用*]   @  [A-z0-9]+  (\.[A-z]{2,5}){1,2}
	^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$
*/

/* DOM
	<html>
	<body>
	<button id="btn">我是一个按钮</button>
	</body>
	</html>
文档节点window
	var btn = document.getElementById("btn");
	document.body body
	document.documentElement html
	document.all 所有

	btn.innerHTML = "我是一个大按钮"	

	window.onload = function(){}
方法
	DOM查(获取DOM对象):
		getElementBById() 通过id
		getElementsByTagName() 通过标签名
		getElementsByName() 通过name

		childNodes() 当前节点的所有子节点
		firstChild() 当前节点的第一个子节点
		lastChild() 当前节点的最后一个子节点

		parentNode() 父节点
		previousSibling() 当前节点的前一个兄弟节点
		nextSiling() 当前节点的后一个兄弟节点

		!!!很好用
		document.querySelector(".box div"); 根据CSS选择器查询元素节点对象
		document.querySelectorAll();返回多个
		
DOM:增删改
	增 appendChild/createElement/createTextNode
		根据标签名创建元素节点
		var li = createElement("li");
		创建文本节点
		var gzText = createTextNode("广州");
			<li>广州</li>
		li.appendChild(gzText);
		
		insertBefore(); 插入
		
	删 removeChild();	
	
js操作CSS  ps:background_color在js中不合法,需要改成驼峰
	obj.style.width="300px";
	obj.style.height="300px";
	obj.style.backgroundColor="300px";
	
	获取元素当前样式
		obj.style,不能获取css中的样式,只能获取内联样式
		obj.currentStyle.(width/height/...)只有IE支持
		
		优先使用
		obj.getComputedStyle(box1,null)在其他浏览器中可以使用
		返回一个对象,封装了当前元素对应的样式
		如果获取样式没有设置,会获取真实的值
	
	其他属性
		clientWidth/clientHeight 
		返回可见宽度/高度(包括内容区和内边距) 不带px 只读
		
		!!!优先使用:
		offsetWidth/offsetHeight
		返回整个宽度/高度(包括内容区/内边距/边框) 不带px 只读
		offsetLeft/officeTop 左边距/上边距

		scrollWidth/scrollHeight 
		滚动区域的宽度/高度
		scrollLeft/scrollTop
		获取水平滚动距离/垂直滚动距离
		
		当满足scrollHeight(可滚动的高度)-scrollTop(滚动高度) = clientHeight(可见高度)

事件		
	滚动事件 	 	onscroll
	鼠标移动事件 	onmousemove
	鼠标按下事件 	onmousedown
	鼠标松开事件 	onmouseup
	obj.onmousemove = function(event){
		if(!event){
			event = window.event;
		}
		
		chrome认为浏览器滚动条是body的 document.body.scrollTop
		火狐认为是html的 document.documentElement.scrollTop
		
		event = event || window.event;
		var x = event.clientX ; 鼠标当前窗口的可见横坐标
		var y = event.clientY ; 鼠标当前窗口的可见纵坐标
		
		//ie8不支持
		var x = event.pageX; 鼠标当前页面横坐标
		var y = event.pageY; 鼠标当前页面纵坐标
	}  ps:ie8是在window保存的clientX/Y,不会自动传event

冒泡:
	指事件的向上传导,后代元素事件被触发时,祖先元素的相同事件也会被触发
	大部分有益,但有时候不希望冒泡
	obj.onclick(event){
		event.cancelBubbl = true;
	}

委派: target 父元素触发事件的子元素
	由于冒泡事件,将事件绑定在元素共同祖先元素,会使得所有子元素都有此事件(及时使用js新添的元素)
		<ul id="u1" style="background-color: #bfa;">
			<li><a href="javascript:;" class="link">超链接一</a></li>
		</ul>

		u1.onclick = function(event){
			event = event || window.event;
			//target
			//- event中的target表示的触发事件的对象

			//alert(event.target);
			//如果触发事件的对象是我们期望的元素，则执行否则不执行
			if(event.target.className == "link"){
				alert("我是ul的单击响应函数");
			}
		};

ps:
	1,obj.事件绑定只能绑定一个
	2,
		a,ie8不支持8及以下不支持
			addEventListener("事件字符串,不要on","回调函数","是否在捕获阶段出发,一般false"),可以为obj绑定事件(多个) 
		b,attachEvent() ps:先绑定后执行 其他浏览器不支持
			obj.attachEvent("onclick",function(){});
		ps:obj.addEventListener("click",function(){},flase);可多次绑定
		
		function bind(obj , eventStr , callback){
			if(obj.addEventListener){
				//大部分浏览器兼容的方式
				obj.addEventListener(eventStr , callback , false);
			}else{
				 //this是谁由调用方式决定
				 //callback.call(obj)
				 
				//IE8及以下
				obj.attachEvent("on"+eventStr , function(){
					//在匿名函数中调用回调函数
					callback.call(obj);
				});
			}
		}

事件传播分成了三个阶段
	1.捕获阶段
		- 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
	2.目标阶段
		- 事件捕获到目标元素，捕获结束开始在目标元素上触发事件
	3.冒泡阶段
		- 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件
		
		- 如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true
		
		一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false
		
		- IE8及以下的浏览器中没有捕获阶段
		
		
	设置的对象会捕获其他对象的事件
		setCapture && setCapture()只有ie支持,火狐不会报错,chrome调用会报错
	取消捕获
		releaseCapture && releaseCapture()

滚轮
向下滚动,div边长
向上滚动,div边短

鼠标滚轮事件,滚动式触发
	onmousewheel    火狐(DOMMouseScroll)
	wheelDelta(上滚为正,下滚为负)  火狐(detail 上滚为负,下滚为正)

	火狐不能使用return false 取消默认行为
	因为是使用addEventListener()绑定的
	时:使用 event.preventDefault();

键盘事件
	一般绑定给可以获取焦点的对象或document
	onkeydown 按着不松手,会连续触发,第一次和第二次触发时间稍微长点,后面的会很快(防止误炒作)
	onkeyup
	document.onkeydown = function(event){
		event  = event || window.event
		//keyCode 按键 ucode编码
		判断ctrl(89)和y(17)是否被同时按
		event.keyCode ===17 && event.keyCode ===89 永远不会被触发
		event.keyCode ===17 && event.ctrlKey
	}
	document.onkeyup = function(){}

.b1{}
.b2{}
<div class="b1"><div>
修改样式时:obj.className = "b2";即可修改 添加 obj.className += " b2"

*/

/* BOM
	- 浏览器对象模型 
	- BOM可以试试我们通过js操作浏览器
BOM对象:可以直接使用,也可以通过window对象使用
	window
		-整个浏览器窗口们也是网页中的全局对象
	Navigator	navigator||window.navigator
		- 代表当前浏览器信息,可以识别浏览器
	Location	location||window.location
		- 代表当前浏览器地址栏信息
	History		history||window.history
		- 浏览器历史记录,可以操作浏览器历史记录
			由于隐私原因,该对象不能获取具体历史记录,
			只能操作浏览器向前或向后,而且该操作只在该次访问时有效(浏览器一关就无效)
	Screen(基本不用)	screen||window.screen
		- 代表用户屏幕信息,通过该对象可以获取用户显示器相关信息

Navigator	只使用userAgent来判断浏览器信息
	var ua = navigator.userAgent;

	if(/firefox/i.test(ua)){
		alert("你是火狐！！！");
	}else if(/chrome/i.test(ua)){
		alert("你是Chrome");
	}else if(/msie/i.test(ua)){
		alert("你是IE浏览器~~~");
	}else if("ActiveXObject" in window){
		alert("你是IE11，枪毙了你~~~");
	}
	
History  -操作浏览器向前向后
	history.back();
		length 当次浏览器访问页面个数
		back()	  上一个页面
		forward() 下一个页面
		go() 跳转到指定页面(可以为负数)1下一个,-1上一个
		
Location -代表当前浏览器地址栏信息
	location 当前地址完整信息
		location = "url"; 自动跳转 生成历史记录
		
		location.assign() 跳转其他页面,跟location效果一样
		
		location.reload() 重新加载当前页面,和刷新按钮一致
			如果reload()传入一个true,强制刷新缓存
			
		location.replace() 使用一个页面替换当前页面,不会生成历史记录
		
window
	var time = setInterval(function(){},1000)	定时器
	clearInterval(time);	关闭定时器
	
	var time = setTimeout(function(){},3000);	延时调用
	clearTimeout(time);		关闭延时器
*/

/* JSON
	JS中的对象只有JS自己能识别,其他语言都不认识
	JSON是特殊字符串,可被任意语言识别
	JSON在开发中用于数据交互
	JSON和JS格式一样,不过JSON字符串中属性名必须加双引号
	
分类
	1,对象{} var obj = '{"name":"孙悟空"."age":18}'
	2,数组[] var arr = '[1,2,"hello",true]';
	
JSON中允许的值:
	1,字符串
	2,数值
	3,布尔值
	4,null
	5,对象
	6,数值
	
JSON字符串(json) --> js对象
	JSON.parse(json) ie7一下不适用
	eval() 	eval("("+ json +")") ;
		如果使用eval()执行的字符串中含有{},它会将{}当成是代码块
		如果不希望将其当成代码块解析，则需要在字符串前后各加一个()
		
		ps:	尽量不要使用
			1,性能比较慢
			2,有安全隐患
			
		如果需要在ie7一下使用,引入json2.js文件
		<script type="text/javascript" src="js/json2.js"></script>
js对象 --> JSON字符串(json)
JSON.stringify(json);
*/















