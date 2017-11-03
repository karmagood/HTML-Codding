function BubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; --i){
        for (let j = 0; j < i; ++j){
            if (arr[j] > arr[++j]){
                let tmp = arr[j];
                arr[j] = arr[++j];
                arr[++j] = tmp
            }
        }
    }
}

let arr = [54,26,93,17,77,31,44,55,20];
BubbleSort(arr);
console.log(arr);