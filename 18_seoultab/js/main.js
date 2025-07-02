$(function(){
    $(".list2").hide()
    $("ul.menu li").click(function(){
        $(".menu li").removeClass("on");
        $(this).addClass("on");
        let num = $(this).index();
        console.log(num)
        $(".list").hide();
        $(".list").eq(num).show();


    })







})