/**
 * Created by wlt05 on 2016/10/11.
 */

/*
 * 调用函数的时候
 * 如果是用getElementsByTagName 获取的伪数组调用是不行的要加上索引
 * 或者用ById
 * */


// innertext:只获取内容不识别标签会对标签转义，会覆盖掉原先的内容 DOM第二天讲到
/**
 * 获取innerText属性（不兼容火狐浏览器）
 * @param elment
 * @returns {string}
 */
function getInnerText(element) {
    var result;
    if (typeof element.innertext == "string") {
        //说明我们能用innerText获取到内容
        result = element.innertext;
    } else {
        //能跑到这里来，说明是老版本的火狐浏览器
        result = element.textContent;
    }
    return result;
}


/**
 *设置innerText属性-修改元素里的内容 （兼容所有浏览器）
 * @param element 元素
 * @param content 内容
 */
function setInnerText(element, content) {
    if (typeof element.innerText == "string") {
        //说明支持innerText属性
        element.innerText = content;
    } else {
        //否则说明不支持innerText,textContent行
        element.textContent = content;
    }
}
/**
 *获取下一个兄弟元素 （兼容所有浏览器）
 * @param element 元素
 * @param element
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        //说明兼容nextElementSibling属性
        return element.nextElementSibling;
    } else {
        //说明不兼容 是IE678浏览器
        var node = element.nextSibling;
        //判断如果有下一个子节点，并且，这个节点的类型是1 (元素的类型为1)
        while (node && node.nodeType != 1) {
            //如果符合条件 一直循环下面语句
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 *获取上一个兄弟元素 （兼容所有浏览器）
 * @param element 元素
 * @param element
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        //说明不是IE678浏览器
        return element.previousElementSibling;
    } else {
        //说明不兼容 是IE678浏览器
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            //如果兼容这个属性并且类型不为1（元素的类型为1） 一直循环
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 *获取第一个子元素 （兼容所有浏览器）
 * @param element 元素
 * @param 方法firstElementChild 不兼容IE678
 */
function getFirstElement(element) {

    if (element.firstElementChild) {
        //说明我们能用firstElementChild 获取到
        return element.firstElementChild;
    } else {
        //说明不兼容 是IE678浏览器
        var node = element.firstChild;
        while (node && node.nodeType) {
            node = node.nextSibling;
        }
        return node;
    }
}


/**
 *获取最后一个子元素 （兼容所有浏览器）
 * @param element 元素
 * @param 方法lastElementChild 不兼容IE678
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        //能进来说明不是IE 678
        return element.lastElementChild;
    } else {
        //能进来说明是IE 678  就要用lastChild
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            //符合条件一直执行下循环
            node = node.previousSibling;
        }
        return node;
    }
}


/*
 * 获取一个时间格式为 yyyy-mm-dd hh:mm:ss
 * @param 没有参数
 * */
function time() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    if (month < 10) {
        month = "0" + month;
    }
    var dates = date.getDate();
    if (dates < 10) {
        dates = "0" + dates;
    }
    var hourse = date.getHours();
    if (hourse < 10) {
        hourse = "0" + hourse;
    }
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var secons = date.getSeconds();
    if (secons < 10) {
        secons = "0" + secons;
    }
    var str = year + "-" + month + "-" + dates + " " + hourse + ":" + minutes + ":" + secons;
    return str;
}


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
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
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


/**获取光标在整个文档内的坐标（包裹被卷去的）
 *
 */
function getPageX(event) {
    if (event.pageX) {
        return event.pageX;
    } else {
        return event.clientX + scroll().scrollLeft;
    }

}
function getPageY(event) {
    return event.pageY || event.clientY + scroll().scrollTop;
}

/**注册监听事件
 *
 */
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn);
    } else {
        obj["on" + type] = fn;
    }
}

/**移除监听事件
 *移除事件监听时候 注册监听的时候funaction 要有名字才能移除注册监听
 * eg  removeEvent(document,"click",fn1)
 */
function removeEvent(obj, type, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn, false);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + type, fn);
    } else {
        obj["on" + type] = null;
    }
}