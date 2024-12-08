// Import the `at` function
import countBy from '../src/countBy.js';
// Import Chai for assertions
import { expect } from 'chai';

// countBy function seems to be not working as intended.
// The problem lies at countBy.js line 35 "baseAssignValue(result, key, 0)"
// The value 0 should be 1 when an object is in the data.
describe('countBy function', () => {
    it('Count users by number', () => {
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
});

