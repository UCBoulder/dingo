function addMobileTableData(int) {
  var table = document.getElementsByTagName("table")[int];
  var bodyTrCollection = table.querySelectorAll('tbody tr');
  var th = table.querySelectorAll('thead th');
  var thCollection = Array.from(th);

  for (var i = 0; i < bodyTrCollection.length; i++) {
    var td = bodyTrCollection[i].querySelectorAll('td');
    var tdCollection = Array.from(td);
    for (var j = 0; j < tdCollection.length; j++) {
      if (j === thCollection.length) {
        continue;
      }

      // Remove existing mobile header spans to avoid duplication on re-runs.
      tdCollection[j].querySelectorAll('.table__mobile-header, .table__mobile-header-label').forEach(function(el) {
        el.remove();
      });

      // Plain-text label used by screen readers and as a fallback.
      var plainLabel = thCollection[j].hasAttribute('data-header-text')
        ? thCollection[j].getAttribute('data-header-text')
        : thCollection[j].textContent.trim();

      // Visual span: cloned header HTML, hidden from screen readers.
      var visualSpan = document.createElement('span');
      visualSpan.classList.add('table__mobile-header');
      visualSpan.setAttribute('aria-hidden', 'true');
      visualSpan.innerHTML = thCollection[j].innerHTML;
      // Remove cloned IDs to prevent duplicate IDs in the document.
      visualSpan.querySelectorAll('[id]').forEach(function(el) {
        el.removeAttribute('id');
      });
      // Prevent cloned interactive elements from receiving focus or clicks.
      visualSpan.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach(function(el) {
        el.setAttribute('tabindex', '-1');
      });

      // Screen reader span: plain text only, visually hidden.
      var srSpan = document.createElement('span');
      srSpan.classList.add('table__mobile-header-label', 'visually-hidden');
      srSpan.textContent = plainLabel;

      tdCollection[j].prepend(srSpan);
      tdCollection[j].prepend(visualSpan);
    }
  }
};
var tableAmount = document.getElementsByTagName("table").length;
for (let int = 0; int < tableAmount; int++) {
  addMobileTableData(int);
}
