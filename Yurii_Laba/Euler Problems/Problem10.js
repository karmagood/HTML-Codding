const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return true;
};

const SummationOfPrimes = () => {
    let i = 0;
    let sum = 0;
    while(i<=2000000){
        if(isPrime(i)){
            sum+=i;
        }
        i++;
    }
    return sum;
};

console.log(SummationOfPrimes());


