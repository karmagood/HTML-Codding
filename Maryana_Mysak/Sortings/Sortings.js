var sortMe = [6,8,3,0,12,4,9,1,7,5,10];

function insertionSort(sortMe) {
  for (var i = 1; i < sortMe.length; i++) {
    var value = sortMe[i];
    var j = i - 1;
    while (j >= 0 && value < sortMe[j]){
      sortMe[j + 1] = sortMe[j];
      j -= 1;
    }
    sortMe[j + 1] = value;
  }
  return sortMe;
}

function bubbleSort(sortMe) {
  for (var i = 1; i < sortMe.length; i++) {
    for (var j = 0; j < sortMe.length - 1; j++) {
      if (sortMe[j] > sortMe[j + 1]) {
        var tmp = sortMe[j];
        sortMe[j] = sortMe[j + 1];
        sortMe[j + 1] = tmp;
      }
    }
  }
  return sortMe;
}

function merge(firstList, secondList) {
  var resultList = [];
  while (firstList.length > 0 && secondList.length > 0) {
    if (firstList[0] > secondList[0]) {
      resultList.push(secondList.shift())
    }
    else {
      resultList.push(firstList.shift());
    }
  }
  resultList = resultList.concat(firstList, secondList);
  return resultList
}

function mergeSort(sortMe) {
  if (sortMe.length == 1) {
    return sortMe;
  }

  var firstList = sortMe.slice(0, sortMe.length/2);
  var secondList = sortMe.slice(sortMe.length/2, sortMe.length);
  firstList = mergeSort(firstList);
  secondList = mergeSort(secondList);
  return merge(firstList, secondList);
}

function partition(sortMe, pivot, left, right) {
  var pivotValue = sortMe[pivot];
  var leftwall = left;
  for (var i = left; i < right; i++) {
    if(sortMe[i] < pivotValue) {
      var tmp = sortMe[i];
      sortMe[i] = sortMe[leftwall];
      sortMe[leftwall] = tmp;
      leftwall = leftwall + 1;
    }
  }
  var tmp1 = sortMe[right];
  sortMe[right] = sortMe[leftwall];
  sortMe[leftwall] = tmp1;
  return leftwall;
}

function quickSort(sortMe, left, right) {
  if (left < right){
    pivot = right;
    pivot_location = partition(sortMe, pivot, left, right);
    quickSort(sortMe, left, pivot_location - 1);
    quickSort(sortMe, pivot_location + 1, right)
  }
  return sortMe;
}

function selectionSort(sortMe) {
  for(var i = 0;i < sortMe.length - 1; i++) {
    var maxIndex = i;
    for(var j = i + 1; j < sortMe.length; j++) {
      if (sortMe[j] < sortMe[maxIndex]) {
        maxIndex = j;
      }
    }
    var tmp = sortMe[i];
    sortMe[i] = sortMe[maxIndex];
    sortMe[maxIndex] = tmp;
  }
  return sortMe;
}

var n;

function maxHeapify(sortMe, i) {
  var left = 2*i + 1;
  var right = 2*i + 2;
  var max = i;
  if( left < n && sortMe[left] > sortMe[max]){
    var max = left;
  }
  if (right < n && sortMe[right] > sortMe[max]){
    max = right;
  }
  if (max != i) {
    var tmp = sortMe[i];
    sortMe[i] = sortMe[max];
    sortMe[max] = tmp;
    maxHeapify(sortMe, max)
  }
}

function buildHeap(sortMe) {
  n = sortMe.length;
  for (var i = Math.floor(n/2); i >= 0; i--) {
    maxHeapify(sortMe, i);
  }
}

function heapSort(sortMe) {
  buildHeap(sortMe);
  for (var i = sortMe.length - 1; i > 0; i--) {
    var tmp = sortMe[0];
    sortMe[0] = sortMe[i];
    sortMe[i] = tmp;
    n--;
    maxHeapify(sortMe, 0);
  }
  return sortMe;
}


// console.log(insertionSort(sortMe))
// console.log(bubbleSort(sortMe))
// console.log(mergeSort(sortMe))
// console.log(quickSort(sortMe, 0, sortMe.length-1))
// console.log(selectionSort(sortMe))
// console.log(heapSort(sortMe))
