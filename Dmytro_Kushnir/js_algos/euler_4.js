// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

const parseDigitsOfNumber = (number) =>{
    let numbersList = [];
    let lastDigit;
    while (number > 0){
        lastDigit = number%10;
        numbersList.push(lastDigit);
        number = (number - lastDigit) / 10
    }
    return numbersList;
};

const isPalindrome = (number) => {
    let numbersList = parseDigitsOfNumber(number);
    let left = numbersList.length - 1;
    let right = 0;
    let res = true;

    while ( (left>right) && res ){
        res = (numbersList[left] === numbersList[right]);
        left--;
        right++;
    }
    return res;
};

function biggestPalindromProductOf2Numbers(firstFrom, firstTo, secondFrom, secondTo) {
    let maxRez = 0;
    let buf;
    for ( let i = firstFrom; i < firstTo; i++) {
        for (let j = secondFrom; j < secondTo; j++) {
            buf = i*j;
            if (isPalindrome(buf)){
                maxRez = (maxRez < buf ? buf : maxRez)
            }
        }
    }
    return ( (maxRez > 0) ? maxRez : false )
}

console.time('1');
console.log(biggestPalindromProductOf2Numbers(900, 1000, 900, 1000));
console.timeEnd('1');


console.time('2');
console.log(biggestPalindromProductOf2Numbers(1, 1000, 1, 1000)); // just for fair check
console.timeEnd('2');