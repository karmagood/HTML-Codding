function Problem3(num) {
    for(let i = (num - 1) / 2 ; i > 0; i -= 2){
        if(num % i === 0){
            if(IsPrime(i)) {
                return i;
            }
        }
    }
}


function IsPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


console.log(Problem3(600851475143));