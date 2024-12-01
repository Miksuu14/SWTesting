// Import the `add` function
import at from '../src/at.js';
// Import Chai for assertions
import { expect } from 'chai';

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
 *
 * at(object, ['a[0].b.c', 'a[1]'])
 * // => [3, 4]
 */

describe('at function', () => {
 
    it('Return single value from object', ()=> {
        const object = {
            'a': [{ 'b': {'c': 3} }, 4],
            'd': 'test',
            'e': {'f': {'g': 5} },
        };
        const result = at(object, 'd');
        expect(result).to.deep.equal(['test']);
    });

    it('Return single value from object inside a list', ()=> {
        const object = {
            'a': [{ 'b': {'c': 3} }, 4],
            'd': 'test',
            'e': {'f': {'g': 5} },
        };
        const result = at(object, 'a[0].b.c');
        expect(result).to.deep.equal([3]);
    });

    it('Return vector containing values from object', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3, 4]);
    });

    // baseAt should return undefined when property paths does not exist in object
    it('Try to access location that is not defined', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
        expect(at(object, ['d'])).to.deep.equal([ undefined ]);
    });

    // baseAt should return undefined when property paths does not exist in object
    it('Try to access location that is not defined with a defined location', () => {
        const object = {
            'a': [{ 'b': {'c': 3} }, 4],
            'd': 'test',
            'e': {'f': {'g': 5} },
        };
        expect(at(object, ['d', 'x'])).to.deep.equal(['test', undefined ]);
    });

    it('Try giving invalid types as object', () => {
        const object = {'a': 1};

        // Number as a path
        expect(at(object, 123)).to.deep.equal([undefined]);

        // Null as a path
        expect(at(object, null)).to.deep.equal([undefined]);

        // Undefined as a path
        expect(at(object, undefined)).to.deep.equal([undefined]);
        
        // Boolean as a path
        expect(at(object, true)).to.deep.equal([undefined]);
    
    });

    it('Object as a path', () => {
        const object = {'a': 1};
        // Object as a path
        expect(at(object, { key: 'value' })).to.deep.equal([undefined]);
    });

    it('Try returning an empty array for empty paths array', () => {
        const object = { 'a': 1 };
        expect(at(object, [])).to.deep.equal([]);
    });

    it('Try handling null or undefined objects', () => {
        expect(at(null, ['a'])).to.deep.equal([undefined]);
        expect(at(undefined, ['a'])).to.deep.equal([undefined]);
    });

    it('Try handling duplicate paths', () => {
        const object = { 'a': 1, 'b': 2 };
        expect(at(object, ['a', 'a', 'b'])).to.deep.equal([1, 1, 2]);
    });
});