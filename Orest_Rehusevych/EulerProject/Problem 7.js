// 10001st prime

function neededPrime(prime) {
    for (let i = 2, counter = 0; ; i++) {
        if (isPrime(i)) {
            counter++;
            if (counter === prime) {
                return console.log(i);
            }
        }
    }
}
function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    var m = Math.sqrt(n);
    for (var i = 2; i <= m; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

neededPrime(10001);