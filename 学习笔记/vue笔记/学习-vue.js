//#region vue基础
vue 
	数据为尊,动态显示页面
	不管是data还是method,最终都被vm代理
	/* 基本使用:
	
		// <div id="app">
        //     <p id="pp">{{str.toUpperCase()}}</p>
		// 		<a v-bind:href="url">点击去学习</a>
		// 		<a :href="url">点击去学习</a>
		// 		<button v-on:click="test">点击我</button>
		// 		<button @click="test">点击我</button>
        // </div>
		const vm = new Vue({
			el:'#app',//元素 挂载点(父类)
			el(){}
			data:{
				str:'i love 赵丽颖'
			},
		vtool	//data可以是对象,也可以是函数
			 data(){
                        return {
                            msg:'你赵丽颖'
                        }
                    },
			methods:{
				test(){

				}
			}
		})//
		}).$mount("#app")//即el的另一种用法
		

	*/
	
	/*  MVVM&Object.defineProperty
	MVVM 
		M代表model我们的数据
		V代表view即页面
		VM代表的是Vue实例化对象
	
	Vue是使用Object.defineProperty实现的
		Object.defineProperty(obj,"fullName",{
                get(){
                    //当访问对象的fullName属性是调用
                    return this.firstName+"-"+this.lastName;
                },
                set(val){
                    //当设置对象的fullName属性是调用
                    let arr = val.split("-")
                    this.firstName = arr[0]
                    this.lastName = arr[1]
                }
            })
	*/	

	/* 计算属性 data
		计算属性 computed(计算) watch(监视)
			computed:{
				//完整版
				fullName:{
					get(){
						return this.firstName+'-'+ this.lastName
					},
					set(val){
						//目前没用
					}
				},
				//没有set时简写 set一般表单里面使用(双向绑定)
				fullName1(){
					return this.firstName+'-'+ this.lastName
				}
			},
			watch:{
				firstName:{
					handler(newVal,oldVal){
						this.fullName2 = newVal+'-'+this.lastName  
					}
				},
				immediate:true//立即执行一次属性
			}
			immediate:true
			
			区别:computed(同步)能解决的watch都能解决
				computed:	是计算属性:一般是根据已有的计算没有的
				watch:		监视属性,已有的想要监视
		data
		 	vue中: 一开始data中的属性数据都是响应式的
            数组的数据:说的每个数组当中的元素整体
            对象的数据:输的对象的属性

			对象的属性是响应式的
			数组的只能通过特定方法
			push pop unshift shift splice(增删改一体化)
			sort((a,b)=>{return a-b})	 //排序
			reverse()	 //反转顺序
		//3,push pop shift unshift splice(增删改一体化) 响应式
                        this.persons.splice(0,1,{id:1,name:'yingbao',age:12})
                        
                        //splice() 根据参数不同,功能不同
                        //返回的都是删除的元素组成的数组
                        //2个参数 删除 第一个起始位置 第二个是删几个
                        //多个 增改看第二个参数,第二个0代表增,不是代表增
	*/ 
	
	/* 事件相关
		事件添加
			<!-- 第一种:事件监听的完整写法 -->
            <button v-on:click="test1">test1</button>
            <!-- 第二种:事件监听的简写  $event不能随意更改-->
            <button @click="test1($event)">test2</button>
            <!-- 第三种:如果要传其他参数,必须要写$event-->
            <button @click="test2($event,'yangmi')">test3</button> 方法也必须有2个参数
			
		阻止冒泡
				1,@click.stop 
				2,方法里添加  event.stopPropagation()
		取消浏览器默认行为
			//vue
				@click.prevent
			//原生
				<a href="url" @click="cancelDefault">跳转</a>
				cancelDefault(event){
					event.preventDefault() 
				}
		键盘事件都用在表单类元素或document身上
			.enter
			.delete (捕获“删除”和“退格”键)
			.up
			.down

			<input type="text" @keyup="keyEnter">
				keyEnter(event){
					console.log('1312',event.keyCoe)
				}
			<input type="text" @keyup.enter="keyEnter">
		
		自动收集表单元素
			v-model收集的是表单中的value
				input 
				添加value默认值
					radio //如男女
					checkbox //如足球篮球 用数组搜集
					select
						<select v-model="userInfo.cityId">
							<option v-for="(city,index) in citys" :value="city.id" :key="city.id">{{city.name}}</option>
						</select>
		类/style绑定				
			:class 动态使用后,静态也可以用
				<!-- 不知道元素用的哪个类,使用哪一个后台高数我 -->
				<p :class="myClass">我爱你赵丽颖</p>

				<!--  知道元素绑定哪个类,但生效不生效由数据决定-->
				<p :class="{calssA:isA,classB:isB}">我爱你赵丽颖</p>

				<!-- 元素确定由好几个确定的类 --> 基本不用
				<p class="calssA classB">(静态绑定)</p> 
				<p :class="['calssA','classB']">(动绑定)</p> 
			:style
				<p :style="{color:myColor;font-size: mySize;}">我爱你赵丽颖</p>

		其他		
			Vue.config.productionTip = false 取消提示
	*/
	/* 指令
		v-bind 绑定数据	简写:(单向)
			v-bind:href="" :href=""
			双向
			v-model=""(用于form表单里)
		v-on 绑定点击事件	简写@
			v-on:click=""	@click=""
		v-for 
			<li v-for="(person,index) in newPersons" :key="person.id">
				{{person.id}}----{{person.name}}--{{person.age}}
			</li>
		条件渲染
			v-if 
			v-else  条件为假的不渲染,直接在dom不存在
				<p v-if='isOk'>表白成功</p>
				<p v-else>表白失败</p> 
			v-show  条件为假的渲染,只是display:none
				<p v-show='isOk'>求婚成功</p>
				<p v-show='!isOk'>求婚失败</p>
		v-text
			<p>{{msg}}</p>
            <p v-text="msg"></p>
		v-html 相当于{{}}
			<p v-html="msg"></p> //能解析下面的标签
			 msg:'<h2>我爱你赵丽颖</h2>'
		ref:为特定元素添加引用标识,实例的$refs内部可以获取到
			ref 是vue当中给我么提供的标识数据 pp为ref的值
			this.$refs.pp 法里使用
				
	*/
