function gcd (A, N) {
    return (A % N) === 0 ? N : gcd(N, A % N); // 최대 공약수
} 

let value = 0;

if(A > N) value = gcd(A, N); // A가 N보다 큰 경우
else value = gcd(N, A); // N이 A보다 큰 경우
