let header = document.querySelector("header");
console.log(header);
let mbtn = document.querySelector(".m_btn");
console.log(mbtn);
mbtn.addEventListener("click",function(){
    header.classList.toggle("on");
})


// 스크롤바 이벤트에 따라서 위치에 따라서 header숨기고 보이게함
$(function(){
    // 스크롤바를 움직이는  이벤트
    // 스크롤바의 이전 위치를 기억하는 변수
    let preNum = 0
    document.addEventListener("scroll",function(){
        // 현재위치의 스크롤바의 위치를 알려주는함수
        let nowNum = $(window).scrollTop()
        console.log(nowNum)

        if(nowNum > preNum){
            // header를 안보이게 하게
           $("header").addClass('move') 
        }else{
            // header를 보이게함
            $("header").removeClass('move')
        }
         preNum = nowNum
    })

})
    $(".line-draw2").each(function(i,path){
        let lng = path.getTotalLength()
        console.log("총길이값",lng)
    })

    // scrollar 함수를 호출
    $(".animate").scrolla({
        // 모바일에서 적용
        mobile:false,
        // 스크롤바에 해당 class에 오면 제실행
        once:false
    })
    
    $(function(){
    $(".tab_btn li").click(function(e){
        e.preventDefault()
        $(".tab_btn li").removeClass('on');
        $(this).addClass('on');
    })
})

gsap.timeline({
    scrollTrigger:{
        scrub:2,
        trigger:"#joineg .txtbox span",
        start:"0% 60%",
        end:"100% 50%",
        // markers:true
    }
})
.fromTo('#joineg .txtbox .mask span',{backgroundSize:'0% 100%'},
    {backgroundSize:'100% 100%'},0)


        // 코딩 작품
    gsap.utils.toArray(".section").forEach((section,i)=>{
       ScrollTrigger.create({
        trigger:section,
        start:"0% 0%",
        // 상단에 고정
        pin:true,
        pinSpacing:false,
       })
    })
    // 요소 상단에 snap 처리
    ScrollTrigger.create({
        snap : 1 / (section.length - 1 )

    })

   



$(function(){
    $(".top").click(function(){
        console.log("클릭")
        $("body,html").animate({'scrollTop':0},1000)
    })


})











