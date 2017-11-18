//Sum square difference

function sumSquareDifference() {
    const n = 100;
    let sum1 = 0, sum2 = 0;
    for (let i = 1; i <= n; i++) {
        sum1 += i;
        sum2 += i * i;
    }
    let final_sum = Math.pow(sum1, 2) - sum2;
    return console.log(final_sum);
}

sumSquareDifference();