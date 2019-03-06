const errors = {
    notANumber: 'nb is not a number',
    nbTooHigh: 'nb is too high',
    nbTooLow: 'nb is too low'
}

const add = (nb1, nb2) => {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 + nb2;
}

const multiply = (nb1, nb2) => {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 * nb2;
}

const substract = (nb1, nb2) => {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 - nb2;
}

const divide = (nb1, nb2) => {
    validateNumber(nb1);
    validateNumber(nb2);
    return nb1 / nb2;
}

const validateNumber = (nb) => {
    if (typeof nb != 'number') throw new Error(errors.notANumber);

    if (nb > Number.MAX_SAFE_INTEGER) throw new Error(errors.nbTooHigh);
    else if (nb < -Number.MAX_SAFE_INTEGER) throw new Error(errors.nbTooLow);
}


module.exports = {
    add: add,
    multiply: multiply,
    substract: substract,
    divide: divide,
    errors: errors
}