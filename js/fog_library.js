$(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if(results != null){
            return results[1] || 0;
        }
    }
    var p = $.urlParam('p');
    if(p>0){
        p=Math.ceil(p);
    }
    else if(p<0){
        p=p*(-1);
        p=Math.ceil(p);
    }
    $.getJSON("../json/fog_detail.json",function(data){
        var object_array=[];
        var data_length=data.fog_detail.length;
        var html;
        if(p==undefined){
            object_array.push(data.fog_detail[data_length-1]);
            object_array.push(data.fog_detail[data_length-2]);
            object_array.push(data.fog_detail[data_length-3]);
            if($("div#main").get(0)){
                html=html_creation(object_array);
                $("div#main").append(html);
            }
            if($("div#pagination").get(0)){
                html=pagination(data_length,1);
                $("div#pagination").append(html);
            }
        }
        else{
            var data_length_transition=data_length-((p-1)*3);
            if(data_length_transition>=3){
                object_array.push(data.fog_detail[data_length_transition-1]);
                object_array.push(data.fog_detail[data_length_transition-2]);
                object_array.push(data.fog_detail[data_length_transition-3]);
                if($("div#main").get(0)){
                    html=html_creation(object_array);
                    $("div#main").append(html);
                }
                if($("div#pagination").get(0)){
                    html=pagination(data_length,p);
                    $("div#pagination").append(html);
                }
            }
            else if(data_length_transition==2){
                object_array.push(data.fog_detail[data_length_transition-1]);
                object_array.push(data.fog_detail[data_length_transition-2]);
                if($("div#main").get(0)){
                    html=html_creation(object_array);
                    $("div#main").append(html);
                }
                if($("div#pagination").get(0)){
                    html=pagination(data_length,p);
                    $("div#pagination").append(html);
                }
            }
            else if(data_length_transition==1){
                object_array.push(data.fog_detail[data_length_transition-1]);
                if($("div#main").get(0)){
                    html=html_creation(object_array);
                    $("div#main").append(html);
                }
                if($("div#pagination").get(0)){
                    html=pagination(data_length,p);
                    $("div#pagination").append(html);
                }
            }
            else{
                object_array.push(data.fog_detail[data_length-1]);
                object_array.push(data.fog_detail[data_length-2]);
                object_array.push(data.fog_detail[data_length-3]);
                if($("div#main").get(0)){
                    html=html_creation(object_array);
                    $("div#main").append(html);
                }
                if($("div#pagination").get(0)){
                    html=pagination(data_length,1);
                    $("div#pagination").append(html);
                }
            }
        }
    });
});

function read(existence,number){
    var read_html="";
    if(existence=="exist"){
        read_html='<a href="read.html?id='+number+'"><h4 style="padding-top:40px;">読んでみる</h4></a>';
    }
    return read_html
}

function existence_check(obj){
    var check=[];
    var check_box=[];
    var key=Object.keys(obj[0]);
    for(var i=0;i<obj.length;i++){
        for(var j=1;j<Object.keys(obj[i]).length;j++){
            if(obj[i][key[j]]==""){
                check.push(check[key[j]]=0);
            }
            else{
                check.push(check[key[j]]=1);
            }
        }
        check_box.push(check);
        check=[];
    }
    return check_box;
}

function check_html_part(obj,check,times){
    if(times==1){
        var dir=[' dir="rtl"',' dir="ltr"']
    }
    else{
        var dir=["",""];
    }
    var html='<section id="section_'+times+'"><div class="container py-4" id="main_div_'+times+'"><div class="row py-4"'+dir[0]+' style="text-align:center;"><div class="col-md-6"><div class="row"><div id="fog_cover">';
    if(check.cover==1){
        html+='<img src="../img/fog_'+obj.number+'/fog_'+obj.number+'_1.png" style="width:100%;"></div></div></div>';
    }
    else{
        html+='<img src="../img/no_image.png" style="width:100%;"></div></div></div>';
    }
    html+='<div class="col-md-6 py-3" style="margin-top:13%;" dir="ltr"><h1>〖'+obj.title+'〗</h1>';
    html+='<h2>F.O.G 第'+obj.number+'号</h2>';
    html+='<h4>『説明』</h4><h5>'+obj.description+'</h5>';
    if(check.year==1){
        html+='<h5'+dir[1]+'>『完成年』　'+obj.year+'年</h5>';
    }
    else{
        html+='<h5'+dir[1]+'>『完成年』　不明</h5>';
    }
    if(check.pages==1){
        html+='<h5'+dir[1]+'>『ページ数』　'+obj.pages+' ページ</h5>';
    }
    else{
        html+='<h5'+dir[1]+'>『ページ数』　不明</h5>';
    }
    return html;
}

function html_creation(obj){
    var check=existence_check(obj);
    var html="";
    for(var i=0;i<obj.length;i++){   
        html+=check_html_part(obj[i],check[i],i);
        html+=read(obj[i].existence,obj[i].id)+'</div></div></div></section>';
    }
    return html;
}

function pagination(data_length,p){
    var html='<nav><ul class="pagination justify-content-center">';
    if(data_length%3>0){
        var p_length=Math.floor(data_length/3)+1;
    }
    else{
        var p_length=Math.floor(data_length/3);
    }
    if(p>1){
        html+='<li class="page-item"><a class="page-link" href="fog_library.html?p='+(p-1)+'" aria-label="前へ"><<span class="sr-only">前へ</span></a></li>';
    }
    if(p<p_length){
        for(var i=p;i<p+3;i++){
            if(i==p){
                html+='<li class="page-item active"><a class="page-link" href="#">'+i+'</a></li>';
            }
            else{
                html+='<li class="page-item"><a class="page-link" href="fog_library.html?p='+i+'">'+i+'</a></li>';
            }
            if(i==p_length){
                break;
            }
        }
        html+='<li class="page-item"><a class="page-link" href="fog_library.html?p='+(p+1)+'" aria-label="次へ">><span class="sr-only">次へ</span></a></li>';
    }
    else if(p==p_length){
        html+='<li class="page-item active"><a class="page-link" href="fog_library.html?p='+p+'">'+p+'</a></li>';
    }
    html+='</ul class="pagination"></nav>';
    return html;
}