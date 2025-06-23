$(function(){
    $('.list').slick({
    // 자동실행
    autoplay: true,
    // 한화면에 보일 갯수
    slidesToShow:2,
    // 한번에 2개씩 스크롤할때
    slidesToScroll:1,
    // 좌우버튼 숨기기
    arrows:false,
    // 페이지버튼 보이기
    dots:true
    });
})