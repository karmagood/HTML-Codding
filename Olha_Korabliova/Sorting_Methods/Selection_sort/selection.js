function randomizeArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 200) - 50);
    }
    return array;
}

arr = randomizeArray(20);
document.getElementById("array_unsorted").innerHTML = arr;


function selection_sort(array) {
    let n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minimum = array[i];
        for (let j = i; j < n; j++) {
            if (array[j] < minimum) {
                minimum = array[j];
                array[j] = array[i];
                array[i] = minimum;
            }
        }
    }
    return array;
}

document.getElementById("array_sorted").innerHTML = selection_sort(arr);
