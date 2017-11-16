const getGratesDivider = (x, y) => y === 0 ? x : getGratesDivider(y, x % y);

const getSumOfArithmeticProgression = (firstMember, numberOfElements, base) =>
    numberOfElements * ( 2 * firstMember + (numberOfElements - 1) * base) / 2;

const solve = (x, y, n) => {
    let lowerCommonMultiply = x * y / getGratesDivider(x, y);
    let x_sum = getSumOfArithmeticProgression(x, Math.floor((n - 1) / x), x);
    let y_sum = getSumOfArithmeticProgression(y, Math.floor((n - 1) / y), y);
    let lcm_sum = getSumOfArithmeticProgression(lowerCommonMultiply, Math.floor((n - 1) / lowerCommonMultiply), lowerCommonMultiply);
    return x_sum + y_sum - lcm_sum;
};

console.log( solve(3,5, 1000) )