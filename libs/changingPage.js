jQuery(document).ready(function(event) {
  var isAnimating = false,
    firstLoad = false;

  //trigger smooth transition from the actual page to the new one
  $('main').on('click', '[data-type="page-transition"]', function(event) {
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    //if the page is not already being animated - trigger animation
    if (!isAnimating) changePage(newPage, true);
    firstLoad = true;
  });

  //detect the 'popstate' event - e.g. user clicking the back button
  $(window).on('popstate', function() {
    if (firstLoad) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded
        newPage = newPageArray[newPageArray.length - 1];
      if (!isAnimating) changePage(newPage, false);
    }
    firstLoad = true;
  });

  function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $(".cover-layer").fadeIn(500);
    loadNewContent(url, bool);
  }

  function loadNewContent(url, bool) {
    url = ('' == url) ? 'index.html' : url;
    var newSection = url.replace('.html', '');
    var section = $('<div class="main-content ' + newSection + '"></div>');

    section.load(url + ' .main-content > *', function(event) {
      // load new content and replace <main> content with the new one
      //if browser doesn't support CSS transitions - dont wait for the end of transitions

      setTimeout(function() {
        //wait for the end of the transition on the loading bar before revealing the new content
        $(".cover-layer").fadeOut(500);
        $('main').html(section);
        var scriptLazyload = document.createElement("script");
        scriptLazyload.type = "text/javascript";
        scriptLazyload.src = "./libs/jquery.lazyload.min.js";
        document.getElementsByTagName('head')[0].appendChild(scriptLazyload);
        scriptLazyload.onload = function() {
          $(".lazy").lazyload({
            container: $(".article-main-container"),
            effect: "fadeIn"
          });

        };
        var scriptIndex = document.createElement("script");
        scriptIndex.type = "text/javascript";
        scriptIndex.src = "./js/index.js";
        document.getElementsByTagName('head')[0].appendChild(scriptIndex);
        
        var scriptMenu = document.createElement("script");
        scriptMenu.type = "text/javascript";
        scriptMenu.src = "./js/index.js";
        document.getElementsByTagName('head')[0].appendChild(scriptMenu);
        scriptMenu.onload = function() {
          isMenuClosed = true;
        };


        function isIndex() {
          return $(".main-content").hasClass('./index') || $(".main-content").hasClass('index');
        }

        function isArticle() {
          return $(".main-content").hasClass('./daminchu') || $(".main-content").hasClass('./magicar');
        }
        isAnimating = false;
      }, 1000);

      if (url != window.location && bool) {
        //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        window.history.pushState({
          path: url
        }, '', url);
      }

    });
  }
});
