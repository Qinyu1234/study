canvas //h5新标签,可以通过js在这个标签上绘制图案

sass
1,结尾
    区别
    .sass 以缩进代替{}表示层级结构,语句后面不用编写分号
    .scss 以{}表示层级结构,语句后面需要编写分号(推荐)
混合ps
// @mixin center
//     position:absolute
//     left:50%
//     top:50%
//     transform:TransformStreamDefaultController(-50%,-50%)
cssps
// 变量
// $w:200px
// $h:300px

// .father
//     width:$w
//     height:$h
//     background:red
//     @include center
//     .son
//         width:300px
//         height:300px
//         background:blue
//         @include center

变量
    // less变量@变量名称:值
    // scss变量$变量名称:值
    
    1,后定义覆盖先定义
    2,可以把变量赋值给其他变量
    3,区分全局变量和局部变量(访问采用就近原则)
    
    注意点
    less变量是延迟加载,可以先使用后定义
    sass中变量不是延迟加载,不可以先使用后定义

变量插值
    属性取值可以直接使用变量
    属性名称/选择器不能直接使用变量,必须使用变量差值的格式
    //less变量插值${变量名称}
    //sass变量插值#{$变量名称}

混合
    less混合
        定义 .混合名称{} /.混合名称(){}
        调用 .混合名称  /.混合名称()
    sass混合
        定义 @mixin 混合名称{} /@mixin 混合名称(){}
        调用 @include 混合名称 /@include 混合名称()

sass的可变参数
    // 跟less一样,只是由于sass不是使用js实现的,所有不能直接在混合中使用arguments
    // 必须通过$args...的格式定义可变参数,然后通过$args来使用

    // 注意 可变参数必须写在形参的最后面
    ps
    // @mixin animate($name,$time,$mode,$delay){
    //     transition:$name $time $mode $delay
    // }
    // @mixin animate($name,$time,$args...){
    //     transition:$name $time $args
    // }
导入
import 'xxx.xxx'
内置函数&自定义函数
    内置函数,查api

    自定义函数
        定义
        // @function square($num){
        //     @return $num*$num + px
        // }
        使用
        width:square(2)

层级结构
    和less一样支持嵌套,默认情况下嵌套结构会转换成后代选择器
    和less一样支持通过&符号不转换成后代选择器
    // .father{
    //     width:300px
    //     &:hover{}
    // }

继承
//$mixin center(){}
// .center{}
// .father{
//     //@include center
//     @extend .center
//     .son{
//         @extend .center
//         //@include center
//     }
// }

判断条件
    和less一样支持条件判断,不过sass中条件判断支持的更为彻底

    // sass中支持
    // @if(条件语句){}
    // @else if(条件语句){}
    // ... ...
    // @else(条件语句){}
    // sass中当条件不为false或者null是会执行{}中的代码

// @mixin triangle($dir,$width,$color){
//     width:0;
//     height:0;
//     border-width:$width;
//     border-style:solid solid solid solid;
    
//     @if($dir == Up){
//         border-color:transparent transparent $color transparent;
//     }@else if(dir ==Drwn){
//         border-color:$color transparent transparent transparent;
//     }@else if(dir ==Left){
//         border-color:transparent $color transparent transparent;
//     }@else if(dir ==Right){
//         border-color:transparent transparent transparent $color;
//     }
// }
// div{
//     @include triangle(Up,50px,blue)
// }

循环
    1,for循环
    //     @for $i from 其实整数 through 结束整数{}
    //     @for $i from 其实整数 to 结束整数{}
    //     区别 through包头包尾 to包头不包尾
    //         li{
    //             // &:nth-child(5){}
    //             // &:nth-child(6){}
    //             // &:nth-child(7){}
    //             @for $i from 5 through 7{
    //             @for $i from 5 to 8{
    //                 &:nth-child(#{$i}){}
    //             }
    //         }
    2,while循环
    // @while(条件语句){}
    //     $i:5
    //     @while($i <= 8){
    //         &:nth-child(#{$i}){}
    //     $i:$i+1
    //     }