//#endregion

//#region 生命周期及钩子
	(跟data,mothods同级)
	beforeCreate	//初始化前	数据未形成
	created			//初始化后	数据形成了
	beforeMount		//vm挂载前	dom未挂载
	//用的最多,发ajax请求获取数据/开启定时器/添加一些时间
	mounted			//vm挂载后	dom已经挂载	
	//vm数据已经更新,页面还未更新
	beforeUpdate	//页面渲染前 不是vm数据
	updated			//页面渲染后 不是vm数据
	beforeDestroy	//销毁前
	destroyed		//销毁后
//#endregion

//#region computed&watch
	// computed:{
	// 	//完整版
	// 	fullName:{
	// 		get(){
	// 		return this.firstName+'-'+ this.lastName
	// 	},
	// 	set(val){
	// 		//目前没用
	// 	}
	// 	},
	// 	//没有set时简写
	// 	fullName1(){
	// 		return this.firstName+'-'+ this.lastName
	// 	}
	// },
//监视的数据一定是存在的,并且是可以变化的
	// watch:{
	// 	firstName:{
	// 		//对象是一个配置对象 不能写错
	// 		handler(newVal,oldVal){
	// 			this.fullName2 = newVal+'-'+this.lastName   
	// 		},
	// 		immediate:true//立即执行一次属性
	// 	},
	// 	// lastName:{
	// 	//     handler(newVal,oldVal){
	// 	//         this.fullName2 = this.firstName+'-'+newVal   
	// 	//     }
	// 	// }
	// },
//#endregion

//#region 过渡&动画
	v-enter-active
		v-enter
		v-enter-to			
	v-leave-active
		v-leave
		v-leave-to
//#endregion

