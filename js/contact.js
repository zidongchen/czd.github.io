$(document).ready(function() {
  var isMenuClosed = true;
  var $selfintro;
  var selfIntroHeight = 0;
  var i = 1;
  $(document).on("click", "#hi", function() {
    $("#hi").hide();
    setTimeout(function() {
      $(".skip").fadeIn(500);
    }, 2000);
    setTimeout(function() {
      $(".skip").fadeOut(500);
    }, 22000);
    setTimeout(function() {
      $(".selfIntro-container").css("overflow-y", "scroll");
      $(".selfIntro").stop(true);
      $(".selfIntro-container").stop(true);
    }, 28000);
    showSelfIntro();
  });

  function scrollSelfIntro() {
    $(".selfIntro-container").animate({
      scrollTop: selfIntroHeight
    }, 2000, "linear");
    console.log(i);
    if (i < $(".selfIntro").length) {
      console.log("a");
      i += 1;
      showSelfIntro();
    }
  }

  function showSelfIntro() {
    $selfintro = $("#selfIntro" + i + "");
    selfIntroHeight += $selfintro.outerHeight(true);
    $selfintro.delay((i - 1) * 1500).fadeIn(1000, scrollSelfIntro());
  }

  $(document).on("click", ".skip", function() {
    $(".selfIntro").stop(true);
    $(".selfIntro-container").stop(true);
    $(".selfIntro-container").animate({
      scrollTop: selfIntroHeight
    }, 1000);
    $(".selfIntro").fadeIn();
    $(".selfIntro-container").css("overflow-y", "scroll");
    $(".skip").fadeOut(500);
  });
});
