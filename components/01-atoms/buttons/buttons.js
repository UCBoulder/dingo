(function($, Drupal) {
  $( document ).ready(function() {
    $('.button-internal').click(function() {
      internalButtonSelected(this);
    });
    function internalButtonSelected(thisClass) {
      $('.button-internal--active span').remove();
      $('.button-internal--active').removeClass('button-internal--active');
      $(thisClass).addClass('button-internal--active').append('<span><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></span>');
      gsap.from(".checkmark__check", {duration:.4, drawSVG: "0"});
      $('.button-internal').attr('aria-selected', 'false');
      $(thisClass).attr("aria-selected", "true");
    }
    setTimeout(function() {
      if ( $(".button-internal").hasClass('button-internal--active') ) {
        $('.button-internal--active').addClass('clkemlkrjwelrkjewnce-temp');
        internalButtonSelected('.clkemlkrjwelrkjewnce-temp');
        $('.clkemlkrjwelrkjewnce-temp').removeClass('clkemlkrjwelrkjewnce-temp');
      }
    }, 2000);
  });
})(jQuery, Drupal);
