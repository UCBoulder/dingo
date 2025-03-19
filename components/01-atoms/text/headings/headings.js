(function($, Drupal) {

  "use strict";
  document.querySelector("h2");

  $(".main-sidebar h2.directchildmenu").wrapInner('<span></span>');

  if ( $(".h1[data-bg-image]").length ) {
    var image = $('h1').attr('data-bg-image');
    $('head').append('<style>h1{color:#fff !important;} h1:before{background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8) 90%);} h1:after{background: url(' + image + ') no-repeat center};</style>');
  }

})(jQuery, Drupal);
