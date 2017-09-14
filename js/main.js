// JavaScript Document
$(document).ready(function(){
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
    $(".cover").css("height","100%");
    setTimeout(function(){
      document.getElementById("carouselItem1").src="images/carousel_04_lg1920.png";
      document.getElementById("carouselItem2").src="images/carousel_04_lg1920.png";
      document.getElementById("carouselItem3").src="images/carousel_04_lg1920.png";
      document.getElementById("logo").src="images/zidong2.png";
      $("#btn-product").addClass("active");
      $("#btn-graphic").removeClass("active");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").removeClass("graphic");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").addClass("product");
      $(".navbar").removeClass("navbar-default");
      $(".navbar").addClass("navbar-inverse");
      $(".collapse").collapse("hide");
    },600);
    setTimeout(function(){
      $(".cover").css("height","0%");
    },1000);
  });
  $("#btn-graphic").on("click",function(){
    $(".cover").css("height","100%");
    setTimeout(function(){
      document.getElementById("carouselItem1").src="images/carousel_01_lg1920.png";
      document.getElementById("carouselItem2").src="images/carousel_02_lg1920.png";
      document.getElementById("carouselItem3").src="images/carousel_03_lg1920.png";
      document.getElementById("logo").src="images/zidong.png";
      $("#btn-product").removeClass("active");
      $("#btn-graphic").addClass("active");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").removeClass("product");
      $(".btn-open,.carousel-control-dot,.item,.carousel-indicators").addClass("graphic");
      $(".navbar").addClass("navbar-default");
      $(".navbar").removeClass("navbar-inverse");
      $(".collapse").collapse("hide");
    },600);
    setTimeout(function(){
      $(".cover").css("height","0%");
    },1000);
  });
  
 });