//#region 自定义
全局指令
	//全局制定&局部指令
	//功能 参数 返回值
	//定于全局指令
	//参数  1.指令名称（不包含v- 只能全小写）
	//      2.回调函数 (参数:1使用改指令节点2,该指令使用的表达式的值及表达式的集合)
	Vue.directive('upper',function(node,bingding){
		console.log(node,bingding)
		//textContent跟innerHTML一致,但textContent只能用高级浏览器
		node.textContent = bingding.value.toUpperCase()
	})
全局局部指令
	// directives:{
	// 	upper(node,bingding){
	// 		node.textContent = bingding.value.toUpperCase()
	// 	}
	// }
全局过滤器 
	进一步的计算(跟js中过滤器不一致)
	// <p>{{timeNow | timeFormat}}</p>
	// Vue.filter('timeFormat',function(value){
	// 	return moment(value).format('YYYY-MM-DD, h:mm:ss a')
	// })
局部过滤器
	// filters:{
	// 	timeFormat(value){
	// 		return moment(value).format('YYYY-MM-DD, h:mm:ss a')
	// 	}
	// }
插件 
	js文件
		(function(w){
			//一个插件最终是一个对象
			MyPlugin = {}
			//一个插件必须要有一个install方法
			MyPlugin.install=function(Vue,options){
			// 1. 添加全局方法或 property
				Vue.myGlobalMethod = function () {
					console.log('全局方法被调用')
				}

				// 2. 添加全局资源
				Vue.directive('upper', function(el,bindings){
					el.textContent = bindings.value.toUpperCase
				})

				// 4. 添加实例方法
				Vue.prototype.$myMethod = function (methodOptions) {
					console.log('实例方法被调用')
				}
			}
			//将插件挂载在window上,暴露出去
			w.Myplugin = Myplugin
		})(window)
	使用
		1,引用后 
		// <script type ="text/javascript" src="./js/myPiugin.js"></script>
		2,Vue.use(MyPlugin)
//#endregion

//#region 单组件(重要)/非单文件
	component(组件文件夹下的其中一个)
	// <template>
	// 	<div>
	// 		<h2>我爱你赵丽颖</h2>
	// 		<button>爱了{{count}}次</button>
	// 	</div>
	// </template>

	// <script>
	// 	//一个.vue通常我们说是一个组件,单本质其实是定义组件的配置对象
	// 	export default {
	// 		name:'',
	// 		data(){
	// 			return{
	// 				count:0
	// 			}
	// 		}
	// 	}
	// </script>

	// <style scoped>
	// 	h2{
	// 		color: aqua;
	// 	}
	// </style>

	app.vue //配置文件
	/*
		<template>
			<div>
				<Mybutton></Mybutton>   
			</div>
		</template>
	*/

	/* <script>
		//相当于定义组件的配置对象
		import MyButton from './component/myButton.vue'

		export default {
			name:'',
			components:{
				MyButton //MyButton:MyButton
			}
		}
	</script> */
	
	使用
	// component:{
	// 	App //定义带注册app
	// },
	// template:'<App/>'

全局非单组件
	//完整
		//1,定义组件(定义的组件之后全都是全局) 本质是根据一个配置对象返回一个函数,后期当构造函数使用 
			const VueComponent = Vue.extend({
				//组件配置对象和Vue配置对象很相似,除了el
				data(){
					//组件配置对象中data只能写函数
					return{
						count:0
					}
				},
				//如果有多个元素,必须包含在一个元素里
				template:'<div><h2 style="color:red">我爱你赵丽颖</h2><button @click="count++">你爱了{{count}}次</button></div>',
			})
		//2,注册(全局注册-局部组件) 本质是把一个标签的名称和刚才定义出来的函数绑定在一起
			//全局注册 
			Vue.component('mybutton',VueComponent)

		//3,使用
			//<mybutton></mybutton>

	//简写
		//1定义+注册
		Vue.component('mybtn',{
			//组件配置对象和Vue配置对象很相似,除了el
			data(){
				//组件配置对象中data只能写函数
				return{
					count:0
				}
			},
			//如果有多个元素,必须包含在一个元素里
			template:'<div><h2 style="color:red">我爱你赵丽颖</h2><button @click="count++">你爱赵丽颖爱了{{count}}次</button></div>',
		})
		//2使用
		// <mybtn></mybtn>
