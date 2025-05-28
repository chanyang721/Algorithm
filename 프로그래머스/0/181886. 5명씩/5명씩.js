function solution(names) {
    // for i = 0 -> names.length i+=5
    //      answer.push(names[i])
    var answer = [];
    for (let i = 0; i < names.length; i+=5) answer.push(names[i]);
    return answer;
}