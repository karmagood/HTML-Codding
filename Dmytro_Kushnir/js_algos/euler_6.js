// he sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumOfSquares = (from, to) => {
    let acc = 0;
    for (let i = from; i <= to; i++){
        acc += i*i;
    }
    return acc;
};

const squareOfSum = (from, to) => {
    let acc = 0;
    for (let i = from; i <= to; i++){
        acc += i;
    }
    return acc * acc;
};


console.log(squareOfSum(1, 10) - sumOfSquares(1, 10))

console.log(squareOfSum(1, 100) - sumOfSquares(1, 100))