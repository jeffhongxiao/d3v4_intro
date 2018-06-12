function fillColor(transition, color) {
  transition.style('fill', color);
}

var t = d3
  .select("rect")
  .transition()
  .duration(2000);

t.call(fillColor, "red").call(fillColor, "green");

