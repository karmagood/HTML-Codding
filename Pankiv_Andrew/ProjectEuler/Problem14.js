function Problem14(num) {
    let arr2 = [];
    let arr = [];
    for(let i = 1; i < num; ++i){
        while (true) {
            arr.push(i);
            if(i === 1){
                break;
            }
            if (i % 2 === 0) {
                i = i / 2;
            }
            else{
                i = 3 * i + 1;
            }

        }
        arr2.push(arr);
        arr = [];
    }
    for(let i = 0; i < arr2.length; ++i){
        arr2[i] = arr2[i].length;
    }
    let MaxSequence = arr2.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return arr2.indexOf(MaxSequence) + 1;

}

console.log(Problem14(1000000));