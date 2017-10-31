

const toFactor = 600851475143;



const isPrime = (n) => {
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i * i <= n; i += 2){
        if (n % i == 0) return false;
    }
    return true;
}




const largestPrimeDivisor = (n) => {
    for (let i = Math.floor(Math.sqrt(n)); i >= 1; --i){
        if (isPrime(i) && n % i == 0) return i;
    }
}


console.log(largestPrimeDivisor(toFactor));