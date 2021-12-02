//#region Vuex
    //1、Vuex是对vue应用中多个组件的共享状态进行集中式的管理(读/写)
	//2、用于:
		//1)多个视图依赖于同一状态
		//2)来自不同视图的行为需要变更同一状态	
    /*3,使用:
        //1、安装vuex
            //npm i vuex -D
        //2,引入并声明使用vuex插件
            //建立store文件夹 建立index(找文件夹的时候自动会找index文件)
            // import Vue from 'vue'
            // import Vuex from 'vuex'
            // Vue.use(Vuex)
		//3,暴露一个store的实例化对象
            // export default new Vuex.Store({
            //     //包含6个核心概念,现在将4个
            // })
        //4,在main中引入暴露出来的Store实例化对象并使用
            //import store from '@/store' 其实实际的是store文件夹下的index

            // new Vue({
            //     el:'#app',
            //     render:h=>h(App),
            //     store
            // })
            每个组件对象中都可以通过this.$store获取这个对象
    */
    
    //mapActions
        //如果映射方法,无论actions 和mutations 都会映射到methods里
        //如果映射属性,无论state还是getters 都会映射到computed里

    //4,核心概念
		//state          代表初始状态数据   
        //mutations      代表直接修改数据的数据 不能异步	
            //通过state.xxx修改数据
		//actions        代表用户行为数据  if for 异步
            //通过commit()提交给 mutations
            
            //通过this.$store.dispatch('actions的方法名',xx) xx可以使字符串,也可以是数组
            

        //getters	     通过state数据计算其他    	
		    //ps:只能通过mutations的方法去直接修改，也就是说要想写state数据必须通过mutations
		        //actions里面是用户操作的行为回调函数，它的内部可以写异步和判断
		        //mutations里面是直接修改数据的函数数据，它的内部不可以写异步和判断

                
            //mapActions([]) 解构到methods里
            //mapState([]) 结构到computed里

            // mapActions    在组件方法当中可以直接代替dispatch提交操作    映射获取到actions的方法
            // mapMutations  在组件方法当中可以直接代替commit更改数据      映射获取到mutations的方法
            // mapGetters    在computed当中可以获取根据state计算的数据     映射获取到getters的方法
            // mapState      在computed当中可以获取state当中的数据	    映射获取到state的属性

	
        	//...mapActions(['decrement','incrementIfOdd','incrementAsync']),  名字相同可以映射
        	//...mapActions({'increment':'iincrement'})  名字不同需要这样映射

//#endregion