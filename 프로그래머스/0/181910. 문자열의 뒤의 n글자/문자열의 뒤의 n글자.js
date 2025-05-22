function solution(my_string, n) {
    const len = my_string.length
    var answer = my_string.slice(len-n);
    return answer;
}