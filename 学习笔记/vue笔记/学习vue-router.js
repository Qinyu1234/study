	//1,简单理解前台路由：路由可以让我们实现组件的切换和跳转：
		// 点击链接，
		// 匹配路由，
		// 显示对应的组件
	//2,使用
		// 1、安装
		// 2、引入并声明使用并暴露 index.js
			// import Vue from 'vue'
			// import VueRouter from 'vue-router'
			// Vue.use(VueRouter)

			// export default new VueRouter({
				// 
			// })
		// 3、将实例化的路由器对象在new Vue的配置对象当中使用
			// import router from '@/router'
			// new Vue({
			// 	el:'#app',
			// 	render:h=>h(App),
			// 	router
			// })
		//4、new路由器时候配置对象当中的代码
			//routes:[
			// 	{
			// 		path:'/home',
			// 		component:Home //注册路由组件
			//		children:[],
			// 	},
			// {
			// 	//重定向路由
			// 	path:'/',
			// 	redirect:'/home'
			// }
			// ]
		// 5,引用
			// router-link    路由连接，就是点哪，可以让你的路径变为你指定的 to
				//to='路由/参数' :to
			// router-view    路由组件显示区域，就是组件需要在哪显示

		//6,路由传参
			//1,传值:
				//1,路由直接拼
					//to='路由/params参数?query参数' :to
				//2,路由里加name,然后对象传值
					//:to="{name:'xx',xx.params.id:'',xx.query.content:''}"
			//2,接收
				//1,$route.params.id $route.query.content
				//2,props传值
					//1,如果为true 可以用props接受params值
					//2,如果为对象{name:xx} 可以传额外值(基本不用)
					//3,如果为函数props(route){return{}} 可以返回一个对象,然后用props接(经常用)
		//7,缓存路由组件 如果使用,组件name必须写
		// include 包含 字符串或正则
		// exclide 除了 字符串或正则
		// <keep-alive include="Home">   Home是对应的组件对象的名字，不是路由的名字
		// 		<router-view></router-view>
		// </keep-alive>
	
	//3,路由传参公用一个组件,mounted只会执行1次
		// mounted(){
		// 	setTimeout(() => {
		// 	this.title = msgArr.find(item => item.id === this.msgid ).title
		// 	}, 1000)
		// }
			//需要执行mounted +watch一起使用
	//4,$router方法:
		// 2)	this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
		// 3)	this.$router.back(): 请求(返回)上一个记录路由
		// 4)	this.$router.go(-1): 请求(返回)上一个记录路由
		// 5)	this.$router.go(1):  请求下一个记录路由

			//$router.push()和$router.replace()的区别，返回有区别。
				// $router.push()是往历史记录里面追加
				// $router.replace()每一次都是覆盖添加
	//5,导航
		//1,编程式导航
			// 如果是button,需要些@click函数
			// this.$router.push()
			// this.$router.replace()
				//参数:1,字符串2,模板字符串3,对象
					//3 this.$router.push({name:'newsdetail',params:{newsid:news.id},query:{content:news.content}})
		//2,声明是导航
	
		ps
			hash模式
   		 		//路径中带# 	http://localhost:8080/#/home/news
    			//发请求的路径: http://localhost:8080  项目根路径
    			//响应: 返回的总是index页面  ==> path部分(/home/news)被解析为前台路由路径

			history模式
    			//路径中不带#: http://localhost:8080/home/news
    			//发请求的路径: http://localhost:8080/home/news
    			//响应: 404错误

    			//希望: 如果没有对应的资源, 返回index页面, path部分(/home/news)被解析为前台路由路径

    			//解决: 添加配置
					//在路由index.js new 里面添加
						//mode:'history'//模式 hash history
        				//devServer添加: historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
        				//output添加: publicPath: '/', // 引入打包的文件时路径以/开头