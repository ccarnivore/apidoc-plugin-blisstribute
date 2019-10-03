let app = {};

const parse = (content, src) => {
  return { schema: content }
};

module.exports = {
  init(_app) {
    app = _app;
    app.log.debug('validate' + JSON.stringify(app.options));
    app.parsers.apivalidationschema = {
      parse,
      path: 'local',
      method: 'insert',
    };
  },
};
