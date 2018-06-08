
if (true) {
  d3.select('rect')
    .transition()
    .duration(2000)
    .style('fill', 'red');
}

if (true) {
  d3.select('circle')
    .transition()
    .duration(3000)
    .delay(2000)
    .style('fill', 'green');
}

if (false) {
  d3.select('ellipse')
    .transition()
    .duration(4000)
    .ease(d3.easeExpInOut)
    .style('fill', 'blue');
}

