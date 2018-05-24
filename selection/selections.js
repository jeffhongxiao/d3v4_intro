var first_child = d3.select('.child');
first_child.text("first child");

var parent = d3.selectAll('.parent');
console.log(parent.attr('children'));

parent.append('li');

first_child.remove();
