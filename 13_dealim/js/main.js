$(function(){
    // gnb에 마우스를 호버하면 전체 감싼 header_wrap 320px
    $(".gnb").mouseenter(function(){
        $(".header_wrap").stop().animate({'height':320},200)
        $(".depth2").show();
    })
    
    // 전체 감싼 header_wrap에 마우스를 벗어나면 전체 감싼 header_wrap 70px
    $(".header_wrap").mouseleave(function(){
        $('.header_wrap').stop().animate({'height':70},200)
        $(".depth2").hide();
    })




})