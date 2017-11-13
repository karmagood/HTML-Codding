function randomizeArray(n) {
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 200) - 50);
    }
    return array;
}

arr = randomizeArray(20);
document.getElementById("array_unsorted").innerHTML = arr;


function bubble_sort(array) {
    let n = array.length;
    while (n > 0) {
        let i = 0;
        for (let j = 1; j < n; j++){
            if (array[j - 1] > array[j]) {
                let tmp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tmp;
                i = j;
            }
        }
        n = i;
    }
    return array;

}

document.getElementById("array_sorted").innerHTML = bubble_sort(arr);
