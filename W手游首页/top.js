/**
 * Created by wlt05 on 2016/10/21.
 */
var box = document.getElementById("lunbo");
var ul = box.children[0];
var lis = ul.children;
var arrow = box.children[1];
var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");
var boxes = box.children[2];
var cubes = boxes.children;
var imgwidth = lis[0].offsetWidth;
var titr = document.getElementById("titr");
var tao = document.getElementById("tao");
var xial = titr.children[1];
console.log(xial);

//碰到小方块就改变小方块的背景图片
for (var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    cube.index = i;
    cube.onmouseover = function () {
        for (var i = 0; i < cubes.length; i++) {
            cubes[i].style.backgroundImage = 'url("img/dot.png")';
        }
        this.style.backgroundImage = 'url("img/doth.png")';
        var index = this.index;
        animate(ul,{left:-index*imgwidth});
        pic=index;
        square=index;
    }
    //点击cube改变小方块的背景色 并改变对应的图片
//        cube.onclick= function () {
//            var index = this.index;
//            cubes[index].style.backgroundImage = 'url("img/doth.png")';
//            animate(ul,{left:-i*imgwidth});
//        }

}
////不会啦啊啊拉啊拉



//3. 当鼠标经过盒子的时候，让小箭头显示
box.onmouseover = function () {
    animate(arrow, {"opacity": 1});
}
//4. 当鼠标离开盒子的时候，让小箭头隐藏
box.onmouseout = function () {
    animate(arrow, {"opacity": 0});
}
//点击右箭头让ul向左移动
var square = 0;
var liclon = lis[0].cloneNode(true);
ul.appendChild(liclon);
var pic = 0;
rightarrow.onclick = function () {
    if (pic == lis.length - 1) {
        pic = 0;
        ul.style.left = 0;
    }
    pic++;
    var leader = -pic * imgwidth;
    animate(ul, {left: leader});

    //改变小方格的颜色
    square++;
    if (square == cubes.length) {
        square = 0;
    }
    for (var i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundImage = 'url("img/dot.png")';
    }
    cubes[square].style.backgroundImage = 'url("img/doth.png")';
}
//点击左箭头让ul向右移动
leftarrow.onclick = function () {
    if (pic == 0) {
        pic = lis.length - 1;
        ul.style.left = -pic * imgwidth + "px";
    }
    pic--;
    var leader = -pic * imgwidth;
    animate(ul, {left: leader});
//让cube的背景图片跟着pic滚动  参数的值不一样所以要另起一个
    for (var i = 0; i < cubes.length; i++) {
        cubes[i].style.backgroundImage = 'url("img/dot.png")';
    }
    if (square == 0) {
        square = cubes.length;
    }
    square--;
    cubes[square].style.backgroundImage = 'url("img/doth.png")';
}


tao.onmouseover = function () {
    xial.style.display = "block";
}
tao.onmouseout = function () {
    xial.style.display = "none";
}