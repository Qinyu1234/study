const { repeat } = require("core-js/core/string")

//#region html
    header
        meta:charset
        meta:Keywords
        meta:description
    常用标签
        h1-h6
        hr  //水平线标签
        p   //段落标签
        br  /换行标签
        b(strong)   //加粗
        i(em)       //倾斜
        u(ins)      //下划线
        s(del)      //删除线
        img //图片 src title alt 
        a //超链接 herf target(是否新开一个网页) 
            //空连接 一个#返回顶部 通常写##
            //锚点连接 href='#one' <p id='one'>
        ul>li   //无序列表
        ol>li   //有序列表
        dl>dt   //自定义列表
        table   //表格 border cellspacing(单元格于单元格之间的间距) align:left/center/right
            tr //行
            td //列标签
            th //表头
            caption //表格标题 
                //colspan(跨列合并单元格) rowspan(跨行合并单元格)
        form    //表单 action提交地址   method提交方式(get/post)
            label   //标题 for(关联表单中的id)
            input   //type:text/password/button/submit/reset(重置按钮)
                        //radio(单选按钮 name:多个一样就是组,单选 checked(默认选中)
                        //checkbox复选框 checked(默认选中)
            select      //下拉菜单 
                option  //下拉项 selected默认选中
                optgroup    //下拉组 label下拉组标签 
            textarea    //文本域   <textarea></textarea>
        button  //按钮 type:button/sumbmit/reset(重置)
//#endregion

//#region css
    文本属性
        color   //字体颜色 red
        font-size   //字体大小 60px
        font-family //字形  :宋体/...
        text-align  //字体类型 :center/left/right
        font-weight //加粗 :bold/normal/800/...
        text-indent //首航缩进 :2em
        text-decoration //文本描装饰 underline(下划线)/overline(顶划线)/line-through(中划线)/none
        font-style  //设置倾斜  italic(倾斜)/normal
        line-height //行高  可以是10px,也可以是1(倍数)
        font    //是否倾斜 是否加粗 字号(必填项)/行高 字体(必填项) 单向和复合项同时存在是,要先写复合项
    边框属性
        border  //粗细 样式 颜色 5px solid red
        border-left/top/right/bottom    //边框没有none
    背景
        background-color    
        background-image  //url()   repeat平铺(默认)/repeat-x/repeat-y/no-repeat
        background-repeat    //no-repeat
        background-postion  //100px 0px
        background  //背景色 背景图 平铺方式 水平位置 垂直位置 yellow url() no-repeat 10px 10px
    设置颜色
        color   //blue/rgb(255,255,255)/#FF0000
    盒子基本属性
        width/height/background
    显示模式
        块元素    
            html/body/div/h1-h6/p/ul/li/dl/dt/dd/hr/form
        行内元素
            span/a/b/strong/i/em/u/ins/s/del(加粗/倾斜/下划线/删除)
        行内块元素
            img/表单标签
    float   //浮动
        //影响:1父元素美誉宽高,子元素浮动,父元素坍塌
        
    选择器
        标签选择器  //标签名{}  span{}
        类选择器    //.类名{}
        多类名调用  //calss='blue font150 abc xxx' 
        后代选择器  // .aa #bb h1{}
        并集选择器  //.box span,.box p,.box .one{} 多个选择器逗号隔开,实现共同属性
        一级后代选择器  //.box>ul>li 
        交集选择器  // i.box.class1.class2 同时具备是i标签,类名有box & class1 & class2

        权重    //!important > 行内样式 > id选择器 > 类选择器 > 标签选择器
        块元素的默认面积组成    //margin + border + padding + content
    状态伪类
        未访问状态 //a:link{}
        访问后状态 //a:visited{}
        鼠标移入状态 //a:hover{}
        鼠标按下(触发状态) //a:active{}
    
//#endregion

//#region 
    盒子模型    //盒子在网页中的尺寸 = content(设置的宽高) + padding区域 + border区域
        padding //内边距   上/右/下/左(4个属性) 上/左右/下(3个属性) 上下/左右(2个属性) 上右下左(1个值)
            padding-left/top/right/botom
            padding减宽度   //块元素没有固定宽度:不会撑宽盒子,会从content减去padding值,宽度不变
                            //块元素有固定宽度:盒子尺寸会变大
        margin  //外边距    上/右/下/左(4个属性) 上/左右/下(3个属性) 上下/左右(2个属性) 上右下左(1个值)
            margin-left/top/right/botom
            外边距合并  //上面盒子设置的下边距 和 下面盒子设置的上边距会合并
            外边距坍塌  //嵌套的连个块元素,子元素设置向上的外边距,父元素会跟着掉下来
                //解决方案:1给父元素设置上边框 2.给父元素设置overflow属性 3.给父元素设置浮动 4.给子元素设置浮动
            块元素水平居中
                //水平居中 margin:0 auto
        overflow //溢出属性    hidden(溢出隐藏)/scroll(溢出滚动)/auto(溢出滚动)
            overflow-x/overflow-y
        底部留白 //img
            //解决方案:1件img转为块元素,display:block 2将box字体设置为0
    




//#endregion