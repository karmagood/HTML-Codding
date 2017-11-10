// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
    while (true) {
        let p = smallestFactor(number);
        if (p < number) {
            number = number / p;
        }
        else {
            return console.log(number);
        }
    }
}

function smallestFactor(number) {
    for (let i = 2, end = Math.sqrt(number); i <= end; i++) {
        if (number % i === 0) {
            return i;
        }
    }
    return number;
}
let number = 600851475143;
largestPrimeFactor(number);