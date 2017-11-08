const checkPrime = function (n) {
    if (n === 2) return true;
    if (n % 2 === 0 || n === 1) return false;

    for (var i = 3; i * i <= n; i += 2){
        if (n % i === 0) return false;
    }
    return true;
};

const findNthPrime = function (n) {
    var candidate = 1;
    var alreadyFound = 0;

    while (alreadyFound < candidate){
        candidate++;
        if(checkPrime(candidate)){
            alreadyFound++;
        }
    }
    return candidate;
};

module.exports = findNthPrime;