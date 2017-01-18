const bbb = require('../bbb.js');

describe('bbb.functional: ', () => {
	it('exist range', () => {
		expect(bbb.functional.range).toBeDefined();
	});

	it('range: no arguments', () => {
		const arr = bbb.functional.range();
		expect(arr).toNotEqual(null);
		expect(arr.length).toEqual(0);
	});

	it('range: single argument', () => {
		const arr = bbb.functional.range(8);
		expect(arr).toNotEqual(null);
		expect(arr.length).toEqual(8);
		expect(arr[0]).toEqual(0);
		expect(arr[7]).toEqual(7);
		expect(arr[8]).toEqual(undefined);
	});

	it('range: two arguments', () => {
		const arr = bbb.functional.range(3, 8);
		expect(arr).toNotEqual(null);
		expect(arr.length).toEqual(5);
		expect(arr[0]).toEqual(3);
		expect(arr[4]).toEqual(7);
		expect(arr[5]).toEqual(undefined);
	});

	it('range: three arguments', () => {
		const arr = bbb.functional.range(3, 8, 2);
		expect(arr).toNotEqual(null);
		expect(arr.length).toEqual(3);
		expect(arr[0]).toEqual(3);
		expect(arr[2]).toEqual(7);
		expect(arr[3]).toEqual(undefined);
	});
});