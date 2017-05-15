/**
 * Created by wlt05 on 2016/10/20.
 */
/**获取最小的数组和索引
 * Created by wlt05 on 2016/10/20.
 */
function getMin(arr) {
    var minValue = arr[0];
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
            minIndex = i;
        }
    }

    return {
        index: minIndex,
        value: minValue
    };

}

/**获取可视网页的宽度高度
 * Created by wlt05 on 2016/10/20.
 */
function client() {

    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}
/**获取页面被卷去的高度和宽度
 * Created by wlt05 on 2016/10/20.
 */
function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**能够给任意对象同时修改多个属性
 * Created by wlt05 on 2016/10/20.
 */
function animate(obj, json, fn) {

    if (obj.timer) {
        clearInterval(obj.timer);
    }

    obj.timer = setInterval(function () {
        for (var k in json) {

            if (k == "opacity") {
                //1. parseInt 改成parseFloat
                //2. 把leader和target放大100倍
                //3. 设置的时候，除以100并且去掉px
                var flag = true;
                //难点：小数做不了动画
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);//auto
                console.log(leader);
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
            } else if (k == "zIndex") {
                obj.style["zIndex"] = json[k];
            } else {
                //attr,target
                var flag = true;
                var attr = k;
                var target = json[k];
                var leader = getStyle(obj, attr);
                leader = parseInt(leader) || 0;
                var tep = (target - leader) / 10;
                if (tep > 0) {
                    tep = Math.ceil(tep);
                } else {
                    tep = Math.floor(tep);
                }
                leader = leader + tep;
                obj.style[attr] = leader + "px";
                if (leader != target) {
                    flag = false;
                }
            }

        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 10)

}

/**获取指定元素指定的样式
 * Created by wlt05 on 2016/10/20.
 */
function getStyle(obj, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}