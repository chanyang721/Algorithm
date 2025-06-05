function solution(num_str) {
    // sum num_str
    var answer = num_str.split("").reduce((a, c) => +a + +c);
    return answer;
}