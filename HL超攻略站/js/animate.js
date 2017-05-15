/**
 * Created by HUCC on 2016/10/19.
 */
//修改缓动框架
//能够给任意对象 同时修改多个属性
function animate(obj, json, fn) {
    if (obj.timer) {
        clearInterval(obj.timer);
    }
    //k  json[k]

    obj.timer = setInterval(function () {
        //获取当前值
        var flag = true;//大家的动画是不是都到了重点
        for (var k in json) {
            if (k == "opacity") {
                //1. parseInt 改成parseFloat
                //2. 把leader和target放大100倍
                //3. 设置的时候，除以100并且去掉px

                //难点：小数做不了动画
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseFloat(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的

                //让目标值扩大一百倍去做动画
                target = target * 100;
                leader = leader * 100;


                var step = (target - leader) / 40;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader / 100;
                obj.style["filter"] = "alpha(opacity=" + leader + ")";

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            } else if(k === "zIndex"){
                //如果是zIndex属性，就直接设置
                obj.style["zIndex"] = json[k];
            } else {
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                leader = parseInt(leader) || 0;//如果没有这个样式，默认给0
                //leader使用getStyle是带单位的
                var step = (target - leader) / 10;//最少跑1px
                if (step > 0) {
                    step = Math.ceil(step);
                } else {
                    step = Math.floor(step);
                }
                leader = leader + step;
                obj.style[attr] = leader + "px";//px不能丢

                //等所有的属性都到了终点的时候才清除定时器
                if (leader != target) {
                    flag = false;//如果发现还没有到终点，赶紧吼一嗓子
                }
            }


        }

        //如果这个时候flag是true，说明假设是成立的
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }

        }

    }, 15);


}

//获取指定元素指定的样式
function getStyle(obj, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}