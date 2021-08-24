function solution(n) {
    // 정수 n이 x의 제곱근이면 x + 1의 제곱을 리턴
    // 제곱근이 아니라면 -1을 리턴
    // n은 50000000000000 이하인 양의 정수
    let result = Math.sqrt(n)
    
    return result % 1 === 0 ? (result + 1) * (result + 1) : -1;
}