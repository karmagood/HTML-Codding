// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const getGratesDivider = (firstNumber, secondNumber) =>
    secondNumber === 0 ? firstNumber : getGratesDivider(secondNumber, firstNumber % secondNumber);

const getSumOfArithmeticProgression = (firstMember, numberOfElements, base) =>
    numberOfElements * ( 2 * firstMember + (numberOfElements - 1) * base) / 2;

const findSumOfMultiples = (firstMultiple, secondMultiple, number) => {
    let numberOfFirstMultiples = Math.floor((number - 1) / firstMultiple);
    let sumOfFirstMultiples = getSumOfArithmeticProgression(firstMultiple, numberOfFirstMultiples, firstMultiple);

    let numberOfSecondMultiples = Math.floor((number - 1) / secondMultiple);
    let sumOfSecondMultiples = getSumOfArithmeticProgression(secondMultiple, numberOfSecondMultiples, secondMultiple);

    let commonMultiple = firstMultiple * secondMultiple / getGratesDivider(firstMultiple, secondMultiple);
    let numberOfCommonMultiples = Math.floor((number - 1) / commonMultiple);
    let sumOfCommonMultiples = getSumOfArithmeticProgression(commonMultiple, numberOfCommonMultiples, commonMultiple);

    return sumOfFirstMultiples + sumOfSecondMultiples - sumOfCommonMultiples;
};

// Test case
// Answer: 23
console.log(findSumOfMultiples(3, 5, 10));

// Task
// Answer: 233168
console.log(findSumOfMultiples(3, 5, 1000));
