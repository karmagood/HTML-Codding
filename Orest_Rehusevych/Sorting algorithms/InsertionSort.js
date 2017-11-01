var list_of_numbers = [5, 14, 21, -2, 67, 1, -15, 0];

function insertionSort(list) {
    for (var i = 1; i < list.length; i++) {
        var tempVar = list[i];
        var k = i;

        while (k > 0 && list[k - 1] > tempVar) {
            list[k] = list[k - 1];
            k--;
        }

        list[k] = tempVar;
    }

    return console.log(list);
}

insertionSort(list_of_numbers);