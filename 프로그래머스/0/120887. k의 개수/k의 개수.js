function solution(i, j, k) {
    // 1 ~ 13 -> 1 등장 횟수: 6
    // i ~ j -> k 등장 횟수 ? 
    // for i -> j
    // i.toString().split("").map(el => el === k ? answer++ : el)
    var answer = 0;
    
    for (let num = i; num <= j; num++) {
        num.toString().split("").forEach(el => {
            if (el === k.toString()) answer++;
        })
    }
    
    return answer;
}