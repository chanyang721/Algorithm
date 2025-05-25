function solution(arr, intervals) {
    const [[a1, b1], [a2, b2]] = intervals
    const answer = [...arr.slice(a1,b1+1), ...arr.slice(a2,b2+1)]
    return answer;
}