var svg = d3.select('svg');
var g = svg.select('g');

var zoomHandler = d3.zoom()
  .on("zoom", function () {
    g.attr("transform", d3.event.transform);
  });

g.call(zoomHandler);

