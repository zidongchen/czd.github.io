// JavaScript Document
$(document).ready(function(){
  getImgLoadEd(function(){  
    setTimeout(function(){
      $(".loading").fadeOut();  
    },500);
});  
function getImgLoadEd(callback){  
    var imgAll = [  
                    'images/01.jpg',  
                    'images/02.jpg',  
                    'images/03.jpg',  
                    'images/04.jpg',  
                    'images/05.jpg',  
                    'images/06.jpg',  
                    'images/07.jpg',  
                    'images/08.jpg',  
                    'images/09.jpg',  
                    'images/10.jpg',
                    'images/11.jpg',
                    'images/12.jpg',
                    'images/13.jpg',
                    'images/15.jpg',
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