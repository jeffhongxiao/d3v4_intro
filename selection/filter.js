var all = d3.selectAll('li');

var filtered = all.filter('#one');

console.log('filtered has ' + filtered.size()); // 1

var filteredWithFoo = all.filter(function(d, i) {
  return i > 0;
});

console.log('filteredWithFoo has ' + filteredWithFoo.size());

