import generateRandomArray from "./../randomArray";

let arr = generateRandomArray(20);
document.getElementById("array_unsorted").innerHTML = arr;

// function merge_sort(array) {
//     m_s(array, 0, array.length - 1);
//     return array;
// }
//
// function m_s(array, p, q) {
//     let c = Math.floor((p + q) / 2);
//     if (q - p > 1) {
//         m_s(array, p, c);
//         m_s(array, c + 1, q);
//     }
//     merge_sort_tmp(array, p, c, q);
// }
//
// function merge_sort_tmp(array, p, c, q) {
//     let i = p;
//     let j = c + 1;
//     array2  = [0] * array.length;
//     for (let k = p; k <= q; k++) {
//         if (j > q || (i <= c && array[i] <= array[j])) {
//             array2[k] = array[k];
//         }
//         else {
//             array2[k] = array[j];
//             j++;
//         }
//     }
//     for (let k = p; k <= q; k++) {
//         array[k] = array2[k];
//     }
//     return array;
// }
//


function mergeSort(array, p, q) {
    let c = Math.floor((p + q) / 2);
    if (p - q > 1) {
        mergeSort(array, p, c);
        mergeSort(array, c + 1, q);
    }
    merge(array, p, c, q);
    return array;
}

function merge(array, p, c, q) {
    let i = p;
    let j = c + 1;
    for ( let k = p; k < q; k++) {
        if ((i > q) || (i <= c && array[i] <= array[j])) {
            array2[k] = array[i];
            i++;
        }
        else {
            array2[k] = array[j];
            j++;
        }
    }
    for (let k = p; k < q; k++) {
        array[k] = array2[k];
    }
}


document.getElementById("array_sorted").innerHTML = mergeSort(arr, 1, arr.length);