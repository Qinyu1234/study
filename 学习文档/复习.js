
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
//#endregion

35