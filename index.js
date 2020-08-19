const fs = require('fs');
let app = {};

const parse = (content, src) => {
  const destinationPath = app.options.dest + content;
  app.log.verbose('destinationPath: ' + destinationPath);

  const schemaFile = app.options.jsonSchemaPath + content;
  app.log.verbose('schemaFile: ' + schemaFile);

  fs.copyFileSync(schemaFile, destinationPath);

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
