var all = d3.selectAll('li').datum(function() {
  return +this.getAttribute('value');
});
var result = all.sort()._groups[0];

console.log(result[0].id);
console.log(result[1].id);
console.log(result[2].id);
