import defaultTo from "../src/defaultTo.js";
import { expect } from "chai";

describe('defaultTo function', () => {

    it('Return normal value', () => {
        expect(defaultTo(1, 10)).to.equal(1);
    });

    it('Return default value when value is null', () => {
        expect(defaultTo(null, 10)).to.equal(10);
    });

    it('Return default value when value is undefined', () => {
        expect(defaultTo(undefined, 10)).to.equal(10);
    });

    // defaultTo.js does not work as intended!!!
    it('Return default value when value is NaN', () => {
        expect(defaultTo(NaN, 10)).to.equal(10);
    });

    it('Return valid faulty item', () => {
        expect(defaultTo("", "def")).to.equal("");
    });

    it('Return false since it is valid', () => {
        expect(defaultTo(false, true)).to.equal(false);
    });

    it('Return infinity since it is valid', () => {
        expect(defaultTo(Infinity, 1)).to.equal(Infinity);
    });
});