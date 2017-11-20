var unsorted_array = [-5, 15, -9, 0, 14, 2, 1, 33, 40, 12, 12, 12, 42, 420, 1984, 2020, -66, -6]

function bubble_sort(list)
{
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (i=1; i<list.length; i++) {
            if (list[i] < list[i-1]) {
                let tmp = list[i];
                list[i] = list[i-1];
                list[i-1] = tmp;
                swapped = true;
            }
        }
    }
    return list;
}

function selection_sort(list)
{
    for (i=0; i<list.length; i++) {
        let imin = i;
        for (j=i+1; j<list.length; j++) {
            if (list[j] < list[imin]) {
                imin=j;
            }
        }
        if (imin!=i){
            let tmp = list[i];
            list[i] = list[imin];
            list[imin] = tmp;
        }
    }

    return list
}

function insertion_sort(list) {

    for (i=0; i<list.length; i++) {
        for (j=i-1; j>=0; j--) {
            if (list[j+1] < list[j]) {
                let tmp = list[j];
                list[j] = list[j+1];
                list[j+1] = tmp;
            }
            else break;
        }
    }

    return list;
}

function merge_sort(list) {

    function merge(a, b) {
        let c = [];
        while (a.length != 0 && b.length != 0) {
            if (a[0] < b[0]) c.push(a.shift());
            else c.push(b.shift());
        }

        for (i=0; i<a.length; i++){
            c.push(a[i]);
        }

        for (i=0; i<b.length; i++){
            c.push(b[i]);
        }
        return c
    }

    if (list.length < 2) return list
    else {
        let middle = Math.floor(list.length / 2);
        var a = merge_sort(list.slice(0, middle));
        var b = merge_sort(list.slice(middle, list.length));
        return merge(a,b)
    }
}

function quick_sort(list) {

    function partition(list, l, r, pivot) {
        let tmp = list[pivot];
        list[pivot] = list[r];
        list[r] = tmp;
        let store_index = l;
        for (i = l; i < r; i++) {
            if (list[i] < list[r]) {
                tmp = list[i];
                list[i]  = list[store_index];
                list[store_index] = tmp;
                store_index += 1;
            }
        }
        tmp = list[r];
        list[r]  = list[store_index];
        list[store_index] = tmp;

        return store_index
    }

    function sort(list, l, r) {
        if (l>=r) return list;
        let pivot = l;
        let new_pivot = partition(list, l, r, pivot);
        sort(list, l, new_pivot-1);
        sort(list, new_pivot+1, r);
    }

    sort(list, 0, list.length-1);
    return list;
}

function random_quick_sort(list) {

    function partition(list, l, r, pivot) {
        let tmp = list[pivot];
        list[pivot] = list[r];
        list[r] = tmp;
        let store_index = l;
        for (i = l; i < r; i++) {
            if (list[i] < list[r]) {
                tmp = list[i];
                list[i]  = list[store_index];
                list[store_index] = tmp;
                store_index += 1;
            }
        }
        tmp = list[r];
        list[r]  = list[store_index];
        list[store_index] = tmp;

        return store_index
    }

    function sort(list, l, r) {
        if (l>=r) return list;
        let pivot = Math.floor(l + Math.random() * (r-l+1));
        let new_pivot = partition(list, l, r, pivot);
        sort(list, l, new_pivot-1);
        sort(list, new_pivot+1, r);
    }

    sort(list, 0, list.length-1);
    return list;
}

function count_sort(list) {

    function key(x) {
        return 1000+x;
    }

    function value_from_key(x) {
        return x-1000;
    }

    let counted = [];
    for (i = 0; i < 5000; i++) counted.push(0);


    for (i = 0; i < list.length; i ++) {
        counted[key(list[i])]++;
    }

    list = []

    for (i = 0; i < counted.length; i++){
        for (j = 0; j < counted[i]; j++) list.push(value_from_key(i));
    }

    return list
}

function radix_sort(list, base=10) {

    function list_to_buckets(list, base, iteration) {
        var buckets = [];
        for (i = 0; i < base; i++) buckets.push([]);
        for (i = 0; i < list.length; i++) {
            var digit = Math.floor(list[i] / (base ** iteration)) % base;
            buckets[digit].push(list[i]);
        }
        return buckets
    }

    function buckets_to_list(buckets) {
        var list = [];
        for (i = 0; i < buckets.length; i++){
            for (j = 0; j < buckets[i].length; j++){
                list.push(buckets[i][j]);
            }
        }
        return list
    }

    let max_value = Number.NEGATIVE_INFINITY;

    for (i = 0; i < list.length; i++) if (list[i] > max_value) max_value=list[i];

    let iteration = 0;

    while (base ** iteration <= max_value) {
        list = buckets_to_list(list_to_buckets(list, base, iteration));
        iteration++;
    }

    return list
}

//used slice to not to change original array
console.log(bubble_sort(unsorted_array.slice()))
console.log(selection_sort(unsorted_array.slice()))
console.log(insertion_sort(unsorted_array.slice()))
console.log(merge_sort(unsorted_array.slice()))
console.log(quick_sort(unsorted_array.slice()))
console.log(random_quick_sort(unsorted_array.slice()))
console.log(count_sort(unsorted_array.slice()))

var positive_unsorted_array = [5, 15, 9, 0, 14, 2, 1, 33, 40, 12, 12, 12, 42, 420, 1984, 2020, 66, 6]

console.log(radix_sort(positive_unsorted_array.slice()))
