$(function(){
    // 마우스를 header 에 hover 하면 header 높이를 400px로 늘리기
    $("header").mouseenter(function(){
        $("header").stop({'height':'400px'})
    })
    
    
    // 마우스를 header 에 벗어나면 header 높이를 80px로 늘리기
    $("header").mouseleave(function(){
        $("header").stop({'height':80})
    })

    
    // 클릭하면
    $("function").click(function(){
        $("header").ckick(function(){

        })
    })



})