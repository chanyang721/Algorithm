function solution(left, right) {
    // left ~ right까지의 모든 정수 중
    // 약수의 개수가 짝수인 수는 더한다. 
    // 약수의 개수가 홀수인 수는 뺀다.
    // 소수의 약수의 개수는 모두 짝수
    // left = 1, right = 1000이라면 ?
    let result = 0;
    for (let i = left; i <= right; i++) {
        let count = 0; 
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++
        }
        if (count % 2 === 0) result += i;
        if (count % 2 === 1) result -= i;
    }
    
    return result;
}