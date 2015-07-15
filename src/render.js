module.exports = {
  name: 'render',

  args: {
    template: {
      example: '<h1>{{hello}}</h1>',
      required: true
    },

    context: {
      example: { hello: 'Hello World!' },
      required: true
    }
  },

  call: function(args, done) {
    var hogan = require('hogan.js');
    var template = hogan.compile(args.template);
    done(template.render(args.context));
  }
};
