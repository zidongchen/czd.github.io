$(document).ready(function() {
  "use strict";
  var isMenuClosed = true;
  /*菜单事件*/
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
});
