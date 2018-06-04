// ref: https://github.com/aendrew/learning-d3-v4
function chartFactory() {
  var chart = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  chart.svg = d3.select("body").append("svg")
    .attr("width", chart.width)
    .attr("height", chart.height);

  chart.container = chart.svg.append('g');
  chart.container.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', chart.width)
    .attr('height', chart.height)
    .attr('fill', 'none')
    .attr("stroke", "orange")
    .attr("stroke-width", 2);

  return chart;
}

var xScale = d3.scaleLinear()
  .domain([0, 1])
  .range([0, 50]);

var yScale = d3.scaleLinear()
  .domain([-1, 1])
  .range([0, 200]);

var line = d3.line()
  .x(function(d) {return xScale(d[0])})
  .y(function(d) {return yScale(d[1])});

var sineData = d3.range(0, 10)
  .map(function(k) {
    var x = 0.5 * k * Math.PI;
    // console.log(x, Math.sin(x));
    return [x, Math.sin(x)];
  });

console.log(sineData);

var chart = chartFactory();
chart.container.append('path')
  .datum(sineData)
  .attr('d', line)
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

chart.container.append('path')
  .datum(sineData)
  .attr('d', line.curve(d3.curveBasisOpen))
  .attr('stroke', 'lightgreen')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
