(function($, Drupal, cookies) {

  "use strict";

  var step = 1;

  $( ".tutorial-step" ).each(function( index ) {
    if (!$(this).prev().hasClass('tutorial-step')) {
      $(this).prev().addClass('w-100');
    }

    if (!$(this).next().hasClass('tutorial-step')) {
      $(this).next().addClass('w-100');
    }

    var attrReset = $(this).children( "h2" ).attr('data-reset');

    if (attrReset) {
      step = 1;
    }

    if (step % 2 == 1) {
      $(this).addClass('odd');
    }


    $(this).children( "h2" ).html('<span>Step</span> ' + step);
    step++;
  });
  if (Cookies.get('tutorial-layout') == 'tutorial-layout--one') {
    tutorialOneColumn();
  } else {
    tutorialTwoColumn();
  }
  $("dl.tutorial-layout dd").click(function () {
    if($(this).attr('class') == "tutorial-layout--one" ) {
      cookies.set('tutorial-layout', 'tutorial-layout--one');
      tutorialOneColumn();
    }
    if($(this).attr('class') == "tutorial-layout--two" ) {
      cookies.set('tutorial-layout', 'tutorial-layout--two');
      tutorialTwoColumn();
    }
  });
  function tutorialOneColumn() {
    $(".flex-item").removeClass("flex-one-half");
    $('.flex-item').addClass('flex-full');
    $(".tutorial-layout--two").removeClass("active");
    $(".tutorial-layout--one").addClass("active");
  }
  function tutorialTwoColumn() {
    $('.flex-item').addClass('flex-one-half');
    $(".flex-item").removeClass("flex-full");
    $(".tutorial-layout--one").removeClass("active");
    $(".tutorial-layout--two").addClass("active");
  }

  let img = /^#img-\d*/;
  $(document).on('keydown', function(event) {
    if (event.key == "Escape") {
      if (window.location.hash && img.test(window.location.hash)) {
        history.back(1);
      }
    }
  });

  $( ".tut-modal-window" ).click(function() {
    if (window.location.hash && img.test(window.location.hash)) {
      history.back(1);
    }
  });

})(jQuery, Drupal, window.Cookies);
