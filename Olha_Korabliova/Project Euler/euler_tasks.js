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

function largest_prime_factor() {   // 3
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

function largest_palindrome() {     // 4
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

// function smallest_multiple() {
//     let counter = 0;
//     let start = 2520;
//     while (counter !== 20) {
//         break;
//     }
//
// }