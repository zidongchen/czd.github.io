$(document).ready(function() {
  var isMenuClosed = true;
  var $selfintro;
  var selfIntroHeight = 0;
  $(document).on("click","#hi", function() {
    $("#hi").hide();
    setTimeout(function() {
      $(".skip").fadeIn(500);
    }, 4000);
    setTimeout(function() {
      $(".skip").fadeOut(500);
    }, 24000);
    setTimeout(function() {
      $(".selfIntro-container").css("overflow-y","scroll");
    }, 38000);
    for (var i = 1; i < $(".selfIntro").length + 1; i++) {
      $selfintro = $("#selfIntro" + i + "");
      selfIntroHeight += $selfintro.outerHeight(true);
      $(".selfIntro-container").animate({
        scrollTop: selfIntroHeight
      }, 3000, "linear",$selfintro.delay((i - 1) * 2000).fadeIn(1000));
    }
  });
  $(document).on("click",".skip",function() {
    $(".selfIntro").stop(true);
    $(".selfIntro-container").stop(true);
    $(".selfIntro-container").animate({
      scrollTop: selfIntroHeight},1000);
    $(".selfIntro").fadeIn();
    $(".selfIntro-container").css("overflow-y","scroll");
    $(".skip").fadeOut(500);
  });
});
