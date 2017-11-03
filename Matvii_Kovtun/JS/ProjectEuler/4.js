



function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}


const biggestPolindrome = () => {
    var mx = -1;
    for (let i = 100; i <= 999; ++i){
        for (let j = 100; j <= 999; ++j){
            var n = i * j;
            if (checkPalindrom(n.toString()) && n > mx)mx = n;
        }
    }
    return mx;

}



console.log(biggestPolindrome())