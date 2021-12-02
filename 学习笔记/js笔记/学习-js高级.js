js高级

/* less
	变量:@abc
		@变量名称:@变量名称
		.c{}
		@d:background;
		.a{
			>.b{
				{@d}:red;
			.c;	
			}
		}
	
	运算:直接算
		margin-left:(-200px * 0.5)
	
	混合:.b作为参数,加上(),混合后会消失,不加不会消失
		.b(@w:100px[默认值],@h,@c){}
		.a{
			.b(@w,@h,@c);
			.b(@c:pink[传递指定参数]);
		}
		.d(@name,...){} 至少1个  参数
	
	匹配模式:
		通用匹配模式,不管执行down还是top,都会限制性@_
		.a(@_,@w,@h);
		.a(Down,@w,@h);
		.a(top,@w,@h);
	
	导入:
	@import "index"/"index.less"
	
	内置函数:等
		@str:"images/1.jpg";
		@str2:replace(@str,"1","2");
	
	层级结构:
	.father{
		.son{
			&:hover{
				//hover事件 &是告诉less不要用后代选择器拼接
			}
		}
	}
	
	继承:
		.center{}
		.father:extend(.center){
			.son:extend(.center){}
		}
		
	判断: > < >= <= =
	(),() 		或||
	()and() 	并$$
	() 可以传Bollean true/false
	.center(@w,@h) when(@w > 100px),(@h > 100px){}

*/

/* 补漏:

	是获取一个元素相对于视口距离最干净的方法:
		左侧
		getBoundingClientRect().left
		.top .right .bottom
		
	officeWidth 元素宽度

	给元素设置移动上去显示小手
	cursor:pointer
	
	垂直居中
	vertical-align:middle;
*/
	
/* 属性继承 原型链方法继承
属性继承:
		父类.call(this,属性);
原型链方法继承:
		//  原型链式继承     让子类的原型 等于 父类的一个实例
		  子类.prototype = new 父类();
		//  我们需要手动的将Corky原型上的构造器属性 重新指向Corky
		  子类.prototype.constructor = 子类;
		  
	异步:定时器 回调函数
*/	

/* 闭包:

	1,函数存在嵌套关系
	2,内部函数引用外部函数
	3,外部函数调用	
*/

/* 模块化
	1:
	function myMoney(){
		var money = 18000;
		function getMoney(){
			return money;
		}
		function setMoney(a){
			money += money;
		}
		return{
			setMoney:setMoney;
			getMoney:getMoney;
		}
	}
	2:
	function myMoney2(){
		var money = 18000;
		function getMoney(){
			return money;
		}
		function setMoney(a){
			money += money;
		}
		window.getMoney = getMoney;
		window.setMoney = setMoney;
	}
*/

