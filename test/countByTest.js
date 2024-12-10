// Import the `at` function
import countBy from '../src/countBy.js';
// Import Chai for assertions
import { expect } from 'chai';

// countBy function seems to be not working as intended.
// The problem lies at countBy.js line 35 "baseAssignValue(result, key, 0)"
// The value 0 should be 1 when an object is in the data.
describe('countBy function', () => {
    it('count users by number', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'betty', active: true },
            { user: 'fred', active: false },
        ];
        const result = countBy(users, (value) => value.active);
        expect(result).to.deep.equal({ true: 2, false: 1 });    
    })
    
    it('counts by string property', () => {
        const words = ['apple', 'banana', 'apple', 'orange'];
        const result = countBy(words, (value) => value);
        expect(result).to.deep.equal({ apple: 2, banana: 1, orange: 1 });
    })

    it('handles an empty collection', () => {
        const result = countBy([], (value) => value);
        expect(result).to.deep.equal({});
    });

    it('handles iteratee returning undefined', () => {
        const array = [1, 2, 3];
        const result = countBy(array, () => undefined);
        expect(result).to.deep.equal({ undefined: 3 });
    });

    it('handles collections with complex keys', () => {
        const array = [1, 2, 3];
        const result = countBy(array, (value) => `key-${value}`);
        expect(result).to.deep.equal({ 'key-1': 1, 'key-2': 1, 'key-3': 1 });
    });

    it('accessing the __proto__ branch', () => {
        const array = ['__proto__', '__proto__', 'test'];
        const result = countBy(array, (value) => value);
        
        // Verify that the __proto__ key has been set correctly
        expect(result).to.have.property('__proto__', 2);
    });
});

