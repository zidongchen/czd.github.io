var pageNum = 1;
var startY = 0;
var moveY = 0;
var isChangingPage = false;
var timeOutFlag = null;
var pages = $(".pages").length;
var prevPage = pageNum - 1;
// 切换页面
function changeIndexPage(){
changeIndexPages();
changeIndexPageNum();
}
//首页
// 显示当前页面介绍文本
function changeIndexPages() {
  if (pageNum <= pages && pageNum >= 1) {
    $(".page-content").removeClass("active");
    $(".pages-container").css("transform","translateY(" + -33.333 * (pageNum - 1) + "%)");
    $(".page" + pageNum + ">.page-content").addClass("active");
  }
}

function changeIndexPageNum() {
  $(".change-num-container ").css("top", "" + -40 * (pageNum - 1) + "px");
}

$(document).ready(function() {
  "use strict";

  changeIndexPage()
  /*滑动事件*/
  // 移动设备
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

    document.getElementById("bg-video").src="";
    var self = this;
    var touch;
    //监听touchstart事件，记录开始位置
    document.addEventListener('touchstart', function(e) {
      moveY = 0;
      touch = e.targetTouches[0];
      startY = touch.pageY;
    });
    //监听 touchmove事件，可计算出滑动的距离
    document.addEventListener('touchmove', function(e) {
      //获取滑动屏幕时的Y
      touch = e.targetTouches[0];
      moveY = touch.pageY - startY; //变化的量
      if (isMenuClosed && moveY < -50 && pageNum < pages && !isChangingPage) {
        pageNum += 1;
        isChangingPage = true;
        changeIndexPage(pageNum);
      } else if (isMenuClosed && moveY > 50 && pageNum > 1 && !isChangingPage) { //向下
        pageNum -= 1;
        isChangingPage = true;
      }
    }, false);
    //监听touchend，监听touch结束，可判断是上滑，还是下滑
    document.addEventListener('touchend', function(e) {
      isChangingPage = false;
    }, false);
  }
  // 非移动设备
  else {
    var scrollFunc = function(e) {
      e = e || window.event;
      if (isMenuClosed) {
        if (e.wheelDelta) {
          if (e.wheelDelta / 120 > 0 && pageNum > 1) {
            // 滚轮向上
            if (timeOutFlag != null) {
              clearTimeout(timeOutFlag);
            }
            timeOutFlag = setTimeout(function() {
              pageNum -= 1;
              changeIndexPage(pageNum);
            }, 50);
          } else if (e.wheelDelta / 120 < 0 && pageNum < pages) {
            // 滚轮向下
            if (timeOutFlag != null) {
              clearTimeout(timeOutFlag);
            }
            timeOutFlag = setTimeout(function() {
              pageNum += 1;
              changeIndexPage(pageNum);
            }, 50);
          }
        } else if (e.detail) {
          if (e.detail / 3 < 0 && pageNum > 1) {
            // 滚轮向上
            if (timeOutFlag != null) {
              clearTimeout(timeOutFlag);
            }
            timeOutFlag = setTimeout(function() {
              pageNum -= 1;
              changeIndexPage(pageNum);
            }, 50);
          } else if (e.detail / 3 > 0 && pageNum < pages) {
            // 滚轮向下
            if (timeOutFlag != null) {
              clearTimeout(timeOutFlag);
            }
            timeOutFlag = setTimeout(function() {
              pageNum += 1;
              changeIndexPage(pageNum);
            }, 50);
          }
        }
      }
    };
    // 注册事件
    if (document.addEventListener) {
      //W3C
      document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //IE/Opera/Chrome/Safari
    window.onmousewheel = document.onmousewheel = scrollFunc;
  }
  // 右下角点击
  $(document).on("click", ".prev-page", function() {
    if (pageNum > 1) {
      pageNum -= 1;
      changeIndexPage(pageNum);
    }
  });
  $(document).on("click", ".next-page", function() {
    if (pageNum < pages) {
      pageNum += 1;
      changeIndexPage(pageNum);
    }
  });
  // 加载js
  var scriptMenu = document.createElement("script");
  scriptMenu.type = "text/javascript";
  scriptMenu.src = "./js/menu.min.js";
  document.getElementsByTagName('head')[0].appendChild(scriptMenu);
  scriptMenu.onload = function() {
    isMenuClosed = true;
  };

  var scriptGetUrlParam = document.createElement("script");
  scriptGetUrlParam.type = "text/javascript";
  scriptGetUrlParam.src = "./js/getUrlParam.js";
  document.getElementsByTagName('head')[0].appendChild(scriptGetUrlParam);

  var scriptContact = document.createElement("script");
  scriptContact.type = "text/javascript";
  scriptContact.src = "./js/contact.min.js";
  document.getElementsByTagName('head')[0].appendChild(scriptContact);

  var scriptLazyload = document.createElement("script");
  scriptLazyload.type = "text/javascript";
  scriptLazyload.src = "./libs/jquery.lazyload.min.js";
  document.getElementsByTagName('head')[0].appendChild(scriptLazyload);
  scriptLazyload.onload = function() {
    $(".lazy").lazyload({
      container: $(".article-main-container"),
      effect: "fadeIn"
    });
  };
  setTimeout(function() {
      $(".cover-layer").addClass("hide");
  }, 1000);

  var scriptChangingPage = document.createElement("script");
  scriptChangingPage.type = "text/javascript";
  scriptChangingPage.src = "./libs/changingPage.min.js";
  document.getElementsByTagName('body')[0].appendChild(scriptChangingPage);
});
