/**
 * Created by ASUS on 2016/10/21.
 */
//header部分
    window.onload=function(){
        var hGame=document.getElementById("hGame");
        var hideImg=document.getElementById("hideImg");
        var header=document.getElementById("header");
        hGame.onmouseover=function(){
            hideImg.style.display="block";
        }
        hGame.onmouseout=function(){
            hideImg.style.display="none";
        }

    }




//banner左侧轮播图
var banner=document.getElementById("banner");
var form=banner.children[1].children[4];
var ul=form.children[0].children[1].children[0];
var content=ul.parentNode;
var arr=document.getElementById("arr");
var arr_right=document.getElementById("arr_right");
var arr_left=document.getElementById("arr_left");
var lis=ul.children;
var imgWidth=lis[0].offsetWidth;
var cloneLi=lis[0].cloneNode(true);
ul.appendChild(cloneLi);

//点击右侧箭头
for(var i=0;i<lis.length;i++){
    lis[i].style.opacity="0";
    lis[i].index=i;
}
lis[0].style.opacity="1";
var num=0;
arr_right.onclick=function(){
    for(var i=0;i<lis.length;i++){
        animate(lis[i],{"opacity":0});
    }
    if(num==lis.length-1){
        num=0;
    }
    num++;
    animate(lis[num],{"opacity":1});
}
//点击左侧箭头
arr_left.onclick=function(){
    for(var i=0;i<lis.length;i++){
        animate(lis[i],{"opacity":0});
    }
    if(num==0){
        num=lis.length-1;
    }
    num--;
    animate(lis[num],{"opacity":1});

}
var timer=null;
timer=setInterval(function(){
    arr_right.click();
},2000)
ul.parentNode.parentNode.onmouseover=function(){
    clearInterval(timer);
}
ul.parentNode.parentNode.onmouseout=function(){
    timer=setInterval(function(){
        arr_right.click();
    },2000)
}
//banner中间盒子的内容部分
var middle_ul=document.getElementById("select");
var middle_lis=middle_ul.children;
var content_ul=document.getElementById("selectBox");
var content_lis=content_ul.children;
var ci=0;

var tipCon=document.getElementById("tipCon");

var l_userN=document.getElementById("l_userN");
var l_passW=document.getElementById("l_passW");
var l_eMail=document.getElementById("l_eMail");
var l_click=document.getElementById("l_click");



l_userN.onfocus = function () {
        if(/^[a-z][a-z0-9]{5,15}$/.test(this.value)){
            //说明是合法
            tipCon.innerHTML="6-16位小写英文字母及数字组成，首位为字母。";
            tipCon.style.color="green";
        }else {
            tipCon.innerHTML="6-16位小写英文字母及数字组成，首位为字母。";
            tipCon.style.color="red";
        }
    }

l_passW.onfocus = function () {
    if(/^[a-zA-Z0-9]{6,16}$/.test(this.value)){
        //说明是合法
        tipCon.innerHTML="密码由6-16位英文字母或数字组成。";
        tipCon.style.color="green";
    }else {
        tipCon.innerHTML="密码由6-16位英文字母或数字组成。";
        tipCon.style.color="red";
    }
}


l_eMail.onfocus = function () {
    if( /^\w+@\w+(\.\w+)+$/.test(this.value)){
        //说明是合法
        tipCon.innerHTML="请准确输入你的邮箱账号。";
        tipCon.style.color="green";
    }else {
        tipCon.innerHTML="请准确输入你的邮箱账号。";
        tipCon.style.color="red";
    }
}

var formConfirm=document.getElementById("formConfirm");
l_click.onfocus = function () {
    formConfirm.style.width=142+"px"

    if( /^\w+@\w+(\.\w+)+$/.test(this.value)){
        //说明是合法
        tipCon.innerHTML="请输入正确的验证码。";
        tipCon.style.color="green";
    }else {
        tipCon.innerHTML="请输入正确的验证码。";
        tipCon.style.color="red";
    }
}

l_click.onblur = function () {
    formConfirm.style.width=0+"px"
}


var phone=document.getElementById("phone");

middle_ul.onclick=function(){
    console.log("click");
    tipCon.innerHTML="";
}



//鼠标获取焦点的时候tipCon显示提示语
//l_userN.onfocus=function(){
//    if(l_userN.value=="通行证账号"){
//        l_userN.value="";
//        tipCon.innerHTML="6-16位小写英文字母及数字组成，首位为字母。";
//    }
//
//}



//键盘弹起的时候判断正则
//l_userN.onblur=function(){
//    if(/^[^a-z]/.test(l_userN.value)===true){
//        tipCon.innerHTML="账号首位必须为小写字母";
//        tipCon.style.color="red";
//    }else if(/^[a-z][a-z|0-9]{5,16}$/.test(l_userN.value)===false){
//        tipCon.innerHTML="账号长度必须在6-16个字符之间";
//        tipCon.style.color="red";
//    }else{
//        tipCon.innerHTML="密码由6-16位英文字母或数字组成。";
//        tipCon.style.color="#767676";
//    }
//    if(l_userN.value===""){
//        l_userN.value="通行证账号"
//        tipCon.innerHTML="6-16位小写英文字母及数字组成，首位为字母。";
//        tipCon.style.color="#767676";
//    }
//}

//判断密码

