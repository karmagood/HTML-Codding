var list_of_numbers = [5, 14, 21, -2, 67, 1, -15, 0];

function selectionSort(list) {
    for (var i = 0; i < list.length; i++) {
        var minIndex = i;
        for (var k = i + 1; k < list.length; k++) {
            if (list[k] < list[minIndex]) {
                minIndex = k;
            }
        }
        var tempVar = list[i];
        list[i] = list[minIndex];
        list[minIndex] = tempVar;
    }
    return console.log(list);
}

selectionSort(list_of_numbers);
