// JavaScript Document
$(document).ready(function(){
  $(".left").mouseover(
    function(){$(".carousel-control-dot-left").addClass("active");}
  ); 
    $(".left").mouseout(
    function(){$(".carousel-control-dot-left").removeClass("active");}
  ); 
  
  $(".right").mouseover(
    function(){$(".carousel-control-dot-right").addClass("active");}
  ); 
    $(".right").mouseout(
    function(){$(".carousel-control-dot-right").removeClass("active");}
  ); 
 });