//l_passW.onfocus=function(){
//    if(l_passW.value=="通行证密码"){
//        l_passW.value="";
//        tipCon.innerHTML="6-16位小写英文字母及数字组成";
//    }
//}
////键盘弹起的时候判断正则
//l_passW.onblur=function(){
//    if(/^[a-z][a-z|0-9]{5,16}$/.test(l_passW.value)===false){
//        tipCon.innerHTML="密码长度必须在6-16个字符之间";
//        tipCon.style.color="red";
//    }else{
//        tipCon.innerHTML="可以通过电子邮箱修改密码";
//        tipCon.style.color="#767676";
//    }
//    if(l_passW.value===""){
//        l_passW.value="通行证密码"
//        tipCon.innerHTML="6-16位小写英文字母及数字组成";
//        tipCon.style.color="#767676";
//    }
//}



middle_lis[1].style.backgroundColor="#948649";
middle_lis[2].style.backgroundColor="#948649";
for(var i=0;i<middle_lis.length;i++){
    middle_lis[i].index=i;
    //tab切换
    middle_lis[i].onclick=function(){
        var j=this.index;
        for(var i=0;i<content_lis.length;i++){
            content_lis[i].style.display="none";
            middle_lis[i].style.backgroundColor="#948649";
        }
        content_lis[j].style.display="block";
        this.style.backgroundColor="#D2B848";
    }
}

//大图部分
var bigBanner=document.getElementById("bigBanner");
var bgUl=bigBanner.children[0];
var bgLis=bgUl.children;
var video=document.getElementById("video");
bgUl.style.position="relative";
var number=bgLis.length;
for(var i=0;i<bgLis.length;i++){
    bgLis[i].style.background="url(images/大图/ts0"+(i+1)+".jpg) -320px 0";
    bgLis[i].style.width="100%";
    bgLis[i].style.height="566px";
    bgLis[i].style.position="absolute";
    bgLis[i].style.zIndex=number--;
}
var choseUl=document.getElementById("choseUl");
var choseList=choseUl.children;
for(var i=0;i<choseList.length;i++){
    choseList[i].index=i;
    choseList[i].onmouseover=function() {
        for (var i = 0; i < choseList.length; i++) {
            choseList[i].children[0].style.background = "url(images/大图/ca.png)";
            bgLis[i].style.display = "none";
        }
        this.children[0].style.background = "url(images/大图/ch.png)";
        var pic = this.index;
        bgLis[pic].style.display = "block";
    }
}
//video.onmouseover=function(){
//    this.style.opacity="1";
//}
//video.onmouseout=function(){
//    this.style.opacity="0";
//}

//tab切换人物
var coolBtn=document.getElementById("coolBtn");
var coolPic=document.getElementById("coolPic");
//var cool=document.getElementById("cool");
var divP=coolPic.children;
var divN=coolBtn.children;
//网页初始化
reset();
divP[0].style.display="none";
divP[1].style.display="none";
divP[2].style.display="block";


for(var i=0;i<divP[2].children.length;i++){
    divN[2].children[i].style.display="block";
}
//初始化设置封装
function reset(){
    //将所有子按钮和子图片隐藏
    for(var i=0;i<divN.length;i++){
        for(var k=0;k<divN[i].children.length;k++){
            //将所有子按钮隐藏
            divP[i].children[k].style.display="none";
            //将所有子图片设置透明度
            divN[i].children[k].style.opacity="0.5";
            //将所有子图片隐藏
            divN[i].children[k].style.display="none";

        }
    }
    divP[0].children[0].style.display="block";
    divP[1].children[1].style.display="block";
    divP[2].children[0].style.display="block";

    divN[0].children[0].style.opacity="1";
    divN[1].children[1].style.opacity="1";
    divN[2].children[0].style.opacity="1";
}
//遍历按钮，给coolBtn注册点击事件
for(var i=0;i<divN.length;i++){
    var flag=true;
    divN[i].index=i;
    divN[i].onclick=function(){
        if(flag==false) {
            reset();
        }
        //排他思想
        //先让所有盒子隐藏
        for(var i=0;i<divN.length;i++){
            divP[i].style.display="none";
        }
        //让当前图片盒子出现
        var indexP=this.index;
        divP[indexP].style.display="block";

        //设置按钮变色
        for(var i=0;i<divN.length;i++){
            divN[i].style.backgroundPosition="0 0";
        }
        this.style.backgroundPosition="0 -130px";

        //点击当前按钮是排除其他盒子出现
        for(var i=0;i<divN.length;i++){
            for(var j=0;j<divN[i].children.length;j++){
                //排他
                divN[i].children[j].style.display="none";
            }
        }
        //让当前盒子的内容显现
        for(var i=0;i<divN.length;i++){
            for(var j=0;j<this.children.length;j++){
                this.children[j].style.display="block";
            }
        }
        //点击每一个人物按钮让当前人物出现
        var j=divP[indexP].children.length;
        for(var i=0;i<divN.length;i++){
            for(var k=0;k<j;k++){
                divN[indexP].children[k].index=k;
                divN[indexP].children[k].onclick=function(event){
                    //点击对象改变。indexP需要重新定义
                    indexP=this.parentNode.index;
                    event=event||window.event;
                    stopPropagation(event);
                    for(var i=0;i<divN[indexP].children.length;i++){
                        //console.log(divP[indexP].children[i]);
                        divP[indexP].children[i].style.display="none";
                        divN[indexP].children[i].style.opacity="0.5";
                    }
                    //当前按钮变亮，当前图片显示
                    divP[indexP].children[this.index].style.display="block";
                    divN[indexP].children[this.index].style.opacity="1";
                    flag=false;
                }
            }
        }
    }
}


