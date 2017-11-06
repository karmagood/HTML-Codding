// A palindromic number reads the same both ways.
//     The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function findMaxPalindrome() {
    let maxPal = -1;
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            let product = i * j;
            if (isPalindrome('' + product) && product > maxPal)
                maxPal = product;
        }
    }
    return console.log(maxPal);
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

findMaxPalindrome();