define(['debug', '../lib/EventEmitter', 'jquery'], function (debug, EventEmitter, $) {
  var events = new EventEmitter();

  // Add any custom event triggers or listeners here
  $(document).ready(function() {
    events.emitEvent('document.ready');
  })

  return events;
});
