var xScale = d3.scaleLinear()
  .range([0, 500])
  .domain([0, 500]);

var yScale = d3.scaleLinear()
  .range([0, 200])
  .domain([-1, 1]);

var line = d3.line()
  .x(function(d) {return xScale(d[0])})
  .y(function(d) {return yScale(d[1])});

var sineData = d3.range(0, 10)
  .map(function(k) {
    var x = 0.5 * k * Math.PI;
    return [x, Math.sin(x)];
  });

var g = d3.select('#svg').append('g');
g.append('path')
  .datum(sineData)
//  .attr('d', line)
  .attr('d', line.curve(d3.curveBasisOpen))
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
