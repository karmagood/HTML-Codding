function checkPalindrom(str) {
    return str === str.split('').reverse().join('');

}


const LargestPalindromeProduct = () => {
    let maxPalindrom = 0;
    for(let i = 100; i<=999; i++){
        for (let x = 100; x<=999; x++){
            let tmp = i*x;
            if(checkPalindrom(tmp.toString())&& tmp > maxPalindrom){
                maxPalindrom = tmp;
            }
        }
    }
    return maxPalindrom;
};

console.log(LargestPalindromeProduct());