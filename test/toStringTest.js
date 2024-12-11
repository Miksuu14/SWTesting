import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  //Handling strings
  it('should convert "hello" to "hello"', () => {
    expect(toString('hello')).to.equal('hello');
  });
  it('should convert string "" to string ""', () => {
    expect(toString('')).to.equal('');
  });
  //Handling null and undefined
  it('should convert null to empty string', () => {
    expect(toString(null)).to.equal('');
  });
  it('should convert undefined to empty string', () => {
    expect(toString(undefined)).to.equal('');
  });
  //Converting different numbers to strings
  it('should convert 42 to a string', () => {
    expect(toString(42)).to.equal('42'); 
  });
  it('should convert 3.14 to a string', () => {
    expect(toString(3.14)).to.equal('3.14'); 
  });
  it('should convert -0 to a string with the sign preserved', () => {
    expect(toString(-0)).to.equal('-0'); 
  });
  it('should convert Infinity to a string', () => {
    expect(toString(Infinity)).to.equal('Infinity'); 
  });
  it('should convert -Infinity to a string', () => {
    expect(toString(-Infinity)).to.equal('-Infinity'); 
  });
  it('should convert NaN to a string', () => {
    expect(toString(NaN)).to.equal('NaN'); 
  });
  //Converting booleans
  it('should convert true to string', () => {
    expect(toString(true)).to.equal('true');
  });
  it('should convert false to strings', () => {
    expect(toString(false)).to.equal('false');
  });
  //Convert arrays to strings
  it('should convert [1, 2, 3] to a string', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
  });
  it('should convert [1, null, "hello"] to a string with null represented as an empty string', () => {
    expect(toString([1, null, 'hello'])).to.equal('1,,hello');
  });
  it('should convert nested arrays to a string', () => {
    expect(toString([1, [2, 3], 4])).to.equal('1,2,3,4');
  });
  
  it('should convert symbols to strings', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it('should handle objects by converting them to strings', () => {
    expect(toString({ a: 1 })).to.equal('[object Object]'); 
  });
  //-0 handling
  it('should convert -0 to a string with the sign preserved', () => {
    const value = -0;
    expect(toString(value)).to.equal('-0');
  });
  it('should ensure -0 behaves correctly in division', () => {
    const value = -0;
    expect(1 / value).to.equal(-Infinity);
  });
});