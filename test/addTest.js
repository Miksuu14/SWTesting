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

  it('adding an int and a string', () => {
    expect(isNaN(add(1, "R"))).to.be.true;
  });

  it('adding string to a string', () => {
    expect(isNaN(add("C", "V"))).to.be.true;
  });

  it('adding number to NaN', () => {
    expect(isNaN(add(NaN, 1))).to.be.true;
  });

  it('adding number to null', () => {
    expect(add(null, 1)).to.deep.equal(1);
  });

  // Since undefined + 1 should be undefined
  it('adding number to undefined', () => {
    expect(add(undefined, 1)).to.equal(undefined);
  });

  // Since undefined + 1 should be undefined
  it('adding undefined to a number', () => {
    expect(add(1, undefined)).to.equal(undefined);
  });

  it('adding undefined to undefined', () => {
    expect(add(undefined, undefined)).to.equal(undefined);
  });

  it('adding number to infinity', () => {
    expect(add(Infinity, 1)).to.equal(Infinity);
  });

  it('adding infinity to infinity', () => {
    expect(add(Infinity, Infinity)).to.equal(Infinity);
  });

  it('adding infinity to negative infinity', () => {
    expect(add(Infinity, -Infinity)).to.equal(undefined);
  });

});

