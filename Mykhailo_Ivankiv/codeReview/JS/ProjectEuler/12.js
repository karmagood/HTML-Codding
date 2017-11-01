

function findDivisors(n) {
  let divisors = [], i = 1, max = n, j;

  while (i < max) {
    if (n % i == 0) {
      divisors.push(i);
      j = n / i;
      if (i != j) {
        divisors.push(j);
      }
      max = j;
    }
    i++;
  }

  return divisors;
}




const main = (numberOfDivs) => {
    var n = 1, sum = 0;
    while (findDivisors(sum).length <= numberOfDivs){
        sum += n;
        n++;
    }
    return sum;
}


console.log(main(500));