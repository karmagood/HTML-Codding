// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const countSumOfNaturalMultiplesLessThen = (first, second, Limit) => {
    let iter = 1;
    let accum = 0;
    while (iter < Limit){
        if ( ( iter%first === 0) || ( iter%second === 0) ) {
            accum += iter;
        }
        iter++;
    }
    return accum;
};

console.log(countSumOfNaturalMultiplesLessThen(3,5,10));


console.log(countSumOfNaturalMultiplesLessThen(3,5,1000));