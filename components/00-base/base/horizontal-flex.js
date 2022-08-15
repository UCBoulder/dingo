(function($, Drupal) {

  "use strict";

  $('.flex-horizontal').after('<div class="controls control-right"><button aria-hidden="true" role="presentation" class="next"><span aria-hidden="true" role="presentation" class="arrow-right"></span></button></div>');
  $('.flex-horizontal').before('<div class="controls control-left"><button aria-hidden="true" role="presentation" class="prev hidden"><span aria-hidden="true" role="presentation" class="arrow-left"></span></button></div>');
  $('.prev').click(function () {
    var leftPos = $('.flex-horizontal').scrollLeft();
    var boxWidth = $('.flex-horizontal').width();
    if (boxWidth > 499) {
      var offset = 250;
    } else {
      var offset = 0;
    }
    $('.flex-horizontal').animate({scrollLeft: leftPos - boxWidth - offset}, 25);
    return false;
  });
  $('.next').click(function () {
    var leftPos = $('.flex-horizontal').scrollLeft();
    var boxWidth = $('.flex-horizontal').width();
    if (boxWidth > 499) {
      var offset = 250;
    } else {
      var offset = 0;
    }
    $('.flex-horizontal').animate({scrollLeft: leftPos + boxWidth - offset}, 25);
    return false;
  });

})(jQuery, Drupal);
