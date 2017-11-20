// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const findSumOfPrimesBelowN = (number) => {

    let sumOfPrimeNumbers = 0;

    let eratosphenSieve = Array(number).fill(true);
    for (let i = 2; i <= number; i++) {
        if (!eratosphenSieve[i]){
            continue;
        }

        sumOfPrimeNumbers += i;

        for (let j = 2 * i; j <= number; j += i) {
            eratosphenSieve[j] = false;
        }
    }

    return sumOfPrimeNumbers;
}

// Test case
// Answer: 17
console.log(findSumOfPrimesBelowN(10))

// Task
// Answer: 142913828922
console.log(findSumOfPrimesBelowN(2000000))
