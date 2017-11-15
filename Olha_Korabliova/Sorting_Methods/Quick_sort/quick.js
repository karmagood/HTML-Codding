function randomizeArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 200) - 50);
    }
    return array;
}

arr = randomizeArray(20);
document.getElementById("array_unsorted").innerHTML = arr;

function quick_sort(array, p, r) {
    let ind;
    if (array.length > 1) {
        ind = partition(array, p, r);
        if (p < ind - 1) {
            quick_sort(array, p, ind - 1);
        }
        if (ind < r) {
            quick_sort(array, ind, r);
        }
    }
    return array;
}

function partition(array, p, r) {
    let pivot = array[Math.floor((r + p) / 2)];
    while (p <= r) {
        while (array[p] < pivot) {
            p++;
        }
        while (array[r] > pivot) {
            r--;
        }
        if (p <= r) {
            let tmp = array[p];
            array[p] = array[r];
            array[r] = tmp;
            p++;
            r--;
        }
    }
    return p;
}


document.getElementById("array_sorted").innerHTML = quick_sort(arr, 0, arr.length - 1);