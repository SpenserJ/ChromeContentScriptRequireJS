var requireLocal = cajon.config({
  baseUrl: cajonBaseURL + 'js',
});

// Cleanup our Cajon config
delete cajonBaseURL;

requireLocal([
    'debug'
  ], function (debug) {

  // Initialize any modules
  debug.initialize('Content Script RequireJS');

  debug.info('is ready');
});
