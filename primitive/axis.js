var axis = d3.axisTop(d3.scaleLinear());
console.log(typeof(axis));

console.log(axis.tickSize());
axis.tickSizeOuter(5);
console.log(axis.tickSize()); // this outputs .tickSizeInner()
