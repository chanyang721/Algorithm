function solution(my_string) {
    // split.filter(el => !IsNaN(el) ? +el : " ")
    var answer = my_string
        .split("")
        .filter(el => isNaN(el) ? +el : " ")
        .reduce((a, c) => +a + +c)
    return answer;
}