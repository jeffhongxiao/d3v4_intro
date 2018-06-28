// check typeof
var foo = d3.geoGraticule();
console.log(typeof foo);
console.log(typeof foo());


// REF: https://bl.ocks.org/mbostock/3757110

var svg = d3.select("svg");
var width = +svg.attr("width");
var height = +svg.attr("height");

var projection = d3
  .geoAzimuthalEquidistant()
  .scale(150)
  .translate([width / 2, height / 2])
  .rotate([122.4194, -37.7749])
  .clipAngle(180 - 1e-3)
  .precision(0.1);

var path = d3.geoPath().projection(projection);

svg
  .append("path")
  .datum(foo()) // was: d3.geoGraticule10()
  .attr("class", "graticule")
  .attr("d", path);

// TODO: change flag to display atlas
var drawAtlas = false;
if (drawAtlas) {
  var url = "https://unpkg.com/world-atlas/world/50m.json";
  d3.json(url, function(error, world) {
    if (error) throw error;

    svg
      .insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);

    svg
      .insert("path", ".graticule")
      .datum(
        topojson.mesh(world, world.objects.countries, function(a, b) {
          return a !== b;
        })
      )
      .attr("class", "boundary")
      .attr("d", path);
  });
}
