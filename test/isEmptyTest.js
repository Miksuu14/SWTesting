//imports
import isEmpty from '../src/isEmpty.js';
import {expect} from 'chai';

describe('isEmpty function', () => {
    //Empty, null and undefined
    it('Should return true for null, undefined and empty', () => {
        expect(isEmpty(null)).to.eql(true);
    })
    it('Should return true for undefined', () => {
        expect(isEmpty(undefined)).to.eql(true);
    })
    it('Should return true for empty', () => {
        expect(isEmpty()).to.eql(true);
    })
    //Variables: number, boolean and string
    it('Should return true for number 4', () => {
        expect(isEmpty(4)).to.eql(true);
    })
    it('Should return true for boolean false', () => {
        expect(isEmpty(false)).to.eql(true);
    })
    it('Should return false because string "Test" is an array-like object', () => {
        expect(isEmpty("Test")).to.eql(false);
    })
    //Arrays, Object, Map and Set
    //First with empty array and then an array with objects in it
    it('Should return true when empty array is the input', () => {
        expect(isEmpty([])).to.eql(true);
    })
    it('Should return false when array has [1, 2, 3] in it', () => {
        expect(isEmpty([1, 2, 3])).to.eql(false);
    })
    //Empty object and then an object with a property
    it('Should return true for empty Object', () => {
        expect(isEmpty({})).to.eql(true);
    })
    it('Should return false for Object with properties {a: 1}', () => {
        expect(isEmpty({a: 1})).to.eql(false);
    })
    //First an empty Map and then map with values
    it('Should return true for empty Map', () => {
        expect(isEmpty(new Map())).to.eql(true);
    })
    it('Should return false for Map with values ["a", 1]', () => {
        expect(isEmpty(new Map([['a', 1]]))).to.eql(false);
    })
    //First empty set and then set with values 
    it('Should return true for empty Set', () => {
        expect(isEmpty(new Set())).to.eql(true);
    })
    it('Should return false for Set with values', () => {
        expect(isEmpty(new Set([1, 2]))).to.eql(false);
    })
     // Arguments object
     it('Should return true for an empty arguments object', () => {
        function testArgs() {
            return arguments;
        }
        expect(isEmpty(testArgs())).to.eql(true); 
    });
    it('Should return false for an arguments object with values', () => {
        function testArgs() {
            return arguments;
        }
        expect(isEmpty(testArgs(1, 2, 3))).to.eql(false); 
    });
    // Buffer 
    it('Should return true for an empty Buffer', () => {
        if (typeof Buffer !== 'undefined') { // Check if Buffer exists (Node.js environment)
            expect(isEmpty(Buffer.alloc(0))).to.eql(true);
        }
    });
    it('Should return false for a Buffer with data', () => {
        if (typeof Buffer !== 'undefined') {
            expect(isEmpty(Buffer.from('data'))).to.eql(false);
        }
    });
    // TypedArray
    it('Should return true for an empty TypedArray', () => {
        expect(isEmpty(new Uint8Array())).to.eql(true);
    });
    it('Should return false for a TypedArray with data', () => {
        expect(isEmpty(new Uint8Array([1, 2, 3]))).to.eql(false);
    });
    // String with length 0 
    it('Should return true for an empty string', () => { 
        expect(isEmpty('')).to.eql(true);
    });
    // Function
    it('Should return true for a function', () => { 
        expect(isEmpty(() => {})).to.eql(true);
    });
    // Prototype of an object
    it('Should return true for the prototype of an object (which has no own properties)', () => {
        function Test() {}
        expect(isEmpty(Test.prototype)).to.eql(true); 
    });

})
