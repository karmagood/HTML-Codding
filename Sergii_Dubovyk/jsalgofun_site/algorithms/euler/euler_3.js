//const taskValue = 600851475143;

const isPrime = function(n){
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (var i = 3; i * i <= n; i += 2){
        if (n % i === 0) return false;
    }
    return true;
};

const findLargestDivisor = function(val){
    for (var i = Math.floor(Math.sqrt(val)); i >= 1; i--){
        if (isPrime(i) && val % i === 0) return i;
    }
    return 1;
};

module.exports = findLargestDivisor;
