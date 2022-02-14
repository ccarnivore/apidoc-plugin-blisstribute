const fs = require('fs');
let app = {};

const parse = (content, src) => {
  const destinationPath = app.options.dest + content;
  const schemaFile = app.options.jsonSchemaPath + content;

  fs.copyFileSync(schemaFile, destinationPath);
  console.log(content + ' successfully copied');

  return { schema: content }
};

module.exports = {
  init: function(_app) {
    app = _app;

    app.parsers.apischemavalidation = {
      parse     : parse,
      path      : 'global',
      method    : 'insert'
    };
  }
};
