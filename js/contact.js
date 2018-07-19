$(document).ready(function() {
  var isMenuClosed = true;
  var $selfintro;
  var selfIntroHeight = 0;
  $(".menu-icon-container").on("click", function() {
    if (isMenuClosed) {
      $(".menu-container").addClass("opened");
      $(".menu-icon").addClass("opened");
      isMenuClosed = false;
    } else {
      $(".menu-container").removeClass("opened");
      $(".menu-icon").removeClass("opened");
      isMenuClosed = true;
    }
  });
  $("#hi").on("click", function() {
    $("#hi").hide();
    setTimeout(function() {
      $(".skip").fadeIn(500);
    }, 4000);
    setTimeout(function() {
      $(".skip").fadeOut(500);
    }, 24000);
    setTimeout(function() {
      $(".pages-container").css("overflow-y","scroll");
    }, 38000);
    for (var i = 1; i < $(".selfIntro").length + 1; i++) {
      $selfintro = $("#selfIntro" + i + "");
      selfIntroHeight += $selfintro.outerHeight(true);
      $(".pages-container").animate({
        scrollTop: selfIntroHeight
      }, 3000, "linear",$selfintro.delay((i - 1) * 2000).fadeIn(1000));
    }

  });
  $(".skip").on("click", function() {
    $(".selfIntro").stop(true);
    $(".pages-container").stop(true);
    $(".pages-container").animate({
      scrollTop: selfIntroHeight},1000);
    $(".selfIntro").fadeIn();
    $(".pages-container").css("overflow-y","scroll");
    $(".skip").fadeOut(500);
  });

});
