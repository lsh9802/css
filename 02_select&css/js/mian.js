// 제이쿼리를 사용할 준비작업(바인딩)
$(function(){
    // 제이쿼리 프로그램 실행
    // $("선택자").명령함수
    // 명령함스 css() -> jquary프로그램으로 css 접근할때 사용

    $("h1").css({"color":"red"});
    $(".date").css({"font-size":"80px","color":"pink","background":"purple"});
    $(".para").css({"font-size":"10px","border":"10px solid blue"});
    $("ul li:last-child").css({"font-size":48})
    $("a").css({"padding":"10px","border":"5px solid blue"})


})