const assert = require('assert');
const operations = require('./index');

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

it('add("ceci n\'est pas un nombre", 3) should return an error', () => {
    assert.throws(() => operations.add("ceci n'est pas un nombre", 3), Error, 'number1 is not a number');
});
it('multiply("ceci n\'est pas un nombre", 3) should return an error', () => {
    assert.throws(() => operations.multiply("ceci n'est pas un nombre", 3), Error, 'number1 is not a number');
});
it('substract("ceci n\'est pas un nombre", 3) should return an error', () => {
    assert.throws(() => operations.substract("ceci n'est pas un nombre", 3), Error, 'number1 is not a number');
});
it('divide("ceci n\'est pas un nombre", 3) should return an error', () => {
    assert.throws(() => operations.divide("ceci n'est pas un nombre", 3), Error, 'number1 is not a number');
});