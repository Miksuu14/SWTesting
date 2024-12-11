import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  it('should capitalize the first letter of "fred"', () => {
    expect(upperFirst('fred')).to.equal('Fred');
  });

  it('should capitalize the first letter of "fooBar"', () => {
    expect(upperFirst('fooBar')).to.equal('FooBar'); 
  });

  it('should return an empty string when given an empty string', () => {
    expect(upperFirst('')).to.equal('');
  });

  it('should not modify "FRED"', () => {
    expect(upperFirst('FRED')).to.equal('FRED');
  });

  it('should not modify "Foo"', () => {
    expect(upperFirst('Foo')).to.equal('Foo'); 
  });

  it('should not modify "123abc"', () => {
    expect(upperFirst('123abc')).to.equal('123abc');
  });

  it('should not modify "!@#$%^"', () => {
    expect(upperFirst('!@#$%^')).to.equal('!@#$%^');
  });

  it('should capitalize the first letter of "åäö"', () => {
    expect(upperFirst('åäö')).to.equal('Åäö');
  });

  it('should not modify "你好"', () => {
    expect(upperFirst('你好')).to.equal('你好');
  });

  it('should not modify " 123 abc"', () => {
    expect(upperFirst(' 123 abc')).to.equal(' 123 abc');
  });

  it('should capitalize the first letter of "abc 123"', () => {
    expect(upperFirst('abc 123')).to.equal('Abc 123');
  });

  it('should capitalize the first letter of "fOo bAr"', () => {
    expect(upperFirst('fOo bAr')).to.equal('FOo bAr');
  });
});