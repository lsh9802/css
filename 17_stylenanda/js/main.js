$(function(){
    // product2 class는 모두숨김
    $(".product2").hide()
    $("ul.tab li").click(function(){
        // li 모두 on class 제거
        $("ul li").removeClass("on");
        // 선택된 li만 on class 추가
        $(this).addClass("on");
        // tab의 몇번째를 클릭한 번째 알아내기
        let num = $(this).index();
        console.log(num)
        // product 모두 숨기고
        $(".product").hide();
        // num번째와 같은 product 제품목록을 보여달라
        $(".product").eq(num).show();


    })





})