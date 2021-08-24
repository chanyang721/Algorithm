function solution(n) {
    let result = String(n).split("").map(el => Number(el)).reverse()
    return result;
}