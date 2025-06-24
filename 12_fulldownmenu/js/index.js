$(function(){
    $("ul.gnb").mouseenter(function(){
        $("#header_wrap").stop().animate({"height":380},300)
        // 2단메뉴를 보이게함
        $(".depth2").show();

    })


    // 전체 박스를 마우스에서 벗어나면 높이를 110px로 변경
    $("#header_wrap").mouseleave(function(){
        $("#header_wrap").stop().animate({"height":110},300)
        // 2단메뉴를 굼김
        $(".depth2").hide();
    })





})