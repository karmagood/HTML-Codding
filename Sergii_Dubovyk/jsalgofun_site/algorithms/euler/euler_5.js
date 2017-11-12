const checkDivisible = function (number, maxDivisor){
    for (var i = 1; i <= maxDivisor; i++) if (number % i !== 0) return false;
    return true;
};

const findMultiple = function () {
    var requiredDivisors = 20; // we want to find number divisible by first 20 numbers 1...20
    var multipleCandidate = 2520; // obviously, we can`t have anything less, as it won`t be working even for 10

    while (!checkDivisible(startNumber, requiredDivisors)){
        multipleCandidate++;
    }

    return multipleCandidate;
};

module.exports = findMultiple;

