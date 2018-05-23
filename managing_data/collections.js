var set = d3.set()
    .add('foo')
    .add('bar')
    .add('baz');

console.log(set);

if (set.empty()) {
    console.log('set is empty');
}
else {
    console.log('set is NOT empty');
}
