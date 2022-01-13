/*
HTML
1.h标签 标题 h1-h6
    <h1>this is h1 flag</h1>
2.img标签 图片
    <img src="" title="图面描述" alt="缺图片时显示信息">
3.a标签  超链接
    <a onMouseOver = "" href = "跳转地址" >显示< /a>
    target="_blank"打开新页面
4.列表
    a,无序列表(掌握)
        < ul >
            < li > < /li>
        </ul>
    b,有序列表(熟悉)
        < ol >
            < li > < /li>
        </ol>
    c,自定义列表
        <dl>
            <dt></dt>
            <dd></dd>
        </dl>
5,表格
    <table>
        <caption>表格标题</caption>
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>

    colspan="6" 左右合并
    rowspan="2" 上下合并
6,表单
    <form>
        < input type = "text" / >
         input type:
             text文字;number数字;password密码;date日期;button按钮;radio圆点;
             checkbox方形选择框;email邮箱;submit提交;reset清空

        < textarea name = "" id = "" cols = "30" rows = "10" > < /textarea>

        <select name="" id="">
            <optground>
                <option value=""></option>
            </optground label="组名">
            <option value=""></option>
        </select>

        <input list="cars">
        <datalist id="cars">
            <option >123</option>
        </datalist>

        <label htmlFor="pas">密码</label>
        <input id="pas" type="password"><br>
    </form>
7,video 视频
    muted:静音 autoPlay:自动播放 controls控制条 poster播放前显示的图片 loop:轮询 preload:预加载
    <video src="" muted="muted" autoPlay="autoplay" controls="controls" poster="图片.png" loop="loop"
                   preload="auto"></video>
    <video >
        <source src=""/>
    </video>
8,audio 音频
            <audio src=""></audio>
9,summary详情标签
    <details>
        <summary >概要信息</summary>
        详情信息
    </details>
10,marquee 跑马灯
    <marquee behavior="" direction="" scrollamount=""></marquee>

    direction:left right up down
    scorllamount: 滚动速度
    loop="1":滚动次数,默认-1

    behavior:slide 滚动边缘不动; alternate 滚动到边缘弹回

11,实体字符 html中对空格/回车/tab不敏感,需要添加字符实体
    &nbsp;空格
    &lt;小于
    &gt;大于
*/


CSS
/* 1.文本
1.文字
    font-style
    font-weight
    font-size
    font-family
2.文本属性
    text-decoration:normal;
    text-align:left;
    text-indent: 2em;
3.文本颜色
    color:red;
*/

/* 2.选择器
选择器:
1.子元素选择器
    aa>bb
2.后代选择器
    aa bb
3.交集选择器
    aabb
4.并集选择器
    aa,bb
5.兄弟选择器
    aa+bb   aa紧跟其后的bb标签会被选中
    aa~bb   aa同级别的bb标签都会被选中
6.序选择器
    同标签:
        first_child
        last_child
        nth_child() 数字 odd奇数 even偶数 2n+0
        nth_last_child()    数字
        only_child  选中父标签中唯一的一个
    同级别:
        first_of_type
        last_of_type
        nth_of_type() 数字 odd奇数 even偶数 2n+0
        nth_last_of_type() 数字
        only_of_type    只有该类
7.属性选择器
        p[attribute]
    是否有此属性/次属性为value时选中:
        [attribute]    [attribute = value]
    属性以xxx开头时被选中
        [attribute!=xxx] <p id = "xxx-"></p> 固定为此
        [attribute^=xxx] <p id = "xxxsfdg"></p>
    属性以xxx结尾时被选中
        [attribute$=xxx] <p id = "sfdgxxx"></p>
    属性中有xxx时被选中
        [attribute~=xxx] <p id = "sfxxxdg"></p>
8.通配选择器
    *
9.优先性
    1,直接选中>间接选中
    2,间接选中:
        谁离被选中的标签近谁生效
    3,直接选中:
        id选择器>class选择器>标签选择器>通配选择器>继承选择器>浏览器选择器
    3,直接选中:
        权限提示!important
    4,权重
        id>类>标签>谁写在后面谁生效
        id一样多,那就看哪个里面类多,类多的生效
*/

