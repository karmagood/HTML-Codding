// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (str) => {
    let stringLength = str.length;
    for (let i = 0; i < stringLength; i++) {
        let reverse = stringLength - i - 1;
        if (str[i] != str[reverse])
            return false;
    }
    return true;
}

function findLargestPalindrome(digitsNum) {
    let minimumValue = Math.pow(10, digitsNum - 1);
    let maximumValue = Math.pow(10, digitsNum) - 1;
    let largestPalindrome = 1;
    for (let i = maximumValue; i >= minimumValue; i--) {
        if (i * maximumValue <= largestPalindrome) {
            break;
        }
        for (let j = maximumValue; j > minimumValue; j--) {
            let product = i * j;
            if (product <= largestPalindrome) {
                break;
            }
            if (isPalindrome(String(product))) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}

// Test case
// Answer: 9009
console.log(findLargestPalindrome(2));

// Task
// Answer: 906609
console.log(findLargestPalindrome(3));
