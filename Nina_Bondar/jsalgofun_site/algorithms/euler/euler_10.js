const checkPrime = function (n) {
    if (n === 2) return true;
    if (n % 2 === 0 || n === 1) return false;

    for (var i = 3; i * i <= n; i += 2){
        if (n % i === 0) return false;
    }
    return true;
};

const findSumOfPrimes = function(limit){
    var sumOfPrimes = 0;

    for (var currentCandidate = 1; currentCandidate <= limit; currentCandidate++){
        if (checkPrime(currentCandidate)) sumOfPrimes += currentCandidate;
    }
};

module.exports = findSumOfPrimes;