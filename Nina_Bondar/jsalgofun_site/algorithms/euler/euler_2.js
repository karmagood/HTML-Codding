const f = function () {
    var even_sum = 2;

    var first = 1;
    var second = 2;

    var tmp = 0;

    do {
        tmp = first + second;
        first = second;
        second = tmp;

        if (second % 2 === 0){
            even_sum += second;
        }

    } while (second <= 4000000);

    return even_sum;
};

module.exports = f;