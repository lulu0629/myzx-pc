window.onload = function () {
    var question = document.getElementById("question");
    var scrollToTop = document.getElementById("scrollToTop");
    var timer;
    var stop = true;
    //可视区域高度
    var clientHeight = document.documentElement.clientHeight;

    $('#mydatepicker').dcalendarpicker(); //初始化日期选择器
    $('#mycalendar').dcalendar(); //初始化日历

    //滚动条滚动时触发
    window.onscroll = function () {
        /*var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollHeight >= clientHeight){
            question.style.display = "block" ;
            scrollToTop.style.display = "block" ;
        }else{
            question.style.display = "none" ;
            scrollToTop.style.display = "none" ;
        }*/

        if(!stop){
            clearInterval(timer);
        }
        stop = false;
    }

    scrollToTop.onclick = function () {
        //设置定时器
        timer = setInterval(function () {
            //获取距离顶部的高度
            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-scrollHeight / 5);
            document.documentElement.scrollTop = document.body.scrollTop = scrollHeight + speed ;

            stop = true;
            if(scrollHeight == 0){
                clearInterval(timer);
            }
        },30);
    }
}