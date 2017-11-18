// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
//
// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450
//
// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?


const taskString = "73167176531330624919225119674426574742355349194934" +
    "96983520312774506326239578318016984801869478851843" +
    "85861560789112949495459501737958331952853208805511" +
    "12540698747158523863050715693290963295227443043557" +
    "66896648950445244523161731856403098711121722383113" +
    "62229893423380308135336276614282806444486645238749" +
    "30358907296290491560440772390713810515859307960866" +
    "70172427121883998797908792274921901699720888093776" +
    "65727333001053367881220235421809751254540594752243" +
    "52584907711670556013604839586446706324415722155397" +
    "53697817977846174064955149290862569321978468622482" +
    "83972241375657056057490261407972968652414535100474" +
    "82166370484403199890008895243450658541227588666881" +
    "16427171479924442928230863465674813919123162824586" +
    "17866458359124566529476545682848912883142607690042" +
    "24219022671055626321111109370544217506941658960408" +
    "07198403850962455444362981230987879927244284909188" +
    "84580156166097919133875499200524063689912560717606" +
    "05886116467109405077541002256983155200055935729725" +
    "71636269561882670428252483600823257530420752963450";

// TODO refactor using standart "reduce" method

const foldAdvanced = (
      foldReduce = () => {},
      entityToFold = [],
      entityReducer = () => {},
      accum,
      stopCondition = () => {},

      terminate = (a) => a
    ) => stopCondition(entityToFold) ?  terminate(accum)
        : foldAdvanced(
            foldReduce,
            entityReducer(entityToFold),
            entityReducer,
            foldReduce(accum, entityToFold),
            stopCondition,
            terminate
        )
;

const prodOfNumberDigits = (numberString) => foldAdvanced (
    (acc, entity) => acc * parseInt(entity[entity.length - 1]),
    numberString,
    entity => entity.slice(0, entity.length - 1),
    1,
    entity => entity.length === 0 ,
    entity => entity
);

const maxProductOfNAdjecent = (numberAsString, adjLength) => {

    if (adjLength > numberAsString.length)
        return 0;
    let slicedString;
    let maxSlice;
    let maxStringSum = 0;

    for (let left = 0; left < numberAsString.length - adjLength; left++) {
        slicedString = numberAsString.slice(left, left + adjLength);
        if (maxStringSum < prodOfNumberDigits(slicedString)) {
            maxStringSum = prodOfNumberDigits(slicedString);
            maxSlice = slicedString;
        }
    }
    return prodOfNumberDigits(maxSlice);
};

const maxProductOfNAdjecent2 = (numberAsString, adjLength) => {

    if (numberAsString.length < adjLength)
        return 0;
    else
        return foldAdvanced(
            (accum, numberString) =>
                prodOfNumberDigits(accum) > prodOfNumberDigits(numberString.slice(0, adjLength))
                    ? accum
                    : numberString.slice(0, adjLength),
            numberAsString,
            numberString => numberString.slice(1, numberString.length),
            "",
            numberString => numberString.length < adjLength,
            entity => prodOfNumberDigits(entity)
        );
};

console.log(maxProductOfNAdjecent(taskString, 4));
console.log(maxProductOfNAdjecent2(taskString, 4));

console.log(maxProductOfNAdjecent(taskString, 13));
console.log(maxProductOfNAdjecent2(taskString, 13));