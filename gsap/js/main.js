// 스크롤트리거를 GSAP 하고 연동(등록)
gsap.registerPlugin(ScrollTrigger)
$(function(){
    // 애니메이션 할 요소가 선택
    // scroll바의 위치와 요소의 위치를 정해줌
    gsap.timeline({
        // 스크롤바에 따른 애니메이션 설정
        scrollTrigger:{
            // 애니메이션 할떄 부드럽게 처리
            scrub:3,
            // 애니메이션 요소(대상) 선택
            trigger:".section2 ul",
            // 애니메이션 시작
            // 요소의 위치,웹브라우저에 스크롤바에 위치
            start:"20% 50%",
            // 애니메이션의 끝부분
            end:"100% 90%",
            // markers:true,
        },
    })
    // to 
    .to(".section2 li:nth-child(1)",{y:-300,duration:1,ease:"ease-in-out"},0.5)
    .to(".section2 li:nth-child(2)",{y:-300,duration:1,ease:"ease-in-out"},0.7)
    .to(".section2 li:nth-child(3)",{y:-300,duration:1,ease:"ease-in-out"},0.9)
    .to(".section2 li:nth-child(4)",{y:-300,duration:1,ease:"ease-in-out"},1.1)


    // 애니메이션 설정
    gsap.timeline({
        scrollTrigger:{
            // 애니메이션을 부드럽게 처리
            scrub:2,
            // 애니메이션요소선택
            trigger:".section4",
            start:"10% 20%",
            end:"50% 50%",
            // markers:true
        }
    })

    //애니메이션 위치
    // .formTo("선택자",{어디서부터},{어디까지},지연시간)
    .fromTo(".section4 ul li:nth-child(1)",{y:600},{y:0},1)
    .fromTo(".section4 ul li:nth-child(2)",{y:600},{y:0},1.5)
    .fromTo(".section4 ul li:nth-child(3)",{y:600},{y:0},2)
    .fromTo(".section4 ul li:nth-child(4)",{y:600},{y:0},2.5)
    .fromTo(".section4 ul li:nth-child(5)",{y:600},{y:0},3)
    .fromTo(".section4 ul li:nth-child(6)",{y:600},{y:0},3.5)
    .fromTo(".section4 ul li:nth-child(7)",{y:600},{y:0},4)

})
    gsap.timeline({
        scrollTrigger:{
            scrub:2,
            trigger:".section3",
            start:"10% 20%",
            end:"50% 50%",
            markers:true
        }
    })

    .fromTo(".section3 h2",{x:-1200},{x:0},1)