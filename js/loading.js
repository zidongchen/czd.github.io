// JavaScript Document
$(document).ready(function(){
      var totalImg = $("img").length;
      var currentImg = 0;
      $("img").on("load",function(){
        currentImg++;
        console.log(currentImg);
        var progressLoading=currentImg/totalImg*400;
        console.log(progressLoading);
        document.getElementById("bar").style.width=progressLoading+"px";
        if(currentImg === totalImg){
          $(".loading").fadeOut();
        }
      });
 });