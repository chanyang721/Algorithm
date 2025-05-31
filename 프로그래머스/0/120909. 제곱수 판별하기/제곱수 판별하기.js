function solution(n) {
    // 제곱수 -> 루트값이 자연수?
    var answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2
    return answer;
}