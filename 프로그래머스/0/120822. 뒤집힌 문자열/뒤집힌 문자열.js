function solution(my_string) {
    // 문자열 뒤집기, split("").reverse()
    var answer = my_string.split("").reverse().join("");
    return answer;
}