function solution(q, r, code) {
    // code i % q === r ? code[i]
    var answer = '';
    for (let i = 0; i < code.length; i++) {
        if (i % q === r) answer+=code[i]
    }
    return answer;
}