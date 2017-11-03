function SelectionSort(arr) {
    for (let i = arr.length - 1; i > 0; --i ){
        let PositionOfMax = 0;
        for (let j = 1; j < i + 1; ++j){
            if (arr[j] > arr[PositionOfMax]){
                PositionOfMax = j
            }
        }
        let tmp = arr[i];
        arr[i] = arr[PositionOfMax];
        arr[PositionOfMax] = tmp;
    }
}

let arr = [54,26,93,17,77,31,44,55,20];
SelectionSort(arr);
console.log(arr);