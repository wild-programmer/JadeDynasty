/**
 * Created by Administrator on 2016/10/23 0023.
 */

window.onload = function () {
    //二维码显示隐藏
    var weixin = document.getElementById("weixin");
    var erweima = document.getElementById("eiweima");
    var bg = document.getElementById("bg");
    weixin.onmouseover = function () {
        erweima.style.display = "block";
    }
    weixin.onmouseout = function () {
        erweima.style.display = "none";
    }
    //第一个轮播图
    var lunbo = document.getElementById("lunbo");
    var ulLb = lunbo.children[0];
    var lisLb = ulLb.children;
    var arrowtop = document.getElementById("arrowtop");;
    var righttop = document.getElementById("righttop");
    var lefttop= document.getElementById("lefttop");
    var imgWidth = lunbo.offsetWidth;
    var timer = null;
    //第一个轮播图下
    var arrText = [
        "首部资料片《圣兽降临》今日全平台开启",
        "关于首饰选择，你必须知道的几个标准",
        "灌注实用小技巧 教你如何省元宝！",
        "青云双技能加点 七劫会武神剑挂机",
        "首部资料片《圣兽降临》今日全平台开启"
    ]
    lunbo.onmouseover=function(){
        arrowtop.style.display="block";
        //鼠标移动到上面停止轮播
        clearInterval(timer);
    }
    lunbo.onmouseout=function(){
        arrowtop.style.display="none";
        //鼠标离开时继续轮播
        timer = setInterval(function () {
            righttop.click();
        }, 2000)
    }
    var pText = document.getElementById("pText");
    var pNum = document.getElementById("pNum");
    //让每一个li自动切换
    var pic = 0;//点击鼠标次数也就是移动图片的数量
    var square = 1;
    //当pic=0的时候square=1 当pic=3的时候square=4
    //当pic=4的时候，square=1
    //点击右键向右移动图片
    righttop.onclick = function () {
        if (pic == lisLb.length - 1) {
            pic = 0;
            ulLb.style.left = "0px";
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ulLb, {"left": target});
        if (square == lisLb.length - 1) {
            square = 1;
        } else {
            square++;
        }
        pText.innerText = arrText[pic];
        pNum.innerText = square + "/4";

    }
    //点击左键向左移动
    lefttop.onclick = function () {
        if (pic == 0) {
            pic = lisLb.length - 1;
            ulLb.style.left = -pic * imgWidth + "px";
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ulLb, {"left": target});
        if (square == 1) {
            square = lisLb.length - 1;
        } else {
            square--;
        }
        pText.innerText = arrText[pic];
        pNum.innerText = square + "/4";
    }
    //自动轮播
    timer = setInterval(function () {
        righttop.click();
    }, 2000)
/*    //鼠标移动到上面停止轮播
    lunbo.onmouseover = function () {
        clearInterval(timer);
    }
    //鼠标离开时继续轮播
    lunbo.onmouseout = function () {
        timer = setInterval(function () {
            righttop.click();
        }, 2000)
    }*/

    //定义tab切换图片的路径数组
    var arr = [
        {"src": "images/tabtp/gw.jpg"},
        {"src": "images/tabtp/hh.jpg"},
        {"src": "images/tabtp/ty.jpg"},
        {"src": "images/tabtp/qy.jpg"}
    ];
    var tabtu = document.getElementById("tabtu");
    var ulTab = tabtu.children[0];
    var lisTab = ulTab.children;
    var tabImg = document.createElement("img");
    tabImg.src = "images/tabtp/gw.jpg";
    tabtu.appendChild(tabImg);
    for (var i = 0; i < lisTab.length; i++) {
        var li = lisTab[i];
        li.index = i;
        //默认的是第一个li红色，鼠标移到其他位置，鼠标经过的li颜色变色，其他颜色变为原始颜色
        li.onmouseover = function () {
            for (var i = 0; i < lisTab.length; i++) {
                lisTab[i].style.background = "url(images/qita/rolelisth.png)";
            }
            this.style.background = 'url("images/qita/rolelisth_hover.png")';
            var idx = this.index;
            tabImg.src = arr[idx].src;
        }
    }

//鼠标移到lTu和rTu上linfo和rinfo显示，离开则因此
    var lTu = document.getElementById("lTu");
    var rTu = document.getElementById("rTu");
    var linfo = document.getElementById("linfo");
    var rinfo = document.getElementById("rinfo");
    lTu.onmouseover = function () {
        linfo.style.display = "block";
    }
    lTu.onmouseout = function () {
        linfo.style.display = "none";
    }
    rTu.onmouseover = function () {
        rinfo.style.display = "block";
    }
    rTu.onmouseout = function () {
        rinfo.style.display = "none";
    }
    //右侧浮动栏点击左侧浮动栏隐藏，再次点击显示
    var rfloat = document.getElementById("rfloat");
    var controls = document.getElementById("controls");
    var flagt = 1;
    controls.addEventListener("click", function () {
        if (flagt == 1) {
            controls.style.backgroundImage = "url(images/gddwtp/slider_open.png)";
            animate(rfloat, {"width": 0})
            flagt = 0;
        } else if (flagt == 0) {
            controls.style.backgroundImage = "url(images/gddwtp/slider_close.png)";
            animate(rfloat, {"width": 180})
            flagt = 1;
        }
    }, false);





    //    装备强化抖动
    var dou = document.getElementById("dou");
    var linksD = dou.children;
    var timer6 = null;
    var arrD = ["marginTop", "marginLeft"];
    var arrimg = [];
    for (var i = 0; i < linksD.length; i++) {
        arrimg.push(linksD[i].children[0]);
    }

    for (var i = 0; i < arrimg.length; i++) {
        var img = arrimg[i];
        img.index = i;
        img.onmouseover = function () {
            var idx = this.index;
            timer6 = setInterval(function () {
                shake(arrimg[idx]);
            }, 10)
        }
        img.onmouseout = function () {
            clearInterval(timer6);
        }
    }
    function shake(obj) {
        var range = Math.floor(Math.random() * 3);
        var type = Math.floor(Math.random() * arr.length);
        obj.style[arrD[type]] = range + "px";
    }

//    装备强化结束
    //    阵灵图鉴tab切换 文字对象
    var picture_1 = document.getElementById("picture_1");
    var picture_1_ul = document.getElementById("picture_1_ul");
    var colorLis = picture_1_ul.children;
    //    阵灵图鉴tab切换 文字对象 结束
    var picTu = picture_1.children[0].children;
    //阵灵图鉴tab切换
    for (var i = 0; i < colorLis.length; i++) {
        var li = colorLis[i];
        li.index = i;
        li.onclick = function () {
            for (var i = 0; i < colorLis.length; i++) {
                colorLis[i].className = "";
                console.log(colorLis[i]);
            }
            this.className = "on";
            for (var i = 0; i < picTu.length; i++) {
                picTu[i].className = picTu[i].className.replace("selected", "");

            }
            var idx = this.index + 1;
            picTu[idx].className = picTu[idx].className.replace("", "selected" + " ");
            console.log(picTu[idx].className);
        }
    }
    //    tab切换 滑动
    var hua = document.getElementById("hua");
    var hua2 = document.getElementById("hua2");
    var hua3 = document.getElementById("hua3");
    var hua4 = document.getElementById("hua4");
    tabMap(hua);
    tabMap(hua2);
    tabMap(hua3);
    tabMap(hua4);
    function tabMap(obj) {
        var aHua = obj.children;
        var arrTu = [];
        for (var i = 0; i < aHua.length; i++) {
            arrTu.push(aHua[i].children[1]);
        }
        for (var i = 0; i < arrTu.length; i++) {
            var a = aHua[i];
            a.index = i;
            a.onmouseover = function () {
                var idx = this.index;
                animate(arrTu[idx], {"top": 0});
            }
            a.onmouseout = function () {
                var idx = this.index;
                animate(arrTu[idx], {"top": 218});
            }
        }
    }

    //阵灵图鉴tab切换 结束

//    游戏特色 旋转木马
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ulTs = slide.children[0];
    var lisTs = ulTs.children;

    var arrowX = document.getElementById("arrowX");
    var arrLeft2= document.getElementById("arrLeft");
    var arrRight2= document.getElementById("arrRight");

//    分配位置
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": -80,
            "opacity": 0.3,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 60,
            "left": -125,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 80,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 60,
            left: 475,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 630,
            "opacity": 0.3,
            "zIndex": 2
        },
        {
            "width": 550,
            "top": -20,
            "left": 195,
            "opacity": 0.1,
            "zIndex": 1
        },
    ];
    var timer5 = null;
    assign();
    var flag = true;

    function assign() {
        for (var i = 0; i < lisTs.length; i++) {
            animate(lisTs[i], config[i], function () {
                flag = true;
            });
        }
    }

