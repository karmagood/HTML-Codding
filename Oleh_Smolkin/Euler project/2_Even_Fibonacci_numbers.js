function solve(n) {
    let sum = 0;
    let arr = [1, 1];

    let i = 0;
    while (arr[++i % 2] <= n) {
        if (arr[i % 2] % 2 == 0) {
            sum += arr[i % 2];
        }
        arr[i % 2] = arr[0] + arr[1];
    }
    return sum;
}

console.time ("Start");
console.log(solve(200000));
console.timeEnd("Start");