//#region 脚手架
    //创建脚手架4/3       的vue项目, 并运行
        //npm install -g @vue/cli    安装脚手架4/3的版本
        //vue create vue-demo        使用安装的脚手架创建一个新的vue项目
        //npm run serve              运行创建的项目命令
//#endregion

//#region Vuex
    import Vuex from 'vuex'
    import Vue from 'vue'
    Vue.use(Vuex)
    export default new Vuex.Store({
        state:{},
        mutations:{},
        actions:{},
        getters:{},
        modules:{
            home,
            xxx
        }
    })
//#endregion

//#region 路由store
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)
    export default new VueRouter({
        mode:'history',
        routes
    })

    this.$router.push({
        name:'',
        query:`/search/${this.keyword}`
    })
//#endregion

//#region  生命周期钩子
    // 生命周期钩子
        beforeMount		//vm挂载前	dom未挂载
        //用的最多,发ajax请求获取数据/开启定时器/添加一些时间
        mounted			//vm挂载后	dom已经挂载	
            // mounted(){ this.$store.dispatch('xx') }
            //$this.$bus.$on()
        beforeDestroy	//销毁前

    //计算
        computed
            //...mapState
            //...mapGetters
        watch

    // 其他生命周期钩子
        // beforeCreate	//初始化前	数据未形成
        // created			//初始化后	数据形成了
        // //vm数据已经更新,页面还未更新
        // beforeUpdate	//页面渲染前 不是vm数据
        // updated			//页面渲染后 不是vm数据
        // destroyed		//销毁后
//#endregion

//#region 其他
    //自定义字段 :data-aa = "ss.aa"
    :data-aa = "ss"
        取数据
        const {aa} = event.target.dataset

    props //自定义事件 使用的是@
        //父组件 
            @ss = "aa"
            aa(asd){}
        //子组件
            $emit("ss",'asd')
        $bus.$on('xx',callback) 绑定在mounted()

    数据监控
        // watch:{
        //     $route:{
        //         handler(){
        //             监控处理
        //         }
        //     }
        // }
        
    获取节点值
        $event.target.value
//#endregion