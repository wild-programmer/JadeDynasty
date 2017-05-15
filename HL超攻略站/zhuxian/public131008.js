$(document).ready(function(){
						   
	$(".search_hot").html('热门搜索：<a target="_blank" href="http://event51.wanmei.com/zhuxian/201309/zx_zh/">最新版本终极攻略</a><span> | </span><a target="_blank" href="http://event51.wanmei.com/zhuxian/201309/zx_zh/">12职业全面进化</a>');
	
	$('.butbox a').css('opacity', 0).hover(function(){
		$(this).stop().fadeTo(400, 1);
	},function(){
		$(this).stop().fadeTo(350, 0);
	});
	
	$(".down_hover").hover(function(){
		$(this).children(".downpop").show();					   
	},function(){
		$(this).children(".downpop").hide();
	});
	
	if($(".neli_list p").size() > 0){
		$(".neli_list p:nth-child(5n)").addClass('borbm'); 
		$(".neli_list p:nth-child(25n)").removeClass('borbm'); 
	};
	
	if($("#news_text").size() > 0){
		cont_txt();	
	}
	
	$(".close_btn").click(function(){
		removeSWF('video_box');
		lightbox.openScreen('video_pop');				   
	});
	
	$(".weibo span").hover(function(){
		var mmu = $(this).attr("tip");
		$(".weibo span").removeClass("hover");
		$(this).addClass("hover");
		$(".weibo iframe").hide();
		$(".weibo iframe").eq(mmu).show();
	});
	
	$(".navbox").hover(function(){
		$(".navbox").stop().animate({"height":"194px"},450);							
	},function(){
		$(".navbox").stop().animate({"height":"60px"},450);	
	});
	
	$(".infolist").hover(function(){
		$(this).stop().children(".infopop").slideDown("fast");
	},function(){
		$(this).stop().children(".infopop").slideUp("fast");	
	});
	
	$(".syslist").hover(function(){
		var mms = $(this).children(".syspop").height();
		var heights = 100+mms;
		$(this).parent(".system").css("height",heights);
		$(this).addClass("sysposit");
		$(this).children(".sys_btn").addClass("sys_hover");	
		$(this).children(".syspop").show();
	},function(){
		$(".system").css("height","42px");
		$(".syslist").removeClass("sysposit")
		$(".sys_btn").removeClass("sys_hover");
		$(".syspop").hide();
	});
	
	$(".sizeZoom a").click(function(){
		$(this).addClass("red").siblings().removeClass("red");
	});
	
	$(".open_video").click(function(){
		lightbox.clockScreen("video_pop");
		var video_address = $(this).attr("link");
		addVideoPlayer('video_box',600,400,{playlist:video_address,autoPlay:true});
	});
	
	$(".mus_fx").hover(function(){
		$(this).children(".muspop").show();							
	},function(){
		$(".muspop").hide();	
	});
	
});
function sizeZoom(size){
	$(".newstext").css({"font-size":size+"px","line-height":(size*2-2) + "px"});
};

function cont_txt(){
	var textbt = document.getElementById("textbt").innerHTML;
	var news_text = document.getElementById("news_text").getElementsByTagName("a");
	for(var i=0; i<news_text.length; i++){
		if(news_text[i].innerHTML == textbt){
			news_text[i].className = "hover";
		};
	};	
};


