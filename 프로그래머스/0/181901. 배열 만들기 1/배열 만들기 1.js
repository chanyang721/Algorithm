function solution(n, k) {
    // answer.push(1 ~ n % k === 0).sort()
    var answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % k === 0) answer.push(i)
    }
    return answer.sort((a, b) => a - b);
}