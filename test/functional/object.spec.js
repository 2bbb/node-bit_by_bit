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

    describe('bbb.functional.object.forEach', () => {
        it('exist forEach', () => {
            expect(object.forEach).toBeDefined();
        });
        it('object.forEach', () => {
            const result = object.forEach(source, (value, key) => {
                expect(value).toEqual(source[key]);
            });
            expect(result).toEqual(source);
        });
    });

    describe('bbb.functional.object.map', () => {
        it('exist map', () => {
            expect(object.map).toBeDefined();
        });
        it('object.map', () => {
            const result = object.map(source, (value, key) => {
                if(key == 'a') return -100;
                return value * 2;
            });

            expect(result).toBeDefined();

            expect(result.a).toBeDefined();
            expect(result.a).toEqual(-100);

            expect(result.b).toBeDefined();
            expect(result.b).toEqual(400);

            expect(result.c).toBeDefined();
            expect(result.c).toEqual(800);
        });
    });

    describe('bbb.functional.object.mapKV', () => {
        it('exist mapKV', () => {
            expect(object.mapKV).toBeDefined();
        });
        it('object.mapKV', () => {
            const result = object.mapKV(source, (value, key) => {
                return {
                    key: "new_" + key,
                    value: value * 2
                };
            });

            expect(result).toBeDefined();
            
            expect(result.new_a).toBeDefined();
            expect(result.new_a).toEqual(200);

            expect(result.new_b).toBeDefined();
            expect(result.new_b).toEqual(400);

            expect(result.new_c).toBeDefined();
            expect(result.new_c).toEqual(800);
        });
    });

    describe('bbb.functional.object.reduce', () => {
        it('exist reduce', () => {
            expect(object.reduce).toBeDefined();
        });
        it('object.reduce', () => {
            const result = object.reduce(source, (reduced, value, key) => {
                if(key == 'a') return reduced - value;
                return reduced + value;
            }, 50);
            
            expect(result).toBeDefined();
            expect(result).toEqual(50 - source.a + source.b + source.c);
        });
    });
});
