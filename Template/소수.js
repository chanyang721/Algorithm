const isPrime = (num) => {
    if (num % 2 === 0) return false;
    let sqrt = parseInt(Math.sqrt(num));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;
  };



function isPrime(num) {
    for (let i = 2; i < num/2; i++) {
      if (num % i === 0) return false;
    }
  return true;
 }