/* 3.CSS显示模式
1.div+span
    1.div 容器级的标签 可嵌套所有标签
    2.span 文本级的标签 只能嵌套文字/超链接/图片
2.行内 块级模式
    display取值:
        inline 行内
    block 块级
    inline-block 行内块级
3.标签背景颜色
    1.平铺能解决浏览器打开的速度
    background-color
    background-image:url()
    background-size:cover; 图片填满父元素
    background-repeat:no-repeat;不平铺no-repeat

    2.图片覆盖颜色
    定位:background-position:水平方向 垂直方向;
        水平方向:left center right 100px
        垂直方向:top center bottom 100px

    3.background:背景颜色 图片 平铺 关联方式 定位
    关联方式:默认会随着滚动条滚动而滚动 scroll默认
    background-attachment:fixed,不移动


    4.精灵图
        1,什么事精灵球:
            CSS精灵球事一种图像合成技术
        2.CSS精灵球作用
            用于减少服务器被请求次数
        3.如何使用
            需要配合背景图片和定位使用
            精准设置div,然后根据定位显示一张图片的特定位置

*/

/* 4.CSS盒模型
1,边框属性
    1,连写
        border:1px solid blue
        border:边框宽度,边框样式,边框颜色
    2,分开写
        border-top:边框宽度,边框样式,边框颜色
        border-buttom:边框宽度,边框样式,边框颜色
        border-left:边框宽度,边框样式,边框颜色
        border-right:边框宽度,边框样式,边框颜色
    3,连写
        border-style:上 右 下 左 solide(实线)等
        border-width:上 右 下 左
        border-color:上 右 下 左
    4,省略:
        上 右 下 左 > 上 右 下    左右一致
        上 右 下 左 > 上 右 左右一致 上下一致
        上 右 下 左 > 上 所有一致
    5, 分开
         border-top-width等等...
2,内边框
    padding-top:
    padding-right:
    padding-bottom:
    padding-left:

    缩写
    padding:上 右 下 左
3,外边距
    margin-top:
    margin-right:
    margin-bottom:
    margin-left:

    margin:上 右 下 左

    省略:
    上 右 下 左 > 上 右 下    左右一致
    上 右 下 左 > 上 右 左右一致 上下一致
    上 右 下 左 > 上 所有一致
    左右方向上会合并
    垂直方向上,默认情况下外边距不会合并,会覆盖掉
4.盒子模型
    a,html中,所有标签都可以设置宽度,高度,外边距.内边距,边框
        现实生活中的盒子:
        每个盒子都有存储内容的区域-->都可以存储东西
        每个盒子都有填充物->避免磕磕碰碰
        每个盒子都有间隙->通风防潮

    b,CSS3中新增的保证给盒子新增padding/border之后,盒子元素的高和宽不变
        box-sizeing:border-box
    padding时,存在的盒子需要有边框

5.行高:line-height: 50px;
    一行居中:经常讲盒子和行高设置为一致
    多行居中:用padding + box-sizeing:border-box
*/

/* 5.CSS浮动&清除浮动
CSS 浮动
1.可以使行内左右对其
    float: left;
    浮动中不能使用margin:0 auto;
    浮动流能给行内级设置宽高
2.浮动规则
    1.相同方向上的浮动,先浮动的元素会显示在前面,后浮动的显示在后面
    2.不同方向上的浮动元素,左浮动会找左浮动,右浮动会找右浮动
    3.浮动元素浮动之后的位置,由浮动元素浮动前在标准流中的位置决定

CSS 清除浮动
1,标准流中内容高度可以撑起父元素的高度
2,浮动流中浮动元素不可以撑起父元素的高度
 方式:
    1 给父元素设置高度,企业中基本不用
    2 clear: both;
        both:当前浮动元素不要找前面浮动元素
        margin会自动失效
    3 隔墙法 div
        外墙法 设置墙的高度 设置clear:both
            只能让墙下面设置margin-top
            墙上面的不能设置margin-bottom
        内墙法 设置墙的高度
            设置在第一个盒子所有子元素后面,设置高度,clear:both
            能让墙下面设置margin-top
            能让墙上面设置margin-bottom
    4 企业中不常用隔墙法清除浮动
    5 伪元素法 企业中常用 div:after(css2兼容性好一点,h5中最好用::after)
        div::after{
            content:"";
            display:block;
            height:0;
            visibility:hidden;
            clear:both;
        }
        为了兼容ie6
        .box1{
            *zoom:1;
        }

      伪元素选择器
        div::before{
            content: "爱你";
            display: block;
            width: 50px;
            height: 50px;
            background: darkgray;
        }
        div::after{
            content: "么么哒";
            display: block;
            width: 50px;
            height: 50px;
            background: darkgray;
        }
       6 overflow:hidden
         *zoom:1;
        ps:都需要在上面的浮动div里加
        可以通过overflow让嵌套的里面盒子使用margin-top,外面盒子不被顶下来
*/

