// JavaScript Document
$(document).ready(function(){
  "use strict";
//  鼠标滚轮
      var scrollFunc=function(e){
    e=e || window.event;
    if (e.wheelDelta){
  		if(e.wheelDelta/120>0){
//  		  $("nav").css("top","0px");
        $("#slideshow").carousel("prev");
  		}
  		else if(e.wheelDelta/120<0){
//  		  $("nav").css("top","-60px");
        $("#slideshow").carousel("next");
  		}
    }
    else if (e.detail){
 		  if(e.detail/-3>0){
// 				$("nav").css("top","0px");
        $("#slideshow").carousel("prev");
 		  }
 		  else if(e.detail/3<0){
// 				$("nav").css("top","-60px");
        $("#slideshow").carousel("next");
 		  }
 		}
   };
 	 /*注册事件*/
  if(document.addEventListener){document.addEventListener('DOMMouseScroll',scrollFunc,false);}//W3C
  window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
  
//  轮播图左右控制点
  
  $(".left").mouseover(
    function(){$(".carousel-control-dot.left").addClass("active");}
  ); 
    $(".left").mouseout(
    function(){$(".carousel-control-dot.left").removeClass("active");}
  ); 
  
  $(".right").mouseover(
    function(){$(".carousel-control-dot.right").addClass("active");}
  ); 
    $(".right").mouseout(
    function(){$(".carousel-control-dot.right").removeClass("active");}
  ); 
  
//  查看全部图片
  
    $(".btn-open").on("click",function(){
        $(".allPic").addClass("active");
        $(".btn-close").show();
      setTimeout(function(){
        $(".btn-close").css("left","0");
      },301);
  });
    $(".btn-close").on("click",function(){
        $(".allPic").removeClass("active");
        $(".btn-close").css("left","-40px");
      setTimeout(function(){
        $(".btn-close").hide();
      },501);

  });

    var trigger = $(".burger-bun"),
        isClosed = false;

    $(".nav-btn").click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed === true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
        $(".cover").removeClass("active");
        setTimeout(function () {
            $(".cover").hide();
        },501);
        setTimeout(function(){
          $(".nav").hide();
        },500);
        $(".nav").removeClass("active");
        $("#main-container").removeClass("active");
      }
      else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
          $(".cover").show();
          setTimeout(function () {
              $(".cover").addClass("active");
          },1);
        setTimeout(function(){
          $(".nav").show();
        },300);
         setTimeout(function(){
          $(".nav").addClass("active");
        },400);
        $("#main-container").addClass("active");
      }
    }
 });