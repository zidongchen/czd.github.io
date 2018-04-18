$(document).ready(function() {
    "use strict";
    var i=0;
    var headerWrapper = document.getElementById("header-wrapper");
    var navBar=document.getElementById("nav-bar");
    var startY = 0;
    var moveY = 0;
    var carouselPageNum=1;
//  鼠标滚轮
    /*注册事件*/
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
    {
        //移动端
        //对移动端进行处理
        var self = this;
        var touch;
        document.addEventListener('touchstart', function(e){//监听touchstart事件，记录开始位置
            moveY = 0;
            touch = e.targetTouches[0];
            startY = touch.pageY;
        }, false);
        //监听 touchmove事件，可计算出滑动的距离
        document.addEventListener('touchmove', function(e){
            //获取滑动屏幕时的Y
            touch = e.targetTouches[0];
            moveY = touch.pageY - startY;//变化的量
        }, false);
        //监听touchend，监听touch结束，可判断是上滑，还是下滑
        document.addEventListener('touchend', function(e){
            if(moveY < 0 || moveY == 0){//向上(或者不动——例如双击)
                i=7;
                headerWrapper.style.top=-i*13 +'px';
                navBar.style.height=140-i*i+'px';
            }else{//向下
                //执行业务（动画）代码
                i=0;
                headerWrapper.style.top=0;
                navBar.style.height=140 + 'px';
            }
        }, false);
    }
    else{
        var scrollFunc = function (e) {
            e = e || window.event;
            if (e.wheelDelta) {
                if (e.wheelDelta / 120 > 0 && i>0) {
                    i=0;
                    headerWrapper.style.top=0;
                    navBar.style.height=140 + 'px';
                }
                else if (e.wheelDelta / 120 < 0 && i<7) {
                    i=7;
                    headerWrapper.style.top=-i*13 +'px';
                    navBar.style.height=140-i*i+'px';
                }
            }
            else if (e.detail) {
                if (e.detail / 3 < 0 && i > 0) {
                    i=0;
                    headerWrapper.style.top=0;
                    navBar.style.height=140+'px';
                }
                else if (e.detail / 3 > 0 && i<7) {
                    i=7;
                    headerWrapper.style.top=-i*13 +'px';
                    navBar.style.height=140-i*i+'px';
                }
            }
        };
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }//W3C
        window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome/Safari
    }
    // var worksShow = 0;
    //     $("#course").on("click",function (){
    //         if (worksShow==0||worksShow==2){
    //             resetline();
    //             $("#course a").css("color","#ffffff");
    //             $("#course .line").addClass("active");
    //             $(".course-works").css("display","inline-block");
    //             $(".personal-works").css("display","none");
    //             worksShow=1;
    //         }
    //         else if (worksShow==1){
    //             resetline();
    //             $(".course-works").css("display","inline-block");
    //             $(".personal-works").css("display","inline-block");
    //             $(".personal-works").addClass("animated fadeIn");
    //             worksShow=0;
    //         }
    //     });
    //     $("#personal").on("click",function (){
    //         if (worksShow==0||worksShow==1){
    //             resetline();
    //             $("#personal a").css("color","#ffffff");
    //             $("#personal .line").addClass("active");
    //             $(".course-works").css("display","none");
    //             $(".personal-works").css("display","inline-block");
    //             worksShow=2;
    //         }
    //         else if (worksShow==2){
    //             resetline();
    //             $(".course-works").css("display","inline-block");
    //             $(".personal-works").css("display","inline-block");
    //             $(".course-works").addClass("animated fadeIn");
    //             worksShow=0;
    //         }
    //     });
    // function resetline() {
    //     $(".nav-option a").css("color","#555656");
    //     $(".nav-option .line").removeClass("active");
    //
    // }

    /* 点击锚点滑动 */
    $(".anchor").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-100},1000);
        i=7;
        headerWrapper.style.top=-i*13 +'px';
        navBar.style.height=140-i*i+'px';
        return false;
    });
    var carousel = function () {
        if(carouselPageNum==1){
            carouselPageNum+=1;
            $(".carousel").css("left","calc(-100% )");
            $(".carousel-point").css("left","10px");
        }
        else if(carouselPageNum==2){
            carouselPageNum+=1;
            $(".carousel").css("left","calc(-200% )");
            $(".carousel-point").css("left","20px");
        }
        else {
            carouselPageNum=1;
            $(".carousel").css("left","0%");
            $(".carousel-point").css("left","0%");
        }

    }
    setInterval(carousel,7000);
});

/*!
 *  Echo v1.4.0
 *  Lazy-loading with data-* attributes, offsets and throttle options
 *  Project: https://github.com/toddmotto/echo
 *  by Todd Motto: http://toddmotto.com
 *  Copyright. MIT licensed.
 */
window.Echo = (function(window, document, undefined) {

    'use strict';

    var store = [],
        offset,
        throttle,
        poll;

    var _inView = function(el) {
        var coords = el.getBoundingClientRect();
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
    };

    var _pollImages = function() {
        for (var i = store.length; i--;) {
            var self = store[i];
            if (_inView(self)) {
                self.src = self.getAttribute('data-echo');
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function() {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function(obj) {
        var nodes = document.querySelectorAll('[data-echo]');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 250;

        for (var i = 0; i < nodes.length; i++) {
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            window.addEventListener('scroll', _throttle, false);
        } else {
            window.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

})(window, document);