

function sort(array) {
    var aux = [];
    helperSort(array, aux, 0, array.length - 1);
}

function helperSort(a, aux, lo, hi) {
    if (hi <= lo) return;
    var mid = Math.floor(lo + (hi - lo) / 2);
    helperSort(a, aux, lo, mid);
    helperSort(a, aux, mid + 1, hi);
    mergeSort(a, aux,  lo, mid, hi);
}

function mergeSort(a, aux, lo, mid, hi) {
    for(var t = lo; t <= hi; t++) // copy
        aux[t] = a[t];
    var i = lo, j = mid + 1;
    for (var k = lo; k <= hi; k++) { // merge
        if (i > mid)              a[k] = aux[j++];
        else  if (j > hi)         a[k] = aux[i++];
        else if (aux[j] < aux[i]) a[k] = aux[j++];
        else                      a[k] = aux[i++];
    }
}

var numbers = [9, 3, 5, 1, 10, 2, 4, 8, 7, 6];
sort(numbers);
console.log(numbers);