局部非单组件
		// components:{
		// 	btn1:{
		// 		data(){
		// 			//组件配置对象中data只能写函数
		// 			return{
		// 				count:0
		// 			}
		// 		},
		// 		//如果有多个元素,必须包含在一个元素里
		// 		template:'<div><h2 style="color:red">我爱你赵丽颖</h2><button @click="count++">你爱赵丽颖爱了{{count}}次</button></div>',
		// 			}
		// }

//#endregion

//#region 脚手架4/3
	// npm install -g @vue/cli	
	// vue create vue-demo(项目名称) 
			//default vue2

//#endregion


/* npm源换成国内
1,npm config set registry https://registry.npm.taobao.org

// 配置后可通过下面方式来验证是否成功

1,npm config get registry
// 或
2,npm info express
*/

//eslint的禁用
	//公司可能会用:
		//package.json 当中找到eslintConfig项,全局配置禁用某些错误提示:
			// 'rules':{
			// 	'no-unused-vars':'off'
			// }
	//开发阶段使用:
		//手动创建vue.config.js文件
			// module.exports = {
			// 	lintOnSave:false
			// }

//插件
//Search node_modules

//#region 静态页面&动态交互实现
	//静态页面：
		// 1、拆分组件	拆分页面 定义组件   最大化重用（html,css,图片）

		// 2、组装组件     就是把各个组件组装起来放在App.vue里面

		// 3、渲染组件     就是把组件拼装完后，不考虑数据，先展示出来 
	// 动态组件界面
		// 1、初始化数据动态显示
			// 	初始化数据分析：
			// 		数据类型     一般我们的数据最终都是放在一个数组内部，数组内部放对象
			// 		数据名称     comments:[{},{},{}]
			// 		定义在哪个组件   （看哪个组件还是哪些个组件使用到）
			// 			数据用到不是说展示就代表用，而是说数据的增删改查都叫用到数据

			// 			如果这个数据只是某一个组件用的，那么数据就在这一个组件当中定义
			// 			如果这个数据在某些个组件当中用的，那么就找这些个共同的祖先组件去定义
					
			// 	组件标签名和属性名大小写问题：
			// 		基本规则：要么原样去写，要么转小写中间用-连接
			// 		AddComment       <AddComment/>  或者  <add-comment>
							
		// 2、交互（与用户的交互）
			// 	对于数据的操作：
			// 		数据在哪，操作数据的方法就要在哪定义，而不是随便的在某一个组件当中去操作数据
			// 		想要操作数据的组件，可以通过调用操作数据的方法，间接去操作数据。

			// 	添加和删除：
			// 		子组件添加事件和事件回调，事件回调当中去调用外部操作数据的方法
			// 		数据所在的组件去添加操作数据的方法


//#endregion

