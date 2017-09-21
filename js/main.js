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
  });
    $(".btn-close").on("click",function(){
    $(".allPic").removeClass("active");
  });
  
//  切换
  
  $("#btn-product").on("click",function(){
    $(".cover").addClass("active");
    setTimeout(function(){
      document.getElementById("logo").src="images/zidong2.svg";
      $("#btn-product").addClass("active");
      $("#btn-graphic").removeClass("active");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").removeClass("white");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").addClass("black");
      $(".burger-bun").css("background","#333");
      burgerTime();
    },600);
    setTimeout(function(){
      $(".cover-logo").css("display","block");
    },700);
    setTimeout(function(){
      $(".cover-logo").css("opacity","1");
    },800);
    setTimeout(function(){
      $(".cover-logo").css("opacity","0");
    },2800);
    setTimeout(function(){
      $(".cover-logo").css("display","none");
    },3300);
    setTimeout(function(){
      $(".cover").removeClass("active");
    },3500);
  });
  $("#btn-graphic").on("click",function(){
    $(".cover").addClass("active");
    setTimeout(function(){
      document.getElementById("logo").src="images/zidong2.svg";
      $("#btn-product").removeClass("active");
      $("#btn-graphic").addClass("active");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").removeClass("black");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").addClass("white");
      $(".burger-bun").css("background","#fff");
      burgerTime();
    },600);
    setTimeout(function(){
      $(".cover-logo").css("display","block");
    },700);
    setTimeout(function(){
      $(".cover-logo").css("opacity","1");
    },800);
    setTimeout(function(){
      $(".cover-logo").css("opacity","0");
    },2800);
    setTimeout(function(){
      $(".cover-logo").css("display","none");
    },3300);
    setTimeout(function(){
      $(".cover").removeClass("active");
    },3500);
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
        $(".cover2").removeClass("active");
        setTimeout(function(){
          $(".nav").hide();
        },500);
        $(".nav").css("opacity","0");
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
        $(".cover2").addClass("active");
        setTimeout(function(){
          $(".nav").show();
        },400);
         setTimeout(function(){
          $(".nav").css("opacity","1");
        },500);
      }
    }
 });