const {generateRandomArray} = require("./randomArray");

let arr = generateRandomArray(20);

function mergeSort(array) {
    let n = array.length;
    if (array.length <= 1) return array;
    let mid = Math.floor(n / 2);
    let l = array.slice(0, mid);
    let r = array.slice(mid, n);
    l = mergeSort(l);
    r = mergeSort(r);

    return merge(l, r);
}

function merge(l, r) {
    let arr = [];
    let i = 0, j = 0;
    while (i < l.length && j < r.length) {
        if (l[i] > r[j]) {
            arr.push(r[j]);
            j++;
        }
        else {
            arr.push(l[i]);
            i++;
        }
    }
    while (j < r.length) {
        arr.push(r[j]);
        j++;
    }
    while (i < l.length) {
        arr.push(l[i]);
        i++;
    }
    return arr;
}

console.log("unsorted: ", arr);
let k = mergeSort(arr);
console.log("sorted: ", k);