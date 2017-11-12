/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
 */


function sumOfPrimes(number) {
    var sum = 0;
    while (number >= 2) {
        if (isPrime(number) === true) {
            sum += number;
        }
        number--;
    }
    return sum;
}

// efficient implementation
function isPrime(number) {
    var start = 2;
    var sqrt = Math.sqrt(number);
    while (start <= sqrt) {
        if (number % start++ === 0) return false;
    }
    return number > 1;
}

console.log(sumOfPrimes(2000000));