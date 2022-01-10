let s1=document.getElementsByClassName('s1')[0];
let s2=document.getElementsByClassName('s2')[0];
let imgList=document.querySelectorAll('.banner>ul>li');
let banner=document.querySelector('.banner');
let rounds=document.querySelectorAll('.round li');
for (let i=0;i<rounds.length;i++){
    rounds[i].index=i;
}
let round=document.querySelector('.round');
let imgcon=0;
banner.addEventListener('click',function (event) {
   // alert(123);
    event.preventDefault();
    if (event.target===s1){
        changImg(imgcon-1);
    }else if (event.target===s2){
        changImg(imgcon+1);
    }else if (event.target.parentNode===round){
        //alert(123);
        changImg(event.target.index);
    }
})
function changImg(index) {
    if (index<0){
        index=imgList.length-1
    }else if (index>imgList.length-1){
        index=0;
    }
    imgList[imgcon].style.zIndex='';
    imgList[imgcon].style.opacity=0;
    rounds[imgcon].className='';
    imgList[index].style.zIndex=1;
    imgList[index].style.opacity=1;
    rounds[index].className='current';
    imgcon=index;
}