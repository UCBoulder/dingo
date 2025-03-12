(function ($, Drupal) {
  // Function to initialize buttons that can be called from anywhere
  function initializeButtonsGlobal() {
    $('.button-internal--active').each(function() {
      if (!$(this).find('span').length) {
        $(this).append('<span><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></span>');
        $(this).attr('aria-selected', 'true');

        if (typeof gsap !== 'undefined') {
          try {
            gsap.from(".checkmark__check", { duration: .4, drawSVG: "0", delay: 0.2 });
          } catch (e) {
            console.warn("GSAP animation failed in global init", e);
          }
        }
      }
    });

    // Make sure non-active buttons have correct aria state
    $('.button-internal:not(.button-internal--active)').attr('aria-selected', 'false');
  }

  // Run outside of Drupal behaviors on DOM ready
  $(document).ready(function() {
    initializeButtonsGlobal();

    // Try again after a delay to catch any late DOM changes
    setTimeout(initializeButtonsGlobal, 1500);
  });

  // Also try on window load
  $(window).on('load', function() {
    initializeButtonsGlobal();
  });

  // Keep the existing Drupal behavior
  Drupal.behaviors.internalButtons = {
    attach: function (context, settings) {
      const self = this;

      // Run initialization immediately
      initializeButtons(context);

      // Try multiple times with increasing delays to catch potential timing issues
      const delays = [100, 500, 1000];
      delays.forEach(function(delay) {
        setTimeout(function() {
          initializeButtons(context);
        }, delay);
      });

      // Define internalButtonSelected as a property of the behavior
      this.internalButtonSelected = function (thisClass) {
        $('.button-internal--active span').remove();
        $('.button-internal--active').removeClass('button-internal--active');
        $(thisClass).addClass('button-internal--active').append('<span><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg></span>');
        $('.button-internal').attr('aria-selected', 'false');
        $(thisClass).attr("aria-selected", "true");

        // Check if GSAP is available before trying to use it
        if (typeof gsap !== 'undefined') {
          try {
            gsap.from(".checkmark__check", { duration: .4, drawSVG: "0", delay: 0.2 });
          } catch (e) {
            console.warn("GSAP animation failed, using fallback", e);
          }
        } else {
          console.warn("GSAP not available for button animation");
        }
      };

      // Find all .button-internal elements and attach click handlers
      $(once('internalButtons', '.button-internal', context)).each(function () {
        $(this).on('click', function (e) {
          self.internalButtonSelected(this);
        });
      });

      function initializeButtons(context) {
        // Find active buttons within the current context
        const activeButtons = $('.button-internal--active', context);
        if (activeButtons.length) {
          activeButtons.each(function () {
            if (!$(this).find('span').length) {
              self.internalButtonSelected(this);
            }
          });
        }
      }

      // Also try to initialize when window is fully loaded
      $(window).on('load', function() {
        initializeButtons(document);
      });
    }
  };
})(jQuery, Drupal);
