const {functional} = require('bbb.js');

describe('bbb.functional.object:', () => {
    it('exist object', () => {
        expect(functional.object).toBeDefined();
    });

    const {object} = functional;
    const source = {
        a: 100,
        b: 200,
        c: 400
    };

    it('object.forEach', () => {
        expect(object.forEach).toBeDefined();

        const result = object.forEach(source, (key, value) => {
            expect(value).toEqual(source[key]);
        });
        expect(result).toEqual(source);
    });

    it('object.map', () => {
        expect(object.map).toBeDefined();

        const result = object.map(source, (key, value) => {
            if(key == 'a') return -100;
            return value * 2;
        });
        expect(result.a).toBeDefined();
        expect(result.a).toEqual(-100);

        expect(result.b).toBeDefined();
        expect(result.b).toEqual(400);

        expect(result.c).toBeDefined();
        expect(result.c).toEqual(800);
    });

    it('object.reduce', () => {
        expect(object.reduce).toBeDefined();

        const result = object.reduce(source, (key, value, reduced) => {
            if(key == 'a') return reduced - value;
            return reduced + value;
        }, 50);
        expect(result).toBeDefined();
        expect(result).toEqual(50 - source.a + source.b + source.c);
    });
});
