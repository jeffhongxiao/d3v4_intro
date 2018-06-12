function firstName(selection, name) {
  selection.attr('first-name', name);
}

function lastName(selection, name) {
  selection.attr('last-name', name)
}

var useOldWay = false;
// old way
if (useOldWay) {
  firstName(d3.selectAll('div'), 'Old');
  lastName(d3.selectAll('div'), 'Way');
}
else {
  // new way
  d3.selectall('div').call(firstName, 'New').call(lastName, 'Way');
}