/* 6.CSS定位

定位流分类 一般为 子绝父相
1.相对定位  需要设置的盒子为块级 用于微调
    移动的盒子写这些
    position: relative;
    top: 20px;
    left: 20px;
2.绝对定位 相对于body定位
    position: absolute;
    top: 20px;
    left: 20px;

    参考点:
    1.默认情况下,不管有没有祖先元素,都以body为参考点
    2.如果一个绝对定位的元素有祖先元素,并且祖先元素也是定位流,那将以祖先元素为参考点
    3.除了静态定位,其他都可以
    ps:1,如果一个决定定位的元素以body为参考点,那就是以首页的长宽为参考点,而不是整个网页
       2,决定定位会忽略祖先元素的padding
3.固定定位 不支持ie6
    position:fixed;
4.静态定位
5.z-index属性 对于定位流来说的
    默认情况下所有元素都有z-index属性,取值为0
    z-index就是为了处理覆盖关系的
    默认后面覆盖前面的
    ps:从父现象
        a,如果两个元素的父元素都没有设置z-index属性,那么谁的
          z-index属性打谁就显示在上面
        b,如果两个元素的父元素设置了z-index属性,name子元素的
          z-index属性就会失效,也就是说谁的父元素z-index大谁生效


*/

/* 7.a标签的伪类选择器 a:link{color: red;}

    link:修改冲未被访问过状态下的样式(测试未生效)
    visited:修改被访问过的状态样式
        上面两个简写a{color:red}
    hover:修改鼠标悬停在a标签上的状态
    active:修改鼠标长按下的样式
    */

/* 8.过渡模块
1.必须有属性发生变化
    div:hover
2.必须告诉系统哪个属性发生变化
    transition-property: width,background-color;
3,必须告诉系统执行时间
    transition-duration: 5s,6s;

ps:非必须属性
4,告诉系统延迟多少秒发生变化
    transition-delay: 2s;
5,告诉系统过度动画的运动速度
    transition-timing-function: linear;
    linear匀速
    ease逐渐慢
    ease-in加速
    ease-out减速
    ease-int-out先加后减
6,缩写 过渡属性 过渡市场 运动速度 延迟时间
transition:width 5s linear 0s,background 6s ease 0s;
 */

/* 9.2D转换
    1,transform: rotate(45deg) translate(40px,50px) scale(1,0.5);
        旋转多少度 平移 缩放
        ps:旋转方向 rotateX rotateY rotateZ    transform:none

    2,旋转参考点
    transform-origin: 100px 200px;
         具体像素 百分比 left center right top bottom

    3,透视 透视距离 添加到父元素里
    perspective:100px;
    4,阴影
        1,给盒子添加阴影 默认外阴影
        box-shadow: 10px 10px 10px 10px black inset;
        水平偏移 垂直偏移 模糊度 阴影扩展 阴影颜色 内外阴影
        缩写:box-shadow: 10px 10px 10px 水平偏移 垂直偏移 模糊度
    2,text-shadow:10px 10px 10px black
    水平偏移 垂直偏移 模糊度 阴影颜色
    3,opacity 透明度

技巧:
水平居中 left50% transform:translateX(-50%)
垂直居中 top50% transform:translateY(-50%)

ps 给行内元素设置无效，必须是块级或行内块级
*/

/* 10.动画
3要素
    1.animation-name:xxx;
    2.@keyframes{from{}to{}}
    3.animation-duration:3s
ps:其他属性
4.animation-delay 延迟
5.animation-timeing-function:
    linear匀速
    ease逐渐慢
    ease-in加速
    ease-out减速
    ease-int-out先加后减
6.animation-iteration-count 执行几次 infinite无限
7.animation-direction:alternate 往返 normal 执行完后从起点继续
8.animation-play-state:running(动画运动) paused(动画暂停)
    创建动画的其他方式
@keyframes{0%{}1%{}...}
9.animation-file-mode
    作用:指定动画等待状态和结束状态的样式
    none 不做任何改变
    forwards 让元素结束状态的时候保持动画最后一帧样式
    backwards 让元素等待状态的时候显示动画第一帧样式
    both 上面两个合

缩写 animation:动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画
*/

/* 11.背景尺寸
    1,backgroun-size:
    具体像素 百分比 宽/高度等比拉伸:auto  cover contain
   2,多重背景
    background:url("1.png") no-repeat left top,url("2.png")no-repeat right top
或者:
    background-image:url("1.png"),url("2.png");
    background-repeat:no-repeat,no-repeat;
    background-position:left top,right top;


* */

ps:<link rel="stylesheet" href="css的路径"> 主要使用
    <style>
        @import "css路径地址";
    </style>