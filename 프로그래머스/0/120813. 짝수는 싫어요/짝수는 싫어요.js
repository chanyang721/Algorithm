function solution(n) {
    // n <= odd.sort()
    // for i = 1 => n i+=2
    //      answer.push(i)
    var answer = [];
    for (let i = 1; i <= n; i += 2) {
        answer.push(i)
    }
    return answer;
}