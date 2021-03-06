define(function () {
  var baseMessage = [];

  function emit(logType, args) {
    // Grab as many arguments as possible
    var argsArray = [].splice.call(args, 0, 9999)
      , message = baseMessage.concat(argsArray);
    console[logType].apply(console, message);
  }

  return {
    debug: function () { emit('debug', arguments); },
    error: function () {
      emit('error', arguments);
      console.trace();
    },
    info: function () { emit('info', arguments); },
    log: function () { emit('log', arguments); },
    warn: function () { emit('warn', arguments); },
    initialize: function (message) {
      baseMessage = (message instanceof Array === true) ? message : [message];
    },
  };
});
