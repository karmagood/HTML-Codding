const {swap, getRandomArray, getRandomNumber} = require("./lib");

const bubbleSort = (arr) => {
    const sorted = arr.slice();
    for (let i=0; i<sorted.length-1; i+=1){
        for (let j = 0; j<sorted.length-1; j+=1){
            const first = sorted[j];
            const second = sorted[j+1];
            if (first > second){
                swap(sorted, j, j+1);
            }
        }
    }

    return sorted;
};

const selectionSort = (arr) => {
    const sorted = arr.slice();
    for (let i = 0; i < sorted.length; i += 1){
        let min = i;
        for (let j = i +1; j < sorted.length; j += 1){
            if (sorted[j] < sorted[min]){
                min = j;
            }
        }
        if (i !== min){
            swap(sorted, i, min);
        }
    }
    return sorted;
};

const insertionSort = (arr) => {
    const sorted = arr.slice();
    var holePosition;
    var valueToInsert;

    for(let i =1; i < sorted.length; i++){
        valueToInsert = sorted[i];
        holePosition = i;
        while (holePosition > 0 && sorted[holePosition-1] > valueToInsert){
            sorted[holePosition] = sorted[holePosition-1];
            holePosition = holePosition - 1;
        }
        sorted[holePosition] = valueToInsert;
    }
    return sorted;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let part = Math.floor(arr.length/2);
    let firstPart = arr.slice(0, part);
    let secondPart = arr.slice(part);

    firstPart = mergeSort(firstPart);
    secondPart = mergeSort(secondPart);

    return merge(firstPart, secondPart);
};


const merge = (firstPart, secondPart) => {
    let sorted = [];
    let i = 0, j = 0;

    while (firstPart.length > i && secondPart.length > j){
        if (firstPart[i] <= secondPart[j]){
            sorted.push(firstPart[i]);
            i++;
        }
        else {
            sorted.push(secondPart[j]);
            j++;
        }
    }

    while (firstPart.length > i){
        sorted.push(firstPart[i]);
        i++;
    }

    while (secondPart.length > j){
        sorted.push(secondPart[j]);
        j++;
    }

    return sorted;
};


const quickSort = (arr) => {
    return quick(arr, 0, arr.length - 1);

};

const quick = (a, p, q) =>{
    let i;
    if (p < q){
        i = partition(a, p, q);
        quick(a, p, i - 1);
        quick(a, i + 1, q);
    }
    return a;
};

const partition = (a, p, q) => {
    let x, i;

    x = a[q];
    i = p - 1;

    for (let j= p; j < q; j++){
        if (a[j] <= x){
            i += 1;
            a = swap(a, i, j)
        }
    }
    swap(a, i + 1, q);
    return i + 1;
};

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

const countingSort = (arr) => {
    let min_val = getMinOfArray(arr);
    let max_val = getMaxOfArray(arr);
    let i, z = 0, count = [];
    for (i = min_val; i <= max_val; i++){
        count[i] = 0;
    }
    for (i=0; i < arr.length; i++){
        count[arr[i]]++;
    }

    for (i = min_val; i <= max_val; i++){
        while (count[i]-- > 0){
            arr[z++] = i;
        }
    }
    return arr;
};

// let q = getRandomArray(5);
// console.log(q);
// console.log(quickSort(q));

// let a = getRandomArray(10,0,10);
// console.log(a);
// console.log(countingSort(a));
