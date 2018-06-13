d3.select('rect')
  .on('mouseover', function(d, i) {
    console.log('mouseover');
  })
  .on('mouseout', function(d, i) {
    console.log('mouseout');
  });
