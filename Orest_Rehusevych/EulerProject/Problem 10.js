// Summation of primes

function sumPrimes(number) {
    let counter = 1;
    let sum = 0;
    while (counter !== number) {
        if (isPrime(counter)) {
            sum += counter;
        }
        counter++;
    }
    return console.log(sum);
}


function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

sumPrimes(2000000);