function Problem9(num) {
    let stop = false;
    while (!stop) {
        for (var a = 2; a < 300; ++a) {
            for (var b = a; b < 400; ++b) {
                var c = (a ** 2 + b ** 2) ** 0.5;
                if (a + b + c === num) {
                    return a*b*c;
                }
            }
        }
    }
}

console.log(Problem9(1000));
