var itplNumber = d3.interpolateNumber(0, 10);
console.log(itplNumber(0.2));

var a = "300 12px sans-serif";
var b = "500 36px Comic-Sans";

var itplString = d3.interpolateString(a, b);
console.log(itplString(0.5));

var itplRound = d3.interpolateRound(0, 10);
console.log(itplRound(0.49));
