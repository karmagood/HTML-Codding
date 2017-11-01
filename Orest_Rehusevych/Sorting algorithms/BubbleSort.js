var list_of_numbers = [5, 14, 21, -2, 67, 1, -15, 0];

function bubbleSort(list) {
    for (var i = list.length; i >= 0; i--) {
        for (var k = (list.length - 1); k > 0; k--) {
            if (list[k] < list[k - 1]) {
                var tempVar = list[k];
                list[k] = list[k - 1];
                list[k - 1] = tempVar;
            }
        }
    }
    return console.log(list);
}

bubbleSort(list_of_numbers);
