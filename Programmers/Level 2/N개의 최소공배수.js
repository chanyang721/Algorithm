function solution(arr) {
    // n개의 수를 요소로 하는 배열에서 LCM을 리턴
    // 최소공배수 = (A * B) / 최대공약수
    
    function gcd (A, N) {
        return (A % N) === 0 ? N : gcd(N, A % N); // 최대 공약수
    } 

    function lcm (a, b) {
        return (a * b) / gcd(a, b);   
    }
    
    let base = arr[0]
    for (let i = 1; i < arr.length; i++) {
        base = lcm(base, arr[i]);
    }

    return base;
}