function solution(n, t) {
    // 1시간마다 ** 2
    // answer = n * (2 ** t)
    var answer = n * Math.pow(2, t);
    return answer;
}