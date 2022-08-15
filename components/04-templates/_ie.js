(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
      if(navigator.userAgent.match(/Trident\/7\./)) {
        $('#off-canvas').prepend('<button type="button" class="close">Close</button>');
        $( ".header_bottom a.menu-anchor" ).click(function() {
          $('#off-canvas:hidden').show();
        });
        $( "button.close" ).click(function() {
          $('#off-canvas:visible').hide();
        });
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
