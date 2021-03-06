
if (true) {
  // this transition will be stopped
  d3.select("rect")
    .transition()
    .duration(3000)
    .style("fill", "red");

  // this transition wins
  d3.select("rect")
    .transition()
    .duration(3000)
    .style("fill", "green");
}

if (true) {
  // add a new transition after an existing one
  d3.select("circle")
    .transition()
    .duration(3000)
    .style("fill", "red")
    .transition()
    .duration(3000)
    .style("fill", "green");
}

if (true) {
  // use tweening
  d3.select("ellipse")
    .style('fill', 'red')
    .transition()
    .duration(3000)
    .styleTween('fill', function () {
      return d3.interpolateRgb('green', 'black');
    });
}
