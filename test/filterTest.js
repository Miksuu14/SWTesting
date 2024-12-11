//imports
import filter from '../src/filter.js';
import {expect} from 'chai';

describe('filter function', () => {
    //Testing empty, null and undefined values
    it('should return an empty array when given a null, undefined array or an empty array', () => {
        expect(filter(null, () => true)).to.eql([]);
        expect(filter(undefined, () => true)).to.eql([]);
        expect(filter([], () => true)).to.eql([]);   
    });
    //Testing all true and all false cases and a simple case
    it('should return array [1, 2, 3, 4]', () => {
       expect(filter([1, 2, 3, 4], () => true)).to.eql([1, 2, 3, 4]);
    })
    it('should return empty array', () => {
        expect(filter([1, 2, 3, 4], () => false)).to.eql([]);
    })
    it('should return array [1]', () => {
        expect(filter([1, 2, 3], (value) => value === 1)).to.eql([1]);
    })
    //Testing with more complex predicates and input arrays
    it('should return array [1, 3]', () => {
        expect(filter([1, 2, 3, 4], (value, index) => index % 2 === 0)).to.eql([1, 3]);
    })
    it('should return array [1, 2, 3, 4]', () => {
        expect(filter([1, 2, 3, 4], (value, index, array) => array.length > 3)).to.eql([1, 2, 3, 4])
    })
    it('should return { name: Car, weight: 1500}', () => {
        expect(filter([{name: 'Car', weight: '1500'}, {name: 'Truck', weight: '5000'}], (vehicle) => vehicle.name === 'Car')).to.eql([{name: 'Car', weight: '1500'}]);
    })

})
