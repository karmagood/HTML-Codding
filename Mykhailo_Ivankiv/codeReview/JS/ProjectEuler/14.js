




var memory = [];



const chainLength = (chain, length) => {
    if (chain == 1) return length;
    if (chain % 2 == 0) return chainLength(chain / 2, ++length);
    if (chain % 2 != 0) return chainLength(3 * chain  + 1, ++length);

}






const findLongestChain = (n) => {
    var mx = 0;
    var num = 1;
    for (let i = 2; i < n; ++i){
        var tmp = chainLength(i, 1);
        if (tmp > mx){
            mx = tmp;
            num = i;
        }


    }

    return num;
}




console.log(findLongestChain(1000000));