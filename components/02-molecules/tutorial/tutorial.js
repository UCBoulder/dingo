(function($, Drupal, cookies) {

  "use strict";

  // Add full width to elements that are not tutorial steps only on tutorials
  // that have multiple tutorials on one page.
  if ($('.step-1').length > 1) {
    $( ".tutorial-step" ).each(function( index ) {

      if (!$(this).prev().hasClass('tutorial-step')) {
        $(this).prev().addClass('w-100');
      }

      if (!$(this).next().hasClass('tutorial-step')) {
        $(this).next().addClass('w-100');
      }

    });
  }

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
