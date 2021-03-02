$(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if(results != null){
            return results[1] || 0;
        }
    }
    var id = $.urlParam('id');
    if(id>0){
        id=Math.ceil(id);
    }
    else if(id<0){
        id=id*(-1);
        id=Math.ceil(id);
    }
    $.getJSON("../json/fog_detail.json",function(data){
        var obj=data.fog_detail[id];
        console.log(obj);
        if($("div.slick").get(0)){
            html='<img id="img_part" alt="最初" src="../img/start.png">';
            for(var i=0;i<obj.pages;i++){
                html+='<img id="img_part" alt="画像'+(i+1)+'" src="../img/fog_'+obj.number+'/fog_'+obj.number+'_'+(i+1)+'.png">';
            }
            html+='<img id="img_part" alt="最後" src="../img/end.png"></img>';
            $("div.slick").append(html);
        }
        $('.slick').slick({
            rtl:true,
            centerMode:false,
            variableWidth:false,
            arrows:false,
            infinite:false,
            slidesToShow:2,
            slidesToScroll:2,
            responsive:[
                {
                    breakpoint:630,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,
                    }
                },
            ]
        });
    });
});
$(function(){
    var x = 750;
    var w = $(window).width();
    if (w <= x) {
        $("div#box").css('width','100vw');
    } else {
        $("div#box").css('width','90vw');
    }
});
$(window).resize(function(){
    var x = 630;
    var w = $(window).width();
    if (w <= x) {
        $("div#box").css('width','100vw');
    } else {
        $("div#box").css('width','80vw');
    }
});
/*function ChangeFullScreen(elem){
	elem = elem[0];
    $("img#img_part").css('height','100vh');
	if (elem.requestFullscreen) {
        elem.requestFullscreen(); 
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); 
    }
};
function ExitFullScreen(){
    $("img#img_part").css('height','80vh');
	if (document.webkitCancelFullScreen) {
	    document.webkitCancelFullScreen();
	} else if (document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	} else {
	    document.exitFullscreen();
	}
};*/