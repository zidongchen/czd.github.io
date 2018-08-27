/*菜单事件*/
var isMenuClosed = true;
$(document).on("click", ".menu-icon-container", function() {
  if (isMenuClosed) {
    $(".menu-container").fadeIn(500);
    $(".menu-icon").addClass("opened");
    isMenuClosed = false;
  } else if (!isMenuClosed){
    $(".menu-container").fadeOut(500);
    $(".menu-icon").removeClass("opened");
    isMenuClosed = true;
  }
  return isMenuClosed;
});
