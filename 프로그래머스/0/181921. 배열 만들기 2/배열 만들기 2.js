function solution(l, r) {
    var answer = [];
    const allowed = new Set(["5", "0"]);
    for (let i = l; i <= r; i++) {
        const strNum = i.toString();
        if ([...strNum].every(el => el === "5" || el === "0")) {
            answer.push(i)
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}