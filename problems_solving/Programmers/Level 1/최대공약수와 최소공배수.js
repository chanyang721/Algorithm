function solution(n, m) {
    // 두수의 [ 최대공약수, 최소공배수 ] 를 리턴
    // 최대 공약수 => gcd(n, m) 
    // 최소 공배수 => lcm => (n * m) / gcd(n, m);
  let gcd = 0;
  function getGCD (A, N) {
    return (A % N) === 0 ? N : getGCD(N, A % N);
  } 
    
  if(n > m) gcd = getGCD(n, m);
  else gcd = getGCD(m, n);
  
  let lcm = (n * m) / gcd;
    
  return [gcd, lcm];
}