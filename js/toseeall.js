// JavaScript Document
$(document).ready(function(){
  $(".btn-all-c4d").on("click",function(){
    $(".allPicc4d").addClass("active");
    setTimeout(function() {$("img").trigger("sporty");}, 1000);
  });
    $(".btn-close-c4d").on("click",function(){
    $(".allPicc4d").removeClass("active");
  });
});