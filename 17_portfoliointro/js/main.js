function time() {
        // DOM객체를 선택해서 변수에 저장
        let webHour =document.querySelector(".web_hour");
        let webMin =document.querySelector(".web_min");
        let webSec =document.querySelector(".web_sec");
        let webMsec =document.querySelector(".web_msec");
        console.log(webHour,webMin,webSec,webMsec); 
    // 날짜/시간 객체를 생성
    let date = new Date();
    console.log(date);
    // 시간
    let hour = date.getHours()
    console.log(hour);
    let dhour = digit(hour)
    webHour.innerHTML = dhour;
    // 분
    let min = date.getMinutes()
    console.log(min);
    let dmin = digit(min)
    webMin.innerHTML = dmin;
    // 초
    let sec = date.getSeconds()
    console.log(sec);
    let dsec = digit(sec)
    webSec.innerHTML = dsec;
    // 밀리초
    let msec = date.getMilliseconds()
    console.log(msec);
    // msec을 2자리로 할때 
    // Math.floor 소수점을 제거해주는 함수
    let mmsec =Math.floor(msec/10)
    let dmsec = digit(mmsec)
    webMsec.innerHTML = dmsec;

    // 시간,분,초,밀리초 자리수를 두자리로 조정하는 함수
    function digit(x){
        if(x<10){
            return '0' + x

        }else{
            return x;
        }
    }
}

// 매 1초마다 time함수를 반복실행
setInterval(function(){
    time();
},100)
// time();