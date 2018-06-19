var svg = d3.select('svg');
var circle = svg.select('circle#mycircle');

var dragHandler = d3.drag()
  .on("drag", function (d) {
    d3.select(this)
      .attr('cx', d3.event.x)
      .attr('cy', d3.event.y)
  });

circle.call(dragHandler);
