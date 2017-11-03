function Problem6(num) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i < num + 1; ++i){
        sum1 += i ** 2;
        sum2 += i;
    }
    return sum2**2 - sum1;
}

console.log(Problem6(100));