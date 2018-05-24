var set = d3.set()
    .add('foo')
    .add('bar')
    .add('baz');

console.log(set.empty());
// set.clear();
console.log(set);


var map = d3.map()
    .set("foo", 1)
    .set("bar", 2)
    .set("baz", 3);

console.log(map);
map.set('foo', -1);
console.log(map.get('foo'));