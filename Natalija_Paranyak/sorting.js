const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomArray = (size) => {
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(getRandomNumber(0, 50));
    }
    return arr;

};

const swap = (arr, a, b) => {
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
    return arr;
};

const bubbleSort = (arr) => {
    const sorted = arr.slice();

    for (let i = 0; i < sorted.length; i++) {
        for (j = 0; j < sorted.length - 1 - i; j++) {
            const first = sorted[j];
            const second = sorted[j + 1];
            if (first > second) {
                swap(sorted, j, j + 1);
            }
        }
    }
    console.log(arr);
    return sorted;
};


const selectionSort = (arr) => {
    const sorted = arr.slice();
    let whileNumber = sorted.length;
    let minIndex = sorted.length - whileNumber;

    while (whileNumber > 1) {
        let minNumber = sorted[sorted.length - whileNumber];
        for (j = sorted.length - whileNumber; j < sorted.length; j++) {
            if (sorted[j] < minNumber) {
                minNumber = sorted[j];
                minIndex = j;
            }
        }
        swap(sorted, minIndex, sorted.length - whileNumber);
        whileNumber--;
    }
    console.log(arr);
    return sorted;
};

const insertionSort = (arr) => {
    const sorted = arr.slice();
    for (i = 1; i < sorted.length; i++) {
        for (j = i; j > 0; j--) {
            if (sorted[j - 1] > sorted[j]) {
                swap(sorted, j - 1, j);
            }
        }
    }
    console.log(arr);
    return sorted;
};

const mergeSort = (arr) => {
    if (arr.length < 2)
        return arr;

    let middle = parseInt(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}


function partition(items, left, right) {

    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

const quickSort = (items, left, right) => {

    let index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
};

const fullZeros = (arr, end) => {
    for (j = arr.length; j < end + 1; j++) {
        arr.push(0);
    }
    return arr;
};

const countSort = (arr) => {
    const sorted = arr.slice();
    let keys = [];
    for (i = 0; i < sorted.length; i++) {
        if (sorted[i] >= keys.length) {
            keys = fullZeros(keys, sorted[i]);
            keys[sorted[i]] += 1;
        } else {
            keys[sorted[i]] += 1;
        }
    }
    returnArray = [];
    for (a = 0; a < keys.length + 1; a++) {
        for (ind = 0; ind < keys[a]; ind++) {
            returnArray.push(a);
        }
    }
    console.log(arr);
    return returnArray;
};


const radixSort = (arr) => {
    let tmpArray = [];
    let decimalArray = [[], [], [], [], [], [], [], [], [], []];
    console.log(arr);
    let maximumLen = 2;
    for (i = maximumLen - 1; i > -1; i--) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j].toString().length < maximumLen) {
                if (i - (maximumLen - arr[j].toString().length) >= 0) {
                    newIndex = i - (maximumLen - arr[j].toString().length);
                    decimalArray[arr[j].toString()[newIndex]].push(arr[j]);

                } else {
                    decimalArray[0].push(arr[j]);
                }
            }

            else {
                decimalArray[arr[j].toString()[i]].push(arr[j]);
            }
        }

        tmpArray = [];
        for (first = 0; first < 10; first++) {
            for (second = 0; second < decimalArray[first].length; second++) {
                tmpArray.push(decimalArray[first][second]);
            }
            decimalArray[first] = [];
        }
        arr = tmpArray;
    }
    return arr;
};
// console.log(bubbleSort(getRandomArray(20)));
// console.log(selectionSort(getRandomArray(20)));
// console.log(insertionSort(getRandomArray(20)));
// console.log(mergeSort(getRandomArray(20)));
// let items = [3, 44, 38, 5, 47, 15, 36, 26,27, 2, 46, 4, 19, 50, 48 ];
// console.log(quickSort(items, 0, items.length - 1));

// console.log(countSort(getRandomArray(20)));
console.log(radixSort(getRandomArray(20)));
