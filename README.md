[![NPM version](https://img.shields.io/npm/v/@overlook/util-memoize.svg)](https://www.npmjs.com/package/@overlook/util-memoize)
[![Build Status](https://img.shields.io/travis/overlookjs/util-memoize/master.svg)](http://travis-ci.org/overlookjs/util-memoize)
[![Dependency Status](https://img.shields.io/david/overlookjs/util-memoize.svg)](https://david-dm.org/overlookjs/util-memoize)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookjs/util-memoize.svg)](https://david-dm.org/overlookjs/util-memoize)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookjs/util-memoize.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookjs/util-memoize/master.svg)](https://coveralls.io/r/overlookjs/util-memoize)

# Overlook framework memoize utility function

## Usage

Memoize a class extension function.

This prevents multiple subclasses being created, where `extend()` is called multiple times to extend the same class.

```js
// Define Route class extension
const memoize = require('@overlook/util-memoize');

const extend = memoize(function(Route) {
  return class MyExtendedRouteClass extends Route {
    /* ... */
  };
});

// Use it
const {Route} = require('@overlook/framework');
const RouteSubclass = extend(Route);
const RouteSubclass2 = extend(Route);
// RouteSubclass2 === RouteSubclass
```

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookjs/util-memoize/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookjs/util-memoize/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
