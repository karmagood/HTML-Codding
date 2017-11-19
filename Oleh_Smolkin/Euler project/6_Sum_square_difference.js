// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 552 = 3025
// Hence the difference between the sum of the squares of the first
// ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.

const sumSquareDiff = (number) => {
    let sum = number * (number + 1) / 2;
    let sumOfSquare = (2 * number + 1) * (number + 1) * number / 6;
    return sum * sum - sumOfSquare;
};

// test case
// Answer: 2640
console.log(sumSquareDiff(10));

// task
// Answer: 25164150
console.log(sumSquareDiff(100));
