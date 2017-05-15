$(function(){
	$(".headnav a").hover(function () {
		$(this).stop().fadeTo(300, 1);
	}, function () {
		$(this).stop().fadeTo(300, 0);
	});
	
	$('.zc_list a').css('opacity', 0).hover(function(){
		$(this).stop().fadeTo(400, 1);
	},function(){
		$(this).stop().fadeTo(350, 0);
	});
	
	$("#regbtn").click(function(){
		$('#flart_regbar').show();								  
	});

	$(".topbtn").click(function(){
		$('html,body').animate({'scrollTop':0},500);							
	});
	
	$("#bp_btn a").click(function(){
		var p = $(this).attr("tip");
		$("#bp_btn a").removeClass("hover");
		$(this).addClass("hover");
		$(".pubbg3").attr("class","pubbg3 bg3_"+p);
		$(".bp_box").hide();
		$(".bp_box").eq(p).show();
	});
	
	$(".st_tab a").click(function(){
		var n = $(this).attr("tip");
		$(".st_tab a").removeClass("hover");
		$(this).addClass("hover");
		if(n){
			var s = "images/title_0"+n+".jpg";
			var videoaddress = $(this).attr("links");
			$(".st_uwp").hide();
			$(".st_uwp").eq(0).show();
			$(".st_img").attr("src",s);
			addVideo('st_video_player', 698, 396,
				{
					source:videoaddress,
					autoPlay:true
				}
			);
	
		}else{
			$(".st_uwp").hide();
			$(".st_uwp").eq(1).show();	
		}
		
	});
	
	$(".mus_fx").hover(function(){
		$(this).children(".muspop").show();							
	},function(){
		$(".muspop").hide();	
	});		   
});
/*wm.fastreg({
	game:'zhuxian2',
	card: 'ZXDWNMMXH82U5Y',
	box:'fastreg',
	css: 'error.htm'/*tpa=http://zhuxian.wanmei.com/features/js/event51.wanmei.com/zhuxian/201205/regforcard/master.css*/,
	width:230,
	height:220,
	wmrid: "RP74956997"
});
*/
$(function ($) {
	$('.closebtn').click(function () {
		$('#flart_regbar').stop().animate({ 'width': '0px' }, 500, function () {
			$('#regbox').hide();
			$('#flart_regbar').css('width', '46px');
			$('.btn_bar').show();
		});
		$('.btn_bar').click(function () {
			$(this).hide();
			$('#flart_regbar').css('width', '0px');
			$('#regbox').show();
			$('#flart_regbar').stop().animate({ 'width': '328px' }, 500);
		});
	});
	
	$(".libaobtn").click(function(){
		var widthMore = (document.documentElement.scrollWidth-640)/2;
		//$('html,body').animate({scrollTop: 480}, 400);
		$(".showfirst,.showbg").show();
		$(".showfirst").css("left",widthMore);
	});
	
	$(".ashowbs").click(function(){
		$(".showfirst").hide();
		$(".showsecond").show();
	});
	
	$(".closereg").click(function(){	
		$(".showfirst,.showbg,.showsecond").hide();
	});
});