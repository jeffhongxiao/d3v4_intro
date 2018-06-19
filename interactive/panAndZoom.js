var svg = d3.select('svg');
var circles = svg.selectAll('circle');

var zoomHandler = d3.zoom()
  .on("zoom", function () {
    circles.attr("transform", d3.event.transform);
  });

// MUST BE: svg
// CANNOT BE: circles
svg.call(zoomHandler);
// zoomHandler(svg);
