function solution(start_num, end_num) {
    // e -> s i = e; i >= s; i-- answer.push(i)
    var answer = [];
    for (let i = start_num; i >= end_num; i--) {
        answer.push(i)
    }
    return answer;
}