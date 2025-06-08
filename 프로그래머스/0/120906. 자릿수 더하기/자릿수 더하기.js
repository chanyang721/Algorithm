function solution(n) {
    // n.split("").reduce((a, c) => +a + +c)
    var answer = n.toString().split("").reduce((a, c) => +a + +c, 0);
    return answer;
}