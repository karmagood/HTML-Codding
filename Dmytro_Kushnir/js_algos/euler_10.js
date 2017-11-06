// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const isMutuallySimple = (value, primesToCompareList) => {
    let isMutSimple = true;
    for (let i = 0; i < primesToCompareList.length && isMutSimple; i++) {
        isMutSimple = value % primesToCompareList[i] !== 0; // there is no divisors in compareList
    }
    return isMutSimple;
};

const getPrimesLessThen = (number) => {
    let primesList = [];

//here used assumption that if condition can be expressed thrue mutual simplicity with previous found simple numbers
    let simpleCandidate = 2;
    while (simpleCandidate <= number){
        if (isMutuallySimple(simpleCandidate, primesList)){
            primesList.push(simpleCandidate);
            console.log(primesList.length);
        }
        simpleCandidate++;
    }
    return primesList;
};


const simpleFold = (fun, acc, work, workReducer,  isTerminate) => {
    if (isTerminate(work))
        return acc;
    return simpleFold(
        fun,
        fun(acc, work),
        workReducer(work),
        workReducer,
        isTerminate);
};


const listSum = (listName) => {
    return simpleFold(
        (a,b) => {return a+ b[0];},
        0,
        listName,
        (work) => {return work.slice(1,work.length);},
        (work) => {return work.length === 0;}
    );
};

//recursive style can't get so deep. So what is the @tailrec way?
const listSumIterative = (listName) => {
    let acc = 0;
    for (let i = 0; i < listName.length; i++){
        acc += listName[i];
    }
    return acc;
};



primes = getPrimesLessThen(10);
console.log(primes);

foldRez = listSum(primes);

console.log(foldRez);
console.log(listSumIterative(primes));

twoMlnPrimes =getPrimesLessThen(2000000);

console.log(twoMlnPrimes.length);

console.log(listSumIterative(twoMlnPrimes));