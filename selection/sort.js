var all = d3.selectAll('li').datum(function() {
  return +this.getAttribute('data-value');
});

var sorted = all.sort(function(a, b) {
  return a - b;
});

var result = sorted._groups[0];
console.log(result[0].id);
console.log(result[1].id);
console.log(result[2].id);
