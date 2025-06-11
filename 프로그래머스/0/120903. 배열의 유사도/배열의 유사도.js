function solution(s1, s2) {
    // 두 배열 같은 원소의 수
    // for s1 i 0 -> len
    //      1. for j s2 0 -> len
    //           s1[i] === s2[j] ? answer++
    //      2. if s2.includes[s1[i]] ? answer++
    //      3. if s2.indexOf[s1[i]] !== -1 answer++
    var answer = 0;
    
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            answer++ 
        }
    }

    return answer;
}