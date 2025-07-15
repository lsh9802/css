$(function(){
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

// 자동 실행
autoplay:{
    delay:3000,
},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // 페이지 버튼을 숫자로 표시
    type:'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// 배너슬라이드 slide슬라이드
 $('.banner_slide').slick({
  // 자동실행
    autoplay: true,
    // 한 화면에 보여줄 슬라이드 개수
    slidesToShow:2,
    // 좌우버튼 숨기기
    arrows:false,
    //페이지 버튼 보이기
    dots:true
  });

  // 모바일 메뉴m.gnb li a를 클릭하면
  $(".m_gnb>ul>li>a").click(function(){
    $(".m_gnb>ul>li>a").removeClass("on")
    $(this).toggleClass("on")
    $(this).next().slideToggle().parent().siblings().find(".depth2").slideUp();
  })

  //햄버거 버튼을 클릭하면 m_side_wrap 을 left -100% 에서 left 0
  $(".m_btn").click(function(){
    $(".cover").fadeIn()
    $(".m_side_wrap").animate({"left":0},300)
  })

  // x버튼 .m_close버튼을 클릭하면 m_side_wrap left:-100%
  $(".m_close").click(function(){
    $(".m_side_wrap").animate({"left":'-100%'},300)
    $(".cover").fadeOut()
  })

  // 왼쪽아이콘 중에 li 를 클릭하면 on클래스 추가
  $("ul.left_icon li").click(function(){
    $("ul.left_icon li").removeClass('on')
    $("ul.right_icon li").removeClass('on')

    $(this).addClass("on")
  })
  //오늘쪽아이콘에 li를 클릭하면 on클래스 추가
  $("ul.right_icon li").click(function(){
    $("ul.right_icon li").removeClass('on')
    $("ul.left_icon li").removeClass(' on')
    $(this).addClass("on")
  })

  // 쿠키정보를 확인해서 쿠키정보가 있다 숨김
  // 쿠키정보에 아무런 data가 저장되어 있지 안음 보여줌
  if(GetCookie('subway')=='today'){
    $('.popup').hide()
  }else{
    $('.popup').show()
  }

// 팝업창 스크립트
  $("#today_close,.popup .close label").click(function(){
    // setCookie함수를 호출
    if($("#today_close").is(':checked')){
    // 쿠키정보를 생성한후 팝업창은 안보이게 숨김
    setCookie('subway','today',1);
    $(".popup").hide()
    }else{
      $('.popup').hide()
    }
  })

  // 닫기 버튼을 클릭하면 팝업창 숨기기
  $('.popup .close .txt_btn').click(function(){
    $(".popup").hide()
  })


// GetCookie
// Cookie정보
// 쿠키 -> 웹브라우저
			function GetCookie(name){
				var value=null, search=name+"=";
				if(document.cookie.length > 0){
					var offset=document.cookie.indexOf(search);
					if(offset != -1){
						offset+=search.length;
						var end=document.cookie.indexOf(";", offset);
						if(end == -1) end=document.cookie.length;
						value=unescape(document.cookie.substring(offset, end));
					}
				} return value;
			}
			// SetCookie
      // 쿠키 정보를 만듬 
			function setCookie(name, value, expiredays){
				var days=10;
				if(days){
					var date=new Date(); 
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires="; expires="+date.toGMTString();
				}else{
					var expires=""; 
				}
				document.cookie=name+"="+value+expires+"; path=/";
			}



})