// JavaScript Document
$(document).ready(function(){
  var brandX=$(".navbar-brand").offset().left;
  getImgLoadEd(function(){  
//    setTimeout(function(){
//      $(".loading").css("height","50px");  
//    },1500);
    setTimeout(function(){
      $(".loading").css("opacity","0");  
    },1700);
    setTimeout(function(){
      $(".loading").css("z-index","-1");  
    },2000);
    setTimeout(function(){
      document.getElementById("loading-logo").style.left= brandX+'px';
    },1000);
    setTimeout(function(){
      document.getElementById("loading-logo").style.top= 26+'px';
    },1000);
    setTimeout(function(){
      $("#loading-logo").css("transform","translate(15px,0)");
    },1000);
    setTimeout(function(){
      document.getElementById("progress").style.left= brandX+54+'px';
    },1000);
    setTimeout(function(){
      document.getElementById("progress").style.top= 126+'px';
    },1000);
    setTimeout(function(){
      document.getElementById("progress").style.width= 10+'px';
    },500);
    setTimeout(function(){
      $("#progress").css("tramsform","translate(0,0)");
    },1000);
    
});  
function getImgLoadEd(callback){  
    var imgAll = [  
                    'images/01.png',  
                    'images/02.png',  
                    'images/03.png',  
                    'images/04.png',  
                    'images/05.png',  
                    'images/06.png',  
                    'images/07.png',  
                    'images/08.png',  
                    'images/09.png',  
                    'images/10.png',
                    'images/11.png',
                    'images/12.png',
                    'images/13.png',
                    'images/15.png',
                    'images/16.png',
                ];  
    var imgL = imgAll.length;  
    var imgStart = 0;  
    var isLoad   = false;  
    var bfb = 0;  
    function IfLoadImg(){  
        if(imgStart >= imgL){  
            console.log('图片加载完成，图片总数量：' + imgStart);  
            clearInterval(loadTimer);  
            if(callback){  
                callback();  
            }  
            return;  
        }  
          
        //console.log('上张图片是否加载完成：' + isLoad);  
        //console.log('当前加载图片KEY：' + imgStart);  
          
        if(!isLoad && imgStart !==0){  
            return;  
        }else{  
            isLoad = false  ;
        }  
        loadImg(imgStart);  
        function loadImg(imgKey){  
            var curImg = imgAll[imgKey];  
            var loadImg = new Image();  
            loadImg.src = curImg;  
            loadImg.onload = function(){  
                isLoad = true;  
                imgStart++;  
                bfb = parseInt(imgStart / imgL * 100);  
                console.log(bfb + '%');  
                document.getElementById("bar").style.width=bfb*4+"px";  
            };
        }  
    }  
    var loadTimer = setInterval(IfLoadImg,10);  
}  
});