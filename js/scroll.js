// JavaScript Document
$(document).ready(function(){
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
 });