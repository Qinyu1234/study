const { default: router } = require("@/router")

1,路由重复跳转错误
    相同参数&相同的路由,重复点击会提示
        //vue-router.esm.js:2066 Uncaught (in promise) NavigationDuplicated: 
            //Avoided redundant navigation to current location: "/search/asd?keyword=ASD".
        //this.$router.push(location,oncomplete?,onAbort?)
        this.$router.push(location).then(oncomplete).catch(onAbort)
2,路由中meta的使用
    // 1,routes路由里设置meta:{ xxx:true} 默认为flase
    // 2,需要隐藏的数据里添加v-show="!$route.meta.xxx"
3,前后台数据相互
    //npm i axios nprogress(进度条)
    1,axios.create //设置baseURL
    2,axios.interceptors.require.use() //设置拦截器
      axios.interceptors.response.use() //返回成功的response.data和失败的Promise.reject(error)
4,多模块数据管理
    state
    actions
    mutations
    getters
    modules //多模块
        cart.js     //购物车模块
        products.js //产品模块

    /* index中store数据总状态!!!
        {
            home:{
                categoryList:[]
            },
            user:{
                userInfo:[]
            },
            asd:'xxx'
        }
    */

5,多模块mapState
        mapState({
            funName:state => state.home.funName
        })
6,点击分类项跳转到搜索界面,携带分类id于分类名称
    //1,实现:使用声明式导航 router-link
        //问题:显示太慢 
        //原因:router-link太多了,产生了太多的组件对象
    //2,编程式导航代替声明是导航 $router.push("")
        //好处:现实的更快,因为不再残生router-link组件对象
        //缺点:每个分类都绑定了点击监听,数量太多了 ==> 能不能只绑定一个?
    //3,时间委托/委派/代理
        //给所有分类的父项绑定点击监听,通过event.target得到分类项
        //只用绑定一个点击监听了
        //问题:不知道点击的是那个分类项 data(标签的自定义属性)
            //:data-xxx="" 然后从event.target.dataset里取xxx的值
7,轮播
    //npm i swiper@5 vue-awesome-swiper
8,页面加载后执行
    //vm.$nextTick( [callback] )
    //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
    new Vue({
        methods: {
            example: function () {
                // 修改数据
                this.message = 'changed'
                // DOM 还没有更新
                this.$nextTick(function () {
                    // DOM 现在更新了
                    // `this` 绑定到当前实例
                    this.doSomethingElse()
                })
            }
        }
    })
9,mock接口
    不会发请求(浏览器中network没记录),被拦截了
10,search插件里
    //1,搜索条件
        //关键字搜索 keyword
        //分类搜索category1Id category2Id category3Id
    //2,初始化搜索
        //在created中搜集参数数据,并发请求
11,search代码优化
    //原因:
        // mounted 执行更新数据然后发请求
        // watch   更新数据法请求
    // 将之合并
        //watch:immediate:true 初始化后就立即执行1次
12,向响应式数据中心添加新属性
    //响应式数据:data/state
    //响应式数据对象:值为对象的响应式数据,响应式对象颞部的所有层次数据都是响应式:options / searchList

    向响应式添加新属性:
        非响应式
            //options.xxx = 'abc' 
            //delete options.xxx
        响应式
            // Vue.$set(this.options,'trademark',trademark) 添加
            // this.$set(this.options,propertyName/index,trademark) 添加

            // Vue.$delete(this.options,protyName/index) 删除
            // this.$delete(this.options,'trademark') 删除
13,自定义分页组件
    1,基本流程
        // 模板与样式 ---- 静态组件
        // 设计props:传入的可变数据
                // currentPage 当前页码
                // total 总页码
                // pageSize 每页的最大数量
                // showPageNo 最大联系页码数
        // 设计data:组件内部的可变数据
                //myCurrentPage 内部保存的当前页码数
        // 设计computed:给予props和data计算的数据
                //totalPages 总页码
                //start/end 连续页码的起始/结束
    2,

    //@setCurrentPage="setCurrentPage"
14,优先级 //v-if v-for
    //v-for>v-if
    //如果需要对数组的每一项来判断的 ==> 提前定义计算属性
15,组件间通讯
    //6种
        props
        自定义事件
        全局事件总线
        插槽
        Vuex
16,三种鼠标位置
    1,clientX/clientY
        cilentWidth
        cilentHeight
        盒子-内容+padding宽/高
    2,pageX/pageY
    3,offsetX/offsetY
        offsetWidth
        offsetHeight
        盒子-内容+padding+border的宽/高
        offsetLeft
        offsetTop
        元素偏移量-可以认为是决对定位left/top值
17,跳转传参
    1,如果是简单数据
        路由传参
    2,复杂数据,考虑存储手段
        //localStoreage setItem getItem removeItem clear
        //sessionStoreage setItem getItem removeItem clear
            //localStoreage是永久储存
            //sessionStoreage是临时数组,浏览器关闭就没了
    mapGetters :computed
    mapActions :methods
    mapState   :mounted  
