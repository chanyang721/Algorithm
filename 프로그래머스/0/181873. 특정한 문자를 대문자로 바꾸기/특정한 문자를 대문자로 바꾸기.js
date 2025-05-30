function solution(my_string, alp) {
    // if alp ? toUpperCase
    var answer = my_string.split(alp).join(alp.toUpperCase());
    return answer
}