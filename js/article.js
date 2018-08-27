$(document).ready(function() {
  "use strict";
  var isMenuClosed = true;
  $(document).on("click", ".menu-icon-container", function() {
    if (isMenuClosed) {
      $(".menu-container").fadeIn(500);
      $(".menu-icon").addClass("opened");
      isMenuClosed = false;
    } else {
      $(".menu-container").fadeOut(500);
      $(".menu-icon").removeClass("opened");
      isMenuClosed = true;
    }
  });
});
