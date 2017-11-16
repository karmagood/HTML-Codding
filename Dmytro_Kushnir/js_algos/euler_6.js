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


const sumOfSquaresImproved = (from, to) =>{

    const sum_sq_from = Math.floor((2*from + 1) * (from + 1) * from  / 6 );
    const sum_sq_to = Math.floor((2*to + 1) * (to + 1) * to  / 6);

    return sum_sq_to - sum_sq_from;
};

const squareOfSumImproved = (from, to) =>{
    const sum_from = Math.floor(from * (from + 1) / 2);
    const sum_to = Math.floor(to * (to + 1) / 2);

    return square(sum_to - sum_from);
};

const square= (a) => a*a;

console.time('1');
console.timeEnd('1');


console.time('1');
console.log(squareOfSum(1, 10) - sumOfSquares(1, 10));
console.timeEnd('1');
console.time('2');
console.log(squareOfSum(1, 100) - sumOfSquares(1, 100));
console.timeEnd('2');


console.time('3');
console.log(squareOfSumImproved(0,100) - sumOfSquaresImproved(0, 100));




