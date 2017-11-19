import generateRandomArray from "./../randomArray";

let arr = generateRandomArray(20);
document.getElementById("array_unsorted").innerHTML = arr;

function quickSort(array, p, r) {
    let ind;
    if (array.length > 1) {
        ind = partition(array, p, r);
        if (p < ind - 1) {
            quickSort(array, p, ind - 1);
        }
        if (ind < r) {
            quickSort(array, ind, r);
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


document.getElementById("array_sorted").innerHTML = quickSort(arr, 0, arr.length - 1);