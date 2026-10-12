(function($, Drupal) {

  "use strict";

    const dtn = $( ".main-content details" ).length;
    const detailsSearch = $( ".main-content details" ).hasClass("details-search");

    function detailsControls(placement) {
      // Add Search Box to details if class is present
      if (detailsSearch) {
        $(placement).before('<input type="search" id="searchbox" placeholder="Search">');
        //Search Functionality
        let cards = document.querySelectorAll('details');

        function liveSearch() {
          let search_query = document.getElementById("searchbox").value;
          for (var i = 0; i < cards.length; i++) {
            if(cards[i].textContent.toLowerCase()
              .includes(search_query.toLowerCase())) {
              cards[i].classList.remove("hidden");
            } else {
              cards[i].classList.add("hidden");
            }
          }
        }

        let typingTimer;
        let typeInterval = 400;
        let searchInput = document.getElementById('searchbox');

        searchInput.addEventListener('keyup', () => {
          clearTimeout(typingTimer);
          typingTimer = setTimeout(liveSearch, typeInterval);
        });

        //Add clear on X click
        $("#searchbox" ).on( "click", function() {
          setTimeout(function (){
            if (searchInput.value.trim().length === 0) {
              $('details').removeClass('hidden');
            }
          }, 200);
        });
      }
      // Add Open All / Collapse All buttons
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

    $('html:has(main .view-facets) .views-exposed-form details').attr('open', 'open');

})(jQuery, Drupal);
