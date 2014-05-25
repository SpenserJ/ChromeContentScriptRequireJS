var requireLocal = cajon.config({
  baseUrl: cajonBaseURL + 'js',
});

// Cleanup our Cajon config
delete cajonBaseURL;

requireLocal([
    'debug',
    'events',
  ], function (
    debug,
    events
  ) {

  // Initialize any dependencies

  // Give our debug library a message to prefix to the logs
  debug.initialize('Content Script RequireJS');

  // The extension core is initialized
  debug.info('is ready');
  events.emitEvent('ready');
});
