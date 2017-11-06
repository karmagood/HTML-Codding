// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.


function isPalindrome(number) {
    var numbersList = [];
    var lastDigit;
    while (number > 0){
        lastDigit = number%10;
        numbersList.push(lastDigit);
        number = (number - lastDigit) / 10
    }
    var i = numbersList.length - 1;
    var j = 0;

    var res = true;

    while ( (i>j) && res ){
        res = (numbersList[i] === numbersList[j]);
        i--;
        j++;
    }
    return res;
}

function biggestPalindromProductOf2Numbers(firstFrom, firstTo, secondFrom, secondTo) {
    var maxRez = 0;
    var buf;
    for ( var i = firstFrom; i < firstTo; i++) {
        for (var j = secondFrom; j < secondTo; j++) {
            buf = i*j;
            if (isPalindrome(buf)){
                maxRez = (maxRez < buf ? buf : maxRez)
            }
        }
    }
    return ( (maxRez > 0) ? maxRez : false )
}

console.log(biggestPalindromProductOf2Numbers(900, 1000, 900, 1000));
