const {functional} = require('bbb.js');

describe('bbb.functional.flatten:', () => {
    it('exist flatten', () => {
        expect(functional.flatten).toBeDefined();
    });

    it('not effect', () => {
        const source = [1, 2, 3];
        const result = functional.flatten(source);
        expect(result).toNotEqual(null);
        expect(result.length).toEqual(source.length);
        expect(result[0]).toEqual(source[0]);
        expect(result[1]).toEqual(source[1]);
        expect(result[2]).toEqual(source[2]);
    });

    it('one level', () => {
        const source = [[1, 2, 3], [4, 5, 6]];
        const result = functional.flatten(source);
        expect(result).toNotEqual(null);
        expect(result.length).toEqual(6);
        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
        expect(result[2]).toEqual(3);
        expect(result[3]).toEqual(4);
        expect(result[4]).toEqual(5);
        expect(result[5]).toEqual(6);
    });

    it('deep', () => {
        const source = [[1, [2, 3]], [4, [5, [6]]]];
        const result = functional.flatten(source);
        expect(result).toNotEqual(null);
        expect(result.length).toEqual(6);
        expect(result[0]).toEqual(1);
        expect(result[1]).toEqual(2);
        expect(result[2]).toEqual(3);
        expect(result[3]).toEqual(4);
        expect(result[4]).toEqual(5);
        expect(result[5]).toEqual(6);
    });
});
