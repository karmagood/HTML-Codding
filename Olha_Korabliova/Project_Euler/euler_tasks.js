function multiples_3_5() {      // 1
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    console.log("Multiples of 3 or 5: ", sum);
    return sum;
}

function fibonacci() {      // 2
    let sum = 0;
    let lst = [1, 1];
    let last = 0;
    while (last < 4000000) {
        last = lst[lst.length - 1];
        let pre_last = lst[lst.length - 2];
        lst.push(last + pre_last);
        if (last % 2 === 0) {
            sum += last;
        }
    }
    console.log("Fibonacci sum: ", sum);
    return sum;

}

function largestPrimeFactor() {   // 3
    let a = 600851475143;
    let b = 2;
    let factor = b;
    while (a > 1) {
        if (a % b === 0) {
            a = a / b;
            b = 2;
        }
        else {
            b++;
            factor = b;
        }
    }
    console.log("Largest Prime Factor for 600851475143: ", factor);
    return factor;
}

function largestPalindrome() {     // 4
    let a;
    for (let i = 999; i > 100; i--) {
        for (let j = i; j > 100; j--){
            a = i * j;
            let s = a.toString();
            let s_len = s.length;
            let ind = Math.floor(s_len / 2);
            let first_half = s.substr(0, ind);
            let second_half = s.substr(ind + ((s_len % 2 === 0) ? 0 : 1), s_len);
            second_half = second_half.split("").reverse().join("");
            if (first_half === second_half) {
                console.log( i + " * " + j + " = " + a);
                return i + " * " + j + " = " + a;
            }
        }
    }
}

function smallestMultiple() {      // 5
    let result = 1;
    let hcm;
    for (let i = 2; i < 21; i++) {
        hcm = HCM(result, i);
        result = (result * i) / hcm;
    }
    console.log("Smallest multiple: ", result);
    return result;
}

function HCM(result, i) {
    let a, b, tmp;
    if (result > i) {
        a = result;
        b = i;
    }
    else {
        a = i;
        b = result;
    }
    while (b !== 0) {
        tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
}

function sumSquareDiff() {    // 6
    let diff, sum_sq = 0, sq_sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum_sq += Math.pow(i, 2);
        sq_sum += i;
    }
    diff = Math.pow(sq_sum, 2) - sum_sq;
    console.log("Sum square difference: ", diff);
    return diff;
}

// function prime_10001st() {  // 7
//     let n_primes = 0, prime = 13;
//     let limit = 9995;   // 10001 - 6
//     while (n_primes < limit) {
//         prime++;
//         if (isPrime(prime)){
//             n_primes++;
//         }
//     }
//     console.log("10001st prime: ", prime);
//     return prime;
// }

function isPrime(n) {
    if (n === 2 || n === 3) return true;
    if (n < 2 || n % 2 === 0) return false;
    if (n < 9) return true;
    if (n % 3 === 0) return false;
    let r = Math.floor(Math.pow(n, 0.5));
    let f = 5;
    while (f <= r) {
        if (n % f === 0) return false;
        if (n % (f + 2) === 0) return false;
        f += 6;
    }
    return true;
}

// prime_10001st();

function specialPythTriplet() {     // 9
    let sum = 1000;
    let lst = [];
    for (let a = 1; a <= sum / 3; a++) {
        for (let b = a + 1; b <= sum / 2; b++) {
            let c = sum - a - b;
            if (a*a + b*b === c*c) {
                lst.push(a);
                lst.push(b);
                lst.push(c);
            }
        }
    }
    console.log("Special Pythagorean Triplet [a, b, c]: ", lst);
    return lst;
}

// function sumOfPrimes() {     // 10
//     let limit = 2000000;
//     let sum = 0;
//     let lst = [];
//     let counter = 0;
//     for (let i = 2; i < limit; i++) {
//         if (isPrime(i)) {
//             counter++;
//             lst.push(i);
//             sum += i;
//         }
//     }
//     console.log(counter);
//     console.log("Summation of primes below 2000000: ", sum);
//     console.log(lst);
//     return sum;
// }
//
// sumOfPrimes();