/* jQuery (很少使用了)
	$/jQuery  $()*/
	/* jQuery1-5
	1,核心函数
		1,参数为函数,约等于window.onload
			$(function(){})
			
		2,参数为选择器字符串 通过选择器匹配的元素封装成jQuery对象返回
			$("#btn(id)/.btn(class)').click(function(){})
			
		3,参数为dom对象,将当前dom对象转换成jquery对象返回
			$(this).html();	
			this 	指向DOM
			$(this) 指向jQuery对象
			
		4,参数为html标签字符串,将当前标签创建,并直接为jquery对象
			$('<input type="text" name = "msg"/><br/>').appendTo('div(标签)/.box(class)/#btn(id)');

		5,遍历
			arr = [4,1,32,4,1]
			$.each(arr,function(index,item){
				index 	索引
				item	数据
			});	
			
		6,去空格
			str = "   nahjksehf   ";
			//str.trim();
			$.trim(str);
			
	2,核心对象
		$btn = $('button');
		$btn 为伪数组 可以有一个,可以有多个
		$btn[1].innerHTML;
	
		$btn.each(finction(){
			this指向遍历目标
			console.log(this.html());
		})
	
		$btn.index 直接输出$btn在同级兄弟元素间的索引
	
	3,选择器
		所有的div都会添加pink的背景色
			$("div").css("background","pink")
		所有的div都会添加click的点击事件
			$("div").click(function(){})
			
		$("div,span") 所有div和span
		$("div.box") 所有div并且是box的
	
		$('ul span') ul下的所有span
		$('ul>span') ul下的子元素span
		
		选择class为box的下一个li
		$('.box + li')
		选择class为box的元素后面所有兄弟元素
		$('.box~*') 
		
		div下的第一个
		$(div:first)  last/
		
		div下不为box的
		$('div:not(.box)')
		
		选择第二第三个li元素
		$('li:eq(1),li:eq(2)')
		:gt 大于给定索引值 :lt 小于给定索引值 不包含边界
		jquery 选择器,从左到右一次选择, 每次使用上次筛选过后的集合
		$('li:lt(3):gt(0)') 先执行大于索引2的

		选择内容为BBBBB的
		$('li:contains(BBBBB)') 包含就会被选中
		
		选择隐藏的li
		$('li:hidden')
		
		选择有title属性的选择器
		$('li[title]')
		$('li[title = hello]') title为hello的
		$('li[title][title != hello]')  所有li里title部位hello的
	
	4,表单选择器
		:password
		:checkbox
		:radio
		:text
		select
		选择不可用的文本输入框
		$(':text:disabled').css('background','pink');
		
		显示选择爱好 个数 选中
		$(':checkbox:checked').length
		checkboxAllObj.prop("checked",true);
		
		显示选择的城市名称
		$('select option:selected').html()
	
	5,工具方法:
		$.each(): 遍历数组或对象中的数据
			$.each(obj/arr,function (k,v) {
				console.log(k,v)
			});
		$.trim(): 去除字符串两边的空格
			$.trim(str);
		$.type(obj): 得到数据的类型
			$.type(arr)
		$.isArray(obj): 判断是否是数组
			$.isArray(arr)
		$.isFunction(obj): 判断是否是函数
			$.isFunction($)
		$.parseJSON(json) : 解析json字符串转换为js对象/数组
			$.parseJSON(json)
		
		offset/position 虽然返回都不带单位,但都是以像素计 只对可见元素有效
		$Obj.offset()	$Obj元素相对于页面左上角位置
		$Obj.position()	$Obj元素相对于包含块的位置
*/
	/* jQuery6-10
	6,属性	 attr
		1,读取第一个div的title属性
			$('div:first').attr('title')
		2,给所有的div设置name属性(value为atguigu)
			$('div').attr('name','atguigu');
		3,移除所有div的title属性
			$('div').removeAttr('title');
		4,给所有的div设置class='guiguClass'
			$('div').attr('class','guiguClass');
		5,给所有的div添加class='abc'
			//$('div').attr('class','guiguClass abc')
			$('div').addClass('abc');	
		6,移除所有div的guiguClass的class
			$('div').removeClass('guiguClass');
		7,得到最后一个li的标签体文本
			$('li:last').html()
		8,设置第一个li的标签体为"<h1>mmmmmmmmm</h1>"
			$('li:first').html('<h1>mmmmmmmmm</h1>');
		9,得到输入框中的value值
			$(':text').val()
		10,将输入框的值设置为atguigu
			$(':text').val('atguigu');	
		11,点击'全选'按钮实现全选
			//  attr  用于操作属性值可自己定义的属性
			//  prop  用于操作属性值固定的属性    其实指得就是布尔值属性
			$('button:first').click(function () {
			  $(':checkbox').prop('checked',true)
			})
		12. 点击'全不选'按钮实现全不选
		  $('button:last').click(function () {
			$(':checkbox').prop('checked',false)
		  })
		  
	7,元素滚动
		1,得到div或页面滚动条的坐标
			//但是这两个获取的结果一定是互斥的    一个有值 另外一个一定为0
			$(document).scrollTop()
			$('html').scrollTop()
			
			$('html').scrollTop() + $('body').scrollTop()
			或者 ps:前面为0即为假
			$('html').scrollTop() || $('body').scrollTop()
   
		2,让div或页面的滚动条滚动到指定位置
			$('html,body').scrollTop(200);
			$(document).scrollTop(300) 1.8以上版本可以使用
	

	8,过滤-选择方法
		var $list = $('ul li')
			$list.first()	第一个
			$list.last()	最后一个
			$list.eq(1)		第二个
			
			filter根据传入的选择器,筛选已有的jquery对象
			$list.filter('[title=hello]') ul下li标签为hello的
			$list.filter('[title!=hello]') ul下li标签不为hello的
			
			$list.has('span') ul下li标签中有span子标签的
	
		var $ul = $('ul')
			Children获取子元素集合,如果传入选择器,会过滤这个子元素
			$ul.Children('span:eq(1)')	ul标签的第二个span子标签
			
			find获取后代元素集合,如果传入选择器,会过滤这个子元素
			$ul.find('span:eq(1)')	ul标签的第二个span后代标签
			
			$ul标签的父标签
			$ul.parent()
	
			id为cc的里标签前面的所有li标签
			$('#cc').prevAll('li')
			$('#cc').nextAll('li')	后边所有
			$('#cc').prev()		前边一个
			$('#cc').next()		后边一个
			
			id为cc的li标签的所有兄弟li标签
			$('#cc').siblings()
			
	9,爱好选择器
		1,全选 选中的=总个数
			$checkboxAllObj.prop('checked',$items.filter(':checked').length == $items.length);
			
			$checkboxAllObj.prop('checked',$items.filter(':not(:checked)').length == 0);
	
		2,全选/全不选
		$checkboxAllObj.click(function(){
			$items.prop('checked',this.checked);
		})
	
		3,全选/全部选按钮实时更新
		$items.click(function(){
			checkboxAllObj.prop('checked',items.filter(':not(:checked)').length == 0)
		})
		
		4,选择提交,显示所有勾选的爱好
		$('提交').click(function(){
			$items.filter(':checked').each(function(){
				//this为当前jquery存储的dom对象,不能用this.val()
				alert(this.value)
			})
		})
		
	10,Tab切换
		//选择的显示,未选择的隐藏
		index = $(this).index()
		//如果太多,耗损挺大的
		$Obj.eq(index).show().siblings().hide();
		
		var currIndex = 0;	当前显示的div对应的索引
		if(currIndex == index){
			return
		}
		$Obj.eq(currIndex).hidden()
		$Obj.eq(this).show()
		currIndex = index;	更新索引
		
*/	
	/* jQuery11-15
	11,回到顶部
		1,时间固定	路程越长,速度越快	主流
		2,速度固定	路程越长,速度越长
		
		//逐帧动画概念
		//动画总时长	动画帧时长	总帧数	总偏移
		
		//动画总时长
		var time = 2000;
		//动画帧时长
		var itemTime = 20;
	
		//总帧数	time/itemTime
		
		//总偏移	
		var offset = $('html').scrollTop() || $('body').scrollTop();

		//单次偏移(速度) = 总偏移/总帧数
		var itemOffset= offset/(time/itemTime)
		
		var times = setInterval(function(){
			offset -= itemOffset;
			if(offset <= 0){
				clearInterval(time);
			}
			$('html,body').scrollTop(offset);
		},itemTime);
		
	12,元素尺寸
		尺寸
			$Obj.width()	获取宽
			$Obj.height()	获取高
		内部尺寸
			$Obj.innerWidth()	获取内部宽	width + padding
			$Obj.innerHeight()	获取内部高	height + padding
		外部尺寸	允许传递一个布尔值,默认flase,如果为true,包含margin
			$Obj.outerWidth()	获取外部宽	width + padding + boder
			$Obj.outerHeight()	获取外部高	height + padding + boder
			$Obj.outerHeight(true)	获取外部宽	width + padding + boder + margin
			$Obj.outerHeight(true)	获取外部高	height + padding + boder + margin
	
	13,文档增删改
		1,添加/替换元素
			内部插入
				* append(content)	向当前匹配的所有元素内部的最后插入指定内容
					appendTo()			
				* prepend(content)	向当前匹配的所有元素内部的最前面插入指定内容
					prependTo()
			外部插入:	
				* before(content)	将指定内容插入到当前所有匹配元素的前面
				* after(content)	将指定内容插入到当前所有匹配元素的后面替换节点
				* replaceWith(content)	用指定内容替换所有匹配的标签删除节点	
		2. 删除元素
			* empty()	删除所有匹配元素的子元素	掏空节点,清空所有的子元素
			* remove()	删除所有匹配的元素	删除节点

		//1,向id为ul1的ul下添加一个span(最后)
			$('#ul1').append('<span>我是append新增的span</span>');
			$('<span>我是appendTo新增的span</span>').appendTo('#ul1');
		//2,向id为ul1的ul下添加一个span(最前)
			$('#ul1').prepend('<span>我是prepend新增的span</span>');
			$('<span>我是prepend新增的span</span>').prependTo('#ul1');
		//3,在id为ul1的ul下的li(title为hello)的前面添加span
			$('#ul1 li[title=hello]').before('<span>我是before新增的span</span>');
		//4,在id为ul1的ul下的li(title为hello)的后面添加span
			$('#ul1 li[title=hello]').after('<span>我是after新增的span</span>')
		//5,将在id为ul2的ul下的li(title为hello)全部替换为p
			$('#ul2 li[title=hello]').replaceWith('<p>我是替换的p标签</p>')
		//6,移除id为ul2的ul下的所有li
			$('#ul2 li').remove();
			$('#ul2').empty();
	
	14,绑定/解绑
		1,给.out绑定点击监听
			$('.out').click(function(){});
			//原生需要transitionEnd方法
			$('.out').on('click mouseleave',function(){}); 
		2,给.inner绑定鼠标移入移除事件监听
			移入/移出:	mouseover/mouseout 		触发冒泡
						mouseenter/mouseleave	不触发冒泡
				$('.inner').mouseover(function(){
					console.log("移入");
				}).mouseout(function(){
					console.log("移出");
				});
			
				$('.inner').mouseenter(function(){
					console.log("移入");
				}).mouseleave(function(){
					console.log("移出");
				});
				
				//底层使用的mouseenter/mouseleave
				$('.inner').hover(function(){
					console.log("移入");
				})
				
		3,点击.btn移除所有事件监听
			不传参数接触所有事件
			$('.btn').off();
		
		4,点击.btn移除mouseenter/mouseleave事件监听
			$('.btn').off('mouseenter mouseleave');
	
	15,事件委托 通过冒泡处理
		* 将多个子元素(li)的事件监听委托给父辈元素(ul)处理
		* 监听回调是加在了父辈元素上
		* 当操作任何一个子元素(li)时, 事件会冒泡到父辈元素(ul)
		* 父辈元素不会直接处理事件, 而是根据event.target得到发生事件的子元素(li), 通过这个子元素调用事件回调函数
		//3个参数:事件名称;委托的子元素;回调函数
		设置事件委托: 
			1,$(父Obj).delegate(子Obj, eventName, callback)
			2,$(父Obj).on(子Obj, eventName, callback)
		移除事件委托: 
			1,$(父Obj).undelegate(eventName)
			2,$(父Obj).off()
	
	*/
	/* jQuery16-19
	16,document,ready和window.onload()区别
		//页面加载完所有外部资源后会执行回调函数 并且包括页面渲染完成
		window.onload() //多个会覆盖
		//dom加载完成后执行,等待资源少,执行比onload快
		$(function(){})===$(document).ready(function(){}) //多个可以
	
	17,自定义动画
		//淡入淡出切换
		1,fadeIn(time)		带动画的显示
		2,fadeOut(time)		带动画的隐藏
		3,fadeToggle(time)	带动画的切换
	
		//滑动
		1,slideUp()			带动画的展开
		2,slideDown()       带动画的收缩
		3,slideToggle()     带动画的切换
	
		//显示隐藏,默认么有动画 传时间就有
		1,show()			(不)带动画的显示
		2,hide()            (不)带动画的隐藏
		3,toggle()          (不)带动画的切换
	
		//自定义动画
			1,animate:参数1 改变的样式;参数2时间
				obj.animate({
					'width':'100px';  
					'left':'+=500px'; 基于当前位置移动
				},1000)
			2,stop()立即停止当前动画,执行以下动画,不清空执行队列

	18,扩展插件
		//给$拓展
		$.min();//即可使用
		$.extend({
			min:function(){}
		})
		//给对象拓展
		$.fn.extend({
			checkAll:function(){
				this.prop('checked',true);
			}
		})
	19,多库共存
		jQuery.noConflict
		使用此方法后,所有$都需要使用全称jQuery
	*/
	
	
	Bootstrap 算是一个ui框架 底层less
		//布局容器,不能嵌套
		.container			固定宽度并支持响应式布局的容器
		.container-fluid	100%宽度,占据全部视口的容器
	1,栅格
		1,栅格基础
			媒体查询:		
				超小屏幕 <768px 默认
					.col-xs-
				小屏幕 >=768px
					.col-sm-
					@media (min-width: @screen-sm-min) { ... }
				中等屏幕 >992px
					.col-md-
					@media (min-width: @screen-md-min) { ... }
				大屏幕 >=1200px
					.col-lg-
					@media (min-width: @screen-lg-min) { ... }
		2,列偏移 向右偏移
			.col-xs-offset-*
			.col-sm-offset-*
			.col-md-offset-*
			.col-lg-offset-*
		3,列排序
			push向右拉
			.col-xs-push-*
			.col-sm-push-*
			.col-md-push-*
			.col-lg-push-*
			
			pull向左拉
			.col-xs-pull-*
			.col-sm-pull-*
			.col-md-pull-*
			.col-lg-pull-*
		4,嵌套列
			<div class="row">
				<div class="col-lg-6">
					<div class="row">
						<div class="col-lg-6"></div>
					</div>
				</div>
				<div class="col-lg-6"></div>
			</div>
	2,排版
		//设置样式
		<span class="h1"></span>
		<h1>主标题<small>副标题</small></h1>
		.lead 类可以让段落突出显示
		
		对齐
		<p class="text-left">Left aligned text.</p>
		<p class="text-center">Center aligned text.</p>
		<p class="text-right">Right aligned text.</p>
		<p class="text-justify">Justified text.</p>
		<p class="text-nowrap">No wrap text.</p>
	
		更多查询文档Bootstrap
		
	3,表单 (类太多了,没法记)
		查询文档Bootstrap
		
	4,按钮-图片-辅助类
		查询文档Bootstrap
		
	5,响应式工具类-下拉菜单-按钮组
		//input输入框前面加元素,或后面加元素
		.input-group-addon
			ps:	<input>@example.com
				@<input>
		.input-group-btn	//额外按钮
		
		查询文档Bootstrap
		
	6,导航条
		查询文档Bootstrap
	
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	