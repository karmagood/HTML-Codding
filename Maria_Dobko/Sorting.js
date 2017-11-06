let math = require('mathjs');

const swap = (arr, a, b) => {
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
    return arr;
};


const bubbleSort = (arr) => {
    const sorted = arr.slice();
    console.log(sorted);
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

//console.log(bubbleSort([3, 4, 50, 1, 34, 8, 43, 1 ]));


const selectionSort = (arr) => {
    const sorted = arr.slice();

    for (let i=0; i<sorted.length; i++){
        var minim =i;
        for (let j = i+1; j<sorted.length; j++){
            if(sorted[j] < sorted[minim]){
                minim = j;
            }
        }
        if(i !== minim){
            swap(sorted,i, minim);
        }

    }

    return sorted;
};
//console.log(selectionSort([3, 4, 50, 1, 34, 8, 43, 1 ]));

const insertionSort = (arr) =>{
    const sorted = arr.slice();

    for(let i=1; i< sorted.length; i++){
        let elem = sorted[i];
        for (var j = i-1;  j>=0 &&(sorted[j]>elem);j--){
            sorted[j+1] = sorted[j];
        }
        sorted[j+1] = elem;
    }
    return sorted;

};
//console.log(insertionSort([3, 4, 50, 1, 34, 8, 43, 1 ]));

const merge = (l, r) =>{
    let sorted = [];

    while(l.length || r.length ){
        if(l.length && r.length){
            if(l[0]<r[0]){
                sorted.push(l.shift());
            }
            else{
                sorted.push(r.shift());
            }
        }
        else if(l.length){
            sorted.push(l.shift());
        }
        else{
            sorted.push(r.shift());
        }
    }
    return sorted;
};

const mergeSort = (arr) =>{
    if(arr.length < 2){
        return arr;
    }
    let mid = math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

//console.log(mergeSort([4, 3, 4, 50, 1, 34, 8, 43, 1 ]));

const partition = (arr, l, r)=>{
    let pivot = arr[math.floor((r + l) / 2)];
    let index = l;
    let j = r;

    while (index <= j) {
        while (arr[index] < pivot) {
            index++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (index <= j) {
            swap(arr, index, j);
            index++;
            j--;
        }
    }
    return index;
};

const quickSort = (arr, l, r) =>{
    let i;
    if (arr.length >1){
        i = partition(arr, l, r);
        if (l<i-1){
            quickSort(arr, l, i-1);
        }
        if(i< r){
            quickSort(arr, i, r);
        }
    }
    return arr;
};

//var list = [3, 4, 50, 1, 34, 8, 43, 1 ];
//console.log(quickSort(list, 0 , list.length-1));


const countingSort = (arr, min, max) => {
    let i, c = 0, count = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[c++] = i;
        }
    }
    return arr;
};

//console.log(countingSort([4, 3, 4, 14, 1, 24, 8, 23, 1, 30], 0, 30));


const radixSort = (arr) =>{
    // There are issues here, will be fixed!

    let radix = 10;
    var maxLen = false;
    var tmp = -1, place = 1;
    let sorted = [];

    while(!maxLen){
        maxLen = true;
        var buckets = []; // create empty buckets
        for(let b=0; b<radix; b++){
            let bucket = [];
            buckets.push(bucket);
        }

        // split array between lists
        for(let i=0; i<arr.length;i++){
            tmp = arr[i]/place;
            let bucket_ = math.floor(tmp % radix);
            buckets[bucket_].push(arr[i]);
            if(maxLen && tmp>0){
                maxLen = false;
            }
        }

        // empty buckets into array
        var a = 0;
        for(let b=0; b< radix; b++){
            let buck = buckets[b];
            for(let i=0; i<buck.length; i++){
                 sorted[a] = buck[i];
                 a+=1;
            }
        }
        place *= radix; // move to the next digit
    }
    return arr;
};

//console.log(radixSort([4, 3, 4, 15, 14, 13, 8, 23, 1 ]));

