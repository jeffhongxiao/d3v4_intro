// ref: https://github.com/aendrew/learning-d3-v4
function chartFactory() {
  var chart = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  chart.svg = d3.select('body')
    .append('svg')
    .attr('width', chart.width)
    .attr('height', chart.height)
    // .attr('stroke', 'steelblue')
    // .attr('stroke-width', 2);
  chart.container = chart.svg.append('g')

  return chart;
}

var xScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 500]);

var yScale = d3.scaleLinear()
  .domain([-1, 1])
  .range([0, 200]);

var line = d3.line()
  .x(function(d) {return xScale(d[0])})
  .y(function(d) {return yScale(d[1])});

var sineData = d3.range(0, 10)
  .map(function(k) {
    var x = 0.5 * k * Math.PI;
    return [x, Math.sin(x)];
  });

var chart = chartFactory();
chart.container.append('path')
  .datum(sineData)
//  .attr('d', line)
  .attr('d', line.curve(d3.curveBasisOpen))
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
