function solution(numLog) {
    var answer = '';
    const map = {"1": "w","-1":"s","10":"d","-10":"a"};
    const len = numLog.length
    for (let i = 0; i < len - 1; i++) {
        const cur = numLog[i], next = numLog[i+1]
        const char = Math.abs(cur - next)
        const signed = cur < next ? "" : "-"
        
        const num = signed + char
        answer += map[num];
    }
    return answer;
}