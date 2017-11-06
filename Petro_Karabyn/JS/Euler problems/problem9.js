/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

function findTriplet() {
    for(var a = 3; a < 334; a++) {
        for(var b = a; b < 500; b++) {
            for(var c = b + 4; c < 1000; c++) {
                if(isTriplet(a,b,c) && a + b + c === 1000) {
                    return a * b * c;
                }
            }
        }
    }
}

function isTriplet(a, b, c) {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
}

console.log(findTriplet());