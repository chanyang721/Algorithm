function solution(n) {
    // 1 ~ n사이의 소수의 갯수를 리턴
    // n 은 2 ~ 1000000 사이의 수
    // 소수는 1을 제외한 수 중 자기 자신만 나누어 떨어지는 수
    // 짝수는 소수가 아니다.
    // 홀수의 제곱근보다 작은수 중 나누어 떨어지는 수가 있으면 소수가 아니다.  
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
    
    let count = 1; 
    for (let i = 3; i <= n; i += 2) {
        if (isPrime(i)) count++;
    }
    
    return count;
}