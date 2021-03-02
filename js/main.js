/*マウスで上に置いたときに赤色の表示に代わり離すと黒に戻る{*/
$("a#home_nav_header").hover(function(){
    $("a#home_nav_header").css("color","#FF7100");
}, function(){
        $("a#home_nav_header").css("color","#000000");
});
$("a#fog_nav_header").hover(function(){
    $("a#fog_nav_header").css("color","#FF7100");
}, function(){
        $("a#fog_nav_header").css("color","#000000");
});
$("a#poster_nav_header").hover(function(){
    $("a#poster_nav_header").css("color","#FF7100");
}, function(){
        $("a#poster_nav_header").css("color","#000000");
});
$("a#contact_nav_footer").hover(function(){
    $("a#contact_nav_footer").css("color","#FF7100");
}, function(){
        $("a#contact_nav_footer").css("color","#000000");
});
$("a#fog_nav_footer").hover(function(){
    $("a#fog_nav_footer").css("color","#FF7100");
}, function(){
        $("a#fog_nav_footer").css("color","#000000");
});
$("a#home_nav_footer").hover(function(){
    $("a#home_nav_footer").css("color","#FF7100");
}, function(){
        $("a#home_nav_footer").css("color","#000000");
});
$("a#poster_nav_footer").hover(function(){
    $("a#poster_nav_footer").css("color","#FF7100");
}, function(){
        $("a#poster_nav_footer").css("color","#000000");
});
$("a#nav_twitter").hover(function(){
    $("a#nav_twitter h2").css("color","#FF7100");
}, function(){
        $("a#nav_twitter h2").css("color","#000000");
});
$("a#nav_instagram").hover(function(){
    $("a#nav_instagram h2").css("color","#FF7100");
}, function(){
        $("a#nav_instagram h2").css("color","#000000");
});
$("a#nav_blog").hover(function(){
    $("a#nav_blog h2").css("color","#FF7100");
}, function(){
        $("a#nav_blog h2").css("color","#000000");
});
/*}マウスで上に置いたときに赤色の表示に代わり離すと黒に戻る*/
/*左から出てくるメニュー{*/
$(function(){
    var html_creation='<a id="nav_brand" class="navbar-brand"><img src="../img/fog_menu.png" width="45" height="45" href="#" class="d-inline-block align-top" alt="fog"></a>';
    $("div#nav_invisible").append(html_creation);
    var nav_position=$("header").offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop()>nav_position){
            $("nav#navigator_top").css("background-color","rgba(255,255,255,1.0)");
            $("div#nav_header").show();
            $("div#nav_invisible").hide();
        }
        else{
            $("nav#navigator_top").css("background-color","rgba(255,255,255,0.0)");
            $("div#nav_header").hide();
            $("div#nav_invisible").show();
        }
    });
    var dis=250;
    $("a#nav_brand").on('click',function(){
        $("nav#slide").animate({"margin-left":"+="+dis+"px"},200);
        $("nav#navigator_top").animate({"margin-left":"+="+dis+"px"},200);
        dis*=-1;
    });
});
/*}左から出てくるメニュー*/
/*画面の大きさによってアイコンバーの表示と非表示が切り替わる{*/
$(function(){
    var x = 750;
    var w = $(window).width();
    if (w <= x) {
        $("nav#navigator_bottom").show();
    } else {
        $("nav#navigator_bottom").hide();
    }
});
$(window).resize(function(){
    var x = 750;
    var w = $(window).width();
    if (w <= x) {
        $("nav#navigator_bottom").show();
    } else {
        $("nav#navigator_bottom").hide();
    }
});
/*}画面の大きさによってアイコンバーの表示と非表示が切り替わる*/
/*スクロールしたときにアイコンバーの表示と非表示が切り替わる{*/
$(function(){
    var nav_position_header=$("header").offset().top;
    var scroll_before=0;
    var scroll_after=0;
	$(window).on('scroll',function(){
		scroll_after=$(window).scrollTop();
		if(scroll_after < scroll_before || scroll_before<nav_position_header){
			$('nav#navigator_bottom').animate({"bottom" : '0px'},200,function(){
                $(this).stop(true,true);
            });
		} else if(scroll_after > scroll_before+5){
			$('nav#navigator_bottom').stop(true,true).animate({"bottom" : '-80px'},150,function(){
                $(this).stop(true,true);
            });
        }
        scroll_before=scroll_after;
	});
});
/*}スクロールしたときにアイコンバーの表示と非表示が切り替わる*/
/*ビューワー{*/
/*}ビューワー*/
/*ロード画面アニメーション{*/
if($('div#load').get(0)){
    $('div#load').load('load.html');
    $(function(){
        var x = 750;
        var w = $(window).width();
        if(w<=x){
            $("nav#navigator_bottom").hide();
        }
        $('#navigator_top').hide();
        setTimeout('bar()');
    });
}
var count=0;
function bar(){
    $('#bar1').animate({
        'height':'47.633'
    },300).delay(1500).animate({
        'height':'0'
    },300);
    $('#bar2').delay(300).animate({
        'height':'47.633'
    },300).delay(1500).animate({
        'height':'0'
    },300);
    $('#bar3').delay(600).animate({
        'height':'47.633'
    },300).delay(1500).animate({
        'height':'0'
    },300);
    $('#bar4').delay(900).animate({
        'height':'47.633'
    },300).delay(1500).animate({
        'height':'0'
    },300);
    $('#bar5').delay(1200).animate({
        'height':'47.633'
    },300).delay(1500).animate({
        'height':'0'
    },300);
    count++;
    if(count==2){
        clearTimeout(bar);
        $('div#load').fadeOut();
        $('#navigator_top').show();
        var x = 750;
        var w = $(window).width();
        if(w<=x){
            $("nav#navigator_bottom").show();
        }
    }
    var bar=setTimeout('bar()',3500);
}
/*}ロード画面アニメーション*/
