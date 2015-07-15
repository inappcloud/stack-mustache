var assert = require('assert');
var test = require('mocha').test;
var mustache = require('..');

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

testCases.forEach(function(testCase) {
  test(testCase.name, function(done) {
    mustache.render({}, testCase.args).then(function(ctx) {
      if (testCase.output !== 'error') {
        assert.equal(ctx[testCase.args.output], testCase.output);
        done();
      } else {
        done(new Error('Function should have returned an error'));
      }
    }).catch(function(ctx) {
      if (testCase.output === 'error') {
        done();
      } else {
        done(ctx.error);
      }
    });
  });
});
