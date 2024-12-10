// Import the `ceil` function
import ceil from '../src/ceil.js';
// Import Chai for assertions
import { expect } from 'chai';

describe('ceil function', () => {
  it('Rounds up to precision of 2', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('Round up with negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it('Round up a negative number', () => {
    expect(ceil(-1.05, 1)).to.equal(-1);
  });

  it('Round up a negative number with a negative precision', () => {
    expect(ceil(-6040, -2)).to.equal(-6000);
  });

  it('Use a character as number to round', () => {
    expect(isNaN(ceil('a', 1))).to.be.true;
  })

  // should return number as is
  it('rounding up number with a character', () => {
    expect(ceil(1 , 'a')).to.equal(1);
  })

  it('rounding up decimal number with a character', () => {
    expect(ceil(0.01 , 'a')).to.equal(0.01);
  })

  it('Using null as number to round up', () => {
    expect(isNaN(ceil(null, 1))).to.be.true;
  })

  it('Using null to round up a number', () => {
    expect(ceil(1, null)).to.equal(1);
  })

  it('Trying to round to large precision', () => {
    expect(ceil(1, 500)).to.equal(1);
  })
  // npx c8 report
});

