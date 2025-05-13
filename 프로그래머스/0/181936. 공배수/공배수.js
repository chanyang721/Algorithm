function solution(number, n, m) {
    const a = number % n === 0;
    const b = number % m === 0;
    var answer = a && b ? 1 : 0;
    return answer;
}