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
});

