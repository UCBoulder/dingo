var searchIcon = document.getElementById('search-block-form').querySelector('[data-drupal-selector="edit-submit"]');
var searchBox = document.getElementById('search-block-form').querySelector('[type="search"]');
var domBody = document.querySelector('body');
function clickToSearch() {
  searchIcon.setAttribute('title', 'Click to search');
}
function removeClickToSearch() {
  searchIcon.removeAttribute("title");
}
clickToSearch();
searchIcon.onclick = clickMagSearch;
function clickMagSearch() {
  if (searchBox.offsetParent) {
    domBody.classList.remove('show-search');
    clickToSearch();
    return true;
  } else {
    domBody.classList.add('show-search');
    searchBox.focus();
    removeClickToSearch();
    return false;
  }
}

// Execute a function when the user presses a key on the keyboard
domBody.addEventListener("keypress", function(event) {
  // If the user presses the "/" key on the keyboard
  if (!searchBox.offsetParent) {
    if (event.key === "/") {
      setTimeout("document.getElementById('edit-keys').value = ''", 1);
      domBody.classList.add('show-search');
      searchBox.focus();
      removeClickToSearch();
    }
  }
});

var ignoreClickOnMeElement = document.getElementById('search-block-form');

document.addEventListener('click', function(event) {
  var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  if (!isClickInsideElement) {
    const bodyHasClass = document.body.classList.contains(
      'show-search'
    );
    if (bodyHasClass) {
      domBody.classList.remove('show-search');
    }
  }
});
