var svg = d3.select('svg');
var circle = svg.select('circle');

var zoomHandler = d3.zoom()
  .on("zoom", function () {
    circle.attr("transform", d3.event.transform);
  });

// MUST BE: svg
// CANNOT BE: circle
svg.call(zoomHandler);
// zoomHandler(svg);
