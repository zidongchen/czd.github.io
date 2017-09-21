// JavaScript Document
$(document).ready(function(){
  "use strict";
  var loader = new resLoader({
     resources : [
          "images/carousel_01_lg1920.png",
          "images/carousel_02_lg1920.png",
          "images/carousel_03_lg1920.png",
          "images/carousel_04_lg1920.png",
          "images/carousel_01_sm750.png",
          "images/carousel_02_sm750.png",
          "images/carousel_03_sm750.png",
          "images/carousel_04_sm750.png",
          "images/01.png",  
          "images/02.png",  
          "images/03.png",  
          "images/04.png",  
          "images/05.png",  
          "images/06.png",  
          "images/07.png",  
          "images/09.png",  
          "images/10.png",
          "images/11.png",
          "images/12.png",
          "images/13.png",
          "images/15.png",
          "images/16.png",
     ],
     onStart : function(total){
          console.log('start:'+total);
     },
     onProgress : function(current, total){
          console.log(current+'/'+total);
          var bfb = current/total*100;
          console.log(bfb + "%");  
          document.getElementById("bar").style.width=bfb*4+"px";  
     },
     onComplete : function(){
          setTimeout(function(){
            $(".loading").css("opacity","0");  
          },1700);
          setTimeout(function(){
            $(".loading").css("z-index","-1");  
          },2000);
          setTimeout(function(){
            document.getElementById("loading-logo").style.left= 0+"px";
          },1000);
          setTimeout(function(){
            document.getElementById("loading-logo").style.top= 27+"px";
          },1000);
          setTimeout(function(){
            $("#loading-logo").css("transform","translate(15px,0)");
          },1000);
          setTimeout(function(){
            document.getElementById("progress").style.left= 53.5+"px";
          },1000);
          setTimeout(function(){
            document.getElementById("progress").style.top= 127+"px";
          },1000);
          setTimeout(function(){
            document.getElementById("progress").style.width= 8+"px";
          },500);
          setTimeout(function(){
            $("#progress").css("tramsform","translate(0,0)");
          },1000);
          setTimeout(function(){
            $("#carousel1bg").addClass("active");
          },1700);
     }
});

loader.start();
});