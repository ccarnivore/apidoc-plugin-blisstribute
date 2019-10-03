let fs     = require('fs-extra');
let app = {};

const parse = (content, src) => {
  let destinationPath = app.options.dest + content;
  let schemaFile = app.options.jsonSchemaPath + content;
  fs.copySync(schemaFile, destinationPath);

  return { schema: content }
};

module.exports = {
  init(_app) {
    app = _app;

    app.parsers.apivalidationschema = {
      parse,
      path: 'local',
      method: 'insert',
    };
  },
};
