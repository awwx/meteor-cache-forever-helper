// Generated by CoffeeScript 1.5.0
(function() {
  var hashes, url;

  url = __meteor_bootstrap__.require('url');

  hashes = {};

  _.each(__meteor_bootstrap__.bundle.manifest, function(resource) {
    if (resource.where === 'client') {
      return hashes[url.parse(resource.url).pathname] = resource.hash;
    }
  });

  __meteor_runtime_config__.staticURLHashes = hashes;

}).call(this);
