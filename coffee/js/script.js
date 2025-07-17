$(function(){
    // popup창 닫기버튼을 클릭하면 높이를0
    $(".btn_close").click(function(){
        $('.popup').slideUp();
    })
})

$(function(){
    // 주메뉴에 마우스를 올렸을때
    $(".gnb>li>a").mouseenter(function(){
        $("header").stop().animate({'height':'370px'},300)
        $(".depth2").stop().fadeIn(300);


    })
    // 주메뉴에 마우스를 벗어났을때
        $("header").mouseleave(function(){
        $("header").stop().animate({'height':'103px'},300)
        $(".depth2").stop().fadeOut(300);
        
    })
})

$(document).ready(function(){
  $('.slide').slick({
    autoplay:true,
    // 페이지버튼
    dots:true
  });
});
