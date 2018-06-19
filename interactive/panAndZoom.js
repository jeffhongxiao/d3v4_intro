var svg = d3.select('svg');

var circle = svg.append('circle')
    .attr('cx', 20)
    .attr('cy', 20)
    .attr('r', 50)
    .style('fill', 'tan');

var zoomHandler = d3.zoom()
  .on("zoom", function () {
    circle.attr("transform", d3.event.transform);
  });

// MUST BE: svg
// CANNOT BE: circle
svg.call(zoomHandler);
// zoomHandler(svg);
