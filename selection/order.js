var three = document.querySelector('#three');
var two = document.querySelector("#two");
var one = document.querySelector("#one");

var all = d3.selectAll([three, two, one]);
var result = all.order()._groups[0];

console.log(result[0].id);
console.log(result[1].id);
console.log(result[2].id);
