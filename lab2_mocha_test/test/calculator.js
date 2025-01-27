const chai = require('chai');
const expect = chai.expect;

// Import the calculator functions
const { add, sub, mul, div } = require('../calculator');

// Describe the test suite for the calculator
describe('Calculator Tests', function () {
    // Test cases for the add function
    describe('add()', function () {
        it('should return 7 when adding 5 and 2', function () {
            expect(add(5, 2)).to.equal(7); // This test should pass
        });

        it('should fail when adding 5 and 2 and expecting 8', function () {
            expect(add(5, 2)).to.not.equal(8); // This test should pass
        });
    });

    // Test cases for the sub function
    describe('sub()', function () {
        it('should return 3 when subtracting 2 from 5', function () {
            expect(sub(5, 2)).to.equal(3); // This test should pass
        });

        it('should fail when subtracting 2 from 5 and expecting 5', function () {
            expect(sub(5, 2)).to.not.equal(5); // This test should pass
        });
    });

    // Test cases for the mul function
    describe('mul()', function () {
        it('should return 10 when multiplying 5 and 2', function () {
            expect(mul(5, 2)).to.equal(10); // This test should pass
        });

        it('should fail when multiplying 5 and 2 and expecting 12', function () {
            expect(mul(5, 2)).to.not.equal(12); // This test should pass
        });
    });

    // Test cases for the div function
    describe('div()', function () {
        it('should return 5 when dividing 10 by 2', function () {
            expect(div(10, 2)).to.equal(5); // This test should pass
        });

        it('should fail when dividing 10 by 2 and expecting 2', function () {
            expect(div(10, 2)).to.not.equal(2); // This test should pass
        });
    });
});