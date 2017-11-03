function Problem4() {
    let arr = [];
    for(let i = 100; i < 1000; ++i){
        for(let j = i; j < 1000;++j){
            let multiplication = i*j;
            if (multiplication === parseInt(reverse_a_number(multiplication))){
                arr.push(multiplication);
            }
        }
    }
    let MaxPolindrom = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return MaxPolindrom;
}

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(Problem4());