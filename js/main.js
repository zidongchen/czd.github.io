$(document).ready(function() {
    "use strict";
    var i=0;
    var headerWrapper = document.getElementById("header-wrapper");
    var navBar=document.getElementById("nav-bar");
//  鼠标滚轮
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {
            if (e.wheelDelta / 120 > 0 && i>0) {
                i=0;
                headerWrapper.style.top=0;
                navBar.style.height=140 + 'px';
            }
            else if (e.wheelDelta / 120 < 0 && i<7) {
                i++;
                headerWrapper.style.top=-i*13 +'px';
                navBar.style.height=140-i*i+'px';
            }
        }
        else if (e.detail) {
            if (e.detail / -3 > 0 && i > 0) {
                i=0;
                headerWrapper.style.top=0;
                navBar.style.height=140+'px';
            }
            else if (e.detail / 3 < 0 && i<7) {
                i++;
                headerWrapper.style.top=-i*13 +'px';
                navBar.style.height=140-i*i+'px';
            }
        }
    };
    /*注册事件*/
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }//W3C
    window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome/Safari

});