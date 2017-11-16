function solve(n) {
    var sum_of_square = 0, sum = 0;
    for (let i = 1; i <= n; i++) {
        sum_of_square += i * i;
        sum += i;
    }
    return sum * sum - sum_of_square;
}