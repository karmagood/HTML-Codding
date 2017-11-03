



const isPrime = (n) => {
    if (n == 2) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i * i <= n; i += 2){
        if (n % i == 0) return false;
    }
    return true;
}




const findPrime = (n) => {
    var num = 1;
    var counter = 0;
    while (counter < n){
        num++;
        if (isPrime(num)) counter++;

    }
    return num;
}


console.log(findPrime(10001));