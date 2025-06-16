function solution(my_string, n) {
    // split.map(char.repeat(n)
    var answer = my_string.split("").map(char => char.repeat(n)).join("");
    return answer;
}