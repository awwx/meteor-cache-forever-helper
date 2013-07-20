# Deprecated

Use [cache-busting-url](https://github.com/awwx/meteor-cache-busting-url#readme) instead.

This package was designed to work with the cache-forever package; but that package
is obsolete because Meteor now turns on the caching header for all static assets.


## cache-forever-helper

This package implements a template helper for generating a "cache
busting" URL which includes the file hash as a query parameter.  See
the
[cache-forever](https://github.com/awwx/meteor-cache-forever#readme)
package for details on the `/cache` URL route.

Replace

    <img src="/image.jpg">

with

    <img src="{{cache "/image.jpg"}}">

and the `cache` template helper will generate a URL such as

    /cache/image.jpg?40a9...

where the query parameter is the file hash.
