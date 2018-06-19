var svg = d3.select('svg');
var circles = svg.selectAll('circle');

var zoomHandler = d3.zoom()
  .on("zoom", function () {
    console.log('zoom');
    circles.attr("transform", d3.event.transform);
  });

var dragHandler = d3.drag()
  .on("drag", function() {
    console.log('drag');
    d3.select(this)
      .attr('cx', d3.event.x)
      .attr('cy', d3.event.y)
      .attr('transform', d3.event.transform);
  })

zoomHandler(svg);
dragHandler(circles);

