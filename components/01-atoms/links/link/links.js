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
    console.log('remove');
    domBody.classList.remove('show-search');
    clickToSearch();
    return true;
  } else {
    console.log('show');
    domBody.classList.add('show-search');
    searchBox.focus();
    removeClickToSearch();
    return false;
  }
}

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
