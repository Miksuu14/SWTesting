//imports
import filter from '../src/filter.js';
import {expect} from 'chai';

describe('filter function', () => {
    it('should return an empty array when given a null, undefinen array or an empty array', () => {
        expect(filter(null, () => true)).to.eql([]);
        expect(filter(undefined, () => true)).to.eql([]);
        expect(filter([], () => true)).to.eql([]);   
    });
    //Jatka tästä
})
