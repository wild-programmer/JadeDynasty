/*! enscroll - v0.4.2 - 2013-08-29
* Copyright (c) 2013 ; Licensed  */
!function(a){if(!a.browser){var b={},c=navigator.userAgent.toLowerCase(),d=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[],e={browser:d[1]||"",version:d[2]||0};e.browser&&(b[e.browser]=!0,b.version=e.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),a.browser=b}}(jQuery),function(a,b,c){var d={getEvent:function(a){return a||b.event},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1}},e=b.requestAnimationFrame||b.mozRequestAnimationFrame||b.webkitRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){setTimeout(a,1e3/60)},f=function(b){var c=a(this).data("enscroll"),d=this,e=c.settings,f=function(){var b=a(this).data("enscroll"),c=b.settings;b&&c.showOnHover&&(c.verticalScrolling&&"none"!==a(b.verticalTrackWrapper).css("display")&&a(b.verticalTrackWrapper).stop().fadeTo("fast",0),c.horizontalScrolling&&"none"!==a(b.horizontalTrackWrapper).css("display")&&a(b.horizontalTrackWrapper).stop().fadeTo("fast",0),b._fadeTimer=null)};c&&e.showOnHover&&(c._fadeTimer?clearTimeout(c._fadeTimer):(e.verticalScrolling&&"none"!==a(c.verticalTrackWrapper).css("display")&&a(c.verticalTrackWrapper).stop().fadeTo("fast",1),e.horizontalScrolling&&"none"!==a(c.horizontalTrackWrapper).css("display")&&a(c.horizontalTrackWrapper).stop().fadeTo("fast",1)),b!==!1&&(c._fadeTimer=setTimeout(function(){f.call(d)},1500)))},g=function(b,c){var d=a(b),e=d.data("enscroll"),g=d.scrollTop();e&&e.settings.verticalScrolling&&(d.scrollTop(g+c),e.settings.showOnHover&&f.call(b))},h=function(b,c){var d=a(b),e=d.data("enscroll"),g=d.scrollLeft();e&&e.settings.horizontalScrolling&&(d.scrollLeft(g+c),e.settings.showOnHover&&f.call(b))},i=function(b){if(1===b.which){var d,g,h,i,j,k,l,m,n,o=b.data.pane,p=a(o).data("enscroll"),q=!0,r=function(){q&&(h!==i&&(a(o).scrollTop(h*n/m),i=h),e(r),f.call(o))},s=function(a){return q&&(h=a.clientY-k-j,h=Math.min(0>h?0:h,m)),!1},t=function(){return q=!1,c.body.style.cursor=l,this.style.cursor="",d.removeClass("dragging"),a(c.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical"),a(c).off("mouseout.enscroll.vertical"),!1};return d=a(p.verticalTrackWrapper).find(".enscroll-track"),g=d.children().first()[0],h=parseInt(g.style.top,10),n=o.scrollHeight-a(o).innerHeight(),j=b.clientY-a(g).offset().top,m=d.height()-a(g).outerHeight(),k=d.offset().top,a(c.body).on({"mousemove.enscroll.vertical":s,"mouseup.enscroll.vertical":function(a){t.call(g,a)}}),a(c).on("mouseout.enscroll.vertical",function(a){a.target.nodeName&&"HTML"===a.target.nodeName.toUpperCase()&&t.call(g,a)}),d.hasClass("dragging")||(d.addClass("dragging"),l=a(c.body).css("cursor"),this.style.cursor=c.body.style.cursor="ns-resize"),r(),!1}},j=function(b){if(1===b.which){var d,g,h,i,j,k,l,m,n,o=b.data.pane,p=a(o).data("enscroll"),q=!0,r=function(){q&&(h!==i&&(a(o).scrollLeft(h*j/n),i=h),e(r),f.call(o))},s=function(a){return q&&(h=a.clientX-l-k,h=Math.min(0>h?0:h,n),f.call(o)),!1},t=function(){return q=!1,d.removeClass("dragging"),c.body.style.cursor=m,this.style.cursor="",d.removeClass("dragging"),a(c.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal"),a(c).off("mouseout.enscroll.horizontal"),!1};return d=a(p.horizontalTrackWrapper).find(".enscroll-track"),g=d.children().first()[0],h=parseInt(g.style.left,10),j=o.scrollWidth-a(o).innerWidth(),k=b.clientX-a(g).offset().left,n=d.width()-a(g).outerWidth(),l=d.offset().left,a(c.body).on({"mousemove.enscroll.horizontal":s,"mouseup.enscroll.horizontal":function(a){t.call(g,a)}}),a(c).on("mouseout.enscroll.horizontal",function(a){a.target.nodeName&&"HTML"===a.target.nodeName.toUpperCase()&&t.call(g,a)}),d.hasClass("dragging")||(d.addClass("dragging"),m=a("body").css("cursor"),this.style.cursor=c.body.style.cursor="ew-resize"),r(),!1}},k=function(a){var b,c,e,f,i=this.data("enscroll");i&&(a=d.getEvent(a),e=a.detail?-a.detail:window.client&&window.client.engine.opera&&window.client.engine.opera<9.5?-a.wheelDelta:a.wheelDelta,f=i.settings.scrollIncrement,a.wheelDelta&&a.wheelDeltaX&&a.wheelDelta===a.wheelDeltaX||a.axis&&a.HORIZONTAL_AXIS&&a.axis===a.HORIZONTAL_AXIS?(b=this.scrollLeft(),h(this,0>e?f:-f),b!==this.scrollLeft()&&d.preventDefault(a)):(c=this.scrollTop(),g(this,0>e?f:-f),c!==this.scrollTop()&&d.preventDefault(a)))},l=function(){var b,c,d,e=a(this),f=e.data("enscroll");f&&(f.settings.verticalScrolling&&(c=a(f.verticalTrackWrapper).find(".enscroll-track")[0],b=c.firstChild,d=e.scrollTop()/(this.scrollHeight-e.innerHeight()),d=isNaN(d)?0:d,b.style.top=d*(a(c).height()-a(b).outerHeight())+"px"),f.settings.horizontalScrolling&&(c=a(f.horizontalTrackWrapper).find(".enscroll-track")[0],b=c.firstChild,d=e.scrollLeft()/(this.scrollWidth-e.innerWidth()),d=isNaN(d)?0:d,b.style.left=d*(a(c).width()-a(b).innerWidth())+"px"))},m=function(b){var c,d=a(this),e=d.data("enscroll");if(b.target===this&&e){switch(c=e.settings.scrollIncrement,b.keyCode){case 32:case 34:return g(this,d.height()),!1;case 33:return g(this,-d.height()),!1;case 35:return g(this,this.scrollHeight),!1;case 36:return g(this,-this.scrollHeight),!1;case 37:return h(this,-c),!1;case 38:return g(this,-c),!1;case 39:return h(this,c),!1;case 40:return g(this,c),!1}return!0}},n=function(a){var b,c,d,f,i,j,k,l=this,m=function(a){b=a.touches[0].clientX,c=a.touches[0].clientY,d||(d=c===i&&b===f?void 0:Math.abs(i-c)>Math.abs(f-b)?"y":"x"),a.preventDefault()},n=function(){j&&("y"===d?(g(l,i-c),k=i-c,i=c):"x"===d&&(h(l,f-b),k=f-b,f=b),e(n))},o=function(){var a=0,b=Math.round(Math.abs(1.75*k)),c=10*k*Math.log(2);this.removeEventListener("touchmove",m,!1),this.removeEventListener("touchend",o,!1),j=!1,e(function f(){if(a!==b&&!j){var i=Math.round(c/b*Math.pow(2,-10*a/b+1));isNaN(i)||0===i||(a+=1,"y"===d?g(l,i):h(l,i),e(f))}})};1===a.touches.length&&(f=a.touches[0].clientX,i=a.touches[0].clientY,j=!0,this.addEventListener("touchmove",m,!1),this.addEventListener("touchend",o,!1),e(n))},o={reposition:function(){return this.each(function(){var b,c,d,e,f,g=a(this),h=g.data("enscroll"),i=function(a,b,c){a.style.left=b+"px",a.style.top=c+"px"},j=function(b,c){var d=a(b).css(c),e=/^-?\d+/.exec(d);return e?+e[0]:0};h&&(d=g.position(),f=a.browser.msie&&/^6/.test(a.browser.version),f&&(e=g.offsetParent()[0]),b=h.corner,h.settings.verticalScrolling&&(c=h.verticalTrackWrapper,i(c,d.left+g.outerWidth()-a(c).width()-j(this,"border-right-width")-(f?j(e,"padding-left"):0),d.top+j(this,"border-top-width")+(f?j(e,"border-top-width"):0))),h.settings.horizontalScrolling&&(c=h.horizontalTrackWrapper,i(c,d.left+j(this,"border-left-width")-(f?j(e,"padding-left"):0),d.top+g.outerHeight()-a(c).height()-j(this,"border-bottom-width")+(f?j(e,"border-bottom-width"):0))),b&&i(b,d.left+g.outerWidth()-a(b).outerWidth()-j(this,"border-right-width")-(f?j(e,"padding-left"):0),d.top+g.outerHeight()-a(b).outerHeight()-j(this,"border-bottom-width")+(f?j(e,"border-bottom-width"):0)))})},resize:function(){return this.each(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=a(this),s=r.data("enscroll");r.is(":visible")&&s&&(b=s.settings,b.verticalScrolling&&(e=s.verticalTrackWrapper,c=r.innerHeight(),f=c/this.scrollHeight,g=a(e).find(".enscroll-track")[0],j=a(e).find("."+b.scrollUpButtonClass),k=a(e).find("."+b.scrollDownButtonClass),i=b.horizontalScrolling?c-a(s.horizontalTrackWrapper).find(".enscroll-track").outerHeight():c,i-=a(g).outerHeight()-a(g).height()+j.outerHeight()+k.outerHeight(),n=g.firstChild,p=Math.max(f*i,b.minScrollbarLength),p-=a(n).outerHeight()-a(n).height(),e.style.display="none",g.style.height=i+"px",n.style.height=p+"px",1>f&&(f=r.scrollTop()/(this.scrollHeight-r.height()),n.style.top=f*(i-p)+"px",e.style.display="block")),b.horizontalScrolling&&(e=s.horizontalTrackWrapper,d=r.innerWidth(),f=d/this.scrollWidth,g=a(e).find(".enscroll-track")[0],l=a(e).find("."+b.scrollLeftButtonClass),m=a(e).find("."+b.scrollRightButtonClass),h=b.verticalScrolling?d-a(s.verticalTrackWrapper).find(".enscroll-track").outerWidth():d,h-=a(g).outerWidth()-a(g).width()+l.outerWidth()+m.outerWidth(),n=g.firstChild,o=Math.max(f*h,b.minScrollbarLength),o-=a(n).outerWidth()-a(n).width(),e.style.display="none",g.style.width=h+"px",n.style.width=o+"px",1>f&&(f=r.scrollLeft()/(this.scrollWidth-r.width()),n.style.left=f*(h-o)+"px",e.style.display="block"),s._prybar&&(q=s._prybar,this.removeChild(q),b.verticalScrolling&&(q.style.width=this.scrollWidth+a(s.verticalTrackWrapper).find(".enscroll-track").outerWidth()+"px",this.appendChild(q)))),s.corner&&(s.corner.style.display=s.verticalTrackWrapper&&s.horizontalTrackWrapper&&a(s.verticalTrackWrapper).is(":visible")&&a(s.horizontalTrackWrapper).is(":visible")?"block":"none"))})},startPolling:function(){return this.each(function(){var b,c=a(this).data("enscroll"),d=this,e=a(d),f=-1,g=-1,h=-1,i=-1,j=function(){if(c.settings.pollChanges){var a=d.scrollWidth,k=d.scrollHeight,l=e.width(),m=e.height(),n=e.offset();(c.settings.verticalScrolling&&(m!==g||k!==i)||c.settings.horizontalScrolling&&(l!==f||a!==h))&&(h=a,i=k,o.resize.call(e)),(b.left!==n.left||b.top!==n.top||l!==f||m!==g)&&(b=n,f=l,g=m,o.reposition.call(e)),setTimeout(j,350)}};c&&(c.settings.pollChanges=!0,i=d.scrollHeight,h=d.scrollWidth,b=e.offset(),j())})},stopPolling:function(){return this.each(function(){var b=a(this).data("enscroll");b&&(b.settings.pollChanges=!1)})},destroy:function(){return this.each(function(){var c,d,e=a(this),f=e.data("enscroll");f&&(o.stopPolling.call(e),d=f._mouseScrollHandler,f.settings.verticalScrolling&&(c=f.verticalTrackWrapper,a(c).remove(),c=null),f.settings.horizontalScrolling&&(c=f.horizontalTrackWrapper,a(c).remove(),c=null),f._fadeTimer&&clearTimeout(f._fadeTimer),f.corner&&a(f.corner).remove(),f._prybar&&f._prybar.parentNode&&f._prybar.parentNode===this&&a(f._prybar).remove(),this.setAttribute("style",f._style||""),f._hadTabIndex||e.removeAttr("tabindex"),e.off("http://www.wanmei.com/public/js/scroll.enscroll.pane").off("http://www.wanmei.com/public/js/keydown.enscroll.pane").off("http://www.wanmei.com/public/js/mouseenter.enscroll.pane").data("enscroll",null),this.removeEventListener?(this.removeEventListener("mousewheel",d,!1),this.removeEventListener("DOMMouseScroll",d,!1),this.removeEventListener("touchstart",n,!1)):this.detachEvent&&this.detachEvent("onmousewheel",d),a(b).off("resize.enscroll.window"))})}};a.fn.enscroll=function(d){if(o[d])return o[d].call(this);var e=a.extend({verticalScrolling:!0,horizontalScrolling:!1,showOnHover:!1,scrollIncrement:20,minScrollbarLength:40,pollChanges:!0,drawCorner:!0,drawScrollButtons:!1,clickTrackToScroll:!0,verticalTrackClass:"vertical-track",horizontalTrackClass:"horizontal-track",horizontalHandleClass:"horizontal-handle",verticalHandleClass:"vertical-handle",scrollUpButtonClass:"scroll-up-btn",scrollDownButtonClass:"scroll-down-btn",scrollLeftButtonClass:"scroll-left-btn",scrollRightButtonClass:"scroll-right-btn",cornerClass:"scrollbar-corner",zIndex:1,addPaddingToPane:!0,horizontalHandleHTML:'<div class="left"></div><div class="right"></div>',verticalHandleHTML:'<div class="top"></div><div class="bottom"></div>'},d);return this.each(function(){if(e.verticalScrolling||e.horizontalScrolling){var d,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=a(this),G=this,H=F.attr("style"),I=!0,J={position:"absolute","z-index":e.zIndex,margin:0,padding:0},K=function(a){k.call(F,a)},L=function(b,c){"string"==typeof c?a(b).html(c):"object"==typeof c&&null!==c&&c.nodeType&&1===c.nodeType&&b.appendChild(c)};if(e.verticalScrolling){p=c.createElement("div"),r=c.createElement("div"),t=c.createElement("a"),a(r).css("position","relative").addClass("enscroll-track").addClass(e.verticalTrackClass).appendTo(p),e.drawScrollButtons&&(u=c.createElement("a"),v=c.createElement("a"),a(u).css({display:"block","text-decoration":"none"}).attr("href","").html("&nbsp;").addClass(e.scrollUpButtonClass).on("click",function(){return g(G,-e.scrollIncrement),!1}).insertBefore(r),a(v).css({display:"block","text-decoration":"none"}).attr("href","").html("&nbsp;").on("click",function(){return g(G,e.scrollIncrement),!1}).addClass(e.scrollDownButtonClass).appendTo(p)),e.clickTrackToScroll&&a(r).on("click",function(b){b.target===this&&g(G,b.pageY>a(t).offset().top?F.height():-F.height())}),a(t).css({position:"absolute","z-index":1}).attr("href","").addClass(e.verticalHandleClass).mousedown({pane:this},i).click(function(){return!1}).appendTo(r),L(t,e.verticalHandleHTML),a(p).css(J).insertAfter(this),e.showOnHover&&a(p).css("opacity",0).on("mouseover.enscroll.vertical",function(){f.call(G,!1)}).on("mouseout.enscroll.vertical",function(){f.call(G)}),z=a(r).outerWidth(),e.addPaddingToPane&&F.css({width:F.width()-z+"px","padding-right":parseInt(F.css("padding-right"),10)+z+"px"});try{D=parseInt(F.css("outline-width"),10),0!==D&&!isNaN(D)||"none"!==F.css("outline-style")||F.css("outline","none")}catch(M){F.css("outline","none")}}e.horizontalScrolling&&(d=c.createElement("div"),q=c.createElement("div"),s=c.createElement("a"),a(q).css({position:"relative","z-index":1}).addClass("enscroll-track").addClass(e.horizontalTrackClass).appendTo(d),e.drawScrollButtons&&(w=c.createElement("a"),x=c.createElement("a"),a(w).css("display","block").attr("href","").on("click",function(){return h(G,-e.scrollIncrement),!1}).addClass(e.scrollLeftButtonClass).insertBefore(q),a(x).css("display","block").attr("href","").on("click",function(){return h(G,e.scrollIncrement),!1}).addClass(e.scrollRightButtonClass).appendTo(d)),e.clickTrackToScroll&&a(q).on("click",function(b){b.target===this&&h(G,b.pageX>a(s).offset().left?F.width():-F.width())}),a(s).css({position:"absolute","z-index":1}).attr("href","").addClass(e.horizontalHandleClass).click(function(){return!1}).mousedown({pane:this},j).appendTo(q),L(s,e.horizontalHandleHTML),a(d).css(J).insertAfter(this),e.showOnHover&&a(d).css("opacity",0).on("mouseover.enscroll.horizontal",function(){f.call(G,!1)}).on("mouseout.enscroll.horizontal",function(){f.call(G)}),y=a(q).outerHeight(),e.addPaddingToPane&&F.css({height:F.height()-y+"px","padding-bottom":parseInt(F.css("padding-bottom"),10)+y+"px"}),(!a.browser.msie||a.browser.msie&&a.browser.version>7)&&(E=document.createElement("div"),a(E).css({width:"1px",height:"1px",visibility:"hidden",padding:0,margin:"-1px"}).appendTo(this))),e.verticalScrolling&&e.horizontalScrolling&&e.drawCorner&&(A=c.createElement("div"),a(A).addClass(e.cornerClass).css(J).insertAfter(this)),C=F.attr("tabindex"),(!C||C.length<1)&&(I=!1);try{B=F.css("outline"),(!B||B.length<1)&&F.css("outline","none")}catch(M){F.css("outline","none")}F.on({"http://www.wanmei.com/public/js/scroll.enscroll.pane":function(a){l.call(this,a)},"http://www.wanmei.com/public/js/keydown.enscroll.pane":m}).css("overflow","hidden").data("enscroll",{settings:e,horizontalTrackWrapper:d,verticalTrackWrapper:p,corner:A,_prybar:E,_mouseScrollHandler:K,_hadTabIndex:I,_style:H}),a(b).on("resize.enscroll.window",function(){o.reposition.call(F)}),e.showOnHover&&F.on("http://www.wanmei.com/public/js/mouseenter.enscroll.pane",function(){f.call(this)}),this.addEventListener?(this.addEventListener("mousewheel",K,!1),this.addEventListener("DOMMouseScroll",K,!1),this.addEventListener("touchstart",n,!1)):this.attachEvent&&this.attachEvent("onmousewheel",K),e.pollChanges?o.startPolling.call(F):(o.resize.call(F),o.reposition.call(F)),a(r,q).removeClass(e.verticalTrackClass).addClass(e.verticalTrackClass)}})}}(jQuery,window,document);/*  |xGv00|6a3f323cbf55a3ce3fc4056231c64de7 */