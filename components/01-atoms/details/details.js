(function($, Drupal) {

  "use strict";

    var dtn = $( ".main-content details" ).length;
    function detailsControls(placement) {
      $(placement).before('<div class="detail-control"><button class="button-internal open-deets">Open All</button> <button class="button-internal button-internal--active close-deets">Collapse All</button></div>');
    }
    if ( dtn > 2 && !$('details').hasClass("no-deets-controls") && !$('div').hasClass("deets-controls-here") ) {
      detailsControls('.main-content details:first');
    }
    if ( $('div').hasClass("deets-controls-here") ) {
      detailsControls(".deets-controls-here");
    }
    $('button.open-deets').click(function() {
      $('details').attr('open', '');
    });
    $('button.close-deets').click(function() {
      $('details').removeAttr('open');
    });

})(jQuery, Drupal);
