/* --------------------
 * @overlook/util-memoize module
 * ------------------*/

'use strict';

// Modules
const {isFunction} = require('core-util-is');

// Exports

/**
 * Memoize class extension function.
 * @param {Function} extend - Extend function to be memoized
 * @returns {Function} - Memoized version of function
 */
module.exports = function memoize(extend) {
	if (!isFunction(extend)) throw new Error('extend must be a function');

	// Return function that uses cache
	const cache = new Map();

	return function(Klass) {
		let Extended = cache.get(Klass);
		if (!Extended) {
			Extended = extend(Klass);
			cache.set(Klass, Extended);
		}
		return Extended;
	};
};
