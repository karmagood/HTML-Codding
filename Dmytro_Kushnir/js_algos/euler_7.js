// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?\


function isMutuallySimple(value, primesToCompareList){
    var isMutSimple = true;
    for (var i = 0; i < primesToCompareList.length && isMutSimple; i++) {
        isMutSimple = value % primesToCompareList[i] !== 0; // there is no divisors in compareList
    }
    return isMutSimple;
}

function getNthPrime(number) {
    var primesList = [];

//here used assumption that if condition can be expressed thrue mutual simplicity with previous found simple numbers
    var k = 0;
    var simpleCandidate = 2;
    while (k < number){
        if (isMutuallySimple(simpleCandidate, primesList)){
                primesList.push(simpleCandidate);
                k++;
        }
        simpleCandidate++;
    }
    return primesList[number-1];
}

console.log(getNthPrime(6));
console.log(getNthPrime(10001));
