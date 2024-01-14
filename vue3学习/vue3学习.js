ts
    1,ts安装
    // npm install -g typescript
    2,ts自动编译
    // tsc --init

新特性
    Composition(组合)API
    setup
        // ref 和reactive
        // computed 和watch
        // 新的生命周期函数
        // provide 与inject
    新组件
        Teleport -文档碎片
        Fragments -瞬移组件位置
        Suspense -异步加载组件的loading界面
    其他

1,setup(props,context) -初始化时启动,只启动1次,beforeCreate生命周期前执行
context-里面有attrs对象(props中没取出来的属性和方法),emit方法 slots插槽
    ref// 定义基本响应式,也可以声明对象,但修改是需要多一个.value
        ref(0)  
    reactive //定义多个响应式
        reactive({name:'小明',age:20})
    新增删除属性用reactive

    emit
    父 //@xxx=function(){}
    子 //子组件分发
        // @click=function(){
        //     context.emit('xxx','')
        // }
    watch
    watch(user,
        ({name,age})=>{
            name1.value =name + age
        },
        {
            immediate:true,
            deep:true
        }
        )
    // 监视多个数据,如果数据费响应式,使用()=>
    watch([()=>user.name,()=>user.age,name1],
    ()=>{
        console.log('222')
    })
    // 不需要配置immediate 默认监视
    watchEffect(()=>{
    name1.value = user.name + user.age
    })

声明周期
    beforeCreate(不用了)  --> setup()
    created(不用了)  --> setup()
    beforeMount  --> onBeforeMount()
    mounted  --> onMounted()
    beforeUpdate     --> onBeforeUpdate()
    updated  --> onUpdated()
    beforeDestroy(改名了beforeUnmount)    --> onBeforeDestroy()
    destroyed(改名了unmount)    --> onDestroyed()
    errorCaptured    --> onErrorCaptured()
    额外的钩子
    onRenderTracked
    onRenderTriggered

toRefs -把一个响应式对象转为普通对象,对象的每个property都是一个ref
    const a = reactive({name:'小明',age:20})
    const b = toRefs(a)