//        鼠标移到wrap上arrwo显示
    wrap.onmouseover = function () {
        animate(arrowX, {"opacity": 1})
        clearInterval(timer5);
    }
    wrap.onmouseout = function () {
        animate(arrowX, {"opacity": 0})
        timer5 = setInterval(function () {
            arrRight2.click();
        }, 1000);
    }
    arrRight2.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    }
    arrLeft2.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            assign();
        }
    }
    timer5 = setInterval(function () {
        arrRight2.click();
    }, 1000);

//    法宝大全
    var lb1 = document.getElementById("lb1");
    var ulL = lb1.children[0];
    //var lbWidth = ulL.offsetWidth;
    var lb2 = document.getElementById("lb2");
    var liL = lb2.children;

    var arrL = document.getElementById("arrL");
    var leftL = document.getElementById("leftL");
    var rightL = document.getElementById("rightL");
    var picture_3 = document.getElementById("picture_3");
    var timer7 = null;
//        2鼠标指到li上里显示
    for (var i = 0; i < liL.length; i++) {
        var li = liL[i];
        li.index = i;
        li.onmouseover = function () {
            for (var i = 0; i < liL.length; i++) {
                liL[i].className = "";
            }
            this.className = "curren";
            //        3移动ul
            var idx = this.index;
            var target = -idx * 480;
//        console.log(ulL);
            animate(ulL, {"left": target});
            squareD = picd = idx;
        }
    }
