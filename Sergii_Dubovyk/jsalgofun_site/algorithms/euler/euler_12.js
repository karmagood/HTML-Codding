const triangleNumber = function (n) {
    var result = 0;
    for(let i = 1; i <= n; i++) result += 1;
    return result
};

const getNumberOfDivisors = function (number) {
    var div_num = 0;
    for(let candidate = 1; candidate < Math.sqrt(number); candidate++) if (number % candidate === 0) div_num++;
    return div_num;
};

const getTriangleNumberNDivisors = function (divisorsNumber) {
    var current_triangle_index = 1;
    var current_triangle;

    do{
        current_triangle = triangleNumber(current_triangle_index);
        current_triangle_index++;
    } while (getNumberOfDivisors(current_triangle) < divisorsNumber);

    return current_triangle;
};

module.exports = getTriangleNumberNDivisors;