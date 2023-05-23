import {sum} from './mathFunction.js';
import {div} from './mathFunction.js';
import {Multiple} from './mathFunction.js';


describe('Call sum of numbers', () => {
    const result = sum(1,2)

    it('Should not be greater than 10', () => {
        expect(result).not.toBeGreaterThan(10);
    })

    it('Should be less than 10', () => {
        expect(result).toBeLessThan(10);
    })
});

describe('Divide numbers: 10/5', () => {
    const result = div(10,5)

    it('Should not equal 10', () => {
        expect(result).not.toBe(10);
    })

    it('Should equal 2', () => {
        expect(result).toBe(2);
    })
});

describe('Divide numbers: 5/0', () => {
    const result = div(5,0)

    it('Should not equal 5', () => {
        expect(result).not.toBe(5);
    })

    it('Should equal Infinity', () => {
        expect(result).toBe(Infinity);
    })
});

describe('Divide numbers: 0/0', () => {
    const result = div(0,0)

    it('Should not equal 1', () => {
        expect(result).not.toBe(1);
    })

    it('Should equal NaN', () => {
        expect(result).toBe(NaN);
    })
});

describe('Multiple numbers: 5*20', () => {
    const result = Multiple(5,20)

    it('Should not equal 99', () => {
        expect(result).not.toBe(99);
    })

    it('Should equal 100', () => {
        expect(result).toBe(100);
    })
});
