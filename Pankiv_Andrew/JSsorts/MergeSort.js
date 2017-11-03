function MergeSort(arr) {
    if (arr.length > 1){
        let mid = Math.floor(arr.length / 2);
        let LeftHalf = arr.slice(0,mid);
        let RightHalf = arr.slice(mid,arr.length);

        MergeSort(LeftHalf);
        MergeSort(RightHalf);

        let i = 0;
        let j = 0;
        let k = 0;
        while (i < LeftHalf.length && j < RightHalf.length){
            if (LeftHalf[i] < RightHalf[j]){
                arr[k] = LeftHalf[i];
                ++i;
            }
            else{
                arr[k] = RightHalf[j];
                ++j;
            }
            ++k;
        }
        while (i < LeftHalf.length){
            arr[k] = LeftHalf[i];
            ++i;
            ++k;
        }
        while (j < RightHalf.length){
            arr[k] = RightHalf[j];
            ++j;
            ++k;
        }
    }
}

let arr = [54,26,93,17,77,31,44,55,20];
MergeSort(arr);
console.log(arr);