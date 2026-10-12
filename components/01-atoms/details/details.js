(function () {
  'use strict';

  const mainDetails = document.querySelectorAll('.main-content details');
  const detailsSearch = Array.from(mainDetails).some((el) =>
    el.classList.contains('details-search'),
  );
  const controlsHere = document.querySelector('div.deets-controls-here');

  function detailsControls(placement) {
    // Add Search Box to details if class is present
    if (detailsSearch) {
      placement.insertAdjacentHTML(
        'beforebegin',
        '<input type="search" id="searchbox" placeholder="Search">',
      );

      const cards = document.querySelectorAll('details');
      const searchInput = document.getElementById('searchbox');
      const typeInterval = 400;
      let typingTimer;

      function liveSearch() {
        const query = searchInput.value.toLowerCase();
        cards.forEach((card) => {
          card.classList.toggle(
            'hidden',
            !card.textContent.toLowerCase().includes(query),
          );
        });
      }

      searchInput.addEventListener('input', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(liveSearch, typeInterval);
      });
    }

    // Add Open All / Collapse All buttons
    placement.insertAdjacentHTML(
      'beforebegin',
      '<div class="detail-control"><button class="button-internal open-deets">Open All</button> <button class="button-internal button-internal--active close-deets">Collapse All</button></div>',
    );
  }

  if (
    mainDetails.length > 2 &&
    !document.querySelector('details.no-deets-controls') &&
    !controlsHere
  ) {
    detailsControls(mainDetails[0]);
  }

  if (controlsHere) {
    detailsControls(controlsHere);
  }

  document.querySelectorAll('button.open-deets').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('details').forEach((el) => {
        el.open = true;
      });
    });
  });

  document.querySelectorAll('button.close-deets').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('details').forEach((el) => {
        el.open = false;
      });
    });
  });

  if (document.querySelector('main .view-facets')) {
    document
      .querySelectorAll('.views-exposed-form details')
      .forEach((el) => {
        el.open = true;
      });
  }
})();
