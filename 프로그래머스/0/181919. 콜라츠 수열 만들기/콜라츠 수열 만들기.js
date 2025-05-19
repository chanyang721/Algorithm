function solution(n, answer = []) {
    // x % 2 === 0 ? x = x / 2 : x = 3 * x + 1
    // if x <= 0 || x === 0 ? 
    // if 0 <= x <= 1000 ? x === 0 !
    // return [ex-x list]
    if (n <= 0) return;
    answer.push(n);
    if (n===1) return answer;
    if (n % 2 === 0) solution(n / 2, answer);
    else if (n % 2 === 1) solution(3*n+1, answer);
    return answer;
}