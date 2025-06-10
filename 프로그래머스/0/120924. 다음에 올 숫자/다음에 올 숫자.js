function solution(common) {
    var answer = 0;
    const diff = common[1] - common[0];
    const ratio = common[1] / common[0];
    const last = common.at(-1)
    
    if (common[2] - common[1] === diff) {
        answer = last + diff
    } else {
        answer = last * ratio
    }
    
    return answer;
}