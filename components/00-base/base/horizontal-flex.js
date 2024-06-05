(function($, Drupal) {

  "use strict";

  $('.flex-horizontal').after('<div class="controls control-right"><button id="scroll-next" class="next" aria-label="scroll services right"><span class="arrow-right"></span></button></div>');
  $('.flex-horizontal').before('<div class="controls control-left"><button class="prev hidden"><span id="scroll-back" class="arrow-left" aria-label="scroll services left"></span></button></div>');
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
