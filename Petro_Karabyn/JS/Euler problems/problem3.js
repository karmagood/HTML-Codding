/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
 */

function largestPrimeFactor(number) {
    var max = Math.round(Math.sqrt(number));
    for(var i = max; i >= 2; i--) {
        if(number % i === 0 && largestPrimeFactor(i) === 1) {
            return i;
        }
    }
    return 1;
}

console.log(largestPrimeFactor(600851475143));