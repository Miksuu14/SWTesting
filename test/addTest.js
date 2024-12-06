// Import the `add` function
import add from '../src/add.js';
// Import Chai for assertions
import { expect } from 'chai';

describe('add function', () => {
  it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('adds a positive and a negative number', () => {
    expect(add(6, -4)).to.equal(2);
  });

  it('adds two negative numbers', () => {
    expect(add(-6, -4)).to.equal(-10);
  });

  it('adds a number and zero', () => {
    expect(add(6, 0)).to.equal(6);
  });

  it('adds zero and zero', () => {
    expect(add(0, 0)).to.equal(0);
  });

  it('adds a float and a float', () => {
    expect(add(0.1, 0.1)).to.equal(0.2);
  });

  it('trying to add an int and a string', () => {
    expect(add(1, "R")).to.equal(NaN);
  });

  it('trying to add string to a string', () => {
    expect(add("C", "V")).to.equal(NaN);
  });

  it('trying to add number to NaN', () => {
    expect(add(NaN, 1)).to.deep.equal(NaN);
  });

  it('trying to add number to null', () => {
    expect(add(null, 1)).to.deep.equal(1);
  });

  it('trying to add number to undefined', () => {
    expect(add(undefined, 1)).to.deep.equal(NaN);
  });

});

