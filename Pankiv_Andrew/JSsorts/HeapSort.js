function Swap(a, i, j) {
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

function MaxHeapify(a, i, length) {
    while (true) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let largest = i;

        if (left < length && a[left] > a[largest]) {
            largest = left;
        }

        if (right < length && a[right] > a[largest]) {
            largest = right;
        }

        if (i === largest) {
            break;
        }

        Swap(a, i, largest);
        i = largest;
    }
}

function Heapify(a, length) {
    for (let i = Math.floor(length / 2); i >= 0; i--) {
        MaxHeapify(a, i, length);
    }
}

function HeapSort(a) {
    Heapify(a, a.length);

    for (let i = a.length - 1; i > 0; i--) {
        Swap(a, i, 0);

        MaxHeapify(a, 0, i);
    }
}

let arr = [54, 26, 93, 17, 77, 31, 44, 55, 20];
HeapSort(arr);
console.log(arr);