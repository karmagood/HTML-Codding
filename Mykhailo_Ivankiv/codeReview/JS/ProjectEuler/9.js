const findNum = (n) => {
    for (let c = n; c >= 3; --c) {
        for (let b = c - 1; b >= 2; --b) {
            for (let a = b - 1; a >= 1; --a) {
                if (a + b + c == n && a * a + b * b == c * c) return a * b * c;

            }
        }
    }

}


console.log(findNum(1000));