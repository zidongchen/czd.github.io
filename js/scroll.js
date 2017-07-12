// JavaScript Document
$(document).ready(function(){
  "use strict";	
  //  导航提示当前页面
  var i=0;
  var m=1;
    $(".modal").on('shown.bs.modal', function () {
      m=0;
    });
    $(".modal").on('hidden.bs.modal', function () {
      m=1;
    });
  function focustab(){
    if(i>=0&&i<14){
      $(".navigation-tab").removeClass("focus");
      $(".nav-tab1").addClass("focus");
    }
    else if(i>=14&&i<28){
      $(".navigation-tab").removeClass("focus");
      $(".nav-tab2").addClass("focus");
    }
    else if(i===28){
      $(".navigation-tab").removeClass("focus");
      $(".nav-tab3").addClass("focus");
    }
  }
  focustab();
//  导航按钮颜色重置和设置
  function resettab(){
     $(".navigation-tab").removeClass("active1");
     $(".navigation-tab").removeClass("active2");
     $(".navigation-tab").removeClass("active3");
     $(".navigation-tab").removeClass("active4");
   }
  function changetab(){
    if(i>=0&&i<14){
      resettab();
      $(".navigation-tab").addClass("active1");
    }
      else if(i>=14&&i<28){
      resettab();
      $(".navigation-tab").addClass("active2");
    }
      else if(i>=28&&i<42){
      resettab();
      $(".navigation-tab").addClass("active3");
    }
      else if(i===42){
      resettab();
      $(".navigation-tab").addClass("active4");
    }
  }
  $(".navigation-box").mouseover(changetab());
//  导航链接
  $(".nav-tab1").on("click",function(){
    i=0;
    TweenMax.to("main",0.7,{y:-i*scrollheight,ease:Cubic.easeOut});
 	  TweenMax.to(".scroll-dot",0.7,{y:i*7,ease:Cubic.easeOut});
    focustab();
    changetab();
  });
  $(".nav-tab2").on("click",function(){
    i=14;
    TweenMax.to("main",0.7,{y:-i*scrollheight,ease:Cubic.easeOut});
 	  TweenMax.to(".scroll-dot",0.7,{y:i*7,ease:Cubic.easeOut});
    focustab();
    changetab();
  });
  $(".nav-tab3").on("click",function(){
    i=28;
    TweenMax.to("main",0.7,{y:-i*scrollheight,ease:Cubic.easeOut});
 	  TweenMax.to(".scroll-dot",0.7,{y:i*7,ease:Cubic.easeOut});
    focustab();
    changetab();
  });
//  鼠标图标点击事件
  $(".mouse-icon").on("click",function(){
    if(i>=0&&i<14){
      i=14;
      resettab();
      TweenMax.to("main",0.7,{y:-i*scrollheight,ease:Cubic.easeOut});
 	    TweenMax.to(".scroll-dot",0.7,{y:i*7,ease:Cubic.easeOut});
    }
      else if(i>=14&&i<28){
      i=28;
      resettab();
      TweenMax.to("main",0.7,{y:-i*scrollheight,ease:Cubic.easeOut});
 	    TweenMax.to(".scroll-dot",0.7,{y:i*7,ease:Cubic.easeOut});
    }
      else if(i>=28&&i<42){
      i=42;
      resettab();
      TweenMax.to("main",0.7,{y:-i*scrollheight,ease:Cubic.easeOut});
 	    TweenMax.to(".scroll-dot",0.7,{y:i*7,ease:Cubic.easeOut});
    }
  });
//  获取窗口大小
  var winHeight;
  var winWidth;
  function findDimensions(){
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
//  窗口大小变化时重新调用获取窗口大小函数 ，重新设置滚动距离
  window.onresize=function(){
    findDimensions();
    scrollheight=winHeight/14;
    scrollwidth=winWidth/14;
    TweenMax.to("main",0.7,{x:-i*scrollwidth,ease:Cubic.easeOut});
  };
//   页面滚动高度\宽度
  var scrollheight=winHeight/14; 
  var scrollwidth=winWidth/14; 
//  页面滚动次数与鼠标滚轮的比
  var scrolltimes=0.14;
//  页面滚动函数
  var scrollFunc=function(e){
    e=e || window.event;
    if(m==1){
      if (e.wheelDelta){
        if(e.wheelDelta/120>0){
          if(i>0.14){
            i-=scrolltimes;
            TweenMax.to("main",0.7,{x:-i*scrollwidth,ease:Cubic.easeOut});
            TweenMax.to(".scroll-dot",0.7,{x:i*7,ease:Cubic.easeOut});
            focustab();
            changetab();
          }
        }
        else if(e.wheelDelta/120<0){
          if(i<28){
            i+=scrolltimes;
            TweenMax.to("main",0.7,{x:-i*scrollwidth,ease:Cubic.easeOut});
            TweenMax.to(".scroll-dot",0.7,{x:i*7,ease:Cubic.easeOut});
            focustab();
            changetab();
          }
        }
      }
      else if (e.detail){
        if(e.detail/-3>0){
        }
        else if(e.detail/3<0){
        }
      }
    }
   };
 	 /*注册事件*/
  if(document.addEventListener){document.addEventListener('DOMMouseScroll',scrollFunc,false);}//W3C
  window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
 });