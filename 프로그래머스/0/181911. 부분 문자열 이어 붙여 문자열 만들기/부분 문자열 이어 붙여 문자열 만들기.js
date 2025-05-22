function solution(my_strings, parts) {
    var answer = '';
    for (const [idx, [s, e]] of parts.entries()) {
        answer += my_strings[idx].slice(s, e+1)
    }
    return answer;
}