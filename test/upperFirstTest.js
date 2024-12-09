import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  it('should capitalize the first letter of a string', () => {
    expect(upperFirst('fred')).to.equal('Fred');
    expect(upperFirst('fooBar')).to.equal('FooBar');
  });

  it('should handle empty strings', () => {
    expect(upperFirst('')).to.equal('');
  });

  it('should not modify strings that already start with an uppercase letter', () => {
    expect(upperFirst('FRED')).to.equal('FRED');
    expect(upperFirst('Foo')).to.equal('Foo');
  });

  it('should handle strings with special characters', () => {
    expect(upperFirst('123abc')).to.equal('123abc');
    expect(upperFirst('!@#$%^')).to.equal('!@#$%^');
  });

  it('should handle strings with non-ASCII characters', () => {
    expect(upperFirst('åäö')).to.equal('Åäö'); // Assuming correct locale handling
    expect(upperFirst('你好')).to.equal('你好');
  });

  it('should handle strings with numbers and spaces', () => {
    expect(upperFirst(' 123 abc')).to.equal(' 123 abc');
    expect(upperFirst('abc 123')).to.equal('Abc 123');
  });

  it('should handle strings with mixed case', () => {
    expect(upperFirst('fOo bAr')).to.equal('FOo bAr');
  });
});