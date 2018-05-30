$(document).ready(function() {
    "use strict";
    var i=1;
    var startY = 0;
    var moveY = 0;
    var isChangingPage = false;
    var timeOutFlag=null;


    var winHeight = document.documentElement.clientWidth

    window.addEventListener('resize', function(event){
        winHeight = document.documentElement.clientWidth;
    });

    function resetPageWriting() {
        $(".page-writing").removeClass("active");
    }

    function changePage(i) {
        switch (i){
            case 1 :
                resetPageWriting();
                // document.getElementById("darkness").load();
                $(".page1>.page-writing").addClass("active");
                $(".pages-container").css("top","00");
                $(".change-num-container").css("top","00");
                $(".prev-page").css("opacity","0");
                $(".next-page").css("opacity","1");
                break;
            case 2 :
                resetPageWriting();
                $(".page2>.page-writing").addClass("active");
                $(".pages-container").css("top","-100%");
                $(".change-num-container").css("top","-2.5rem");
                $(".prev-page").css("opacity","1");
                $(".next-page").css("opacity","1");
                break;
            case 3 :
                resetPageWriting();
                $(".page3>.page-writing").addClass("active");
                $(".pages-container").css("top","-200%");
                $(".change-num-container").css("top","-5rem");
                $(".prev-page").css("opacity","1");
                $(".next-page").css("opacity","1");
                break;
            case 4 :
                resetPageWriting();
                $(".page4>.page-writing").addClass("active");
                $(".pages-container").css("top","-300%");
                $(".change-num-container").css("top","-7.5rem");
                $(".prev-page").css("opacity","1");
                $(".next-page").css("opacity","1");
                $(".cover-1").removeClass("go-up");
                $(".page-icon-container").removeClass("go-up");
                $(".page-icon-container").removeClass("go-up");
                break;
            case 5 :
                resetPageWriting();
                $(".pages-container").css("top","-340%");
                $(".prev-page").css("opacity","1");
                $(".next-page").css("opacity","0");
                $(".cover-1").addClass("go-up");
                $(".page-icon-container").addClass("go-up");
        }
    }

    $(".page1>.page-writing").addClass("active");

    /*注册事件*/
    // 移动设备
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
    {
        var self = this;
        var touch;
        //监听touchstart事件，记录开始位置
        document.addEventListener('touchstart', function(e){
            moveY = 0;
            touch = e.targetTouches[0];
            startY = touch.pageY;
            // event.preventDefault();
        }, false);
        //监听 touchmove事件，可计算出滑动的距离
        document.addEventListener('touchmove', function(e){
            //获取滑动屏幕时的Y
            touch = e.targetTouches[0];
            moveY = touch.pageY - startY;//变化的量
            // event.preventDefault();
        }, false);
        //监听touchend，监听touch结束，可判断是上滑，还是下滑
        document.addEventListener('touchend', function(e){
            if(moveY < -10){//向上(或者不动——例如双击)
                if (i<5){
                    if(timeOutFlag!=null){
                        clearTimeout(timeOutFlag);
                    }
                    timeOutFlag=setTimeout(function(){
                        i+=1;
                        changePage(i);
                    },50)
                }
            }else{//向下
                if(i>1){
                    if(timeOutFlag!=null){
                        clearTimeout(timeOutFlag);
                    }
                    timeOutFlag=setTimeout(function(){
                        i-=1;
                        changePage(i);
                    },50)
                }
            }
            // event.preventDefault();
        }, false);
    }
    // 非移动设备
    else{
        var scrollFunc = function (e) {
            // event.preventDefault();
            e = e || window.event;
            if (e.wheelDelta) {
                if (e.wheelDelta / 120 > 0 && i > 1) {
                    // 滚轮向上
                    if(timeOutFlag!=null){
                        clearTimeout(timeOutFlag);
                    }
                    timeOutFlag=setTimeout(function(){
                        i-=1;
                        changePage(i);
                        },50)
                    }
                else if (e.wheelDelta / 120 < 0 && i < 5 ) {
                        // 滚轮向下
                    if(timeOutFlag!=null){
                        clearTimeout(timeOutFlag);
                    }
                    timeOutFlag=setTimeout(function(){
                        i+=1;
                        changePage(i);
                        },50)
                }
            }
            else if (e.detail) {
                if (e.detail / 3 < 0 ) {
                    // 滚轮向上
                    if(timeOutFlag!=null){
                        clearTimeout(timeOutFlag);
                    }
                    timeOutFlag=setTimeout(function(){
                        i-=1;
                        changePage(i);
                    },50)
                }
                else if (e.detail / 3 > 0) {
                    // 滚轮向下
                    if(timeOutFlag!=null){
                        clearTimeout(timeOutFlag);
                    }
                    timeOutFlag=setTimeout(function(){
                        i+=1;
                        changePage(i);
                    },50)
                }
            }
        }
    };
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }//W3C
        window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome/Safari

// 右下角点击
    $(".prev-page").on("click",function () {
        if(i>1){
            if(timeOutFlag!=null){
                clearTimeout(timeOutFlag);
            }
            timeOutFlag=setTimeout(function(){
                i-=1;
                changePage(i);
            },50)
        }
    });
    $(".next-page").on("click",function () {
        if (i<5){
            if(timeOutFlag!=null){
                clearTimeout(timeOutFlag);
            }
            timeOutFlag=setTimeout(function(){
                i+=1;
                changePage(i);
            },50)
        }
    });
});