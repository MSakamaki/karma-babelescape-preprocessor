var createPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.babelescape');

  var escapeWords = [
      'function _classCallCheck',
      'var _createClass',
  ];

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);

    var replaceCode = content;
    escapeWords.forEach(function(word) {
        replaceCode = replaceCode.replace(word, '/* istanbul ignore next */\n' + word);
    });

    return done(null, replaceCode);
  };
};

createPreprocessor.$inject = ['args', 'config.babelescapePreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:babelescape': ['factory', createPreprocessor]
};
