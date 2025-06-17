$(function(){
// 제이쿼리 프로그램 실행
// btn1을 클릭하면 빨강 박스 숨김 이벤트
$("#btn1").click(function(){
    // 클릭했을때 명령
    $(".box div:first-child").hide();
})
// btn2를 클릭하면 빨강박스를 다시 보이기 이벤트
$("#btn2").click(function(){
    // 빨강 박스를 보이게
    $(".box div:first-child").show();
})

// 토글버튼을 클릭하면 노란박스를 숨김/보이기
$("#btn3").click(function(){
    $(".box div:nth-child(3)").toggle();
})

$("#btn4").click(function(){
    $(".box div:last-child").hide();
})
$("#btn5").click(function(){
    $(".box div:last-child").show();
})
})

