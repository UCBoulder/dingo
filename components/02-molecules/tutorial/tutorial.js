(function($, Drupal, cookies) {

  "use strict";

  var attrResetExists = $(".tutorial-step h2[data-reset='TRUE']").length;

  $( ".tutorial-step" ).each(function( index ) {

    if (attrResetExists > 0) {
      if (!$(this).prev().hasClass('tutorial-step')) {
        $(this).prev().addClass('w-100');
      }

      if (!$(this).next().hasClass('tutorial-step')) {
        $(this).next().addClass('w-100');
      }
    }

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
