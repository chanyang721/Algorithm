function solution(n) {
    // n 이하의 짝수의 합
    // for i 0 -> n, sum += i
    var answer = 0;
    for (let i = 0; i <= n; i+=2) {
        console.log(i, n)
        answer += i
    }
    
    return answer;
}