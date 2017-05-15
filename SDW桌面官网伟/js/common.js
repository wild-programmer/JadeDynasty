/**
 * Created by ASUS on 2016/10/23.
 */
//清除冒泡
function stopPropagation(event) {
    //能力检测
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}

function transform(obj){
    var timer;
    obj.onmouseover=function(){
        obj.style.borderColor="#42B28C";
        obj.style.borderWidth="3px";
        obj.style.zIndex="3";
        timer=setInterval(getTime,10);
        function getTime(){
            var date=new Date();
            var mseconds=date.getMilliseconds();

            obj.style.transform="rotate("+mseconds*0.36+"deg)";
        };
    }
    obj.onmouseout=function(){
        obj.style.borderColor="#E0F3EF";
        obj.style.borderWidth="1px";
        obj.style.zIndex="0";
        clearInterval(timer)
        obj.style.transform="rotate(0deg)";
    }
}

function getScroll(){
    return {
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}