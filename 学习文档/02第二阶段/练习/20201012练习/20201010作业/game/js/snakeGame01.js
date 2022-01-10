(function () {
/*
1、随机生成食物的位置
2、移动蛇头  判断蛇是否拐头  即蛇头向上移动时 按下键向下走  禁止蛇调头
3、吃到食物时在蛇的容器中新增一个蛇身  同时食物的位置重新生成
4、新生成的div蛇身的位置坐标确定
5、判断蛇是否撞墙
6、判断蛇是否撞到自己
7、记录分数和等级

 */
    //获取蛇的食物
    let food=document.getElementById('food');
    //获取蛇的容器
    let snake=document.getElementById('snake');
    //获取蛇容器中的蛇头及身体
    let snakeBody=snake.getElementsByTagName('div');
    //获取分数和等级的id  score-level
    let scoreSpan=document.getElementById('score');
    let levelSpan=document.getElementById('level');
    //创建2个变量  记录分数和等级
    let score=0,level=1;

    //创建一个函数  记录蛇的位置  吃到食物后要重新生成  故需要多次调用
    //创建一个变量  记录蛇头移动的速度
    let sdr=null;
    function snakefood() {
        //随机生成0-290之间的数字
        let left=Math.round(Math.random()*29)*10;
        let top=Math.round(Math.random()*29)*10;
        //改变食物的坐标为随机生成的坐标
        food.style.left=left+'px';
        food.style.top=top+'px';
    }
    snakefood();
    //设置键盘按下事件
    document.addEventListener('keydown',function (event) {
        //判断鼠标按下的键是上下左右键 则改变sdr的值  如果不是  则不执行
        let keyArr=['ArrowUp','Up','ArrowDown','Down','ArrowLeft','Left','ArrowRight','Right'];
        if (keyArr.indexOf(event.key) !== -1){
            sdr=event.key
        }
    })
    //开启计时器  记录蛇的移动
    setTimeout(function time() {
        //移动蛇头
        //创建2个变量记录蛇头的坐标
        let left=snakeBody[0].offsetLeft;
        let top=snakeBody[0].offsetTop;
        switch (sdr) {
            case 'ArrowUp':
            case 'Up':
                //蛇头移动的坐标
                top -= 10;
                //判断蛇向上移动时 撞到自己  不能往相反反向移动   即蛇头的坐标和蛇第二节身体坐标重合
                if (snakeBody[1] && top===snakeBody[1].offsetTop){
                    top +=20;
                }
                break;
            case 'ArrowDown':
            case 'Down':
                //蛇头移动的坐标
                top += 10;
                if (snakeBody[1] && top===snakeBody[1].offsetTop){
                    top -=20;
                }
                break;
            case 'ArrowLeft':
            case 'Left':
                //蛇头移动的坐标
                left -= 10;
                if (snakeBody[1] && left===snakeBody[1].offsetLeft){
                    left +=20;
                }
                break;
            case 'ArrowRight':
            case 'Right':
                //蛇头移动的坐标
                left += 10;
                if (snakeBody[1] && left===snakeBody[1].offsetLeft){
                    left -=20;
                }
                break;
        }
        //判断蛇是否撞墙
        if (left<0 || left>290 || top<0 || top>290){
            alert('撞到墙了 GIVE OVER');
            return;
        }
        //判断蛇吃到食物  如果蛇头的坐标和食物的坐标重合  则代表吃到食物
        if (left===food.offsetLeft && top===food.offsetTop){
            //进入判断证明蛇吃到食物
            //食物消失  重新生成食物
            snakefood();
            //新增一个div在蛇的容器中
            let newdiv=document.createElement('div');
            //将新增div放入蛇的容器中
            snake.appendChild(newdiv);
            score++;//吃到食物后  分数自增1   将span内部的html改为自增后的score
            scoreSpan.innerHTML=score;
            //分数增加到5时  等级加1
            if (level<10 && score/5 === level){
                //判断  最后等级10级  吃到2个升级1级
                level++
                levelSpan.innerHTML=level;
            }
        }
        //设置新生成的div坐标
        for (let i=snakeBody.length-1;i>0;i--){
            //变量容器中的div  让最后一个div的坐标=前面一个div的坐标
            //创建2个变量 记录snakeBody[i]的坐标
            let bodyleft=snakeBody[i-1].offsetLeft;
            let bodytop=snakeBody[i-1].offsetTop;
            //判断撞到自己 蛇头的坐标与蛇身的坐标重合
            if (bodyleft===left && bodytop===top ){
                alert('撞到自己了 GIVE OVER');
                return;
            }
            snakeBody[i].style.left=bodyleft+'px';
            snakeBody[i].style.top=bodytop+'px';
        }

        //定义蛇头的坐标
        snakeBody[0].style.left=left+'px';
        snakeBody[0].style.top=top+'px';




        setTimeout(time,300-(30*(level-1)));
    },300);

})();
