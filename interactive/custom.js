function foo(param) {
  console.log('foo() called with param: ' + param);
}

var dispatch = d3.dispatch('start');
dispatch.on('start', foo);

dispatch.call('start', null, 'we are the champion');
