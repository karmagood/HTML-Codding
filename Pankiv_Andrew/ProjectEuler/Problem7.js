function Problem7(num) {
    let index = 2;
    let start = 3;
    while(index !== num){
        ++start;
        if (IsPrime(start)){
            ++index;
        }

    }
    return index, start;
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



console.log(Problem7(10001));