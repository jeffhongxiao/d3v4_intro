d3.select('rect')
  .on('click', function() {
    console.log('clicked');
  })
  .on('dblclick', function() {
    console.log('double clicked');
  });

// remove the listener to an event type
// d3.select('rect').on('click', null);
