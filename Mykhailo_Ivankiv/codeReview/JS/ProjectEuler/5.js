




const checkDiv = (n) => {
    for (let i = 2; i <= 20; ++i) if (n % i != 0) return false
    return true;
}



const findNum = () => {
    var num = 2520;
    while (!checkDiv(num))num++;
    return num;
}


console.log(findNum());