function largestProduct() {     // 11
    let grid = [
        [8,2,22,97,38,15,0,40,0,75,4,5,7,78,52,12,50,77,91,8],
        [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,4,56,62,0],
        [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65],
        [52,70,95,23,4,60,11,42,69,24,68,56,1,32,56,71,37,2,36,91],
        [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
        [24,47,32,60,99,3,45,2,44,75,33,53,78,36,84,20,35,17,12,50],
        [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
        [67,26,20,68,2,62,12,20,95,63,94,39,63,8,40,91,66,49,94,21],
        [24,55,58,5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
        [21,36,23,9,75,0,76,44,20,45,35,14,0,61,33,97,34,31,33,95],
        [78,17,53,28,22,75,31,67,15,94,3,80,4,62,16,14,9,53,56,92],
        [16,39,5,42,96,35,31,47,55,58,88,24,0,17,54,24,36,29,85,57],
        [86,56,0,48,35,71,89,7,5,44,44,37,44,60,21,58,51,54,17,58],
        [19,80,81,68,5,94,47,69,28,73,92,13,86,52,17,77,4,89,55,40],
        [4,52,8,83,97,35,99,16,7,97,57,32,16,26,26,79,33,27,98,66],
        [88,36,68,87,57,62,20,72,3,46,33,67,46,55,12,32,63,93,53,69],
        [4,42,16,73,38,25,39,11,24,94,72,18,8,46,29,32,40,62,76,36],
        [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,4,36,16],
        [20,73,35,29,78,31,90,1,74,31,49,71,48,86,81,16,23,57,5,54],
        [1,70,54,71,83,51,54,69,16,92,33,48,61,43,52,1,89,19,67,48]
    ];
    let largest = [0, 0, 0, 0];     // indexes:
                                    //      0 - row
                                    //      1 - column
                                    //      2 - right diagonal
                                    //      3 - left diagonal

    // row adjacent - product_h;
    // column adjacent - product_v;

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 17; x++) {
            let product_h = 1, product_v = 1;
            for (let i = 0; i < 4; i++) {
                product_h *= grid[y][x + i];
                product_v *= grid[x + i][y];
            }
            if (product_h > largest[0]) {
                largest[0] = product_h;
            }
            if (product_v > largest[1]) {
                largest[1] = product_v;
            }

        }
    }

    // right diagonal adjacent - product_r;
    // left diagonal adjacent - product_l;

    for (let d1 = 0; d1 < 17; d1++) {
        for (let d2 = 0; d2 < 17; d2++) {
            let product_r = 1, product_l = 1;
            for (let i = 0; i < 4; i++) {
                product_r *= grid[d2][d1 + i];
                product_l *= grid[d2 + 3 - i][d1 + i];
            }
            if (product_r > largest[2]) {
                largest[2] = product_r;
            }
            if (product_l > largest[3]) {
                largest[3] = product_l;
            }
        }
    }
    let maxim = largest[0];
    for (let j = 1; j < 4; j++) {
        if (largest[j] > maxim) {
            maxim = largest[j];
        }
    }
    console.log("Largest Product: ", maxim);  //Math.max(largest)); -- doesn't work :(
    return maxim;    //Math.max(largest)); -- doesn't work :(
}

// function highDivTriangularNumber() {    // 12
//     let j = 0, n = 0;
//     let numDivisors = 0;
//     while (numDivisors <= 500) {
//         numDivisors = 0;
//         j++;
//         n = triangleNumber(j);
//         let i = 1;
//         while (i <= Math.sqrt(n)) {
//             if (n % i === 0) {
//                 numDivisors++;
//             }
//             i++;
//         }
//         numDivisors *= 2;
//     }
//     console.log("Highly divisible triangular number: ", n);
//     return n;
// }
//
// function triangleNumber(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) sum += i;
//     // console.log(sum);
//     return sum;
// }
//
// highDivTriangularNumber();


// function collatzSeq(n) {    // 13
//     // let n1 = n;
//     // while (n > 1) {
//     //     if (n % 2 === 0) {
//     //         n /= 2;
//     //     }
//     //     else {
//     //         n = 3 * n + 1;
//     //     }
//     // }
//     // return n;
//     if (n === 1) return 1;
//     else if (n % 2 === 0) return collatzSeq(Math.floor(n / 2)) + 1;
//     else return collatzSeq(3 * n + 1) + 1;
// }
//
// function longestCollatzSeq() {
//     let n = 1000000;
//     for (let i = 1000000; i > 0; i--) {
//         if (collatzSeq(i) === 1) {
//             n = i;
//             break;
//         }
//     }
// }
//
// longestCollatzSeq();


