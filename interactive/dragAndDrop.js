// ref: https://bl.ocks.org/puzzler10/9159a992f58aa4277c2583fa41f01ed0

var svg = d3.select('svg');
var circles = svg.selectAll('circle');

var dragHandler = d3.drag()
  .on("drag", function () {
    d3.select(this)
      .attr('cx', d3.event.x)
      .attr('cy', d3.event.y)
  });

circles.call(dragHandler);
