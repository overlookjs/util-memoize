/* --------------------
 * @overlook/util-memoize module
 * Tests
 * ------------------*/

'use strict';

// Modules
const memoize = require('../index');

// Init
require('./utils');

// Tests

describe('tests', () => {
	it.skip('all', () => { // eslint-disable-line jest/no-disabled-tests
		expect(memoize).not.toBeUndefined();
	});
});
