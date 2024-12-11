//imports
import toInteger from '../src/toInteger.js';
import {expect} from 'chai';

describe('toInteger', () => {
    //Converting numeric values to integer
    it('should convert 3.2 to nearest integer', () => {
      expect(toInteger(3.2)).to.eql(3);
    });
    it('should convert -2.7 to nearest integer', () => {
      expect(toInteger(-2.7)).to.eql(-2); 
    });
    it('should convert 0 to 0', () => {
      expect(toInteger(0)).to.eql(0); 
    });
    //Handling strings
    it('should handle float number strings', () => {
      expect(toInteger('3.2')).to.eql(3);
    });
    it('should handle negative number strings', () => {
      expect(toInteger('-12')).to.eql(-12);
    });
    it('should handle abc string', () => {
      expect(toInteger('abc')).to.eql(0);
    });
    //Handling special numbers
    it('should handle special numeric value infinity', () => {
      expect(toInteger(Infinity)).to.eql(1.7976931348623157e+308);
    });
    it('should handle special numeric value NaN', () => {
      expect(toInteger(NaN)).to.eql(0);
    });
    //Handling null, undefined, booleans
    it('should handle null', () => {
      expect(toInteger(null)).to.eql(0); 
    });
    it('should handle undefined', () => { 
      expect(toInteger(undefined)).to.eql(0); 
    });
    it('should handle boolean true', () => { 
      expect(toInteger(true)).to.eql(1); 
    });
    it('should handle boolean false', () => { 
      expect(toInteger(false)).to.eql(0); 
    });

});    