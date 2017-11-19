// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeFactor = (number) => {
    let eratosphenSieve = Array(number).fill(true);

    let largestPrimeFactor = -1;
    for (let i = 2; i <= number; i++) {
        if (!eratosphenSieve[i]) continue;
        if (number % i == 0) largestPrimeFactor = i;
        for (let j = 2 * i; j <= number; j += i) {
            eratosphenSieve[j] = false;
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
