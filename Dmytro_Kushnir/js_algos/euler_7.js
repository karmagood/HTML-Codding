// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?\


const areMutuallySimple = (value, primesToCompareList) => {
    let isMutSimple = true;
    for (let i = 0; i < primesToCompareList.length && isMutSimple; i++) {
        isMutSimple = value % primesToCompareList[i] !== 0; // there is no divisors in compareList
    }
    return isMutSimple;
};

const getNthPrime_BasicSolution = (prime_order) => {
    let primesList = [];

//here used assumption that if condition can be expressed thrue mutual simplicity with previous found simple numbers
    let k = 0;
    if (prime_order >= 2){
        primesList.push(2);
        k++;
    }
    let simpleCandidate = 3;
    while (k < prime_order){
        if (areMutuallySimple(simpleCandidate, primesList)){
                primesList.push(simpleCandidate);
                k++;
        }
        simpleCandidate+=2;
    }
    return primesList[prime_order-1];
};


const getNthPrime_Improved = (number) => {
    let primesList = [];

//here used assumption that if condition can be expressed thrue mutual simplicity with previous found simple numbers
    let k = 0;
    let simpleCandidate = 2;
    if (number < 2)
    while (k < number){
        if (areMutuallySimple(simpleCandidate, primesList)){
            primesList.push(simpleCandidate);
            k++;
        }
        simpleCandidate+=2;
    }
    return primesList[number-1];
};
console.log(getNthPrime_BasicSolution(6));
console.time('1');
console.log(getNthPrime_BasicSolution(10001));
console.timeEnd('1');
console.time('1');
console.log(getNthPrime_BasicSolution(10001));
console.timeEnd('1');
console.time('1');
console.log(getNthPrime_BasicSolution(10001));
console.timeEnd('1');
console.time('1');
console.log(getNthPrime_BasicSolution(10001));
console.timeEnd('1');
console.time('1');
console.log(getNthPrime_BasicSolution(10001));
console.timeEnd('1');
console.time('2');
console.log(getNthPrime_Improved(10001));
console.timeEnd('2');
console.time('2');
console.log(getNthPrime_Improved(10001));
console.timeEnd('2');
console.time('2');
console.log(getNthPrime_Improved(10001));
console.timeEnd('2');
console.time('2');
console.log(getNthPrime_Improved(10001));
console.timeEnd('2');