//        3鼠标指到mag1上arrL显示
    picture_3.onmouseover = function () {
        arrL.style.display = "block";
        clearInterval(timer7);
    }
    picture_3.onmouseout = function () {
        arrL.style.display = "none";
        timer7 = setInterval(function () {
            rightL.click();
        }, 1000)
    }
//    4点击rightL移动ulL
    var picd = 0;
    var squareD = 0;
    rightL.onclick = function () {
        if (picd == liL.length - 1) {
            picd = 0;
            ulL.style.left = 0;
        }
        picd++;
        var target = -picd * 480;
        animate(ulL, {"left": target});
        //            5.1同步按钮，图片
        if (squareD == liL.length - 1) {
            squareD = 0;
        } else {
            squareD++;
        }
//                排他
        for (var i = 0; i < liL.length; i++) {
            liL[i].className = "";
        }
//                    留己
        liL[squareD].className = "curren";
    }
    leftL.onclick = function () {
        if (picd == 0) {
            picd = liL.length - 1;
            ul.style.left = -pic * imgWidth + "px";
        }
        picd--;
        var target = -picd * 480;
        animate(ulL, {"left": target});

        //                    5.2同步按钮，图片
        if (squareD == 0) {
            squareD = liL.length - 1;
        } else {
            squareD--;
        }
//                        排他
        for (var i = 0; i < liL.length; i++) {
            liL[i].className = "";
        }
//                            留己
        liL[squareD].className = "curren";
    }
    //    自动轮播
    timer7 = setInterval(function () {
        rightL.click();
    }, 1000);


}


$(function () {
    //背景音乐
    $('.sound_control').on('click', function () {
        console.log("hehe");
        var audio = document.getElementById('bg_music');
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            audio.pause();
        } else {
            $(this).addClass('on');
            audio.play();
        }
    });
})