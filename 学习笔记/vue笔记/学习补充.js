//对象:转数组
	
//#region  数组方法
    concat()	//ES5-	合并数组，并返回合并之后的数据	n
    join()	    //ES5-	使用分隔符，将数组转为字符串并返回	n
    pop()	    //ES5-	删除最后一位，并返回删除的数据	y
    shift()	    //ES5-	删除第一位，并返回删除的数据	y
    unshift()	//ES5-	在第一位新增一或多个数据，返回长度	y
    push()	    //ES5-	在最后一位新增一或多个数据，返回长度	y
    reverse()	//ES5-	反转数组，返回结果	y
    slice()	    //ES5-	截取指定位置的数组，并返回	n
    sort()	    //ES5-	排序（字符规则），返回结果	y
    splice()	//ES5-	删除指定位置，并替换，返回删除的数据	y
    toString()	//ES5-	直接转为字符串，并返回	n
    valueOf()	//ES5-	返回数组对象的原始值	n
    indexOf()	//ES5	查询并返回数据的索引	n
    lastIndexOf()	//ES5	反向查询并返回数据的索引	n
    forEach()	//ES5	参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，分别为value，index，self；forEach没有返回值	n
    map()	    //ES5	同forEach，同时回调函数返回数据，组成新数组由map返回	n
    filter()	//ES5	同forEach，同时回调函数返回布尔值，为true的数据组成新数组由filter返回	n
    every()	    //ES5	同forEach，同时回调函数返回布尔值，全部为true，由every返回true	n
    some()	    //ES5	同forEach，同时回调函数返回布尔值，只要由一个为true，由some返回true	n
    reduce()	//ES5	归并，同forEach，迭代数组的所有项，并构建一个最终值，由reduce返回	n
    find()      //返回符合条件的项
    //功能:统计,返回数字或其他类型
    //参数:回调函数(prev:上一次统计结果 item index arr) 统计的初始值(从多少开始)
    //返回:统计的结果
        //return this.todos.reduce((prev,item,index,arr)=>{
            return this.todos.reduce((prev,item)=>{
                if(item.isClick){
                prev +=1
                }
                return prev
                //暗含遍历会拿数组每一项执行回调
                //第一次执行回调的时候,prev就是是你给的初始值
                //第一次执行完回调函数后会返回preve值,返回给第二次执行时候的初始值
                //最后一次执行完,prev作为整个reduce的返回值
            },0)
    reduceRight()
    a.includes(b) //a数组里是否包含b
//#endregion

//instanceof  (arr instanceof Array)true
//typeof

//#region new
    1,开辟空间
    2,this指向空间
    3,执行代码,给空间赋值
    4,返回对象
//#endregion

//async await 使用同步代码实现异步效果
    //async函数代表这是一个异步函数,async返回是一个promise
    //async函数返回promise成功还是失败看return返回的值
        //返回非promise 成功 结果就是return结果
        //返回的是成功的promise,代表async返回是成功的promise 结果即promise的结果
        //返回的是失败的promise,代表async返回是失败的promise 结果即promise的结果
        //如果throw出错,代表async返回是失败的promise 结果为promise失败原因

//#region 跨域 cors(后端) JSONP(前后端配合) 配置代理服务器代理(前端)[后面学完webpack后在学]
	//1、浏览器上的同源策略
    //特点：
		//1、跨域只存在于浏览器
		//2、不在浏览器发请求是不会存在跨域问题的
		//3、http请求分为两大类： 普通http请求和ajax请求（跨域是出现在ajax请求）
            //普通请求和ajax请求区别 
                //普通请求  一般只有get（a标签和地址栏输入回车）和 post(form表单)  页面会刷新  不会跨域
                //ajax请求  一般 get  post  delete  put  一般都是异步发送的  页面不刷新  局部更新
	
	//2、在什么地方会出现跨域    
		//浏览器给服务器发ajax请求会跨域 因为跨域（同源策略）只存在于浏览器
		//服务器给服务器发ajax请求不会

	//3、什么条件会跨域   
		//同源（协议  ip  端口一致）不跨域  
		//不同源就跨域（三个中间有一个不一样就跨域）	

	//4、解决跨域：前端可以解决、后端解决。一般后端解决比前端解决容易
//#endregion

dblclick 双击事件

