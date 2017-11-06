const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArray = (size) => {
    let arr = [];

    for(let i = 0; i < size; i+= 1) {
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

//BUBBLE SORT
const bubbleSort = (arr) => {
    const sorted = arr.slice();
    for (let i = 0; i < sorted.length; i += 1) {
        for(let j = 0; j < sorted.length - 1 - i; j += 1) {
            const first = sorted[j];
            const second = sorted[j + 1];

            if (first > second) {
                swap(sorted, j, j + 1)
            }
        }
    }
    return sorted;
};

//SELECTION SORT
const selectionSort = (arr) => {
    let len = arr.length, min;
    for (let i = 0; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min){
            swap(arr, i, min);
        }
    }

    return arr;
};

//INSERTION SORT
const insertionSort = (arr) => {
    let i, len = arr.length, elem, j;
    for(i = 1; i<len; i++){
        elem = arr[i];
        j = i;

        while(j > 0 && arr[j - 1] > elem){
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = elem;
    }

    return arr;
};


//MERGE SORT
const merge = (arr, l, m, r) => {
    n1 = m - l + 1;
    n2 = r - m;

    const tmp1 = [0] * n1;
    const tmp2 = [0] * n2;

    for (let i = 0; i < n1; i++) {
        tmp1[i] = arr[l + i]
    }

    for (let j = 0; j < n2; i++) {
        tmp1[j] = arr[m + 1 + j]
    }

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (tmp1[i] <= tmp2[j]) {
            arr[k] = tmp1[i];
            i += 1;
        }
        else {
            arr[k] = tmp2[j];
            j += 1;
            k += 1;
        }
    }
    while (i < n1) {
        arr[k] = tmp1[i];
        i += 1;
        k += 1;
    }
    while (j < n2) {
        arr[k] = tmp2[j];
        j += 1;
        k += 1;
    }
    return arr;
};

const mergeSort = (arr, l, r) => {
    if(l < r) {
        var m = (l + (r - 1)) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
};

//QUICK SORT
const partition_func = (arr, left, right) => {
    var pivot = arr[Math.floor((left + right) / 2)];
    var i = left;
    var j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
};

const quickSort = (arr, left, right) => {
    if(right - left <= 0) {
        var partition = partition_func(arr, left, right);
        quickSort(arr, left, partition - 1);
        quickSort(arr, partition + 1, right);
    }
    return arr;
};

//COUNTING SORT
const countingSort = (arr, min, max) => {
    var i, z = 0;
    var newArr = [];
    for (i = min; i <= max; i++) {
        newArr[i] = 0;
    }
    for (i = 0; i < arr.length; i++) {
        newArr[arr[i]]++;
    }
    for (i = min; i <= max; i++) {
        while(newArr[i]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
};

//RANDOMIZED QUICK SORT
const rand_partition_func = (arr, left, right) => {
    var pivot = arr[Math.floor(left + Math.random() * (right - left + 1))];
    var i = left;
    var j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
};

const RandomizedQuickSort = (arr, left, right) => {
    if(right - left <= 0) {
        var partition = rand_partition_func(arr, left, right);
        quickSort(arr, left, partition - 1);
        quickSort(arr, partition + 1, right);
    }
    return arr;
};


//RADIX SORT
const radix = (arr, exp1) => {
    var n = arr.length;
    var output = [0] * n;
    var count = [0] * 10;

    for(let i = 0; i < n; i++) {
        var index = (arr[i] / exp1);
        count[index % 10] += 1;
    }

    for(let i = 1; i < 10; i++) {
        count[i] = count[i - 1];
    }

    var i = n-1;
    while(i >= 0){
        index = (arr[i]/exp1);
        output[ count[ (index)%10 ] - 1] = arr[i];
        count[ (index)%10 ] -= 1;
    i -= 1
    }

    var i = 0
    for(let i = 0; i < arr.length; i++){
        arr[i] = output[i];
    }

};

const radixSort = (arr) => {
    var max1 = Math.max(arr);

    var exp = 1;

    while((max1 / exp) > 0) {
        radix(arr, exp);
        exp *= 10;
    }
    return arr;
};



const testArr = getRandomArray(5);
console.log("Unsorted array:", testArr);
//console.log(swap(testArr, 0, 1));
console.log("Bubble sort:", bubbleSort(testArr));
console.log("Selection sort:", selectionSort(testArr));
console.log("Insertion sort:", insertionSort(testArr));
console.log("Merge sort:", merge(testArr));
console.log("Quick sort:", quickSort(testArr));
console.log("Counting sort:", countingSort(testArr));
console.log("Randomized quick sort:", RandomizedQuickSort(testArr));
console.log("Radix sort:", radixSort(testArr));

//use live templates, very useful