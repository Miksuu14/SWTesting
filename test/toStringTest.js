import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString', () => {
  it('should convert strings to strings', () => {
    expect(toString('hello')).to.equal('hello');
    expect(toString('')).to.equal('');
  });

  it('should convert null and undefined to empty strings', () => {
    expect(toString(null)).to.equal('');
    expect(toString(undefined)).to.equal('');
  });

  it('should convert numbers to strings', () => {
    expect(toString(42)).to.equal('42');
    expect(toString(3.14)).to.equal('3.14');
    expect(toString(-0)).to.equal('-0'); // Preserving the sign of -0
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(-Infinity)).to.equal('-Infinity');
    expect(toString(NaN)).to.equal('NaN');
  });

  it('should convert booleans to strings', () => {
    expect(toString(true)).to.equal('true');
    expect(toString(false)).to.equal('false');
  });

  it('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString([1, null, 'hello'])).to.equal('1,,hello');
    expect(toString([1, [2, 3], 4])).to.equal('1,2,3,4'); // Nested arrays
  });

  it('should convert symbols to strings', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it('should handle objects by converting them to strings', () => {
    expect(toString({ a: 1 })).to.equal('[object Object]'); 
  });

  it('should handle -0 correctly', () => {
    // This checks the specific case for -0
    const value = -0;
    expect(toString(value)).to.equal('-0');
    expect(1 / value).to.equal(-Infinity);
  });
});