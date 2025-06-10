function solution(num, total) {
    // 0 + ... + num -1 => ((num - 1) * num)) / 2
    // total = start * num + ((num - 1) * num)) / 2
    // start = (total - ((num - 1) * num)) / 2) / num
    const start = (total - (((num - 1) * num)) / 2) / num
    var answer = []
    
    for (let i = 0; i < num; i++) {
        answer.push(start + i)
    }
    
    return answer;
}