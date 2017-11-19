const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return true;
};

const prime10001st = () =>{
  let counter = 0;
  let tempNumber = 0;
  while (counter !== 10001){
      if(isPrime(tempNumber)){
          counter++;
      }
      tempNumber += 1;
  }
  return tempNumber;
};

console.log(prime10001st());