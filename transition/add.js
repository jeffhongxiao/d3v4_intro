var rect = d3.select('rect');
rect.style("fill", "red");

var t = d3.transition().duration(5000);
rect.transition(t).style("fill", "blue");
