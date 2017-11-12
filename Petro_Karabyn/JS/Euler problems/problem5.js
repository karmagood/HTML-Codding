/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function evenlyDivisible() {
    var max = 20;
    var min = 11;
    var n = min;
    for(var i = min; i <= max; i++) {
        n = leastCommonMultiplier(n,i);
    }
    return n;
}

function greatestCommonDivisor(num1, num2) {
    var x = num1;
    var y = num2;
    var result;
    while (y !== 0) {
        result = x % y;
        x = y;
        y = result;
    }
    return x;
}

function leastCommonMultiplier(num1, num2) {
    return (num1 * num2) / greatestCommonDivisor(num1, num2);
}

console.log(evenlyDivisible());