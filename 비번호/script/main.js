$(function(){
    $('.slide').slick({
    // 로딩 되자마자 자동 실행
    autoplay: true,
    // 좌우버튼 숨김
    arrows:false,
    // 속도
    autoplaySpeed:3000,
    // fade효과
    fade:true
    // 상하 슬라이드 효과
    // vertical:true
  });

    // 공지사항에 첫번째를 클릭하면 팝업창이 보이게하기
    $(".notice ul li:first-child a").click(function(){
        $(".cover").show();
        $(".popup").show();
    })

    // 닫기 버튼을 클릭하면 팝업창이 닫기
    $(".btn_close").click(function(){
        $(".popup").hide();
        $(".cover").hide();
    })

    // 패밀리 버튼을 클릭하면 list 보이기/숨김(toggle())
    $(".fm").click(function(){
        $(".family ul").toggle();
    })

    // gnb에 마우스를 올리면 2단전체메뉴가 나오고
    // gnb 마우스를 벗어나면 2단전체메뉴가 안보이게

    $(".gnb").mouseenter(function(){
        $(".depth2,.gnbbg").show();
    })

    $(".gnb").mouseleave(function(){
        $(".depth2,.gnbbg").hide();
    })

})