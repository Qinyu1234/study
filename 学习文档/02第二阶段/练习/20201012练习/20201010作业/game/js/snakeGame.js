(function () {
    //获取蛇的食物
    let food=document.getElementById('food');
    //获取蛇的容器
    let snake=document.getElementById('snake');
    //获取到分数  和等级 score-level
    let scoreSpan=document.getElementById('score');
    let levelSpan=document.getElementById('level');
    //创建一个变量  记录分数和等级
    let score=0; level=1;
    /*
    获取蛇的身体  snake.getElementsByTagName('div')是实时更新蛇容器后面div身体
     差别：           querySelectorAll()也可以全部获取蛇的身体  但是不是实时更新  新添加的div不在范围
     */
    let snakeBody=snake.getElementsByTagName('div');
    //蛇头应该就是snakeBody[0]  第一个位置
    //创建一个变量 记录蛇移动的速度
    let dir=null;
    //设置蛇的食物 可以多次调用  食物被吃到后重新生成新的食物
    function snakefood() {
        //随机生成一个0-290的坐标
        let top=Math.round(Math.random()*29)*10;
        let left=Math.round(Math.random()*29)*10;
        //改变食物的坐标
        food.style.left=left+'px';
        food.style.top=top+'px';

    }
    snakefood();
    //设置蛇身体键盘按下事件
    document.addEventListener('keydown',function (event) {
        //判断鼠标按下的是否是上下左右键  如果是  则执行新的方向  如果不是  则继续保持原来的方向
        let keyArr=['ArrowUp','Up','ArrowDown','Down','ArrowLeft','Left','ArrowRight','Right'];
        //判断  如果按下的键是keyArr数组中的对象   用indexOf()
        if (keyArr.indexOf(event.key)!==-1){
            //设置鼠标按下值
            dir=event.key;
        }
    })
    //设置蛇头的定时移动方向
    setTimeout(function main() {
        //创建2个变量  记录蛇头移动的位置
        let top=snakeBody[0].offsetTop;
        let left=snakeBody[0].offsetLeft;
        //设置蛇头的移动位置
        switch (dir) {
            case 'ArrowUp':
            case 'Up':
                //只计算移动的位置  只有数值  没有px单位
                top -= 10;
                //判断是否撞到自己 蛇头的坐标与第二节身体坐标重合
                if (snakeBody[1] && top===snakeBody[1].offsetTop){
                    //alert('撞到自己了,');
                    //向上走的时候  不能拐头向下走  此时 按向下没反应  保持蛇头方向不变
                    top += 20;
                }
                break;
            case 'ArrowDown':
            case 'Down':
                // 向下
                top += 10;
                if (snakeBody[1] && top===snakeBody[1].offsetTop){
                    //alert('撞到自己了,');
                    //向下走的时候  不能拐头向上走  此时 按上没反应  保持蛇头方向不变
                    top -= 20;
                }
                break;
            case 'ArrowLeft':
            case 'Left':
                // 向左
                left -= 10;
                if (snakeBody[1] && left===snakeBody[1].offsetLeft){
                    //alert('撞到自己了,');
                    //向左走的时候  不能拐头向右走  此时 按右没反应  保持蛇头方向不变
                    left += 20;
                }
                break;
            case 'ArrowRight':
            case 'Right':
                // 向右
                left += 10;
                if (snakeBody[1] && left===snakeBody[1].offsetLeft){
                    //alert('撞到自己了,');
                    //向右走的时候  不能拐头向左走  此时 按左没反应  保持蛇头方向不变
                    left -= 20;
                }
                break;
        }
        //判断蛇头是否撞墙
        if (left<0 || left>290 || top<0 || top>290){
            alert('撞墙了，游戏结束');
            return;
        }
        //判断蛇头吃到食物  改变食物的位置  同时新增一个div蛇身
        if (left===food.offsetLeft && top===food.offsetTop){
            //进去判断  证明蛇头吃到食物
            //改变食物的位置  即重新调用随机生成食物的函数
            snakefood();
            //在snake中新添加一个div
            //创建一个div
            let newDiv=document.createElement('div');
            //将新建的div添加到snake中
            snake.appendChild(newDiv);
            //吃到食物  分数增加
            score++;//吃到食物后  分数自增1   将span内部的html改为自增后的score
            scoreSpan.innerHTML=score;
            if (level<10 && score/2 === level){
                //判断  最后等级10级  吃到2个升级1级
                level++
                levelSpan.innerHTML=level;
            }

        }
        //当新增一个蛇身时   后面的蛇身坐标=前面蛇身的坐标
        for (let i=snakeBody.length-1;i>0;i--){
            //遍历蛇的身体  相当于最后一个蛇的身体坐标=前一个蛇身坐标
            //创建2个变量  当蛇头撞到自己时  游戏也结束
            let bodyleft=snakeBody[i-1].offsetLeft;
            let bodytop=snakeBody[i-1].offsetTop;
            if (bodyleft===left && bodytop===top){
                alert('撞自己了，游戏结束');
                return;
            }
            snakeBody[i].style.left=bodyleft+'px';
            snakeBody[i].style.top=bodytop+'px';
        }
        //给top  left赋值  设置蛇头的位置
        snakeBody[0].style.top=top+'px';
        snakeBody[0].style.left=left+'px';

        //设置连续移动  继续调用函数
        setTimeout(main,300-(30 * (level-1)));
    },300)

})();
