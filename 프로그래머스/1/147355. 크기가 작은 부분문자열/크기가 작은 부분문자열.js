function solution(t, p) {
    // "3141592", "271", 2
    // t의 부분 문자열 <= p ? answer++;
    // t i = 0 -> t.len-p.len i++
    //    t <= +p ? answer++
    var answer = 0;
    for (let i = 0; i <= t.length-p.length; i++) {
        const intStr = t.slice(i, i+p.length)
        if (+intStr <= +p) answer++
    }
    
    return answer;
}