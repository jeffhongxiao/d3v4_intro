function fillColor(transition, color) {
  transition.style('fill', color);
}

var t = d3
  .select("rect")
  .transition()
  .duration(2000);

var useCallFunction = true;

if (useCallFunction) {
  t.call(fillColor, "orange").call(fillColor, "yellow");
}
else {
  fillColor(t, "green");
  fillColor(t, "blue");
}

