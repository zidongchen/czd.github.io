// JavaScript Document
$(document).ready(function(){
  "use strict";
  var winHeight;
  var winWidth;
  function findDimensions(){
     //函数：获取尺寸
        //获取窗口宽度
        if (window.innerWidth){
          winWidth = window.innerWidth;
        }
        else if ((document.body) && (document.body.clientWidth)){
          winWidth = document.body.clientWidth;
        }
        //获取窗口高度
        if (window.innerHeight){
          winHeight = window.innerHeight;
        }
        else if ((document.body) && (document.body.clientHeight)){
          winHeight = document.body.clientHeight;
        }
        //通过深入Document内部对body进行检测，获取窗口大小
        if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth){
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
        }  
  } 
  findDimensions();
  $(window).resize(findDimensions());
  function mouseMove(ev) { 
    ev= ev || window.event; 
    var mousePos = mouseCoords(ev); 
//    document.getElementById("xxx").value = mousePos.x; 
//    document.getElementById("yyy").value = mousePos.y; 
    }
  function mouseCoords(ev) { 
  if(ev.pageX || ev.pageY){ 
    return {x:ev.pageX, y:ev.pageY}; 
  } 
    return{ 
    x:ev.clientX + document.body.scrollLeft - document.body.clientLeft, 
    y:ev.clientY + document.body.scrollTop - document.body.clientTop 
  }; 
  } 
  document.onmousemove = mouseMove;
});