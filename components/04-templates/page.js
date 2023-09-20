Drupal.behaviors.scrolling = {
  attach(context) {
    // Get meta theme-color element
    var metaTheme = document.querySelector("meta[name='theme-color']");
    setTimeout(function(){
      // Current distance from the top of the page, plus the height of the window
      var windowBottomView = window.innerHeight;
      // Var select document body
      var body = document.body;
      window.onscroll = function(event) {
        var footerTag = document.querySelector('footer');
        if (footerTag) {
          // Element distance from top
          var elemTop = footerTag.offsetTop;
          var footerStart = elemTop-windowBottomView;
          // Scroll position
          var scroll = window.pageYOffset || document.documentElement.scrollTop;
          if (scroll >= 55) {
            body.classList.add("scrolled");
            metaTheme.setAttribute("content", "#ffffff");
          } else {
            body.classList.remove("scrolled");
            metaTheme.setAttribute("content", "#000000");
          }
          if (scroll >= footerStart) {
            body.classList.add("footer_start");
          } else {
            body.classList.remove("footer_start");
          }
        }
      };
    }, 100);
  },
};
