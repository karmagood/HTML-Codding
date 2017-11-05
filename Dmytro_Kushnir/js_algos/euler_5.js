// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//     What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


function divisibilityCondition(from , to, number) {
    var rez = true;
    for (var i = from; i <= to && rez; i++){
        rez = number % i === 0;
    }
    return rez;
}

function divided(number, divisor) {

}

function smallestPositiveEvenlyDivisible(from, to) {
    var accum = 1;

    //getting upper estimate of such number
    for (var i = from; i <= to; i++){
        accum*=i;
    }

    var number = accum;

    //dividing it by values from condition
    var wasDivided;
    do {
        wasDivided = false;
        if (from < 2)
            from = 2;
        for (var j = from; j <= to; j++) {
            if (number % j === 0 && divisibilityCondition(from, to ,number / j)) {
                wasDivided = true;
                number = number / j;
                break;
            }
        }
    }while (wasDivided);

        return number;
}

console.log(smallestPositiveEvenlyDivisible(1,20));