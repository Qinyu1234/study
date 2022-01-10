//第一种
/*
function myMoney() {
    var  money=15000;
    var setMoney=function () {
            return money;
    }
    var getMoney=function (a) {
            money += a;
    }
    return{
        setMoney:setMoney,
        getMoney:getMoney,
    }

}*/
//第二种
/*function myMoney() {
    var money=18000;
    function setMoney() {
        return money;
    }
    function getMoney(a) {
        money += a;
    }
    return{
        setMoney:setMoney,
        getMoney:getMoney,
    }

}*/
//第三种
(function () {
    var money=20000;
    function setMoney() {
        return money;
    }
    function getMoney (a) {
        money += a;
    }
    window.setMoney=setMoney;
    window.getMoney=getMoney;
}());
