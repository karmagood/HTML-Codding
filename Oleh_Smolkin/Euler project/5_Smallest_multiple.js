// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const getGratesDivider = (firstNumber, secondNumber) =>
    secondNumber === 0 ? firstNumber : getGratesDivider(secondNumber, firstNumber % secondNumber);

const getSmallestMultiple = (number) => {
    let smallestMultiple = 1;
    for (let i = 2; i <= number; i++) {
        smallestMultiple *= i / getGratesDivider(smallestMultiple, i);
    }
    return smallestMultiple;
};

// Test case
// Answer: 2520
console.log(getSmallestMultiple(10));

// Task
// Answer: 232792560
console.log(getSmallestMultiple(20));

