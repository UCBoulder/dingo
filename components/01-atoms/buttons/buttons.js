(function ($, Drupal) {
  Drupal.behaviors.internalButtons = {
    attach: function (context, settings) {
      const self = this;

      // Run initialization for both initial load and AJAX updates
      initializeButtons(context);

      // Define internalButtonSelected as a property of the behavior
      this.internalButtonSelected = function (thisClass) {
        $('.button-internal--active span').remove();
        $('.button-internal--active').removeClass('button-internal--active');
        $(thisClass).addClass('button-internal--active').append('<span><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></span>');
        $('.button-internal').attr('aria-selected', 'false');
        $(thisClass).attr("aria-selected", "true");
        gsap.from(".checkmark__check", { duration: .4, drawSVG: "0", delay: 0.2 });
      };

      // Find all .button-internal elements and attach click handlers
      $(once('internalButtons', '.button-internal', context)).each(function () {
        $(this).on('click', function (e) {
          self.internalButtonSelected(this);
        });
      });

      function initializeButtons(context) {
        // Find active buttons within the current context
        $('.button-internal--active', context).each(function () {
          if (!$(this).find('span.checkmark').length) {
            self.internalButtonSelected(this);
          }
        });
      }
    }
  };
})(jQuery, Drupal);
