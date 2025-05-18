function solution(arr, queries) {
    var answer = [];
    let min = 0;
    const max = 1000000;
    
    for ([s,e,k] of queries) {
        min = arr.slice(s, e+1)
            .filter(el => el > k)
            .reduce((min, num) => Math.min(min, num), max);
        if (min === max) min = -1;
        answer.push(min)
    }
    return answer;
}