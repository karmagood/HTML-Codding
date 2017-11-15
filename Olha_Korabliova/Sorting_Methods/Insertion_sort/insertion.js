function randomizeArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 200) - 50);
    }
    return array;
}

arr = randomizeArray(20);
document.getElementById("array_unsorted").innerHTML = arr;


function insertion_sort(array) {
    let i = 1;
    while (i < array.length) {
        let x = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > x) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = x;
        i++;
    }
    return array;

}

document.getElementById("array_sorted").innerHTML = insertion_sort(arr);
