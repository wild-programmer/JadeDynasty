/**
 * Created by Administrator on 2016/10/23 0023.
 */
//初见诛仙部分开始

//找对象
var firstsee=document.getElementById("firstsee");
var fscontent=firstsee.children[1];
var divs=fscontent.children;

//给img设置鼠标经过事件，图片更换，文字出现
for(var i=0;i<divs.length;i++){
    divs[i].index=i;
    divs[i].onmouseover=function(){
        for(var i=0;i<divs.length;i++){
            divs[i].children[1].style.display="none";
        }
        this.children[1].style.display="block";
    };
}
//初见诛仙部分结束


//职业选择部分开始
window.onload=function(){
    //找对象
    var roles=document.getElementById("roles");
    var btns=document.getElementById("btns");
    var links=btns.children;
    var roleconts=document.getElementById("roleconts");
    var rolesparts=document.getElementById("rolesparts");
    var roleList=rolesparts.children;
    var arr=document.getElementById("arr");
    var leftArr=document.getElementById("left");
    var rightArr=document.getElementById("right");
    var flag=true;
    var timer=null;
    //roleconts经过箭头显示
    roleconts.onmouseover=function(){
        clearInterval(timer);
    }
    //箭头隐藏
    roleconts.onmouseout=function(){
        timer=setInterval(function(){
            rightArr.click();
        },2000);
    }
    //给按钮注册点击事件
    for(var i=0;i<links.length;i++){
        links[i].index=i;
        links[i].onclick=function(){
            for(var i=0;i<links.length;i++){
                links[i].style.backgroundImage="url(images/tab_a.png)";
                links[i].style.color="white";
                animate(roleList[i],{"opacity":0});
            }
            this.style.backgroundImage="url(images/tab_h.png)";
            this.style.color="red";
            animate(roleList[this.index],{"opacity":1

            });
            pic=square=this.index;
//                square--;
        };
    }

    //左右箭头点击切换
    var pic=0;
    var square=0;
    rightArr.onclick=function(){
        if(flag){
            flag=false;
            assign();
            //console.log("pic++",pic);
            pic++;
            if(pic>roleList.length-1){
                pic=0;
            };

            for(var i=0;i<links.length;i++){
                links[i].style.backgroundImage="url(images/tab_a.png)";
                links[i].style.color="white";
            }
            links[square].style.backgroundImage="url(images/tab_h.png)";
            links[square].style.color="red";
            //console.log("square++"+square);
            square++;
            if(square>links.length-1){
                square=0;
            }


        }

    }
    //点击左箭头切换
    leftArr.onclick=function(){
        if(flag){
            flag=false;
            pic--;
            if(pic<0){
                pic=roleList.length-1;
            }
            assign();
            //console.log("pic--"+pic);
            for(var i=0;i<links.length;i++){
                links[i].style.backgroundImage="url(images/tab_a.png)";
                links[i].style.color="white";
            }
            square--;
            if(square<0){
                square=links.length-1;
            }
            links[square].style.backgroundImage="url(images/tab_h.png)";
            links[square].style.color="red";
            //console.log("square"+square);




        }

    }
    //自动播放
    timer=setInterval(function(){
        rightArr.click();
    },2000);
    function assign(){
        for(var i=0;i<roleList.length;i++){
            animate(roleList[i],{"opacity":0});
        }
        animate(roleList[pic],{"opacity":1},function(){
            flag=true;
        });
    }
    //职业选择部分结束


    //道法飞涨开始
    //找对象
    var dfbtns=document.getElementById("dfbtns");
    var dfbtnList=dfbtns.children;
    var dfcontent=document.getElementById("dfcontent");
    var dfcos=dfcontent.children;
    //设置默认属性
    dfbtnList[0].style.backgroundImage="url(images/tab_h.png)";
    dfbtnList[0].style.color="red";
    dfcos[0].style.display="block";
    //给按钮注册鼠标经过事件
    for(var i=0;i<dfbtnList.length;i++){
        dfbtnList[i].index=i;
        dfbtnList[i].onmouseover=function(){
            for(var i=0;i<dfbtnList.length;i++){
                dfbtnList[i].style.backgroundImage="url(images/tab_a.png)";
                dfbtnList[i].style.color="white";
                if(i<dfbtnList.length-1){
                    dfcos[i].style.display="none";
                }

            }
            this.style.backgroundImage="url(images/tab_h.png)";
            this.style.color="red";
            if(this.index==dfbtnList.length-1){
                dfcos[this.index-1].style.display="block";
            }
            dfcos[this.index].style.display="block";
        }

    }
    //道法飞涨结束
    //获取福利开始
    var flbtn=document.getElementById("flbtn");
    var flbtns=flbtn.children;
    var flcots=document.getElementById("flcots");
    var gamefuli=flcots.children[0];
    var gfs=gamefuli.getElementsByTagName("img");
    var rwfuli=flcots.children[1];
    var rws=rwfuli.getElementsByTagName("img");
    var flList=flcots.children;
    //console.log(gfs);
    //console.log(rws);

    //初始化位置
    flbtns[0].style.backgroundImage="url(images/tab_h.png)";
    flbtns[0].style.color="red";
    flList[0].style.display="block";
    //给按钮注册鼠标经过事件
    for(var i=0;i<flbtns.length;i++){
        flbtns[i].index=i;
        flbtns[i].onmouseover=function(){
            for(var i=0;i<flbtns.length;i++){
                flbtns[i].style.backgroundImage="url(images/tab_a.png)";
                flbtns[i].style.color="white";
                flList[i].style.display="none";
            }
            this.style.backgroundImage="url(images/tab_h.png)";
            this.style.color="red";
            flList[this.index].style.display="block";
        }

    }
    //给游戏福利注册onmouseover
    for(var i=0;i<gfs.length;i++){
        gfs[i].index=i;
        gfs[i].onmouseover=function(){
            for(var i=0;i<gfs.length;i++){
                gfs[i].src="images/lp"+(i+1)+"a.png";
            }
            this.src="images/lp"+(this.index+1)+"h.png";
        }
        gfs[i].onmouseout=function(){
            this.src="images/lp"+(this.index+1)+"a.png";
        };
    }
    //给任务福利注册onmouseover

    for(var i=0;i<rws.length;i++){
        rws[i].index=i;
        rws[i].onmouseover=function(){
            for(var i=0;i<rws.length;i++){
                rws[i].src="images/lp"+(i+5)+"a.png";
            }
            this.src="images/lp"+(this.index+5)+"h.png";

        }
        rws[i].onmouseout=function(){
            this.src="images/lp"+(this.index+5)+"a.png";
        };
    }
    //获取福利结束
    //固定标签开始
    var float=document.getElementById("float");
    var flbox=float.children[0];
    var ul=flbox.children[0];
    var lis=ul.getElementsByTagName("a");
    for(var i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            for(var i=0;i<lis.length;i++){
                lis[i].children[0].src="images/sa.png";
                lis[i].children[1].style.color="#2AC2A7";
                lis[i].style.color="#2AC2A7";
            }
            this.children[0].src="images/on.png";
            this.children[1].style.color="white";
            this.style.color="#E55959";
        }
    }
    //固定标签结束

        }