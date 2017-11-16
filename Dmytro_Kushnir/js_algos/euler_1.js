// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const countSumOfNaturalMultiplesLessThen_iterative = (first, second, Limit) => {
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


const sumOfArithmeticProgression = (progression_from, progression_to, step) => {
    const first_elem = progression_from + progression_from % step;
    const last_elem = progression_to - progression_to % step;
    const number_of_elements = (last_elem - first_elem) / step + 1 ;
    const sum = (first_elem + last_elem) * number_of_elements / 2;
    return sum;
};

const getGCD = (first, second) =>{
    if (second === 0){
        return first;
    }
    if (first < second){ // for case of inverse init
        return getGCD(second,first);
    }
    else{
        return getGCD(second, first%second);
    }
};

const getLCM = (first, second) =>{
    const gcd = getGCD(first, second);
    const rez = Math.abs(first * second) / gcd;
    return rez;
};

const countSumOfNaturalMultiplesLessThenLimit_Constant_time = (first, second, Limit) => {
    const first_elem_multiples_sum = sumOfArithmeticProgression(0, Limit-1, first);

    const second_elem_multiples_sum = sumOfArithmeticProgression(0, Limit-1, second);

    const lcm = getLCM(first, second);

    const lcm_multiples_sum = sumOfArithmeticProgression(0, Limit, lcm);

    const rez = first_elem_multiples_sum + second_elem_multiples_sum - lcm_multiples_sum;
    return rez; };




console.log(countSumOfNaturalMultiplesLessThen_iterative(3,5,10));
console.time('1');
console.log(countSumOfNaturalMultiplesLessThen_iterative(3,5,1000));
console.timeEnd('1');

console.time('2');
console.log(countSumOfNaturalMultiplesLessThenLimit_Constant_time(3,5,1000));
console.timeEnd('2');

