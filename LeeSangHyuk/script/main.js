$(function(){
    $('.slide').slick({
    // 자동실행
    autoplay:true,
    arrows:false,
    autoplayspeed:3000
    })

    // 패밀리 버튼을 클릭하면 list 보이기/숨김(toggle())
    $(".fm").click(function(){
        $(".family ul").toggle();
    })

    // 팝업창
    $(".notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })

    // 닫기 버튼을 클릭하면 팝업창이 닫기
    $(".btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })

    // 2단메뉴
    $(".gnb").mouseenter(function(){
        $(".depth2,.gnbbg").show();
    })

    $(".gnb").mouseleave(function(){
        $(".depth2,.gnbbg").hide();
    })



})