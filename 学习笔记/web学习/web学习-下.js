/* 1,边框和渐变
1.边框圆角
        border-radius: 50px 50px 0px 0px;
                左上 左下 右下 右上
        border-radius: 50px 50px 0px;
                省略的话:会参考对角值
        border-radius: 50%;

        ps:半圆高度为一半即可
2.边框图片
        border-image-source: url("图片路径");
        边框图片优先级高于边框颜色
        告诉浏览器如何对指定图片惊醒切割 显示图片四个角70px
        border-image-slice: 70 70 70;
        边框宽度
        border-image-width:10px;

        边框拉伸 stretch拉伸 repeat round
        border-image-repeat: stretch;
        边框往外左上 右上 右下 左下移动10px
        border-image-outset:10px 10px 10px 10px ;

缩写
        border-image: 资源地址 切割方式 填充模式;

3.垂直对其 vertical-align
        vertical-align: bottom;
        基线baseline:文字最短的一个文字底部
        baseline
        top 顶部
        bottom 底部
        text-top 文字顶部
        text-bottom 文字底部
        middle 文字中线 文字中间扫尾往下1/4左右

4渐变
        1,线性渐变
                默认冲上往下渐变
                background: linear-gradient(red,green);
                background: linear-gradient(to top ,red,green);
                background: linear-gradient(to top right,red,green);
                background: linear-gradient(90deg,red,green);

                注意点:
                    至少两个颜色,没有上限
                background: linear-gradient(to top ,red,green,yellow);

                background: linear-gradient(to right,red 10px,green 190px,blue 290px);
                可手动制定纯色和渐变色范围:
                10 纯色red范围 190px red-green变色范围 290px green-blue变色范围 剩下的是纯色

        2,镜像渐变
                默认从中心向四周
                background: radial-gradient(red,black);
                从左上角
                at 制定位置,具体像素
                background: radial-gradient(at top left,red,black);
                background: radial-gradient(at 100px 100px,red,black);
                90px 渐变色范围 范围必须写到at前
                background: radial-gradient(90px at 100px 100px,red,black);

* */

/* 2,伸缩布局
父元素里
1,display:flex

2,默认情况水平是主轴,默认从主轴起点开始排版
        flex-direction:
        row:起点在伸缩容器最左边,重点在最右边 从左到右排版 默认取值
        row-reverse:从右到左排版
        column:从上往下
        column-reverse:从下往上
3,伸缩象
        1,主轴 对齐方式 justify-content:
        flex-start:主轴上伸缩象对齐的默认值
        flex-end:主轴上伸缩象从终点道起点对齐
        center:中间对齐
        space-between:两端对齐
        space-evenly:平均对齐
        space-around:环绕对其
2,侧轴 对齐方式 align-items:会使所有的伸缩象对齐
        flex-start 需要和侧轴起点对齐
        flex-end 终点对齐
        center 中点对齐
        baseline 基线对其
        stretch 拉伸对其 如果伸缩象设置高度,会失效
3,侧轴 对齐方式 align-self: center;:只控制某个伸缩象对齐
        flex-start flex-end center baseline stretch
ps:
        1换行:如果伸缩象>伸缩空间
                flex-wrap:
                换行对齐方式,只有换行后才生效
                nowrap 不换行 默认
                wrap 换不下换行 等比压缩
                wrap-reverse 换行反转

        2,换行对齐方式
                align-content:
                flex-start 起点对其
                flex-end:终点对齐
                center 中点对齐
                space-between 两端对齐
                space-around 环绕对齐
                space-evenly 平均对齐
                stretch 拉伸对其
                align-content:stretch;

子元素里:
1,排序
    order默认为0
2,伸缩象扩充 主轴方向的
    伸缩容器>伸缩象宽度时生效
        flex-grow:默认为0
    扩充规则
        ((伸缩容器宽度-所有伸缩象宽度)/扩充份数总和) 扩充份数
3,伸缩象缩小 主轴方向的
        flex-shrink: 0;
    0:不缩小
    控制一个伸缩象缩小默认 1 等比缩小

ps:伸缩基本宽度/高度
    没有宽度/高度时生效
    如果高度.宽度为auto,具体设置的生效
    flex-basis: 100px; auto

缩写
flex 扩充 缩小 基本宽度
flex:1 0 auto

* */

文档查询
mdn

补充属性

1,自适应填充
    object-fit: cover
    1,contain
        被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。
    2,cover
        被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。
    3,fill
        被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。
    4,none
        被替换的内容将保持其原有的尺寸。
    5scale-down
        内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。

2,响应式布局
    link rel="stylesheet" href="css/index.css" >
    <link rel="stylesheet" href="css/index-pad.css" media="screen and (max-width: 1199px)">
    <link rel="stylesheet" href="css/index-phone.css" media="screen and (max-width: 768px)">

3，站点3大优化
    1，title图标
        <link rel="shortcut icon" href="favicon.ico" type= "image/x-icon" />
    2，搜索关键字
        <meta name="keywords" content="苏宁易购网上商城,苏宁电器,Suning,手机,电脑,冰箱,洗衣机,相机,数码,家居用品,鞋帽,化妆品,母婴用品,图书,食品,正品行货"/>
    3，搜索描述
        <meta name="description" content="苏宁易购-综合网上购物平台，商品涵盖家电、手机、电脑、超市、母婴、服装、百货、海外购等品类。送货更准时、价格更超值、上新货更快，正品行货、全国联保、可门店自提，全网更低价，让您放心去喜欢！" />