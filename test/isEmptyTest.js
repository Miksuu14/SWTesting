//imports
import isEmpty from '../src/isEmpty.js';
import {expect} from 'chai';

//Testing with null and undefined values. then with number, boolean and string. After that testing Array, Object, Maps and Sets.

describe('isEmpty function', () => {
    //Empty, null and undefined
    it('Should return true for null, undefined and empty', () => {
        expect(isEmpty(null)).to.eql(true);
        expect(isEmpty(undefined)).to.eql(true);
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

})
