const findAll = (a, b, n) => {
    var a1 = Math.floor((n - 1) / a);
    a1 = (2 * a + a * (a1 - 1)) / 2 * a1;


    var b1 = Math.floor((n - 1) / b);
    // console.log(b1);
    b1 = (2 * b + b * (b1 - 1)) / 2 * b1;


    var c = a * b;
    var c1 = Math.floor((n - 1) / c);
    if (c1 > 0) c1 = (2 * c + c * (c1 - 1)) / 2 * c1;


    return b1 + a1 - c1;

}


console.log(findAll(3, 5, 1000));