/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001st prime number?
 */

function prime(n) {
    var numPrimes = 1;
    var checkNum = 3;
    var primeArray = [2];
    while(numPrimes < n) {
        var i = 0;
        var isPrime = true;
        while(i < primeArray.length) {
            if(checkNum % primeArray[i] === 0) {
                i = primeArray.length;
                isPrime = false;
            }
            else {i++}
        }
        if(isPrime) {
            primeArray.push(checkNum);
            numPrimes++
        }
        checkNum += 2; //next odd number
    }
    return primeArray[n-1];
}

console.log(prime(10001));