var first_child = d3.select('.child');
first_child.text("first child");

var parent = d3.selectAll('.parent');
console.log(parent.attr('attr'));

parent.insert('li', ':last-child');
parent.append('li');
// first_child.remove();

parent.attr('attr', 4);
console.log(parent.attr("attr"));
parent.style('fill', 'red');
console.log(parent.style('fill'));
