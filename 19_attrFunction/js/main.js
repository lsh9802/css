$(function(){
    // 속성값을 가져올때
    // 1. attr() -> $("선택자").attr("속성명")
    // 속성값을 변경할때
    // 2. attr() -> $("선택자").attr("속성명","바꿀값")
    // find() -> 특정요소를 기분으로 하위(자식,자손)요소를 선택할때 사용
    // $("선택자").find("선택자")
    // li a에 마우스를 hover할때
    $(".box ul li").mouseenter(function(){
        let num = $(this).index()
        console.log(num)
        let url = $(this).find('img').attr('src')
        console.log(url)

        // url를 big박스에 넣어줌
        $(".box .big img").attr({'src':url});

    })



    
})