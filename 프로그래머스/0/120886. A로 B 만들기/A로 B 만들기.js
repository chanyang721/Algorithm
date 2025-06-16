function solution(before, after) {
    // after.includes(b + b)
    var answer = before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0
    return answer;
}