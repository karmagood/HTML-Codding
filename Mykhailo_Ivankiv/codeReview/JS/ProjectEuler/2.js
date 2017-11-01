var sum = 0;

const LIMIT = 4 * 1e6;


const findAllFib = (f1, f2) => {
    if (f2 > LIMIT) return "DONE";
    if (f2 % 2 == 0) sum += f2;
    return findAllFib(f2, f2 + f1);
}


findAllFib(1, 1);
console.log(sum);