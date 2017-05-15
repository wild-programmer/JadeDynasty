/**
 * Created by ASUS on 2016/10/19.
 */
function animate(obj,json,fn){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer=setInterval(function(){
        var flag=true;
        for(var k in json){
            if(k==="opacity"){
                var attr=k;
                //console.log(attr);
                var target=json[k];
                var leader=getStyle(obj,attr);
                leader=parseFloat(leader)||0;
                leader*=100;
                target*=100;
                var step=(target-leader)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[attr]=leader/100;
                if(target!=leader){
                    flag=false;
                }
            }else if(k==="zIndex"){
                obj.style["zIndex"]=json[k];
            }else{
                var attr=k;
                var target=json[k];
                var leader=getStyle(obj,attr);
                leader=parseInt(leader)||0;
                var step=(target-leader)/20;
                step=step>0?Math.ceil(step):Math.floor(step);
                leader=leader+step;
                obj.style[attr]=leader+"px"
                if(target!=leader){
                    flag=false;
                }
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }

    },15)
}
function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}

function animate1(box,status){
    if(box.timer){
        clearInterval(box.timer);
    }
    box.timer=setInterval(function(){
        var leader=box.offsetLeft;
        //console.log(leader);
        var step=2;
        if(status<leader){
            step=-step;
        }
        if(Math.abs(status-leader)>=Math.abs(step)){
            leader+=step;
            box.style.left=leader+"px";
        }else{
            clearInterval(box.timer);
            box.style.left=status+"px";
        }
        console.log("���뻹����ִ��");
    },10);
}

$(function(){
    $("#video").mouseenter(function(){
        $("#video video").stop().fadeIn(2000)
    })
    $("#video").mouseleave(function(){
        $("#video video").stop().fadeOut(2000)
    })
})