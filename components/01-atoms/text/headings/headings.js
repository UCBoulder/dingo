(function($, Drupal) {

  "use strict";
  document.querySelector("h2");
  $("h2:not(:has(>a))").wrapInner('<span></span>');
  if ( $(".h1[data-bg-image]").length ) {
    var image = $('h1').attr('data-bg-image');
    $('head').append('<style>h1:after{background-image: url(' + image + ')};</style>');
  }

  var mainSidebar = document.getElementsByClassName('main-sidebar');
  var nodeNews = document.getElementsByClassName('page-node-type-news');
  var nodeTabs = document.getElementById('block-dingo-local-tasks');
  if (mainSidebar.length > 0 && nodeNews.length === 0) {
    setTimeout( function() {
      if (mainSidebar[0].offsetTop < 500) {
        var responsivePageWrapper = document.getElementsByClassName('responsive-menu-page-wrapper');
        var cassowaryMain = document.getElementById("block-cassowary-system-main");
        // Subtract main content area from overall content wrapper to get distance to top.
        var distanceToTop = cassowaryMain.offsetTop - responsivePageWrapper[0].offsetTop;
        var responsivePageWrapper = document.getElementsByClassName('block-pageoverviewblock');
        var offsetAdmin = (nodeTabs) ? 29 : 0;
        var offsetTweak = (nodeNews.length === 0) ? -139 : -185;
        var styleMarginTop = distanceToTop + offsetTweak + offsetAdmin;
        styleMarginTop += "px";

        mainSidebar[0].style.marginTop = styleMarginTop;
      }
    }, 100);
  }

})(jQuery, Drupal);