//#region 组件通信
	//1,props 组件通信的方式：
		
		// 	是组件通信最常用最简单的一种方式

		// 	适用场合：适用于父子之间
		// 	父可以给子传递函数数据和非函数数据
		// 		1、传递非函数数据，本质就是父亲给儿子传数据
		// 		2、传递函数数据，本质是父亲想要儿子的数据，通过函数调用传参的方式把数据传递给父亲
		// 	不足（不是父子就狠麻烦） 兄弟关系，就必须先把一个数据给了父亲，然后通过父亲再给另一个
		// 	最基础的通信，用的也是比较多的，所以必须搞定

		//三种写法
			//1,props:['todo']
			//2,props:{todo:Object} //传来的必须是对象
			//3,props:{
				// 	addTodo:{
				// 	  //这是一个配置对象
				// 	  type:Function,
				// 	  required:true, //必须传
				// 	  //default://默认值
				// 	}
			//  },

	//2,自定义事件通信方式
		//和props父给子传递函数数据的时候类似
		    //自己定义的事件：事件类型（自己定义无数个）和回调函数（自己定义自己触发，
				//默认传参是自己传就有，不传就是undefined）
		    //系统定义的事件：事件类型（固定几个）和回调函数（自己定义系统触发 默认参数是事件对象）
		//适用：专门子向父通信
		//$on 父组件
			//$once 跟on一致,只能触发1次
		//$emit 子组件
			//$off 解绑事件 销毁时用
		//vm和组件对象的关系
			//vm实例化对象的原型是组件对象原型的原型
			//$on  $emit 等方法是在vm的隐式原型身上的（Vue的显式原型身上）
	//3,全局事件总线
		//适用场合： 任何场合
		//把vm对象添加到Vue原型对象  就形成全局事件总线（vm）
		main
			// beforeCreate(){
			// 	Vue.prototype.$bus = this //配置总线
			// }
		mounted绑定
			this.$bus.$on('asd',callCack) //绑定
		this.$bus.$emit('asd') //使用

	//4,通信方式 消息订阅和发布（用法类似于全局事件总线，vue当中几乎不用）   
			//PubSubJS第三方插件
			//订阅者是接收数据的组件
			//发布者是发送数据的组件

			//坑： 订阅者的回调函数里面形参第一个必须有，而且是为了接受发布者的消息类型的，实际意义没有，但是必须写上
				//PubSub.subscribt('heihei',this.updateOne) //消息的订阅
				//updateOne(msg,index){}//msgmsg即使不适用,也要占位
				//PubSub.publish('heihei',this.index)//消息的发布
	
	//5,插槽
		//默认插槽 slot(挖坑) template(填充) 父传子
			// 子组件
			// 	<div>
			// 		<h2>我爱赵丽颖</h2>
			// 			<!-- 组件标签 插槽 -->
			// 		<slot></slot>
			// 	</div>
			// 父组件:
			// 	<div>
			// 		<Child>
			// 			<template>
			// 			<button>点我</button>
			// 			</template>
			// 		</Child>
			// 	</div>
		//具名插槽 给名字 父传子
			//<slot name='xxx'></slot>

			// 		<Child>
			// 			<template slot='xxx'>
			// 			</template>
			// 		</Child>
		//作用域插槽
			//子组件 :todo="todo" 传给父组件
				//<slot :todo="todo">{{todo.content}}</slot>

			//父组件 slot-scope="scopeData" 父组件接受数据
				// <Scoped>
					// 	<template slot-scope="{todo}"> //解构
					// 	<template slot-scope="scopeData">
					// 		<span v-if="scopeData.todo.isOver">√{{scopeData.todo.content}}</span>
					// 	</template>
				// </Scoped>
//#endregion

//#region 存储
	// localStorage.setItem('键',值) //存储数据 值不能传对象
        // localStorage.getItem('键')  //获取数据
        // localStorage.removeItem('键') //删除数据
        // localStorage.clearItem()  //清空数据
//#endregion

//#region
	//components:费路由组件全局注册组件
	//views&xx:路由/页面组件
//#endregion

//#region 跨域
	//使用模块 http-proxy-middleware
	vue.config.js中配置
		// devServer:{
		// 	proxy:{ //代理
		// 		'/api':{
		// 			//本身 8080/api/users/info
		// 			//target 转发的目标服务器  3000/api/users/info
		// 			//pathRewrite 路径重写 3000/api/users/info 和真正的地方多了个/api 需要剁掉
		// 			target: 'http://localhost:3000',
		// 			pathRewrite: { '^/api': '' },
		// 			changeOrigin:true//不管改变哪个跨域的条件都会转发
		// 		}
		// 	}
		// }
//#endregion

//#region element-ui 
	//1,安装:npm i element-ui -S
	//2,引入:
			//完整引入:
				// import ElementUI from 'element-ui';
				// import 'element-ui/lib/theme-chalk/index.css';
				// Vue.use(ElementUI);
			//部分引入:
				//1,安装babel-plugin-component
				//2,修改babel.config.js
				//3,引入
//#endregion







