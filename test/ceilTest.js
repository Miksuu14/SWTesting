// Import the `ceil` function
import ceil from '../src/ceil.js';
// Import Chai for assertions
import { expect } from 'chai';

describe('ceil function', () => {
  it('Rounds up to precision of 2', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('Round up to negative precision of -2', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });
});

