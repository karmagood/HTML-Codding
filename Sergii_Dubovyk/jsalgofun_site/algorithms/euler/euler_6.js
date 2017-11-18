const findSquareDifference = function () {
    var totalSum = 0;
    var sumOfSquares = 0;

    for(var i = 0; i <= 100; i++){
        totalSum += i;
        sumOfSquares += i * i;
    }

    var squareOfSums = totalSum * totalSum;

    return squareOfSums - sumOfSquares;
};

module.exports = findSquareDifference;
