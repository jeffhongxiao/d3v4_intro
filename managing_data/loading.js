var response = d3.json('/data/simple.json', function(result) {
    console.log(result['key']);    
});