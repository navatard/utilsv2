const assert = require('assert');
const operations = require('./index');

describe('operation package testing', () => {

    describe('check base operations', () => {
        it('add(1,1) should return 2', () => {
            assert.equal(operations.add(1, 1), 2);
        });
        it('multiply(2,2) should return 4', () => {
            assert.equal(operations.multiply(2, 2), 4);
        });
        it('substract(4,1) should return 3', () => {
            assert.equal(operations.substract(4, 1), 3);
        });
        it('divide(4,2) should return 2', () => {
            assert.equal(operations.divide(4, 2), 2);
        });
    });

    describe('check if input is a number', () => {
        it('add("ceci n\'est pas un nombre", 3) should return an error', () => {
            assert.throws(() => operations.add("ceci n'est pas un nombre", 3), Error, operations.errors.notANumber);
        });
        it('multiply("ceci n\'est pas un nombre", 3) should return an error', () => {
            assert.throws(() => operations.multiply("ceci n'est pas un nombre", 3), Error, operations.errors.notANumber);
        });
        it('substract("ceci n\'est pas un nombre", 3) should return an error', () => {
            assert.throws(() => operations.substract("ceci n'est pas un nombre", 3), Error, operations.errors.notANumber);
        });
        it('divide("ceci n\'est pas un nombre", 3) should return an error', () => {
            assert.throws(() => operations.divide("ceci n'est pas un nombre", 3), Error, operations.errors.notANumber);
        });
    })

    describe('check if number is in range', () => {
        it('add(9007199254740992, 3) should return an error', () => {
            assert.throws(() => operations.add(9007199254740992, 3), Error, operations.errors.nbTooHigh);
        });
        it('multiply(9007199254740992, 3) should return an error', () => {
            assert.throws(() => operations.multiply(9007199254740992, 3), Error, operations.errors.nbTooHigh);
        });
        it('substract(9007199254740992, 3) should return an error', () => {
            assert.throws(() => operations.substract(9007199254740992, 3), Error, operations.errors.nbTooHigh);
        });
        it('divide(9007199254740992, 3) should return an error', () => {
            assert.throws(() => operations.divide(9007199254740992, 3), Error, operations.errors.nbTooHigh);
        });
    });
})