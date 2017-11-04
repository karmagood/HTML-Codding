function bubbleSort(items) {

    for (var i = (items.length - 1); i >= 0; i--) {  //first time i is 6
        //Number of iterations
        for (var j = (items.length - i); ind > 0; ind--) {  //1
            //Compare the adjacent positions
            if (items[ind] < items[ind - 1]) {  //
                //Swap the numbers
                var temp = items[ind];
                items[ind] = items[ind - 1];
                items[ind - 1] = temp;
                console.log(items)
            }
        }
    }
    return items;
}

var item = [2,8,1,4,8.11,3,5.2];
console.log(bubbleSort(item));

