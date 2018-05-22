var date = new Date(2018, 4, 1);  // May 1st, 2018

var format = d3.timeFormat('%Y%m%d');
console.log(format(date));


console.log(d3.timeFormat("%H%M%S")(new Date(2018, 4, 1, 2, 3, 4)));
