//获取食物,随机生成一个食物的位置
var food=document.getElementById('food');
var numx=Math.round(Math.random()*29);
var numy=Math.round(Math.random()*29);
food.style.left =numx*10+'px';
food.style.top=numy*10+'px';
//console.log(food.style.left,food.style.top);
//获取蛇头
var snakeHead=document.querySelector('.snake-head');
//获取蛇
var snake=document.getElementById('snake');
//获取蛇中div列表
var snakeDiv=document.querySelectorAll('#snake div');
for (let i=1;i<snakeDiv.length;i++){
    snakeDiv[i].offsetTop=snakeHead.offsetTop-10*i+'px';
    snakeDiv[i].offsetLeft=snakeHead.offsetLeft-10*i+'px';
}
//创建一个div
var div=document.createElement('div');
//创建一个变量  记录移动
var str=null;
setInterval(function (event) {
    switch (str) {
        //向上
        case 'ArrowUp':
        case 'Up':
            snakeHead.style.top=snakeHead.offsetTop-10+'px';
            break;
            //向下
        case 'ArrowDown':
        case 'Down':
            snakeHead.style.top=snakeHead.offsetTop+10+'px';
            break;
        case 'ArrowLeft':
        case 'Left':
            //向左
            snakeHead.style.left=snakeHead.offsetLeft-10+'px';
            break;
        case 'ArrowRight':
        case 'Right':
            //向右
            snakeHead.style.left=snakeHead.offsetLeft+10+'px';
            break;
    }
    //判断蛇是否吃到食物  如果蛇头的坐标与食物的坐标重合  证明吃到食物
//获取蛇头的坐标
    //创建一个变量  记录吃到食物的次数
    var cont=0;
    if(snakeHead.offsetTop===food.offsetTop && snakeHead.offsetLeft===food.offsetLeft){
            //进去判断证明蛇吃到食物  在蛇中添加一个盒子  同时食物消失 随机生成一个食物
            //alert(123);
            //将新增加的div插入到snake中
            cont++;
            for (let j=0;j<snakeDiv.length;j++){
                snake.insertAdjacentElement('beforeend',div);
            }
            food.style.left=null;
            food.style.top=null;
        }
    //console.log(cont);
},500);
document.addEventListener('keydown',function (event) {
    str=event.key;
    //console.log(event.key);
});


