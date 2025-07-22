$(function(){
    // popup창 닫기버튼을 클릭하면 높이를 0
    $(".btn_close").click(function(){
        $('.popup').slideUp();
    })
})

$(function(){
    // 주메뉴에 마우스를 올려을때
    $(".gnb>li>a").mouseenter(function(){
        $("header").stop().animate({'height':'370px'},300)
        $(".depth2").stop().fadeIn(300);


    })
    // 주메뉴에서 마우스를 벗어났을때
       $("header").mouseleave(function(){
        $("header").stop().animate({'height':'103px'},300)
        $(".depth2").stop().fadeOut(300)

   })
})

// 매인슬라이드
$(document).ready(function(){
  $('.slide').slick({
    autoplay: true,
    // 페이지버튼보이기
    dots:true
  });
});

// 배너슬라이드
$(document).ready(function(){
  $('.bannerslide').slick({
    // 자동실행
    autoplay: true,
    // 좌우버튼
    arrows:false,
    // 페이지버튼
    dots:true
  });
});


// tab 기능
// tab li를 클릭하면 해당 li에 on class추가
// 나머지는 on class 제거

$(".tab li").click(function(e){
  // 위로 올라가는 기능 방지
  e.preventDefault()
  $(".tab li").removeClass("on");
  $(this).addClass("on")
})


// list 박스를 클릭하면 on class 추가/삭제
$(".content ul.list li").click(function(e){
  // 위로 올라가는 #기능 방지
  e.preventDefault()
  $(".content ul.list li").removeClass("on");
  $(this).addClass("on")
})
