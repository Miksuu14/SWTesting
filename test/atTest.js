// Import the `add` function
import at from '../src/at.js';
// Import Chai for assertions
import { expect } from 'chai';

describe('at function', () => {

    const object = {
        'a': [{ 'b': {'c': 3} }, 4],
        'd': 'test',
        'e': {'f': {'g': 5} },
    };
    
    it('test1', ()=> {
        const result = at(object, 'd');
        expect(result).to.deep.equal(['test']);
    });


});