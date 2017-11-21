const {checkArraySorting} = require("./utility.js");

const raddixSort = (arr) => {
    let raddixBucket = new Array(10);
    for (let i = 0; i < raddixBucket.length; i++) {
        raddixBucket[i] = [];
    }

    let this_radiix = 0;
    let divisor = 10 ** this_radiix;
    const maxElement = Math.max(...arr);
    let maxRaddix = maxElement.toString().length;

    while (this_radiix < maxRaddix) {
        // placing into "raddix buckets"
        divisor = 10 ** this_radiix;
        for (let i = 0; i < arr.length; i++) {
            raddixBucket[ (arr[i] < divisor ? 0 : Math.floor( (  arr[i] % (divisor * 10) )/ divisor) )  ].push(arr[i]);
        }

        //from buckets to original array
        let i = 0; // index over original array
        for (let j = 0; j < raddixBucket.length; j++) {
            while (raddixBucket[j].length > 0)
                arr[i++] = raddixBucket[j].shift()
        }
        this_radiix++;
    }
    return arr;
};

console.log(raddixSort([20, 100, 3,12345, 124]));
checkArraySorting(iterations = 1000, testSizeFrom = 3, testSizeTo = 300, testElemSizeFrom = 0, testElemSizeTo = 5, sortingFunction = raddixSort);
