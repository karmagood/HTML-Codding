// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?


function largestPrimeFactor(number) {
    let iter = 2;
    const upperBorder = Math.ceil(Math.sqrt(number));
    let maxSimpleDivisor = false;
    while (iter < upperBorder){
        if (number % iter === 0){
            maxSimpleDivisor = iter;
            number /= iter;
        }
        else{
            iter++;
        }
    }
    return maxSimpleDivisor;
}

console.log(Math.floor(Math.sqrt(5)));

console.log(largestPrimeFactor(600851475143));