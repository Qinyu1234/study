const { values } = require("core-js/core/array")

1//、组件间通信props(一)
	// props    子组件声明接收属性三种写法    【‘todos’】  { todos:Array}   { todos:{type:Array,default:[]}}
	// 父子之间 
	// 父可以给子传递 非函数和函数
	// 传非函数数据 就是父给子
	// 传函数数据  本质是父想要子的数据

	// 特殊：
	// 	路由配置 props（三种）  路由组件之间没有标签，但是可以把参数通过路由映射为属性
	// 	在路由器中使用props
	// 	1- props:true  只能传递params参数
	// 	2- props:{name:'xxx',age:'20'}  传递额外的参数 
	// 	3- props:(route)=>{
	// 		adress:route.query.adress,
	// 		skuId:route.params.skuId
	// 	}

2//,全局事件总线
	// 所有场合
	
	// 全局事件总线的角色标准
	// 1、所有的组件对象都可以看到
	// 2、可以使用$on和$emit方法
	
	// 怎么添加事件总线
	// 1、安装总线  在main.js中 new vue内部 在创建之前 beforeCreate(){Vue.prototype.$bus = this },
	// 2、在接收数据的组件对象当中  获取总线给总线绑定自定义事件   this.$bus.$on
	// 3、在发送数据的组件对象当中  获取总线触发总线身上绑定的自定义事件   this.$bus.$emit

3//消息的订阅和发布  PubSubJS (十)  vue 里不用
	// 下载安装pubsub.js     
	// import pubSub from "pubsub-js"; 
	
	// 发布消息组件中传递数据:
	// pubSub.publish("消息名", 传递数据); 
	
	// 订阅一个消息:接收数据
	//   pubSub.subscribe('消息名',(接收数据)=>{})

4//、作用域插槽（八）
```js
父组件传递数据给到子组件  子组件props接收数据 然后通过遍历展示数据 但是数据的结构或样式由父组件决定 此时需要将遍历过的数据重新传递给父组件,将要改变的数据部分用slot包裹 在slot标签中将数据传递给父组件
父组件接收到子组件传递过来的数据 在template标签中 使用slot-scope='{结构出来的数据}' 然后进行样式或结构的改变
例如:
	父组件中:isComplete:true或false  1-先将数据传递给子组件 :todos='todos'  4-父组件接收slot-scope="{todo}"子组件传递的数据然后改变结构
         <List :todos='todos'>
              <template slot-scope="{todo,index}">  //{todo,index}是slot传过来的一个对象结构
                <li :style="{color:todo.isComplete?'red':'yellow'}">{{todo.text}}</li>
              </template>
        </List>
    子组件中:首先props:['todos'] 2-在子组件接收后 遍历展示  3-将遍历后的数据需要发生结构变化的数据传递给父组件
         <li v-for="(todo, index) in todos" :key="index">
              <slot :todo='todo' :index='index'>
                 {{todo.text}}
               </slot>
          </li>
```
5//,自定义事件
	// 原生dom事件  浏览器自己调用  固定的几个 click  mouseEnter  mouseLeave等   
		// 	事件类型  回调函数   谁调用   默认传递的实参是什么 
		// 	1、事件类型       固定的几个 
		// 	2、回调函数       自己去定义的
		// 	3、触发（分发、触发事件） 谁调用   系统调用浏览器去调用 
		// 	4、event事件对象 

	// 自定义事件     
		// 	事件类型  回调函数   谁调用   默认传递的是什么
		// 	1、事件类型            无数个
		// 	2、回调函数            自己去定义的
		// 	3、谁调用              自己去调用 
				通过$emit('自定义事件名',传参)
		// 	4、默认传递的是什么    默认传递的是自己给的参数 （有就有，没有就没有）

	原生dom事件在html标签和组件标签上的区别
		//在html标签上添加就是原生的dom事件
		html标签	<button @click="test = 1" ></button> 
		组件标签	<Event1 @click.native="test = 1"></Event1>  组件标签
		//在组件标签上添加就是自定义事件，
			<Event1 @xxx="test($event)"></Event1>
				this.$emit('xxx',参数)
			//想成为原生的事件得添加修饰符.native,
			//就是把原生dom事件添加到组件根元素上	
	
	vue自定义的事件在html标签和组件标签上的区别
		//在html标签上添加自定义事件无意义，所以自定义事件是给组件标签添加的	
			<button @xxx="" ></button> xxx没有emit去触发,无意义	
		//事件名可以任意，也可以和原生的dom事件名相同，但是是自定义的

