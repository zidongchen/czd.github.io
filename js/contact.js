$(document).ready(function() {
  var isMenuClosed = true;
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
    $(".page-writing").addClass("active");
    $("#hi").hide();
    for (var i = 0; i < $(".selfIntro").length+2; i++) {
      $(".selfIntro:nth-child(" + i + ")").delay((i - 1) * 2000).animate({
        opacity: 1,
      });
    }
  });

});
