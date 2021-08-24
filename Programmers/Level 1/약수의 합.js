function solution(n) {
    // 정수 n의 모든 약수를 더한값을 리턴
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result += i;
        }
    }
    return result;
}