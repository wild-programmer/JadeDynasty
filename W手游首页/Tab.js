/**
 * Created by wlt05 on 2016/10/23.
 */

for (var i = 0; i < cubs.length; i++) {
    console.log(i);
    var cub = cubs[i];
    cub.index = i;
    console.log(cubs.length + "进点击事件前遍历小方块");
    cub.onclick = function () {
        for (var i = 0; i < cubs.length; i++) {
            console.log(i);
            cubs[i].style.backgroundImage = 'url("img/role_tab.png")';
            cubs[i].style.color = "#2AC2A7";
            console.log(cubs.length + "循环里");
            tllis[i].style.display="none";
            attrs[i].style.display="none";
        }
        ;
        this.style.backgroundImage = 'url("img/role_tab1.png")';
        this.style.color = "white";
        var indx = this.index;
        tllis[indx].style.display="block";
        attrs[indx].style.display="block";
    }
}