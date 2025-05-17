function solution(n, control) {
    var answer = n;
    const controlMap = { w: 1, s: -1, d: 10, a: -10 }
    control.split("").forEach(el => answer += controlMap[el])
    return answer;
}