function InsertionSort(arr) {
    for (let i = 0; i < arr.length; ++i ){
        let CurrentValue = arr[i];
        let position = i;
        while (position>0 && arr[position - 1] > CurrentValue){
            arr[position] = arr[position - 1];
            --position;
        }
        arr[position] = CurrentValue
    }
}

let arr = [54,26,93,17,77,31,44,55,20];
InsertionSort(arr);
console.log(arr);