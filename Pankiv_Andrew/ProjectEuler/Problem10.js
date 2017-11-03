function Problem10(num) {
    let sum = 0;
    for(let i = 0; i < num; ++i){
        if(IsPrime(i)){
            sum += i;
        }
    }
    return sum;
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


console.log(Problem10(2000000));