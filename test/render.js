var testCases = [
  {
    name: 'render',
    args: { template: '<h1>{{hello}}</h1>', context: { hello: 'Hello World!' }, output: 'html' },
    output: '<h1>Hello World!</h1>'
  },
  {
    name: 'render#no-template',
    args: { context: { hello: 'Hello World!' }, output: 'html' },
    output: 'error'
  },
  {
    name: 'render#no-context',
    args: { template: '<h1>{{hello}}</h1>', output: 'html' },
    output: 'error'
  }
];

require('@inappcloud/stack-test').runTests(require('..').render, testCases);
