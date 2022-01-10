//#region 移动端事件
    touchstart  //元素上触摸开始时触发
    touchmove   //元素上触摸移动时触发
    touchend    //手指从元素上离开时触发
    touchcancel //触摸被打断时触发

    touches         //屏幕上的触点数
    targetTouches   //当前元素上的触点数
    changedTouches  //同时按下几个手指

    demo.addEventListener('touchend',()=>{
    })
//#endregion
    touch&click
    移动端开启理想视口,click触发比touch晚50-80毫秒
    不开启,晚0.3秒


解决穿透方案
    问题:a标签上方有个遮罩层,点击遮罩层触发点击穿透
    1,preventDefault() //取消默认事件
    demo.addEventListener('touchstart',(event)=>{
        event.preventDefault()
    })
    2,将a改成div,给div绑定touchstart 
    divObj.addEventListener('touchstart',(event)=>{
        location.href="www.baidu.com"
    })
    
    3,css里面设置,让元素暂时失去点击事件,然后300毫秒后重新设置 
        //pointer-events:none
        demo.style.pointerEvents = 'none'
        demo.style.pointerEvents = 'auto'
    4,让遮罩层300毫秒后再隐藏