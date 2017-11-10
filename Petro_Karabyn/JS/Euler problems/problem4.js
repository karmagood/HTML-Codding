/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
 */

function largestPalindrome(numOfDigits) {
    var largestNum = 9 * getMultiplier(numOfDigits);
    var smallestNum = Math.pow(10, (numOfDigits - 1));
    var largestPalindrome = 0;
    var result = 0;
    for (var num1 = largestNum; num1 > smallestNum; num1--) {
        for (var num2 = largestNum; num2 > smallestNum; num2--) {
            result = num1 * num2;
            if(isPalindrome(result) && largestPalindrome < result) {
                largestPalindrome = result;
            }
        }
    }
    return largestPalindrome;
}

function getMultiplier(numOfDigits) {
    var multiplier = 1;
    for (var i = 10, j = 1; j < numOfDigits; i *= 10, j++) {
        multiplier += i;
    }
    return multiplier;
}

function isPalindrome(number) {
    var str = number.toString();
    var len = str.length;
    for (var i = 0; i < Math.floor(len/2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(largestPalindrome(3));
// 906609