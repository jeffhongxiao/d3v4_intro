function foo() {
  console.log('foo() called');
}

var dispatch = d3.dispatch('start');
dispatch.on('start', foo);

dispatch.call('start');
