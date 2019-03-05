const assert = require('assert');
const operations = require('./index');

let base = 1;

it('base should be 2', () => {
    base = operations.add(base, 1);

    assert.equal(base, 2);
});

it('base should be 4', () => {
    base = operations.multiply(base, 2);

    assert.equal(base, 4);
});

it('base should be 3', () => {
    base = operations.substract(base, 1);

    assert.equal(base, 3);
});

it('base should be 1', () => {
    base = operations.divide(base, 3);

    assert.equal(base, 1);
});