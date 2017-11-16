// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

const findNthPrimeNumber = (number) => {
	// top boundary of n prime number converge to n*log(n)
	// but for sure was taken n^2
	let topBoundary = number*number;

	let isNumberPrime = [];
	for(let i=0; i<=topBoundary; i++){
		isNumberPrime.push(true);
	}

	// eratosphen sieve
    let primeNumbers = [];
	for(let i=2; i<=topBoundary; i++){
		if(!isNumberPrime[i])
			continue;
		primeNumbers.push(i);
		if(primeNumbers.length == number){
			return primeNumbers[primeNumbers.length-1];
		}
		for(let j=2*i; j<=topBoundary; j+=i){
			isNumberPrime[j] = false;
		}
	}
	return -1;
}

// Test case
// Answer: 13
console.log(findNthPrimeNumber(6));

// Task
// Answer: 6857
console.log(findNthPrimeNumber(10001));