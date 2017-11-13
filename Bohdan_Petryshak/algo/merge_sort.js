const getRandomNumber = (min,max) => Math.floor(Math.random()*(max-min))+min

const getRandomArray = (size) =>{
    let arr = [];
    for(let i =0;i<size;i++){
        arr.push(getRandomNumber(0,50));
    }
    return arr;
};

const Merge = (left, right) => {
    let result = [];
    while((left.length > 0) && (right.length > 0)) {
        if(left[0] <= right[0]) {
            result.push(left[0]);
            left.splice(0, 1);
        } else {
            result.push(right[0]);
            right.splice(0, 1);
        }
    }
    while (left.length > 0) {
        result.push(left[0]);
        left.splice(0, 1);
    }
    while (right.length > 0) {
        result.push(right[0]);
        right.splice(0, 1);
    }
    return result;
};

const MergeSort = (l) => {
    if(l.length <= 1) {
        return l;
    }

    let leftPart = [];
    let rightPart = [];

    for (let i = 0; i < l.length; i++) {
        if(i < (l.length) / 2) {
            leftPart.push(l[i]);
        } else {
            rightPart.push(l[i])
        }
    }

    leftPart = MergeSort(leftPart);
    rightPart = MergeSort(rightPart);

    return Merge(leftPart, rightPart);
};
