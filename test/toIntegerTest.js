//imports
import toInteger from '../src/toInteger.js';
import {expect} from 'chai';

describe('toInteger', () => {
    it('should convert numeric values to integers', () => {
      expect(toInteger(3.2)).to.eql(3);
      expect(toInteger(-2.7)).to.eql(-2); 
      expect(toInteger(0)).to.eql(0);
    });
  
    it('should handle strings', () => {
      expect(toInteger('3.2')).to.eql(3);
      expect(toInteger('-12')).to.eql(-12);
      expect(toInteger('abc')).to.eql(0); // Or NaN, depending on your desired behavior
    });
  
    it('should handle special numeric values', () => {
      expect(toInteger(Infinity)).to.eql(1.7976931348623157e+308); // Or your toFinite equivalent
      expect(toInteger(NaN)).to.eql(0); // Or NaN, based on your implementation
    });
  
    it('should handle null, undefined, and booleans', () => {
      expect(toInteger(null)).to.eql(0); 
      expect(toInteger(undefined)).to.eql(0); 
      expect(toInteger(true)).to.eql(1);
      expect(toInteger(false)).to.eql(0);
    });
});    