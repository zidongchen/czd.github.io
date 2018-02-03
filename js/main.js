$(document).ready(function() {
    "use strict";
    var i=0;
    var headerWrapper = document.getElementById("header-wrapper");
//  鼠标滚轮
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {
            if (e.wheelDelta / 120 > 0) {
                i=0;
                headerWrapper.style.top=0;
            }
            else if (e.wheelDelta / 120 < 0 && i<=7) {
                i++;
                headerWrapper.style.top=-i*i*2-20+'px';
            }
        }
        else if (e.detail) {
            if (e.detail / -3 > 0) {
                i=0;
                headerWrapper.style.top=0;
            }
            else if (e.detail / 3 < 0 && i<=7) {
                i++;
                headerWrapper.style.top=-i*i*2-20+'px';
            }
        }
    };
    /*注册事件*/
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome/Safari
})