const isPalindrome = function (x) {
    return x.split('').reverse().join('') === x;
};

const findMaxPalindrome = function () {
    var maxPalindrome = null;

    for (var first = 100; first < 999; first++){
        for(var second = 100; second < 999; second++){
            var candidatePalindrome = first * second;
            if (isPalindrome(candidatePalindrome)){
                maxPalindrome = candidatePalindrome;
            }
        }
    }
    return maxPalindrome;
};

module.exports = findMaxPalindrome;