18,Promise.all
    是一个方法(函数)
    //参数:一个promise对象的数组
    //返回值:一个新的promise对象
    //新的promise对象的状态是成功还是失败
        //如果promise对象的数组中有一个是失败,那么状态就是失败,原因就是第一个失败的promise的原因
        //如果promise对象的数组中没有一个是失败,那么状态就是成功,成功结果就是所有promise成功的结果组成的数组
19,target="_blank"
    跳转新页面的标签属性
20,导航守卫
    任意路由
        全局前置守卫
            router.beforeEach((to, from, next) => {
                if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
                // 如果用户未能验证身份，则 `next` 会被调用两次

                //to:即将进入的路由目标对象
                //from当前导航正要离开的路由
                //next() 
                    //没有参数,放行 
                    //next(false) 不放行
                    //next('/') 或 next({path:'/'})跳转到一个不通的地址,当前导航被中断,然后进行一个新的导航
                next()
            })
        全局解析守卫(基本不用)
        全局后置守卫(基本不用)
        //导航守卫里设置
        router.beforeEach((to, from, next) => {
            this.$router.push('login?redirect='+to.patch)
            next()
        })
        //login里跳转
        let redirect = this.$route.query.redirect  || '/'
        this.$router.push(redirect)

    路由独享守卫
        路由内:
        beforeEnter((to, from, next) => {
            let token = store.state.user.token
            if(token){
                next('/')
            }else{
                next()
            }
        })
21,滚动行为 //跳转到页面的位置    
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
    }
21,自动登录
    登录返回的是token,但用户信息还没有
    自动登录,是不需要请求,根据登录后的token信息,自动获取用户信息,就可以展示
    token校验,还可以验证token是不是过期
22,重定向路由
    //第一种
    children:[
        {
            path:'',
            redirect:'myorder',
        }
    ]
    //第二种
    redirect:'/center/myorder',
23,路由类设置
    //router-link-active 被点击的数据
24,图片懒加载
    //1,安装 npm install vue-lazyload
    //2,引入并配置 
        //import VueLazyload from 'vue-lazyload'
        // 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
        //Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
        //    loading,  // 指定未加载得到图片之前的loading图片
        //})
    //3,使用
        //<img v-lazy="goods.defaultImg" />
25,路由懒加载
    //import from 是同步引入的
    //不能动态引入
    //他是把所有的组件全部引入完成才加载下面代码,webpack打包时会吧所有引入打包一起成为一个大的文件
    //比较慢

    //import函数可以让路有组件单独打包 还可以动态引入
    const Home = ()=>import('../pages/Home')
    当路由被访问是,上面的函数才会被调用
26,表单验证插件vee-validate @2.2.15
    //1,安装引入
        //vee-validate @2.2.15 

        // import Vue from 'vue'
        // import VeeValidate from 'vee-validate'
        // Vue.use(VeeValidate)
    //2,基本使用
    <input 
        v-validate="{required:true,regex:/^1\d{10}$/}"
        :class="{invalid:error.has('phone')}"
    >
    <span class="error-msg">{{error.first('phone')}}</span>


方法,
    startsWith //字符串是否已xxx开始
    let Str = "www.runoob.com"
    Str.startsWith("www") //true


问题:
    1,Object.xxx报错,但数据样式完整显示
        //使用v-if处理一下
    2,搜索页面添加别的搜索条件,不会再发请求
        //原因,从搜索跳转到搜索,搜索组件对象不会重新创建,初始化的狗子不会重新发执行=> 不再发请求
        //解决,监视路由参数的变化 watch:$store
    3,删除分类数据和关键字条件,地址栏还有参数数据
        //原因:删除时没有去处路径上的参数数据
        //解决,重新跳转到当前search,不再携带删除的条件对应的参数
    4,叉掉参数,搜索框中还有搜索信息
        //解决,使用全局事件总线,叉掉参数时,删除搜索信息
            //main里面全局绑定 beforeCreate(){Vue.prototype.$bus = this }
            //this.$bus.$emit('xxx')
            //this.$bus.$on('xxx',()={ sss = ''})
        //注意,绑定后需要在Header组件销毁之前解绑事件监听beforeDestory
    5,减少没必要的请求参数
        //在发请求前(异步action中)删除空的参数

//#region git网页打开太慢
    // #speed up git
    // 140.82.113.3 github.com
    // 199.232.69.194 github.global-ssl.fastly.Net
    // 195.199.108.153 assets-cdn.github.com
//#endregion

//#region 项目结构
        -public
            --css
            --images
            --indexe
        -src
            --components
                --Headers.vue
                --Footer.vue
                --TypeNav.vue
            --pages
            --api
            --store
            --router
            --app.vue
            --main.js
    //#endregion