6//,v-modul深入
	等价
		//v-model='msg'本质:
			//:value='msg'	读取数据  
			//@input='msg = $event.target.value'	写数据
	深入
	//组件当中实现父子数据双向同步,如果子组件中有表单类元素 可以使用v-model
		//组件标签上 v-model本质
		数据在父组件当中
			//:value = "data"  父组件传递属性给子组件，子组件需要接受
			//@input = "data = $event"  //@input自定义
			上面两行就是//v-modul='value'
	
		​		子组件当中必须这样写
		​		先接受props:['value']
​		
		子组件表单类元素
			// ：value = "value"
			// @input = "$emit('input',$event.target.value)"  //@input原生	 input自定义

	// 	干了两件事  
	// ​	先显示数据  
	// ​	再绑定修改数据的事件   
	// ​	只不过在html和组件标签上绑定的@input事件不同   一个是原生的 一个是自定义的事件
			
	v-model和.sync区别
		子组件有表单元素,用v-model
		子组件当中不是表单元素,使用.sync
7//,.sync
	同步{父组件/子组件}数据
	
	不使用sync
		父组件
			:money = 'money' @update:money='money = $event'
		子组件 
			this.$emit('update:money',money-100)

	使用sync	
		父组件
			:money.sync="money"
		子组件 //必须这么写:update:xxx
			this.$emit('update:money',money-100)

	使用v-model
		父组件
			:value='money' @input="money = $event"
			简写
			v-model="money"
		子组件 
			props:['value']
			@click="$emit('input',value)"  //button里

	v-model和.sync区别
		子组件有表单元素,用v-model
		子组件当中不是表单元素,使用.sync

8//,$attrs 和$listenners  
	本质就是父组件中给 子组件传递的所有属性组成的对象及自定义事件方法组成的对象

	$attrs 如果不声明props 那么子组件当中是可以看到  如果声明了哪个属性，那么那个属性在$attrs当中看不到
	它会排除 props声明接收的属性 以及class style
	
	可以通过v-bind 一次性把父组件传递过来的属性添加给子组件
	可以通过v-on   一次性把父组件传递过来的事件监听添加给子组件
	// <el-button type="danger" icon="el-icon-plus" size="mini"></el-button>

    父组件
    //     <HintButton type="danger" icon="el-icon-plus" size="mini" title="添加" @click="test"></HintButton>

    自定义组件HintButton
    // <a herf="javascript:;" :title="title">
    //     <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    // </a>
    // props:['title'],
	接受title后,attrs就不再拿了this.$attrs变成了{icon/size/title}
    // mounted(){
    //     console.log(this.$attrs,this.$listeners)
    //     //可以看到两个对象:{type/icon/size/title}属性
    //         {xxx:f}事件
    // }
	对一个组件进行二次封装

9//,$parent 和 $children以及$ref
	$children：所有子组件对象的数组
	$parent：代表父组件对象

	子组件 <Son ref="son" /> this.$refs.son
		//放在组件中拿到的是组件对象 
		//放在html上拿到的是dom对象
	父组件中能通过this.$refs.son.xxx拿到子组件的数据
		基本不用!!!
		//$children	this.$children 拿到的是所有子组件对象的数组,不能通过索引操作,因为每次子组件对象位置不固定
		//$parent 	this.$parent (如果子组件被多个组件复用,会存在多个parent),此时使用$parent会出问题
	//父组件当中可以通过$children找到所有的子组件去操作子组件的数据（当然可以找孙子组件）
	//子组件当中可以通过$parent找到父组件（当然可以继续找爷爷组件）操作父组件的数据

10//,封装扩展基本： 多个组件有部分相同的js代码

	//html js  css 相同     封装组件
	//单个组件js代码重复    封装函数
	//不同的组件js代码重复  封装混合 

	混入对象里的方法会添加到使用混入对象组件的各个方法里

	混入对象
		export default {
			created:{},
			methods:{},
			//可以有data methods computed...  
		}
	使用混入对象的组件
	   import mymixin from './mymixin'
        export default {
            name: 'Daughter',
            mixins:[mymixin],//然后可以直接使用混入对象中的created/methods中的方法
        }