


var LIMIT = 2 * 1e6;



const isPrime = (n) => {
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i * i <= n; i += 2){
        if (n % i == 0) return false;
    }
    return true;
}






const sumAllPrimes = (n) => {
    var sum = 0;
    for (let i = 2; i <= n; ++i) if (isPrime(i)) sum += i;
    return sum;
}





console.log(sumAllPrimes(LIMIT));