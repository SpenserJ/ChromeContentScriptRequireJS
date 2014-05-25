define(['config', 'debug', 'events'], function (config, debug, events) {
  function filterPostTypes() {
    // Only run if the types to filter are configured
    if (typeof config.filter.types === 'undefined') { return; }

    var filter = $(config.filter.types).map(function (type) {
      return '.post.is_' + type;
    }).join(', ');
    debug.debug(filter);
    $(filter).each(function ($post) {
      debug.debug($post);
    });
  }

  debug.warn(config);

  // Require that there is a config enabling filtering for some piece of content
  if (typeof config.filter === 'undefined') { return; }

  events.addListener('document.ready', function() {
    filterPostTypes();
  });
});
