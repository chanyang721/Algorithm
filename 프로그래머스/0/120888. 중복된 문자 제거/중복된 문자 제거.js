function solution(my_string) {
    // [...new Set(.split(""))]
    var answer = [...new Set(my_string.split(""))].join("");
    return answer;
}