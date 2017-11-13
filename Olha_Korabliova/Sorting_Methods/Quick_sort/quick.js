function randomizeArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 200) - 50);
    }
    return array;
}

arr = randomizeArray(20);
document.getElementById("array_unsorted").innerHTML = arr;

// function partition(array, p, q) {
//     let x = array[q];
//     let i = p - 1;
//     for (let j = p; j < q; j++) {
//         if (array[j] <= x) {
//             i++;
//             let tmp = array[i];
//             array[i] = array[j];
//             array[j] = tmp;
//         }
//         let tmp2 = array[i + 1];
//         array[i + 1] = array[q];
//         array[q] = tmp2;
//     }
//     return i + 1;
// }
//
//
//
// function quick_sort(array, p, q) {
//     if (p >= q) {return array;}
//     let i = partition(array, p, q);
//     quick_sort(array, p, i - 1);
//     quick_sort(array, i + 1, q);
//     return array;
// }

// function quick_sort(array, p, q) {
//     if (p >= q) {return array;}
//     let r = array[p];
//     let i = p - 1;
//     let j = q + 1;
//     while (i < j) {
//         while (array[i] >= r) {
//             i++;
//         }
//         while (array[j] >= r) {
//             j--;
//         }
//         if (i < j) {
//             let tmp = array[i];
//             array[i] = array[j];
//             array[j] = tmp;
//         }
//     }
//     quick_sort(array, p, j);
//     quick_sort(array, j + 1, q);
// }

function quick_sort(array) {
    q_s(array, 0, array.length - 1);
    return array;
}

function q_s(array, p, r) {
    if (p < r) {
        q = partition_q_s(array, p, r);
        q_s(array, p, q - 1);
        q_s(array, q + 1, r);
    }
}

function partition_q_s(array, p, r) {
    let x = array[r];
    let i = p - 1;
    for (let j = p; j < r; j++) {
        if (array[j] <= x) {
            i++;
            let tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        let tmp2 = array[i + 1];
        array[i + 1] = array[r];
        array[r] = tmp2;
    }
    console.log(i);
    return i + 1;
}




document.getElementById("array_sorted").innerHTML = quick_sort(arr);
