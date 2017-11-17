// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeFactor = (number) => {
    let rootOfNumber = Math.floor(Math.sqrt(number));
    let isNumberPrime = [];

    // initialize boolean array for eratosphen sieve
    for (let i = 0; i <= rootOfNumber; i++) {
        isNumberPrime.push(true);
    }

    let largestPrimeFactor = -1;
    // eratosphen sieve
    for (let i = 2; i <= rootOfNumber; i++) {
        if (!isNumberPrime[i]) continue;
        if (number % i == 0)
            largestPrimeFactor = i;
        for (let j = 2 * i; j <= rootOfNumber; j += i) {
            isNumberPrime[j] = false;
        }
    }

    return largestPrimeFactor;
}

// Test case
// Answer: 29
console.log(findLargestPrimeFactor(13195));

// Task
// Answer: 6857
console.log(findLargestPrimeFactor(600851475143));
