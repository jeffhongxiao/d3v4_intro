var voronoi = d3.voronoi();
var data = [[200, 200], [760, 300]];

var result = voronoi(data);
console.log(result);
