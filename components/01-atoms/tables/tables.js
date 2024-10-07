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
      if (thCollection[j].hasAttribute('data-header-text')) {
        var headerLabel = thCollection[j].getAttribute('data-header-text');
      } else {
        var headerLabel = thCollection[j].innerHTML;
      }
      tdCollection[j].setAttribute('data-label', headerLabel);
    }
  }
};
var tableAmount = document.getElementsByTagName("table").length;
for (let int = 0; int < tableAmount; int++) {
  addMobileTableData(int);
}
