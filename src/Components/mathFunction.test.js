import {sum} from './mathFunction.js';

describe('Call sum of numbers', () => {
    const result = sum(1,3)

    it('Should not be greater than 10', () => {
        expect(result).not.toBeGreaterThan(10);
    })

    it('Should be less than 10', () => {
        expect(result).toBeLessThan(10);
    })

    
});

