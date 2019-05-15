/* --------------------
 * @overlook/util-memoize module
 * Tests
 * ------------------*/

'use strict';

// Modules
const memoize = require('../index');

// Init
const {spy} = require('./utils');

// Tests

describe('called with extend function', () => {
	let fn, wrapped, obj;
	beforeEach(() => {
		fn = spy(arg => ({arg}));
		wrapped = memoize(fn);
		obj = {};
	});

	describe('on 1st invocation', () => {
		it('calls function', () => {
			expect(fn).not.toHaveBeenCalled();
			wrapped(obj);
			expect(fn).toHaveBeenCalledTimes(1);
		});

		it('calls function with argument', () => {
			wrapped(obj);
			expect(fn).toHaveBeenCalledWith(obj);
		});

		it('returns result', () => {
			const res = wrapped(obj);
			expect(res.arg).toBe(obj);
		});
	});

	describe('on 1st invocation with different arg', () => {
		it('calls function', () => {
			expect(fn).not.toHaveBeenCalled();
			wrapped(obj);
			wrapped({});
			expect(fn).toHaveBeenCalledTimes(2);
		});

		it('calls function with argument', () => {
			const obj2 = {};
			wrapped(obj);
			wrapped(obj2);
			expect(fn).toHaveBeenCalledWith(obj);
			expect(fn).toHaveBeenCalledWith(obj2);
		});

		it('returns result', () => {
			const obj2 = {};
			wrapped(obj);
			const res = wrapped(obj2);
			expect(res.arg).toBe(obj2);
		});
	});

	describe('on 2nd invocation with same argument', () => {
		it('does not call function', () => {
			wrapped(obj);
			wrapped(obj);
			expect(fn).toHaveBeenCalledTimes(1);
		});

		it('returns cached response', () => {
			wrapped(obj);
			const res = wrapped(obj);
			expect(res.arg).toBe(obj);
		});
	});
});

describe('throws if extend is', () => {
	const props = {
		undefined: undefined, // eslint-disable-line object-shorthand
		null: null,
		number: 123,
		boolean: true,
		string: 'abc',
		object: {}
	};

	for (const name in props) {
		const value = props[name];
		it(name, () => {
			expect(() => {
				memoize(value);
			}).toThrow(/^extend must be a function$/);
		});
	}
});
