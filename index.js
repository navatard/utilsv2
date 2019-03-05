function add(nb1, nb2) {
    validate(nb1, nb2);
    return nb1 + nb2;
}

function multiply(nb1, nb2) {
    validate(nb1, nb2);
    return nb1 * nb2;
}

function substract(nb1, nb2) {
    validate(nb1, nb2);
    return nb1 - nb2;
}

function divide(nb1, nb2) {
    validate(nb1, nb2);
    return nb1 / nb2;
}

function validate(nb1, nb2) {
    if (typeof nb1 != 'number') throw new Error('number1 is not a number');
    if (typeof nb2 != 'number') throw new Error('number2 is not a number');
}

module.exports = {
    add: add,
    multiply: multiply,
    substract: substract,
    divide: divide
}